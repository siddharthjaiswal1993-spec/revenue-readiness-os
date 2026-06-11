# Security, Privacy, and Governance

---

## Data Privacy

### Personal Data Handled by the Platform

| Data Type | Source | Sensitivity | Handling |
|-----------|--------|-------------|---------|
| Rep name, email, role | HR/identity sync | Low | Standard PII handling; encrypted at rest |
| Skill scores and assessments | Platform-generated | Medium | Tenant-isolated; rep-visible by default |
| Roleplay transcripts | Rep-generated | High | Encrypted at rest; accessible only to rep + manager + admin |
| Call recordings/transcripts | Integration (call intelligence) | High | Not stored natively; consumed as signals only; referenced by ID |
| Deal data | CRM integration | High | Read-only; tenant-isolated; no cross-tenant sharing |
| Manager coaching notes | Manager-entered | Medium | Accessible only to entering manager + admin |
| Compensation / performance data | Optional integration | Very High | Only used for correlation analysis if customer enables; not stored long-term |

### GDPR Compliance
- Data subject access request (DSAR) fulfillment within 30 days
- Right to erasure: rep data deleted within 30 days of request; skill score history purged
- Data processing agreements (DPAs) with all sub-processors
- Privacy-by-design: minimum necessary data collection; no behavioral tracking beyond platform use
- Lawful basis: legitimate interest for employer-employee performance data; explicit consent for optional features

### CCPA Compliance
- No sale of personal data
- Data deletion on request within 45 days
- Annual privacy policy updates
- Consumer rights disclosure in privacy policy

---

## Role-Based Access Control (RBAC)

| Role | Permissions |
|------|-------------|
| **Admin** | Full platform configuration, all data access, user management, integration management |
| **Enablement Admin** | Program creation, content management, certification configuration, analytics (all reps) |
| **Sales Manager** | View team rep profiles, coaching queue, team readiness scores; cannot see other managers' teams |
| **Account Executive / Rep** | Own profile, own skill scores, own roleplay history, assigned learning paths, content library |
| **SDR** | Same as AE, scoped to SDR programs and scenarios |
| **PMM** | Content management, content analytics, no access to individual rep data |
| **RevOps** | Read-only analytics access; integration configuration |
| **Executive (CRO)** | Aggregated team and portfolio views; no individual rep drill-down without manager permission |

---

## Tenant Isolation

- All database queries include mandatory `WHERE tenant_id = ?` clause enforced at ORM layer
- Separate encryption keys per tenant (AWS KMS; key rotation every 90 days)
- No cross-tenant API calls permitted; enforced at API gateway layer
- Separate Elasticsearch indices per tenant for content search
- Separate vector database namespaces per tenant

---

## Sales Call Data Handling

Sales call data is among the most sensitive data the platform touches. Specific safeguards:

- Platform integrates read-only with call intelligence providers; does not store call audio
- Call transcripts are consumed as signals for skill scoring; transcripts are not stored in platform database
- Call transcript processing is done in-memory; only extracted skill signals are persisted
- Customer must explicitly enable call data integration; it is not on by default
- Call data processing agreement required; processing limited to skill signal extraction

---

## AI Data Usage Policy

- Customer data is never used to train shared models
- LLM API calls are made with customer data excluded from training (API agreements with providers)
- Platform's own fine-tuned models are trained on anonymized, aggregate pattern data only — never on identifiable rep or organization data
- Customers can request data isolation (no third-party LLM calls) — on-premises or dedicated deployment option (Phase 4)

---

## Audit Logs

Every platform action is logged in a tamper-evident audit log:

| Event Type | What Is Logged |
|-----------|---------------|
| User authentication | User ID, timestamp, IP, authentication method |
| Data access | Who accessed which rep's data, when |
| AI action | Agent ID, inputs (schema), outputs (schema), confidence, timestamp |
| Human override | User ID, what was overridden, original value, new value, justification |
| Admin configuration change | Who changed what, before and after values, timestamp |
| Integration sync | Source, records synced, errors |
| Data export | Who exported, what data set, timestamp |

Audit logs:
- Retained for minimum 2 years (configurable)
- Exportable for compliance review
- Immutable (append-only; no modification or deletion)
- Accessible to Admin role and to customer's designated compliance officers

---

## Compliance Certifications

**Target certifications:**
- **SOC 2 Type II** — required before enterprise deployment; targeted for Month 9
- **ISO 27001** — targeted for Month 18
- **GDPR Data Processing Agreement** — available at launch
- **CCPA Privacy Notice** — available at launch
- **HIPAA** — optional tier for healthcare customers (Phase 4)

---

## Security Controls

### Infrastructure
- All data encrypted at rest (AES-256) and in transit (TLS 1.3)
- VPC with private subnets for all services; no direct public internet access to databases
- WAF (Web Application Firewall) on all public endpoints
- DDoS protection via CDN layer
- Penetration testing annually by independent security firm

### Application
- OWASP Top 10 mitigation in all application code
- Dependency vulnerability scanning in CI/CD pipeline
- Secret management via HashiCorp Vault or AWS Secrets Manager
- Input validation and output encoding on all API endpoints
- Rate limiting on all public endpoints

### Access
- MFA required for all internal team access to production systems
- Principle of least privilege for all service accounts
- Zero-trust network access for internal engineering team
- Quarterly access review for all production systems

---

## Admin Controls

| Control | Description |
|---------|-------------|
| Data retention policy | Admin configures how long rep data, coaching notes, and roleplay transcripts are retained |
| AI autonomy levels | Admin configures maximum autonomy level permitted per agent for their tenant |
| Override policy | Admin can require justification for all manager overrides of AI recommendations |
| Integration scope | Admin controls exactly which CRM objects and call data are ingested |
| Content access policy | Admin controls which reps can access which content segments |
| Notification controls | Admin configures notification channels and frequency for their organization |
