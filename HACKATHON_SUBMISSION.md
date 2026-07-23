# 🎓 Hackathon Submission Document
## Project Name: IntelliInbox.n8n — AI College Inquiry Auto-Classification & Routing SaaS

---

### 1. Problem Statement (128 Words)

College admissions, student affairs, and outreach departments receive hundreds of unstructured student emails daily into shared central inboxes (e.g., `admissions@college.edu`). Administrative staff manually read, categorize, and forward these emails to various departments—such as Transfer Evaluation, Housing, Health Insurance, or Event Coordinators. 

This manual triage creates severe operational bottlenecks: urgent student inquiries (e.g., upcoming campus tour RSVPs or application deadline waivers) face multi-day delays, while staff waste valuable hours on routine sorting. Furthermore, when raw emails are forwarded without context, department heads lack high-level visibility into the core student request. 

**IntelliInbox** solves this by leveraging n8n orchestration and free LLM engines to automatically ingest, classify, summarize, and route student inquiries in real time, reducing response latency from days to seconds while eliminating administrative overhead.

---

### 2. Workflow Diagram

```
                     ┌────────────────────────────────┐
                     │     Gmail Central Inbox        │
                     └───────────────┬────────────────┘
                                     │
                          (Polls unread every 5 min)
                                     ▼
                     ┌────────────────────────────────┐
                     │       1. Gmail Trigger         │
                     └───────────────┬────────────────┘
                                     │
                                     ▼
                     ┌────────────────────────────────┐
                     │    2. Extract Email Payload    │
                     │  (Sender, Subject, Body Text)  │
                     └───────────────┬────────────────┘
                                     │
                                     ▼
                     ┌────────────────────────────────┐
                     │  3. AI Intent & Summary Engine │
                     │  (Gemini / Groq / Ollama / GPT)│
                     └───────────────┬────────────────┘
                                     │
                          (JSON: Intent & Summary)
                                     ▼
                     ┌────────────────────────────────┐
                     │   4. Department Switch Router  │
                     └───────┬───────────┬────────────┘
                             │           │
            ┌────────────────┘           └────────────────┐
            ▼                                             ▼
┌───────────────────────┐   ┌───────────────────────┐   ┌───────────────────────┐
│5a. Forward Admissions │   │ 5b. Forward Events    │   │ 5c. Forward General   │
│ (admissions@dept.edu) │   │   (events@dept.edu)   │   │  (general@dept.edu)   │
└───────────┬───────────┘   └───────────┬───────────┘   └───────────┬───────────┘
            │                           │                           │
            └───────────────────────────┼───────────────────────────┘
                                        │
                                        ▼
                        ┌───────────────────────────────┐
                        │   6. PostgreSQL Audit Logger  │
                        │ (Timestamp, Confidence, Latency)
                        └───────────────────────────────┘
```

---

### 3. Node-by-Node Explanation

1. **Node 1 — Gmail Trigger (`n8n-nodes-base.gmailTrigger`)**:
   - *Function*: Polls the university inbox every 5 minutes for unread student emails.
   - *Why Needed*: Serves as the event-driven entry point that initiates the automation pipeline whenever a new email arrives.

2. **Node 2 — Extract Email Payload (`n8n-nodes-base.set`)**:
   - *Function*: Extracts clean text from raw MIME headers, student sender name (`from`), email address, subject line, and body text.
   - *Why Needed*: Sanitizes and structures raw email data into standard JSON parameters ready for AI prompt ingestion.

3. **Node 3 — AI Intent & Summary Classifier (`n8n-nodes-base.openAi` / `googleGemini` / `groq`)**:
   - *Function*: Analyzes email text using zero-shot LLM prompts to classify intent into `Admissions`, `Events`, or `General`, assigns a confidence score, and generates a structured summary header with urgency level.
   - *Why Needed*: Automates the cognitive decision-making step that previously required human manual reading and categorization.

4. **Node 4 — Department Switch Router (`n8n-nodes-base.switch`)**:
   - *Function*: Evaluates the `category` property output by the AI engine and routes execution to Port 0 (Admissions), Port 1 (Events), or Port 2 (General).
   - *Why Needed*: Ensures strict control flow isolation so each department receives only relevant inquiries.

5. **Node 5 — Department Email Forwarders (`n8n-nodes-base.gmail`)**:
   - *Function*: Appends the AI-generated summary header to the top of the original email body, tags the subject line (e.g., `[ADMISSIONS] Transfer Credit Evaluation`), and forwards it to the targeted inbox.
   - *Why Needed*: Delivers the structured inquiry to department staff with immediate context and actionable summary bullet points.

6. **Node 6 — Audit Trail Logger (`n8n-nodes-base.postgres`)**:
   - *Function*: Appends execution metrics (timestamp, sender, category, confidence score, processing latency in ms) to a PostgreSQL table.
   - *Why Needed*: Provides complete auditability, system traceability, and performance tracking for compliance and continuous AI training.

---

### 4. AI Component

The AI component sits at **Node 3 (AI Intent & Summary Classifier)**. 

When a student email is received, the node injects the raw email text into a structured JSON prompt template:

- **AI Decisions Made**:
  1. **Intent Classification**: Evaluates multi-topic emails to categorize the primary intent into **Admissions** (transcripts, GPA, transfer credits), **Events** (tours, RSVPs, symposiums), or **General** (insurance waivers, housing, billing).
  2. **Summarization**: Extracts the student’s **Primary Question** and **Key Context Details** (e.g., transfer institution, course codes, dates) into concise bullet points.
  3. **Urgency Detection**: Detects time-sensitive keywords (e.g., *"tour tomorrow"*, *"deadline today"*) to flag the inquiry as `High` vs `Normal` urgency.
  4. **Confidence Assessment**: Calculates a numerical confidence score (`0.0 - 1.0`). Inquiries below `0.85` are flagged for human review.

- **Supported LLM Engines**: Supports Google Gemini 2.0 Flash (Free), Groq Llama 3.3 70B (Free), Ollama (Local 100% Free & Privacy Compliant), and OpenAI.

---

### 5. Sample Output

#### Realistic Input Email:
- **From**: Sarah Jenkins (`sarah.j.2026@gmail.com`)
- **Subject**: Questions regarding Fall 2026 CS Transfer Requirements & Portfolio Submission
- **Email Body**:
  > *"Dear Admissions Team,*
  > 
  > *I am applying for Spring semester transfer admission to your AI & Machine Learning computer science degree program. Can you tell me if Linear Algebra (MATH 240) taken at San Jose State fulfills your major prerequisite requirement? Also, is a GitHub portfolio submission required for transfer applicants? My current GPA is 3.82.*
  > 
  > *Thank you,*
  > *Sarah Jenkins"*

---

#### Exact Workflow Output Produced:

1. **AI Classification Output (JSON Payload)**:
   ```json
   {
     "category": "Admissions",
     "confidence": 0.98,
     "summary": {
       "mainQuestion": "Inquiring if Linear Algebra (MATH 240) fulfills CS major prerequisites and if GitHub portfolio is required.",
       "keyDetails": "Transfer applicant from San Jose State University, GPA: 3.82, target term: Spring 2026.",
       "urgencyLevel": "Normal"
     },
     "routingDestination": "admissions@college.edu"
   }
   ```

2. **Routed Email Forwarded to `admissions@college.edu`**:
   - **Forwarded Subject**: `[ADMISSIONS] Questions regarding Fall 2026 CS Transfer Requirements & Portfolio Submission`
   - **Prepend AI Header (Top of Body)**:
     ```
     ============================================================
     🤖 INTELLIINBOX AI TRIAGE SUMMARY HEADER
     ============================================================
     • INTENT CATEGORY: ADMISSIONS (Confidence: 98%)
     • URGENCY LEVEL: Normal
     • SENDER: Sarah Jenkins (sarah.j.2026@gmail.com)
     ------------------------------------------------------------
     • PRIMARY QUESTION: Inquiring if Linear Algebra (MATH 240) fulfills CS major prerequisites and if GitHub portfolio is required.
     • KEY CONTEXT: Transfer applicant from San Jose State University, GPA: 3.82, target term: Spring 2026.
     • ROUTING DESTINATION: admissions@college.edu
     ============================================================

     --- ORIGINAL STUDENT EMAIL CONTENT ---
     Dear Admissions Team,
     I am applying for Spring semester transfer admission...
     ```

3. **Audit Log Entry (PostgreSQL)**:
   - `LogID`: `log_9081` | `Status`: `SUCCESS` | `Latency`: `1120 ms` | `Timestamp`: `2026-07-23T11:40:00Z`
