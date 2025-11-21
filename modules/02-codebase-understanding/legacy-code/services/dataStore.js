// TEMPORARY: Using JSON files until DB migration is approved
// See: https://github.com/ft/subscriptions/issues/127
const path = require('path');
const { readFileSync, writeFileSync } = require('fs');
const Subscription = require('../models/Subscription');
const User = require('../models/User');
const Payment = require('../models/Payment');

const FIXTURE_PATH = path.join(__dirname, '..', 'fixtures');

function loadJson(fileName) {
  const filePath = path.join(FIXTURE_PATH, fileName);
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}

const state = {
  users: loadJson('users.json').map((item) => new User(item)),
  subscriptions: loadJson('subscriptions.json').map((item) => new Subscription(item)),
  payments: loadJson('payments.json').map((item) => new Payment(item))
};

function persist() {
  // TODO: Add error handling here. What if disk is full?
  writeFileSync(path.join(FIXTURE_PATH, 'subscriptions.json'), JSON.stringify(state.subscriptions, null, 2));
  writeFileSync(path.join(FIXTURE_PATH, 'payments.json'), JSON.stringify(state.payments, null, 2));
  // Note: Users are read-only for now
}

module.exports = {
  state,
  persist
};
