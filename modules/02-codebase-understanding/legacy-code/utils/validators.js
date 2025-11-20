function requireFields(payload, fields) {
  const missing = fields.filter((field) => payload[field] === undefined || payload[field] === null);
  if (missing.length) {
    const error = new Error(`Missing required fields: ${missing.join(', ')}`);
    error.statusCode = 400;
    throw error;
  }
}

function assertEnum(value, allowed, fieldName) {
  if (!allowed.includes(value)) {
    const error = new Error(`Invalid ${fieldName}. Expected one of: ${allowed.join(', ')}`);
    error.statusCode = 400;
    throw error;
  }
}

module.exports = {
  requireFields,
  assertEnum
};
