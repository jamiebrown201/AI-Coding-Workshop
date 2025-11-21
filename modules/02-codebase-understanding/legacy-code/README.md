# Activity 2A: Architecture Analysis

## The Archaeological Dig

Welcome to the subscription management system. It's been around for 5 years, changed hands between three teams, and includes some... "historical decisions."

Your task: **Understand the architecture well enough to explain it to others.**

## Product Context

```
As a new engineer joining the team
I need to understand our subscription management system
So that I can contribute to features and fix bugs confidently

Background:
Our subscription service handles:
- User subscriptions and account management
- Payment processing (Stripe, PayPal, Apple IAP)
- Entitlements and feature flags
- Integration with multiple payment providers
- Webhook handling for payment events
- Scheduled jobs (renewals, expirations, reminders)

It's been around for 5 years. The original team is long gone.
Your mission: Figure out how this thing works.
```

## Your Mission

1. **Map the architecture**
   - Create a visual diagram of the system
   - Identify key components and their relationships
   - Document the request flow

2. **Document your findings**
   - What are the major subsystems?
   - How do they communicate?
   - Where are the external dependencies?
   - What assumptions did AI make (right or wrong)?

3. **Capture questions**
   - What's unclear?
   - What seems risky?
   - What would you want to ask the original authors?

## Setup

```bash
cd modules/02-codebase-understanding/legacy-code
npm install
npm run dev  # Starts server at http://localhost:3001
```

Open http://localhost:3001 to see a demo frontend. The real system is the API backend - that's what you'll be exploring.

## ⚠️ Critical: Verify Everything

**AI will confidently make up functionality that doesn't exist.**

This is the biggest pitfall in codebase exploration. AI tools are trained to be helpful and will:
- Infer features that "should" be there
- Describe standard patterns as if they're in this specific codebase
- Fill in gaps with reasonable assumptions

**Your job: Verify every claim against the actual code.**

### How to Catch AI Hallucinations

1. **Ask for file names and line numbers**
   - ❌ "The authentication uses JWT"
   - ✅ "Can you show me where JWT is used? Which file and line?"

2. **Check the code yourself**
   - When AI describes a feature, open the file
   - Read the actual implementation
   - Look for what's NOT there

3. **Look for missing pieces**
   - AI might describe error handling that doesn't exist
   - AI might explain retry logic that's not implemented
   - AI might describe validation that's missing

4. **Test your understanding**
   - If AI says "payment retries happen after 24 hours", find that 24
   - If AI says "webhooks validate signatures", find that validation
   - If actual code doesn't match, AI was wrong

### Where AI Helps vs Where You Must Verify

**AI is good at:**
- Explaining general flow (request → service → response)
- Identifying patterns (this looks like MVC)
- Suggesting where to look next
- Generating initial architecture diagrams

**You must verify:**
- Whether specific features actually exist
- Exact implementation details
- What's missing or incomplete
- Edge cases and error handling
- Integration details

## Context Strategy

Remember: **More context ≠ Better results**

### ❌ Don't Do This

```
"Here's all 50 files. Explain the architecture."
[Dumps entire codebase]
```

This will give you generic, surface-level analysis.

### ✅ Do This Instead

**Phase 1: Entry Point (5 min)**

1. Start with `server.js`
2. Ask AI: "What does this entry point tell us about the system's structure?"
3. Identify the main routes and middleware

**Phase 2: Follow One Path (10 min)**

1. Pick one feature: "Create a subscription"
2. Trace: Route → Controller → Service → Model
3. Ask targeted questions about each layer
4. Document the flow

**Phase 3: Expand Deliberately (10 min)**

1. Explore related services
2. Understand external integrations
3. Check webhook handlers
4. Map background jobs

**Phase 4: Synthesize (5 min)**

1. Create the full architecture diagram
2. Document assumptions and questions
3. Note what AI got wrong

**Phase 5: Systematic Verification (Critical!)**

After getting AI's explanation, verify systematically:

1. **For each feature AI described, find the code**
   - Open the file AI mentioned
   - Read the actual implementation
   - Check if it matches AI's description

2. **Look for what's missing**
   - Does AI mention error handling? Is it really there?
   - Does AI describe authentication? Check if it exists
   - Does AI explain retry logic? Find the retry code

3. **Test specific claims**
   - AI says "retries after 24 hours"? grep for "24" or check constants
   - AI says "validates webhook signatures"? Find that validation
   - AI says "uses Redis for caching"? Check if Redis exists

4. **Document hallucinations**
   - What did AI claim that wasn't true?
   - What features did AI assume existed?
   - Where did AI fill gaps with "standard" patterns?

## Example AI Conversation

**Step 1: Entry Point**

```
Prompt: "I'm working on the Legacy Code Architecture Analysis in modules/02-codebase-understanding/legacy-code/

Looking at this server.js file, what can you tell me about:
1. The main routes being registered
2. External services being integrated
3. Middleware being used
4. Background jobs being initialized

[Include just server.js code]"
```

**Step 2: Trace a Feature**

```
Prompt: "I'm working on the Legacy Code Architecture Analysis in modules/02-codebase-understanding/legacy-code/

I want to understand the 'create subscription' flow.
Here's the route handler [paste route code].
Here's the service [paste service code].
Can you explain the flow from HTTP request to database?"
```

**Step 3: Understand Integrations**

```
Prompt: "I'm working on the Legacy Code Architecture Analysis in modules/02-codebase-understanding/legacy-code/

This service integrates with Stripe and PayPal.
[Paste relevant service methods]
What's the abstraction strategy here?
What could go wrong?"
```

## What to Map

Your architecture diagram should show:

### Core Components

- [ ] API routes and their purposes
- [ ] Service layer organization
- [ ] Data models and relationships
- [ ] External service integrations

### Data Flow

- [ ] Request lifecycle (HTTP → response)
- [ ] Payment processing flow
- [ ] Webhook handling flow
- [ ] Background job triggers

### External Dependencies

- [ ] Payment providers (Stripe, PayPal, Apple)
- [ ] Database (what type?)
- [ ] Notification services
- [ ] Logging/monitoring

### Critical Business Logic

- [ ] Subscription creation process
- [ ] Payment retry logic
- [ ] Entitlement management
- [ ] Cancellation handling

## Exploration Checklist

- [ ] Identified all API endpoints
- [ ] Understood service layer responsibilities
- [ ] Mapped database models and relationships
- [ ] Documented payment provider integrations
- [ ] Understood webhook handling
- [ ] Identified background jobs
- [ ] Found the authentication/authorization flow
- [ ] Located error handling patterns
- [ ] Noted testing strategy (or lack thereof)
- [ ] Documented assumptions and questions

## Deliverable

Create a document (Markdown or visual diagram) that includes:

1. **System Architecture Diagram**
   - Visual representation of components
   - Use tools like: Paper, whiteboard, Excalidraw, Mermaid, or just ASCII art

2. **Component Descriptions**
   - What each major component does
   - How it interacts with others

3. **Request Flows**
   - Trace 2-3 key user journeys through the system

4. **External Integrations**
   - What external services are used
   - How failures are handled

5. **Open Questions**
   - What's still unclear
   - What seems risky
   - What needs investigation

6. **AI Accuracy Report**
   - What did AI explain correctly?
   - What assumptions did AI make that were wrong?
   - Where did AI's suggestions need verification?

## Example Diagram (Simple)

```
┌─────────────┐
│   Client    │
└──────┬──────┘
       │ HTTP
┌──────▼───────────────────────────────┐
│         Express Server               │
│  ┌────────────────────────────────┐  │
│  │   Routes Layer                 │  │
│  │  /subscriptions  /webhooks     │  │
│  └─────────┬──────────────────────┘  │
│            │                          │
│  ┌─────────▼──────────────────────┐  │
│  │   Service Layer                │  │
│  │  SubscriptionService           │  │
│  │  PaymentService                │  │
│  │  EntitlementService            │  │
│  └─────────┬──────────────────────┘  │
│            │                          │
│  ┌─────────▼──────────────────────┐  │
│  │   Data Layer                   │  │
│  │  Models: User, Subscription    │  │
│  └─────────┬──────────────────────┘  │
└────────────┼──────────────────────────┘
             │
    ┌────────┴────────┐
    │                 │
┌───▼─────┐    ┌─────▼──────┐
│Database │    │  External  │
│         │    │  Services  │
│(Postgres│    │  (Stripe,  │
│ or Mongo│    │  PayPal)   │
└─────────┘    └────────────┘
```

## Gallery Walk

After 20 minutes of exploration:

1. Post your diagram (whiteboard, paper, screen)
2. Add comments to diagrams

## Reflection Questions

1. **What surprised you about this codebase?**
2. **Where did AI help your understanding?**
3. **Where did AI confidently explain something that turned out to be wrong?**
4. **Did you give AI too much context at any point? What happened?**
5. **How would you explain this system to a new teammate?**
6. **What would you want to refactor first (and why)?**

## Group Discussion

- Compare your architecture diagrams. What did different groups choose to highlight or omit? What does this say about the nature of "understanding" a codebase?
- Does using an AI to explain a codebase prevent you from developing the critical skill of reading and interpreting code yourself?

## Common "Historical Decisions" You Might Find

- Inconsistent error handling
- Mixed promise/callback patterns
- Hard-coded configuration values
- Incomplete webhook handlers
- Database queries in route handlers
- No input validation in some places
- Copy-pasted code with slight variations
- Comments like "TODO: fix this properly"

**These aren't bugs—they're archaeology!** Every "weird" thing has a story.

## Next Steps

Move on to [Activity 2B: Refactoring Planning](../refactoring-challenge/README.md)

---

**Remember: The goal isn't to judge the code. It's to understand it.**
