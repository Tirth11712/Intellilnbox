# 🎓 IntelliInbox.n8n — AI College Inquiry Auto-Classification & Routing Workflow

> **IntelliInbox.n8n** is an AI-powered SaaS workflow that automatically monitors incoming student emails, classifies their intent into **Admissions**, **Events**, or **General**, generates structured AI summaries, and routes them to the appropriate department in real-time.

---

## 📸 Interface Preview & Design Language

Designed with inspiration from modern productivity dashboards (**Jobgio / IntelliInbox Admin Dashboard**):
- **Theme**: Ultra-clean minimal monochrome design with pitch black primary accents (`#0f0f10`) and crisp white card containers (`#ffffff`).
- **Typography**: Google Fonts `Plus Jakarta Sans` display paired with `JetBrains Mono` for payload schemas.
- **Color-Coded Intent Badges**:
  - 🟢 **Admissions**: Emerald (`#137333` / `#e6f4ea`) — Transcripts, degree applications, transfer prerequisites.
  - 🟣 **Events**: Violet (`#6b21a8` / `#f3e8ff`) — Campus tours, open house RSVPs, symposiums.
  - 🔵 **General**: Royal Blue (`#0369a1` / `#e0f2fe`) — Housing, insurance waivers, tuition billing.

---

## 🎯 Executive Overview & Problem Statement

### The Challenge
College admissions and outreach departments receive hundreds of unstructured emails daily into central inboxes (`info@college.edu` or `admissions@college.edu`). Manual triage leads to:
- Delayed response times for urgent student inquiries.
- Manual email sorting overhead for administrative staff.
- Lost context when emails are forwarded across departments without summaries.

### The Solution
This workflow automates the end-to-end IntelliInbox process using **n8n orchestration** and **LLM Intent Detection**:
1. **Captures** unread emails from Gmail automatically.
2. **Classifies** intent accurately into Admissions, Events, or General.
3. **Generates** a structured AI summary header (Main Question, Key Context, Urgency Level).
4. **Appends** the summary to the top of the email and modifies the subject line (e.g., `[ADMISSIONS] Subject`).
5. **Forwards** the email to the specific department inbox (`admissions@college.edu`).
6. **Logs** execution trace metrics (confidence, latency, routing status) to an audit database.

---

## 🏗️ System Architecture & Data Flow

```
                     ┌────────────────────────────────┐
                     │     Gmail Central Inbox        │
                     └───────────────┬────────────────┘
                                     │
                         (Polls unread every 5 min)
                                     ▼
                     ┌────────────────────────────────┐
                     │       n8n Gmail Trigger        │
                     └───────────────┬────────────────┘
                                     │
                                     ▼
                     ┌────────────────────────────────┐
                     │    Extract Email Payload       │
                     │  (Sender, Subject, Body Text)  │
                     └───────────────┬────────────────┘
                                     │
                                     ▼
                     ┌────────────────────────────────┐
                     │  AI Intent & Summary Engine    │
                     │ (Gemini / Groq / Ollama/ GPT)  │
                     └───────────────┬────────────────┘
                                     │
                         (JSON: Intent & Summary)
                                     ▼
                     ┌────────────────────────────────┐
                     │    Department Switch Router    │
                     └───────┬───────────┬────────────┘
                             │           │
            ┌────────────────┘           └────────────────┐
            ▼                                             ▼
┌───────────────────────┐   ┌───────────────────────┐   ┌───────────────────────┐
│ Forward to Admissions │   │   Forward to Events   │   │  Forward to General   │
│ (admissions@dept.edu) │   │   (events@dept.edu)   │   │  (general@dept.edu)   │
└───────────┬───────────┘   └───────────┬───────────┘   └───────────┬───────────┘
            │                           │                           │
            └───────────────────────────┼───────────────────────────┘
                                        │
                                        ▼
                        ┌───────────────────────────────┐
                        │   PostgreSQL Audit Logger     │
                        │ (Timestamp, Confidence, Latency)
                        └───────────────────────────────┘
```

---

## 🤖 Supported AI Providers (100% Free Options Included)

You do **NOT** need a paid OpenAI API key. The workflow supports multiple LLM backends:

| AI Provider | Cost | Setup Requirement | Best For |
| :--- | :--- | :--- | :--- |
| **Google Gemini 2.0 Flash** | 🎁 **100% Free** | Free API key at [aistudio.google.com](https://aistudio.google.com) | High volume, fast response (1,500 free requests/day) |
| **Groq Cloud (Llama-3.3-70B)** | ⚡ **100% Free** | Free API key at [console.groq.com](https://console.groq.com) | Ultra-fast inference with open-source models |
| **Ollama Local LLM** | 🦙 **100% Free & Local** | Install Ollama locally (`ollama run llama3`) | 0 API keys required, 100% FERPA privacy compliant |
| **OpenAI (GPT-4o-mini)** | 💳 Paid | OpenAI API Key | Standard commercial deployment |

---

## 🛠️ Tech Stack & Structure

### Dashboard Web App (Frontend)
- **Framework**: Vite + React
- **Icons**: Lucide React
- **Animations**: GSAP + Canvas Confetti
- **Styles**: Custom CSS matching minimal monochrome design system

### Workflow Automation (Backend)
- **Engine**: n8n (Cloud or Self-Hosted)
- **File**: `triage_college_inquiry_workflow.json` (Exportable via Dashboard)

---

## 📦 Directory Overview

```
n8n-hackthon/
├── index.html                    # Entry HTML with Plus Jakarta Sans & JetBrains Mono
├── package.json                  # Dependencies (lucide-react, gsap, canvas-confetti, vite)
├── README.md                     # Elaborate documentation & architecture guide
├── src/
│   ├── main.jsx                  # React entrypoint
│   ├── index.css                 # Custom minimal design system CSS
│   ├── App.jsx                   # Main layout container & tab routing
│   ├── components/
│   │   ├── Sidebar.jsx           # Vertical navigation panel with IntelliInbox branding
│   │   ├── Header.jsx            # Top bar with search, alerts dropdown & simulation trigger
│   │   ├── DashboardView.jsx     # Executive stats, statistics chart & manage inquiries table
│   │   ├── TriageFeedView.jsx    # Real-time email queue, AI summary cards & feedback
│   │   ├── N8nVisualizerView.jsx # Visual 6-step node canvas & payload inspector
│   │   ├── AuditLogsView.jsx     # Audit logs table & CSV exporter
│   │   ├── ConfigView.jsx        # Admin settings & free AI model selector
│   │   ├── ManualSetupGuideView.jsx # Setup checklist & n8n Active switch guide
│   │   ├── LoginModal.jsx        # Admin authentication sign in screen
│   │   └── EmailSimulationModal.jsx # Real-time simulation modal
│   └── data/
│       └── mockData.js           # Sample dataset, preset templates & n8n JSON schema
```

---

## ⚡ Quickstart Guide

### 1. Launch the IntelliInbox Web App Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open your browser at `http://localhost:5173/`.

---

### 2. Import Workflow into n8n

1. In the Web App, navigate to the **n8n Visualizer** or **Setup Guide** tab and click **"Download n8n Workflow JSON"** (or export `triage_college_inquiry_workflow.json`).
2. Open your **n8n Web Editor**.
3. Click **Workflows > Import from File** and select the downloaded `.json` file.

---

### 3. Connect Credentials in n8n

1. **Gmail OAuth2**: Under **Credentials**, connect your college inquiry Gmail account (`inquiry@college.edu`).
2. **AI Provider Key**:
   - *For Google Gemini*: Get a free key at [aistudio.google.com](https://aistudio.google.com) and add to **Google Gemini API** credential.
   - *For Groq*: Get a free key at [console.groq.com](https://console.groq.com) and add to **Groq API** credential.
   - *For Ollama*: Run `ollama run llama3` on your computer (no API key needed).

---

### 4. Activate the Workflow

In the top-right corner of the n8n workflow canvas editor:
- Click the toggle switch labeled **`Inactive`** to flip it to **`Active`** (green indicator).

```
+-----------------------------------------------------------------------------------------+
|  n8n  /  IntelliInbox College Workflow              Test workflow   Save   [ Active  🟢] |
+-----------------------------------------------------------------------------------------+
```

Now, every new email arriving in your inbox will automatically be classified, summarized, and forwarded to the designated department inbox!

---

## 📄 License
Licensed under the [MIT License](LICENSE).
