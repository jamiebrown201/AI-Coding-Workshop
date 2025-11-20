const LEVELS = ['debug', 'info', 'warn', 'error'];

function format(level, message, metadata = {}) {
  const timestamp = new Date().toISOString();
  const payload = Object.keys(metadata).length ? JSON.stringify(metadata) : '';
  return `[${timestamp}] [${level.toUpperCase()}] ${message} ${payload}`.trim();
}

const logger = LEVELS.reduce((acc, level) => {
  acc[level] = (message, metadata) => {
    const output = format(level, message, metadata);
    if (level === 'error') {
      console.error(output);
    } else if (level === 'warn') {
      console.warn(output);
    } else {
      console.log(output);
    }
  };
  return acc;
}, {});

module.exports = logger;
