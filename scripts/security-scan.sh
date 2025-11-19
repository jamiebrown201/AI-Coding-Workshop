#!/bin/bash

# Security Scan Script for Workshop Code
# Checks for common security issues in your code

set -e

echo "🔒 Security Scan - AI Workshop"
echo "=============================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

ISSUES_FOUND=0

# Function to report issues
report_issue() {
    local severity=$1
    local message=$2
    local file=$3
    local line=$4

    echo -e "${RED}[$severity]${NC} $message"
    if [ -n "$file" ]; then
        echo "  File: $file:$line"
    fi
    echo ""
    ISSUES_FOUND=$((ISSUES_FOUND + 1))
}

# Check 1: Hardcoded secrets
echo "🔍 Checking for hardcoded secrets..."
if grep -r -n "password\s*=\s*['\"]" --include="*.js" --include="*.ts" --include="*.jsx" --include="*.tsx" . 2>/dev/null | grep -v "hashed\|bcrypt\|placeholder"; then
    report_issue "CRITICAL" "Hardcoded passwords found"
fi

if grep -r -n "api[_-]key\s*=\s*['\"]" --include="*.js" --include="*.ts" . 2>/dev/null | grep -v "process.env\|PLACEHOLDER"; then
    report_issue "CRITICAL" "Hardcoded API keys found"
fi

if grep -r -n "secret\s*=\s*['\"]" --include="*.js" --include="*.ts" . 2>/dev/null | grep -v "process.env\|PLACEHOLDER"; then
    report_issue "CRITICAL" "Hardcoded secrets found"
fi

# Check 2: SQL Injection potential
echo "🔍 Checking for SQL injection vulnerabilities..."
if grep -r -n "query.*\`.*\${" --include="*.js" --include="*.ts" . 2>/dev/null; then
    report_issue "CRITICAL" "Potential SQL injection via template strings"
fi

if grep -r -n "query.*+.*req\." --include="*.js" --include="*.ts" . 2>/dev/null; then
    report_issue "CRITICAL" "Potential SQL injection via string concatenation"
fi

# Check 3: XSS vulnerabilities
echo "🔍 Checking for XSS vulnerabilities..."
if grep -r -n "dangerouslySetInnerHTML" --include="*.jsx" --include="*.tsx" . 2>/dev/null | grep -v "DOMPurify\|sanitize"; then
    report_issue "HIGH" "dangerouslySetInnerHTML without sanitization found"
fi

if grep -r -n "innerHTML\s*=" --include="*.js" --include="*.ts" . 2>/dev/null; then
    report_issue "HIGH" "Direct innerHTML manipulation found"
fi

# Check 4: Eval usage
echo "🔍 Checking for eval() usage..."
if grep -r -n "eval(" --include="*.js" --include="*.ts" . 2>/dev/null; then
    report_issue "CRITICAL" "eval() usage found - major security risk"
fi

if grep -r -n "Function(" --include="*.js" --include="*.ts" . 2>/dev/null; then
    report_issue "HIGH" "Function() constructor found - similar to eval()"
fi

# Check 5: Insecure CORS
echo "🔍 Checking for insecure CORS configuration..."
if grep -r -n "origin:\s*['\"]\\*['\"]" --include="*.js" --include="*.ts" . 2>/dev/null; then
    report_issue "HIGH" "CORS configured to allow all origins"
fi

# Check 6: Missing input validation
echo "🔍 Checking for missing input validation..."
if grep -r -n "req\.body\." --include="*.js" --include="*.ts" . 2>/dev/null | head -5 | grep -v "validate\|check\|sanitize"; then
    echo -e "${YELLOW}[INFO]${NC} Some endpoints may be missing input validation"
    echo "  Review req.body usage manually"
    echo ""
fi

# Check 7: Weak crypto
echo "🔍 Checking for weak cryptography..."
if grep -r -n "md5\|sha1" --include="*.js" --include="*.ts" . 2>/dev/null; then
    report_issue "MEDIUM" "Weak hashing algorithms (MD5/SHA1) found"
fi

# Check 8: Console.log with sensitive data
echo "🔍 Checking for console.log with potential sensitive data..."
if grep -r -n "console\.log.*password\|console\.log.*token\|console\.log.*secret" --include="*.js" --include="*.ts" . 2>/dev/null; then
    report_issue "MEDIUM" "Potential logging of sensitive data"
fi

# Check 9: Missing authentication
echo "🔍 Checking for endpoints without authentication..."
if grep -r -n "app\.\(get\|post\|put\|delete\)" --include="*.js" . 2>/dev/null | grep -v "health\|public" | head -10; then
    echo -e "${YELLOW}[INFO]${NC} Review endpoints for authentication requirements"
    echo "  Ensure sensitive endpoints require auth"
    echo ""
fi

# Check 10: NPM audit
echo "🔍 Running npm audit..."
if command -v npm &> /dev/null; then
    if npm audit --audit-level=moderate 2>&1 | grep -q "vulnerabilities"; then
        echo -e "${YELLOW}[WARNING]${NC} npm audit found vulnerabilities"
        echo "  Run 'npm audit' for details"
        echo "  Run 'npm audit fix' to attempt automatic fixes"
        echo ""
        ISSUES_FOUND=$((ISSUES_FOUND + 1))
    else
        echo -e "${GREEN}✅${NC} No npm vulnerabilities found"
        echo ""
    fi
else
    echo -e "${YELLOW}[SKIP]${NC} npm not available"
    echo ""
fi

# Summary
echo "=============================="
if [ $ISSUES_FOUND -eq 0 ]; then
    echo -e "${GREEN}🎉 No critical security issues found!${NC}"
    echo ""
    echo "Note: This is a basic scan. Always:"
    echo "- Run the full security checklist manually"
    echo "- Get human code review"
    echo "- Test security explicitly"
    echo "- Use professional security tools for production"
else
    echo -e "${RED}⚠️  Found $ISSUES_FOUND potential security issues${NC}"
    echo ""
    echo "Review the issues above and:"
    echo "- Fix critical issues immediately"
    echo "- Use the security checklist (docs/security-checklist.md)"
    echo "- Get security review before merging"
    echo "- Never deploy code with known vulnerabilities"
fi

echo ""
echo "For detailed security guidance:"
echo "  docs/security-checklist.md"
echo ""

# Exit with error if issues found
if [ $ISSUES_FOUND -gt 0 ]; then
    exit 1
fi
