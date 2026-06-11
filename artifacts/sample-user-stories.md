# Sample User Stories

---

## Readiness Intelligence

```
As a VP Sales Enablement,
I want to see a real-time readiness score for every rep on my team,
So that I can identify who needs attention before it shows up in quota attainment.

Acceptance Criteria:
- Readiness score (0–100) visible per rep on team dashboard
- Tier shown (Ready / Developing / At Risk / Critical) with color coding
- 30/60/90-day trend visible per rep
- Filter by tier, team, and manager
- Score updates within 24 hours of any new activity signal
```

```
As a Sales Manager,
I want to see which skill dimensions are lowest across my team,
So that I can focus coaching sessions on the skills that matter most right now.

Acceptance Criteria:
- Team heatmap shows all 10 skill dimensions
- Each cell shows average score for that skill across the team
- Cells below target threshold are highlighted
- I can click a cell to see which reps are contributing to the gap
- Target thresholds are configurable by enablement admin
```

```
As an Account Executive,
I want to see my own skill scores and understand why they are what they are,
So that I feel ownership of my own development and know what to improve.

Acceptance Criteria:
- Personal skill profile accessible at any time
- 30-day trend for each skill
- Explanation of what signals contributed to my current score
- 1–2 recommended next steps per gap skill
- I can dispute a score if I believe it is incorrect
```

---

## AI Roleplay

```
As an Account Executive,
I want to practice a discovery call with an AI buyer before a high-stakes call,
So that I can go into the real call more prepared.

Acceptance Criteria:
- I can select a scenario by type (discovery / demo / objection / pricing / executive)
- Scenario starts within 5 seconds of clicking "Start"
- AI buyer responds within 3 seconds of my message
- Session has a natural end (AI buyer signals end of call or I can end it)
- Session automatically generates a debrief report on completion
```

```
As an Account Executive,
I want to see specific, evidence-backed feedback on my roleplay performance,
So that I know exactly what to work on — not just a generic score.

Acceptance Criteria:
- Debrief shows overall score and per-skill scores
- At least 2 specific strengths identified with transcript excerpts
- At least 2 specific development areas identified with transcript excerpts
- Each piece of feedback includes a concrete suggestion ("next time, try...")
- I can share my debrief with my manager or keep it private
```

```
As a Sales Manager,
I want to review my direct reports' roleplay debriefs,
So that I can coach based on specific evidence rather than general impressions.

Acceptance Criteria:
- I can see a list of completed roleplay sessions for each direct report
- I can open any session and see the full debrief
- I can add my own coaching notes to the debrief
- I can mark the debrief as "reviewed"
- Rep is notified when manager has reviewed and added notes
```

---

## Coaching Queue

```
As a Sales Manager,
I want to receive a prioritized coaching action list at the start of each week,
So that I know exactly who to coach and on what — without spending hours preparing.

Acceptance Criteria:
- Coaching queue is populated by Monday 8am
- Actions are sorted by priority (Critical → High → Medium → Low)
- Each action shows: rep name, skill, evidence summary, suggested coaching approach
- Queue contains no more than 5 open actions per direct report
- I can complete or dismiss each action with one interaction
```

```
As a Sales Manager,
I want to dismiss an AI coaching recommendation when I know it is not relevant,
So that the queue stays useful and doesn't fill up with false positives.

Acceptance Criteria:
- "Dismiss" button visible on every coaching action
- I must select a reason from a dropdown (already addressed / not relevant / timing / other)
- Dismissed actions move to history with my reason logged
- My override patterns are used to improve future AI recommendations
- If I dismiss >20% of recommendations, an alert goes to the enablement admin
```

```
As an AE,
I want to see the coaching notes my manager has written about me,
So that our 1:1s are a continuation of a shared development narrative, not a surprise.

Acceptance Criteria:
- Manager can flag coaching notes as "share with rep" or "manager only"
- Rep sees only "share with rep" notes in their profile
- Notes are dated and attributed to the manager
- Rep can acknowledge reading a note
- Rep cannot edit or delete manager notes
```

---

## Content Hub

```
As an Account Executive,
I want to find the right battle card for a competitive deal in under 60 seconds,
So that I can be prepared for objections without spending time searching.

Acceptance Criteria:
- Search bar visible from any platform page
- Search returns results in <2 seconds
- Competitive content is tagged by competitor category (not by real company name)
- I can filter results by content type, topic, and persona
- I can share a content asset link directly from the result
```

```
As an Account Executive,
I want to see AI-recommended content for my current deal,
So that I don't have to know what to search for.

Acceptance Criteria:
- Deal page shows ≤3 AI-recommended content assets
- Each recommendation includes a one-line explanation of why it was recommended
- I can mark a recommendation as "not helpful" to improve future recommendations
- Recommendations update when deal stage changes
- Recommendations are specific to buyer persona and competitive context when available
```

```
As an Enablement Admin,
I want to see content freshness scores and usage analytics,
So that I can retire stale content and understand what is actually used in the field.

Acceptance Criteria:
- Freshness score (0–100) visible per content asset; decays over time based on last update date
- Views, shares, and downloads tracked per asset
- I receive a weekly digest of content older than 90 days with low freshness scores
- I can bulk-archive content from the analytics view
- I can see which reps are using which content (for coaching context)
```
