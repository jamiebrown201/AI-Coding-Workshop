#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const GREEN = '\u001b[32m';
const RED = '\u001b[31m';
const YELLOW = '\u001b[33m';
const RESET = '\u001b[0m';
let allGood = true;

function logSuccess(message) {
  console.log(`${GREEN}✅ ${message}${RESET}`);
}

function logWarning(message) {
  console.warn(`${YELLOW}⚠️  ${message}${RESET}`);
}

function logFailure(message) {
  console.error(`${RED}❌ ${message}${RESET}`);
  allGood = false;
}

function check(label, fn) {
  try {
    const detail = fn();
    logSuccess(`${label} ${detail ? `(${detail})` : ''}`.trim());
  } catch (error) {
    logFailure(`${label} - ${error.message}`);
  }
}

function commandExists(command) {
  try {
    execSync(`${command} --version`, { stdio: 'pipe' });
    return true;
  } catch (_) {
    return false;
  }
}

console.log('🤖 AI Coding Workshop - Setup Verification (Node)');
console.log('=================================================');

check('Node.js version', () => {
  const [major] = process.versions.node.split('.');
  if (Number(major) < 18) {
    throw new Error(`Need 18+, detected ${process.versions.node}`);
  }
  return process.versions.node;
});

check('npm available', () => {
  if (!commandExists('npm')) {
    throw new Error('npm not found in PATH');
  }
  return execSync('npm --version', { stdio: 'pipe' }).toString().trim();
});

check('Git available', () => {
  if (!commandExists('git')) {
    throw new Error('Git not found in PATH');
  }
  return execSync('git --version', { stdio: 'pipe' }).toString().trim().split(' ')[2];
});

check('Dependencies installed', () => {
  if (!fs.existsSync(path.join(root, 'node_modules'))) {
    throw new Error('Run npm install in the repo root');
  }
  return 'node_modules present';
});

check('Workshop structure', () => {
  const required = ['modules', 'docs', 'package.json'];
  const missing = required.filter((item) => !fs.existsSync(path.join(root, item)));
  if (missing.length) {
    throw new Error(`Missing: ${missing.join(', ')}. Are you in the workshop root?`);
  }
  return 'looks good';
});

// Note: We skip AI tool detection since tools vary widely (VS Code extensions,
// Cursor, web-based tools, etc.) and can't be reliably detected.
// Users should verify their AI tool works manually per GETTING_STARTED.md

console.log('');
if (allGood) {
  console.log(`${GREEN}🎉 You're ready to rock!${RESET}`);
  console.log('');
  console.log('Next steps:');
  console.log('1. Read the main README.md');
  console.log('2. Check out Module 1: modules/01-foundations/');
  console.log('3. Get excited!');
} else {
  console.log(`${RED}❌ Some checks failed. Fix the items above, then re-run 'npm run verify'.${RESET}`);
}
