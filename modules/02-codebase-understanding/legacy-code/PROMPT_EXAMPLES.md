# Prompt Examples: Architecture Analysis & Refactoring

This file contains example prompts for Module 2 activities. **Use these if you get stuck** or after completing to compare your approach.

---

# Activity 2A: Architecture Analysis Prompts

## Example 1: Understanding the Entry Point

```
I'm working on the Architecture Analysis exercise in
modules/02-codebase-understanding/legacy-code/

Looking at this server.js file, what can you tell me about:
1. The main routes being registered
2. External services being integrated
3. Middleware being used
4. Background jobs being initialized

[Include just server.js code]
```

**What makes this good:**
- ✅ States which exercise (context)
- ✅ Asks specific, focused questions
- ✅ Limits scope to one file (entry point)
- ✅ Lists exactly what information is needed
- ✅ Includes relevant code snippet

**Why this approach works:**
Starting with the entry point gives you a map of the system. You learn what exists before diving deep.

## Example 2: Tracing a Feature Flow

```
I'm working on the Architecture Analysis exercise in
modules/02-codebase-understanding/legacy-code/

I want to understand the 'create subscription' flow.
Here's the route handler: [paste route code]
Here's the service: [paste service code]

Can you explain the flow from HTTP request to database?
Specifically:
- What validation happens at each layer?
- Where does the payment provider get called?
- What gets saved to the database?
```

**What makes this good:**
- ✅ Traces a specific user journey
- ✅ Provides code from multiple layers
- ✅ Asks about the flow between layers
- ✅ Focuses on specific concerns (validation, external calls, persistence)

**Why this approach works:**
Following one feature end-to-end helps you understand the layering and responsibilities.

## Example 3: Understanding External Integrations

```
I'm working on the Architecture Analysis exercise in
modules/02-codebase-understanding/legacy-code/

This service integrates with Stripe and PayPal.
[Paste relevant service methods]

Questions:
1. What's the abstraction strategy here? Is there a common interface?
2. How are errors from these providers handled?
3. What could go wrong if one provider is down?
4. Are there retry mechanisms?
```

**What makes this good:**
- ✅ Focuses on integration points (high-risk area)
- ✅ Asks about error handling (often missing in legacy code)
- ✅ Considers failure scenarios
- ✅ Looks for patterns (abstraction, retry logic)

**Why this approach works:**
External integrations are critical and often fragile. Understanding them early is important.

## Example 4: Verifying AI Claims

```
I'm working on the Architecture Analysis exercise in
modules/02-codebase-understanding/legacy-code/

You mentioned that "payment retries happen after 24 hours" - can you show me
where in the code this is implemented? Which file and line number?

I want to verify this claim against the actual implementation.
```

**What makes this good:**
- ✅ Questions AI's claim
- ✅ Asks for specific evidence (file, line number)
- ✅ Explicitly states intention to verify
- ✅ Demonstrates critical thinking

**Why this approach works:**
AI confidently hallucinates. Always verify specific claims with evidence.

## Example 5: Identifying Missing Functionality

```
I'm working on the Architecture Analysis exercise in
modules/02-codebase-understanding/legacy-code/

You described webhook signature validation in your previous response.
I've looked at the webhook handler code [paste code] and I don't see
any signature validation.

Can you clarify:
1. Did I miss something in the code?
2. Or was this an assumption about what "should" be there?
```

**What makes this good:**
- ✅ Challenges AI when code doesn't match description
- ✅ Provides evidence (the actual code)
- ✅ Asks AI to clarify assumption vs reality
- ✅ Shows you're reading the code yourself

**Why this approach works:**
AI often describes "standard" patterns that aren't actually implemented. Catch these hallucinations.

---

# Activity 2B: Refactoring Planning Prompts

## Example 6: Understanding Current State

```
I'm working on the Refactoring Planning exercise in
modules/02-codebase-understanding/legacy-code/

I need to refactor this jQuery-based admin interface at public/admin.html.

Looking at this code, what are the current features and what state
management patterns is it using?

[Paste admin.html code]
```

**What makes this good:**
- ✅ States the refactoring goal
- ✅ Asks about current features (what to preserve)
- ✅ Asks about patterns (helps plan migration)
- ✅ Includes the code to analyze

**Why this approach works:**
Understanding what exists is essential before planning how to change it.

## Example 7: Exploring Migration Strategies

```
I'm working on the Refactoring Planning exercise in
modules/02-codebase-understanding/legacy-code/

What are 3 different approaches for migrating this jQuery interface
to React incrementally (not a big-bang rewrite)?

For each approach:
- What gets refactored first?
- How do we ensure nothing breaks?
- What are the risks?

Focus on INCREMENTAL migration strategies.
```

**What makes this good:**
- ✅ Explicitly asks for multiple options
- ✅ Explicitly rejects big-bang rewrite
- ✅ Asks for comparison criteria
- ✅ Emphasizes incremental approach

**Why this approach works:**
AI loves to suggest rewrites. Constraining it to incremental approaches gets better advice.

## Example 8: Risk Assessment

```
I'm working on the Refactoring Planning exercise in
modules/02-codebase-understanding/legacy-code/

For this jQuery to React migration, what are the highest-risk areas?

Consider:
- User behaviors we might break (people have muscle memory!)
- State management edge cases
- API integration points
- Browser compatibility
- Performance implications

What should we test most carefully?
```

**What makes this good:**
- ✅ Focuses on risk (critical for refactoring)
- ✅ Lists specific risk categories
- ✅ Mentions user impact (not just technical concerns)
- ✅ Asks what to test (actionable outcome)

**Why this approach works:**
Refactoring is about managing risk. Identifying risks early helps you plan mitigation.

## Example 9: Testing Strategy

```
I'm working on the Refactoring Planning exercise in
modules/02-codebase-understanding/legacy-code/

Before we start refactoring this admin interface, what tests should
we write to ensure we don't break anything?

Consider:
- What behaviors should be captured in tests first?
- What's the minimum test coverage needed?
- How do we test jQuery behavior?
- What integration tests do we need?

Focus on tests that will catch regressions during the refactor.
```

**What makes this good:**
- ✅ Asks about testing BEFORE refactoring
- ✅ Focuses on regression prevention
- ✅ Considers the legacy tech (jQuery testing)
- ✅ Asks about different test levels (unit, integration)

**Why this approach works:**
Tests are your safety net. Writing them before refactoring catches breaking changes.

## Example 10: Pushing Back on AI Suggestions

```
I'm working on the Refactoring Planning exercise in
modules/02-codebase-understanding/legacy-code/

You suggested "rewrite the entire admin interface in React in one go."

This seems risky because:
- No incremental validation
- Hard to test comprehensively
- No rollback plan if issues found
- Users might depend on subtle behaviors we don't know about

Can you instead suggest a STRANGLER FIG approach where we:
1. Keep jQuery running
2. Gradually replace pieces with React
3. Test each piece before moving to the next
4. Have a rollback plan at each step
```

**What makes this good:**
- ✅ Explicitly rejects bad advice
- ✅ Explains WHY the suggestion is risky
- ✅ Redirects AI to better approach
- ✅ Specifies constraints for new suggestion

**Why this approach works:**
AI gives generic advice. You need to guide it to context-appropriate solutions.

---

## Common Patterns for Codebase Exploration

### Pattern 1: Start Broad, Then Drill Down
1. Entry point → What's the structure?
2. Pick one feature → Trace it completely
3. Expand → Related features, integrations
4. Synthesize → Full architecture picture

### Pattern 2: Always Verify AI Claims
When AI says "this code does X":
1. Ask for file and line number
2. Read the actual code
3. Check if it matches AI's description
4. Document when AI was wrong

### Pattern 3: Focus on One Layer at a Time
Don't ask "explain everything"
Ask:
- "Explain the route layer"
- "Explain the service layer"
- "Explain the data layer"

### Pattern 4: Ask About Edge Cases
- "What happens if the payment provider is down?"
- "What happens if two requests create subscriptions simultaneously?"
- "What happens if the webhook arrives before the payment completes?"

### Pattern 5: Question Assumptions
- "You mentioned retry logic - where is that implemented?"
- "You said there's authentication - can you show me where?"
- "You described error handling - is it actually in the code?"

---

## Refactoring Planning Patterns

### Pattern 1: Constrain to Incremental
Always emphasize:
- "Incremental migration, not big-bang"
- "One component at a time"
- "Feature flags for gradual rollout"
- "Easy rollback at each step"

### Pattern 2: Think About Risk First
Before asking "how", ask:
- "What are the risks?"
- "What could go wrong?"
- "What's the rollback plan?"
- "How do we test each step?"

### Pattern 3: Preserve User Experience
Remind AI:
- "Users have muscle memory"
- "Don't change behavior during refactor"
- "Same UX, better code"
- "Refactoring ≠ redesign"

---

## Reflection Questions

After comparing your prompts with these examples:

1. **Verification:** Did you verify AI's claims, or trust them blindly?
2. **Scope:** Did you give AI too much code at once, or focused chunks?
3. **Incremental thinking:** Did you ask for step-by-step approaches?
4. **Risk awareness:** Did you ask about what could go wrong?
5. **Evidence:** Did you ask for file/line numbers to verify claims?

---

**Remember:** These examples show effective patterns, but your prompts should be adapted to your actual exploration journey. Don't just copy—understand WHY these prompts work!
