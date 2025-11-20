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
  const name = execSync('git config user.name', { stdio: 'pipe' }).toString().trim();
  const email = execSync('git config user.email', { stdio: 'pipe' }).toString().trim();
  return `${name} <${email}>`;
});

check('Dependencies installed', () => {
  if (!fs.existsSync(path.join(root, 'node_modules'))) {
    throw new Error('Run npm install in the repo root');
  }
  return 'node_modules present';
});

check('Module directories present', () => {
  const modules = [
    'modules/01-foundations/exercises/article-preview',
    'modules/02-codebase-understanding/legacy-code',
    'modules/03-full-stack/dashboard-starter',
    'modules/04-code-review/vulnerable-prs'
  ];
  const missing = modules.filter((dir) => !fs.existsSync(path.join(root, dir)));
  if (missing.length) {
    throw new Error(`Missing expected directories: ${missing.join(', ')}`);
  }
  return 'core modules found';
});

check('Data fixtures present', () => {
  const files = [
    'data/articles/articles.json',
    'data/users/users.json',
    'data/analytics/page-views.json',
    'data/comments/comments.json',
    'data/trending/engagement-data.json'
  ];
  const missing = files.filter((file) => !fs.existsSync(path.join(root, file)));
  if (missing.length) {
    throw new Error(`Missing data files: ${missing.join(', ')}`);
  }
  return 'synthetic data ready';
});

// Note: We skip AI tool detection since tools vary widely (VS Code extensions,
// Cursor, web-based tools, etc.) and can't be reliably detected.
// Users should verify their AI tool works manually per GETTING_STARTED.md

console.log('');
if (allGood) {
  console.log(`${GREEN}🎉 Environment looks good. Happy hacking!${RESET}`);
  console.log('Pro tip: Run `npm run generate-fixtures` if you want fresh synthetic data.');
} else {
  console.log(`${RED}Some checks failed. Fix the items above, then re-run \'npm run verify\'.${RESET}`);
}
