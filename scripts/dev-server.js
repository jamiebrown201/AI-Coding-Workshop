#!/usr/bin/env node
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const nodeCmd = process.platform === 'win32' ? 'node.exe' : 'node';

const services = [
  {
    name: 'Legacy subscription API',
    command: nodeCmd,
    args: ['server.js'],
    cwd: 'modules/02-codebase-understanding/legacy-code',
    required: ['server.js']
  },
  {
    name: 'Dashboard backend',
    command: npmCmd,
    args: ['run', 'dev'],
    cwd: 'modules/03-full-stack/dashboard-starter/backend',
    required: ['package.json']
  },
  {
    name: 'Dashboard frontend',
    command: npmCmd,
    args: ['run', 'dev'],
    cwd: 'modules/03-full-stack/dashboard-starter/frontend',
    required: ['package.json']
  }
];

function ensurePrereqs(service) {
  const base = path.join(root, service.cwd);
  if (!fs.existsSync(base)) {
    throw new Error(`${service.name} directory missing: ${service.cwd}`);
  }
  service.required.forEach((file) => {
    if (!fs.existsSync(path.join(base, file))) {
      throw new Error(`${service.name} missing ${file}. Run npm install inside ${service.cwd}.`);
    }
  });
  if (!fs.existsSync(path.join(base, 'node_modules'))) {
    console.warn(`⚠️  ${service.name} has no node_modules. Run 'npm install' in ${service.cwd} for best results.`);
  }
}

function startService(service) {
  ensurePrereqs(service);
  const cwd = path.join(root, service.cwd);
  console.log(`🚀 Starting ${service.name} (${service.command} ${service.args.join(' ')})`);

  const child = spawn(service.command, service.args, {
    cwd,
    env: { ...process.env, FORCE_COLOR: '1' },
    stdio: ['inherit', 'pipe', 'pipe']
  });

  child.stdout.on('data', (chunk) => {
    process.stdout.write(`[${service.name}] ${chunk}`);
  });
  child.stderr.on('data', (chunk) => {
    process.stderr.write(`[${service.name}] ${chunk}`);
  });

  child.on('exit', (code) => {
    console.log(`ℹ️  ${service.name} exited with code ${code}`);
  });

  child.on('error', (error) => {
    console.error(`Failed to start ${service.name}:`, error.message);
  });

  return child;
}

const processes = [];
services.forEach((service) => {
  try {
    processes.push(startService(service));
  } catch (error) {
    console.error(error.message);
  }
});

if (!processes.length) {
  console.error('No services started. Ensure dependencies are installed.');
  process.exit(1);
}

function shutdown() {
  console.log('\nShutting down services...');
  processes.forEach((child) => child && child.kill());
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
