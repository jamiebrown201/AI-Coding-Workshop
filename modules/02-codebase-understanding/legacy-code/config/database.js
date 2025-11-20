const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'fixtures');
let isConnected = false;

async function connectDatabase() {
  if (isConnected) {
    return Promise.resolve();
  }

  // Simulate slow connection, and verify fixtures exist to mimic readiness checks
  await new Promise((resolve) => setTimeout(resolve, 200));
  fs.readdirSync(DB_PATH); // throws if fixtures missing
  isConnected = true;
}

function loadFixture(fileName) {
  const filePath = path.join(DB_PATH, fileName);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

module.exports = {
  connectDatabase,
  loadFixture,
  DB_PATH
};
