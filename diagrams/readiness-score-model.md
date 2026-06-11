# Readiness Score Model

---

## Score Architecture

```mermaid
graph TB
    subgraph "Signal Layer"
        RP_SIG["Roleplay Signal<br/>skill score per session<br/>weight: 40%"]
        ASSESS_SIG["Assessment Signal<br/>quiz/cert score per skill<br/>weight: 35%"]
        CALL_SIG["Call Signal<br/>observed skill in real call<br/>weight: 20%"]
        MGR_SIG["Manager Signal<br/>coaching outcome / observation<br/>weight: 5%"]
    end

    subgraph "Signal Processing"
        AGG["Aggregate signals per skill dimension"]
        DECAY["Apply recency decay factor<br/>(0.9× if most recent signal > 30 days)"]
        CONF["Confidence weighting<br/>(low-confidence signals weighted down)"]
    end

    subgraph "Skill Score Layer (10 Dimensions)"
        DISC["Discovery<br/>weight: 15%"]
        VALUE["Value Articulation<br/>weight: 15%"]
        PROD["Product Knowledge<br/>weight: 10%"]
        COMP["Competitive Positioning<br/>weight: 10%"]
        OBJ["Objection Handling<br/>weight: 12%"]
        DEMO["Demo Storytelling<br/>weight: 10%"]
        EXEC_C["Executive Communication<br/>weight: 8%"]
        CLOSE["Closing Discipline<br/>weight: 10%"]
        SEC["Security Review Handling<br/>weight: 5%"]
        PRICE["Pricing Confidence<br/>weight: 5%"]
    end

    subgraph "Composite Score"
        RC["Role Completion Factor<br/>(% assigned skills with data)"]
        RRI["Revenue Readiness Index<br/>0–100"]
        TIER["Readiness Tier"]
    end

    RP_SIG & ASSESS_SIG & CALL_SIG & MGR_SIG --> AGG
    AGG --> DECAY --> CONF

    CONF --> DISC & VALUE & PROD & COMP & OBJ & DEMO & EXEC_C & CLOSE & SEC & PRICE

    DISC & VALUE & PROD & COMP & OBJ & DEMO & EXEC_C & CLOSE & SEC & PRICE --> RC
    RC --> RRI
    RRI --> TIER
```

---

## Score Formula

```
ReadinessScore = Σ(skill_score[i] × skill_weight[i]) × recency_decay_factor × role_completion_factor

Where:
  skill_score[i]           = weighted aggregate of signals for skill i (0–100)
  skill_weight[i]          = configured importance weight for skill i (sum = 1.0)
  recency_decay_factor     = 1.0 if most recent signal in last 30 days, else 0.9
  role_completion_factor   = (skills with ≥1 signal) / (total assigned skills for role)
```

---

## Tier Definitions

```mermaid
graph LR
    A["Score 80–100<br/>🟢 READY<br/>Performing consistently<br/>Light-touch maintenance"] 
    B["Score 60–79<br/>🔵 DEVELOPING<br/>Improving trajectory<br/>Regular coaching reinforcement"]
    C["Score 40–59<br/>🟡 AT RISK<br/>Skill gaps visible<br/>Active coaching required"]
    D["Score 0–39<br/>🔴 CRITICAL<br/>Significant gaps<br/>Immediate intervention"]

    D --> C --> B --> A
```

---

## Score Composition Example

Kavya Rao — Enterprise AE (90 days tenured)

| Skill | Score | Weight | Weighted | Signal Count | Most Recent Signal |
|-------|-------|--------|----------|-------------|-------------------|
| Discovery | 52 | 0.15 | 7.80 | 4 | 5 days ago |
| Value Articulation | 68 | 0.15 | 10.20 | 3 | 12 days ago |
| Product Knowledge | 71 | 0.10 | 7.10 | 5 | 3 days ago |
| Competitive Positioning | 45 | 0.10 | 4.50 | 2 | 18 days ago |
| Objection Handling | 58 | 0.12 | 6.96 | 3 | 8 days ago |
| Demo Storytelling | 74 | 0.10 | 7.40 | 4 | 2 days ago |
| Executive Communication | 42 | 0.08 | 3.36 | 1 | 35 days ago |
| Closing Discipline | 55 | 0.10 | 5.50 | 2 | 22 days ago |
| Security Review Handling | 48 | 0.05 | 2.40 | 1 | 40 days ago |
| Pricing Confidence | 50 | 0.05 | 2.50 | 1 | 28 days ago |
| **Total** | | **1.00** | **57.72** | | |

```
recency_decay_factor = 1.0 (most recent signal is 2 days ago)
role_completion_factor = 10/10 = 1.0 (all skills have at least 1 signal)

ReadinessScore = 57.72 × 1.0 × 1.0 = 58 → AT RISK tier
```

**Top gaps by weighted impact:**
1. Discovery (52 × 0.15 = 7.80 actual vs. 15.00 if at 100) → gap: 7.20
2. Competitive Positioning (45 × 0.10 = 4.50 actual vs. 10.00) → gap: 5.50
3. Executive Communication (42 × 0.08 = 3.36 actual vs. 8.00) → gap: 4.64

---

## Score Trend Over Time

```mermaid
xychart-beta
    title "Kavya Rao — Readiness Score (12 weeks)"
    x-axis ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12"]
    y-axis "Readiness Score" 0 --> 100
    line [32, 38, 43, 48, 51, 55, 56, 58, 62, 65, 68, 71]
```

**Milestones visible in trend:**
- Week 1–4: Rapid gain from baseline assessments and first roleplay sessions
- Week 5–8: Plateau — Discovery and Competitive gaps limiting composite growth
- Week 9+: Renewed gain after focused coaching from Rohan + 3 targeted roleplay sessions

---

## Org-Level Readiness Distribution

```mermaid
pie title "Team Readiness Distribution (120 reps)"
    "Ready (≥80)" : 22
    "Developing (60–79)" : 41
    "At Risk (40–59)" : 38
    "Critical (<40)" : 19
```

**Platform target at 12 months:** Critical < 10%, Ready ≥ 35%
