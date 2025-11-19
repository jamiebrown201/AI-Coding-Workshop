# Security Checklist for AI-Generated Code

**Reality check:** AI-generated code has a 45% chance of containing security vulnerabilities. This checklist helps you catch them.

## Why This Matters

AI models are trained on public code, which includes:
- Security vulnerabilities
- Outdated patterns
- Insecure examples from tutorials
- Stack Overflow answers that cut corners

**AI doesn't know your security requirements.** It generates code that *looks* right but may be dangerously wrong.

## The Security Review Process

### Before Accepting ANY AI-Generated Code

1. **Read every line** - If you don't understand it, don't use it
2. **Run this checklist** - Takes 2 minutes, prevents disasters
3. **Test security-specific scenarios** - Happy path isn't enough
4. **Get human review** - Especially for authentication, payments, PII

## Core Security Checklist

### Input Validation

- [ ] **All user inputs are validated**
  - Type checking (string, number, email, etc.)
  - Length limits enforced
  - Format validation (regex for emails, URLs, etc.)
  - Whitelist approach where possible

- [ ] **Sanitization is applied**
  - HTML entities encoded
  - SQL injection prevented (use parameterized queries)
  - Script tags stripped or escaped
  - Path traversal attacks prevented

**Common AI mistakes:**
```javascript
// ❌ AI often generates this
app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * FROM users WHERE id = ${id}`); // SQL injection!
});

// ✅ Correct version
app.get('/user/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });
  db.query('SELECT * FROM users WHERE id = ?', [id]); // Parameterized
});
```

### Authentication & Authorization

- [ ] **Passwords are hashed, never stored in plain text**
  - Use bcrypt, scrypt, or Argon2
  - Minimum cost factor (bcrypt: 12+)
  - Never log passwords

- [ ] **Sessions are secure**
  - Tokens are cryptographically random
  - Tokens expire appropriately
  - Refresh token rotation implemented
  - Secure cookie flags set (httpOnly, secure, sameSite)

- [ ] **Authorization is checked on every request**
  - User can only access their own data
  - Admin routes require admin role
  - No client-side authorization only

**Common AI mistakes:**
```javascript
// ❌ AI might generate this
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  db.insert({ email, password }); // Stored in plain text!
});

// ✅ Correct version
const bcrypt = require('bcrypt');
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  db.insert({ email, password: hashedPassword });
});
```

### Cross-Site Scripting (XSS)

- [ ] **Output is escaped**
  - HTML entities encoded
  - JavaScript contexts handled
  - URL contexts handled
  - CSS contexts handled

- [ ] **Content Security Policy (CSP) is set**
  - Restricts inline scripts
  - Whitelists trusted sources
  - Prevents eval() usage

- [ ] **User-generated content is sanitized**
  - Rich text is cleaned (use DOMPurify)
  - Markdown is rendered safely
  - No raw HTML rendering

**Common AI mistakes:**
```javascript
// ❌ AI often generates this
const CommentComponent = ({ comment }) => (
  <div dangerouslySetInnerHTML={{ __html: comment.text }} /> // XSS!
);

// ✅ Correct version
const CommentComponent = ({ comment }) => (
  <div>{comment.text}</div> // React escapes by default
);

// Or if you need rich text:
import DOMPurify from 'dompurify';
const CommentComponent = ({ comment }) => (
  <div dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(comment.text)
  }} />
);
```

### SQL Injection

- [ ] **Parameterized queries are used**
  - Never string concatenation
  - ORM usage with proper escaping
  - Prepared statements

- [ ] **ORMs are used correctly**
  - Raw queries avoided
  - User input never in raw queries
  - Proper parameter binding

**Common AI mistakes:**
```javascript
// ❌ AI might generate this
const searchUsers = (name) => {
  return db.query(`SELECT * FROM users WHERE name LIKE '%${name}%'`); // SQL injection!
};

// ✅ Correct version
const searchUsers = (name) => {
  return db.query('SELECT * FROM users WHERE name LIKE ?', [`%${name}%`]);
};
```

### Cross-Site Request Forgery (CSRF)

- [ ] **CSRF tokens are implemented**
  - Token in form/header
  - Token validated on server
  - Token regenerated after login

- [ ] **SameSite cookie attribute is set**
  - SameSite=Strict or Lax
  - Prevents cross-site cookie sending

**Common AI mistakes:**
```javascript
// ❌ AI might forget CSRF protection
app.post('/transfer-money', (req, res) => {
  transferMoney(req.body.amount, req.body.to); // No CSRF check!
});

// ✅ Correct version (using csurf middleware)
const csrf = require('csurf');
app.use(csrf());
app.post('/transfer-money', (req, res) => {
  // CSRF token automatically validated by middleware
  transferMoney(req.body.amount, req.body.to);
});
```

### Sensitive Data Exposure

- [ ] **Secrets are not in code**
  - Use environment variables
  - Use secret management systems
  - Never commit to git

- [ ] **Sensitive data is encrypted**
  - At rest (database encryption)
  - In transit (HTTPS/TLS)
  - Proper key management

- [ ] **Error messages don't leak information**
  - No stack traces in production
  - Generic error messages to clients
  - Detailed logs kept server-side only

**Common AI mistakes:**
```javascript
// ❌ AI might hard-code secrets
const stripe = require('stripe')('sk_live_abc123...'); // Hardcoded API key!

// ✅ Correct version
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
```

### Dependency Security

- [ ] **Dependencies are up to date**
  - Regular npm audit
  - Automated dependency updates
  - Known vulnerabilities patched

- [ ] **Minimal dependencies used**
  - Only necessary packages
  - Popular, maintained packages
  - Source code reviewed for critical packages

```bash
# Run regularly
npm audit
npm audit fix

# Check for outdated packages
npm outdated
```

### Rate Limiting

- [ ] **API endpoints are rate-limited**
  - Per-user limits
  - Per-IP limits
  - Different limits for different endpoints

- [ ] **Expensive operations are throttled**
  - Password reset
  - Login attempts
  - File uploads
  - Search queries

**Common AI mistakes:**
```javascript
// ❌ AI often forgets rate limiting
app.post('/login', handleLogin); // Brute force vulnerable!

// ✅ Correct version
const rateLimit = require('express-rate-limit');
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts
  message: 'Too many login attempts, please try again later'
});
app.post('/login', loginLimiter, handleLogin);
```

### File Upload Security

- [ ] **File types are validated**
  - Whitelist acceptable types
  - Check MIME type
  - Check file extension
  - Verify file content matches type

- [ ] **File size is limited**
  - Max upload size enforced
  - Prevents DoS attacks

- [ ] **Uploaded files are not executed**
  - Stored outside web root
  - Served with correct headers
  - Renamed to prevent path traversal

**Common AI mistakes:**
```javascript
// ❌ AI might allow any file
app.post('/upload', (req, res) => {
  const file = req.files.upload;
  file.mv(`./uploads/${file.name}`); // Path traversal + no validation!
});

// ✅ Correct version
const path = require('path');
app.post('/upload', (req, res) => {
  const file = req.files.upload;

  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (!allowedTypes.includes(file.mimetype)) {
    return res.status(400).json({ error: 'Invalid file type' });
  }

  // Validate file size (5MB max)
  if (file.size > 5 * 1024 * 1024) {
    return res.status(400).json({ error: 'File too large' });
  }

  // Generate safe filename
  const safeFilename = `${Date.now()}-${path.basename(file.name)}`;
  file.mv(`./uploads/${safeFilename}`);
});
```

### API Security

- [ ] **HTTPS is enforced**
  - All traffic over TLS
  - HSTS header set
  - Redirect HTTP to HTTPS

- [ ] **CORS is configured properly**
  - Whitelist specific origins
  - No Access-Control-Allow-Origin: *
  - Credentials handled correctly

- [ ] **Security headers are set**
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY
  - X-XSS-Protection: 1; mode=block
  - Strict-Transport-Security

**Common AI mistakes:**
```javascript
// ❌ AI might allow any origin
app.use(cors({ origin: '*' })); // Anyone can call your API!

// ✅ Correct version
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS.split(','),
  credentials: true
}));
```

## Quick Security Scan Script

Use this to catch obvious issues:

```bash
# In your codebase
grep -r "password.*=" . --include="*.js" | grep -v "hashed\|bcrypt"
grep -r "SELECT.*FROM.*WHERE" . --include="*.js" | grep "\${"
grep -r "dangerouslySetInnerHTML" . --include="*.jsx"
grep -r "eval(" . --include="*.js"
grep -r "process.env" . --include="*.js" | grep -v "process.env."
```

## Testing for Security Issues

```javascript
// Test SQL injection
fetch('/api/users?name=' + encodeURIComponent("' OR '1'='1"))

// Test XSS
fetch('/api/comment', {
  body: JSON.stringify({ text: '<script>alert("XSS")</script>' })
})

// Test path traversal
fetch('/api/file?path=' + encodeURIComponent('../../../etc/passwd'))

// Test auth bypass
fetch('/api/admin', { headers: { 'Authorization': 'Bearer invalid' } })
```

## Red Flags in AI-Generated Code

Immediately review if you see:

- 🚩 `dangerouslySetInnerHTML` without sanitization
- 🚩 String concatenation in SQL queries
- 🚩 `eval()` or `Function()` constructor
- 🚩 Hard-coded credentials or API keys
- 🚩 No input validation
- 🚩 Passwords stored or logged
- 🚩 `cors({ origin: '*' })`
- 🚩 No rate limiting on sensitive endpoints
- 🚩 File uploads without validation
- 🚩 User input directly in file paths

## When to Get Extra Help

**Always get security review for:**
- Authentication systems
- Payment processing
- Personal Identifiable Information (PII) handling
- File uploads
- Admin/privileged functionality
- Anything touching customer data

## Remember

- **AI doesn't know security** - It generates patterns it has seen
- **45% vulnerability rate** - That's almost half!
- **You're responsible** - Not the AI tool
- **When in doubt, ask** - Security team, senior devs, pen testers
- **Test security explicitly** - Happy path isn't enough

---

**Security is not optional. Use this checklist every time.**
