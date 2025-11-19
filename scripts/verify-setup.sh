#!/bin/bash

# Workshop Setup Verification Script
# Checks that everything is ready for the AI Coding Workshop

set -e

echo "🤖 AI Coding Workshop - Setup Verification"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track overall status
ALL_GOOD=true

# Check Node.js version
echo -n "Checking Node.js version... "
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -ge 18 ]; then
        echo -e "${GREEN}✅ Node.js $(node --version)${NC}"
    else
        echo -e "${RED}❌ Node.js version too old (need 18+, have $(node --version))${NC}"
        ALL_GOOD=false
    fi
else
    echo -e "${RED}❌ Node.js not found${NC}"
    ALL_GOOD=false
fi

# Check npm
echo -n "Checking npm... "
if command -v npm &> /dev/null; then
    echo -e "${GREEN}✅ npm $(npm --version)${NC}"
else
    echo -e "${RED}❌ npm not found${NC}"
    ALL_GOOD=false
fi

# Check Git
echo -n "Checking Git... "
if command -v git &> /dev/null; then
    echo -e "${GREEN}✅ Git $(git --version | cut -d' ' -f3)${NC}"
else
    echo -e "${RED}❌ Git not found${NC}"
    ALL_GOOD=false
fi

# Check Git configuration
echo -n "Checking Git configuration... "
if git config user.name &> /dev/null && git config user.email &> /dev/null; then
    echo -e "${GREEN}✅ Git configured ($(git config user.name))${NC}"
else
    echo -e "${YELLOW}⚠️  Git not fully configured${NC}"
    echo "   Run: git config --global user.name \"Your Name\""
    echo "   Run: git config --global user.email \"your.email@example.com\""
fi

# Check if dependencies are installed
echo -n "Checking dependencies... "
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✅ Dependencies installed${NC}"
else
    echo -e "${YELLOW}⚠️  Dependencies not installed${NC}"
    echo "   Run: npm install"
    ALL_GOOD=false
fi

# Try to detect AI coding tools (best effort)
echo -n "Checking for AI coding tools... "
AI_TOOL_FOUND=false

if command -v claude-code &> /dev/null; then
    echo -e "${GREEN}✅ Claude Code detected${NC}"
    AI_TOOL_FOUND=true
elif command -v copilot &> /dev/null; then
    echo -e "${GREEN}✅ GitHub Copilot detected${NC}"
    AI_TOOL_FOUND=true
elif command -v codex &> /dev/null; then
    echo -e "${GREEN}✅ Codex detected${NC}"
    AI_TOOL_FOUND=true
elif [ -d "$HOME/.cursor" ]; then
    echo -e "${GREEN}✅ Cursor detected${NC}"
    AI_TOOL_FOUND=true
elif code --list-extensions 2>/dev/null | grep -q "GitHub.copilot"; then
    echo -e "${GREEN}✅ GitHub Copilot (VS Code) detected${NC}"
    AI_TOOL_FOUND=true
else
    echo -e "${YELLOW}⚠️  No AI tool auto-detected (this is OK if you have one installed)${NC}"
    echo "   We can't always detect AI tools - if you have one, you're good!"
fi

# Check if we're in the right directory
echo -n "Checking workshop directory structure... "
if [ -d "modules" ] && [ -d "docs" ] && [ -f "package.json" ]; then
    echo -e "${GREEN}✅ Workshop structure looks good${NC}"
else
    echo -e "${RED}❌ Not in workshop root directory?${NC}"
    echo "   Make sure you're in the ai-assistant-workshop directory"
    ALL_GOOD=false
fi

# Try to run tests (if dependencies installed)
if [ -d "node_modules" ]; then
    echo -n "Running quick test check... "
    if npm test -- --passWithNoTests &> /dev/null; then
        echo -e "${GREEN}✅ Test suite runs${NC}"
    else
        echo -e "${YELLOW}⚠️  Tests need attention (this is normal for starter exercises)${NC}"
    fi
fi

echo ""
echo "=========================================="

if [ "$ALL_GOOD" = true ]; then
    echo -e "${GREEN}🎉 You're ready to rock!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Read the main README.md"
    echo "2. Check out Module 1: modules/01-foundations/"
    echo "3. Get excited!"
else
    echo -e "${YELLOW}⚠️  Some items need attention${NC}"
    echo ""
    echo "Check the issues above and:"
    echo "- Install missing tools"
    echo "- Run 'npm install' if dependencies are missing"
    echo "- See GETTING_STARTED.md for troubleshooting"
    echo ""
    echo "Don't worry - we'll have setup support at the workshop!"
fi

echo ""
echo "For help: Check GETTING_STARTED.md or ask a facilitator"
echo ""
