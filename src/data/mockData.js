export const initialEmails = [
  {
    id: "inq-9081",
    timestamp: "2026-07-23T09:30:00Z",
    senderName: "Sarah Jenkins",
    senderEmail: "sarah.j.2026@gmail.com",
    originalSubject: "Questions regarding Fall 2026 CS Transfer Requirements & Portfolio Submission",
    emailBody: `Dear Admissions Team,\n\nI am currently a sophomore at Metro Community College and planning to apply for transfer into your Bachelor of Computer Science program for Fall 2026. \n\nCould you please clarify if organic chemistry is mandatory for transfer credits? Also, does the Computer Science department require a GitHub portfolio or code samples during the application process? My current GPA is 3.82.\n\nThank you for your guidance!\n\nBest regards,\nSarah Jenkins`,
    category: "Admissions",
    confidence: 0.98,
    summary: {
      mainQuestion: "Inquiring about Fall 2026 CS transfer requirements regarding organic chemistry credit and optional GitHub portfolio submission.",
      keyDetails: "Sophomore applicant, GPA: 3.82, transfer from Metro Community College.",
      urgencyLevel: "Normal"
    },
    routingDestination: "admissions@college.edu",
    forwardedSubject: "[ADMISSIONS] Questions regarding Fall 2026 CS Transfer Requirements",
    forwardStatus: "success",
    processingTimeMs: 1120,
    feedback: "correct"
  },
  {
    id: "inq-9082",
    timestamp: "2026-07-23T09:12:00Z",
    senderName: "Marcus Vance",
    senderEmail: "marcus.vance@outlook.com",
    originalSubject: "RSVP & Parking Details for Open House Campus Tour on Saturday",
    emailBody: `Hello Outreach Team,\n\nI registered for the upcoming Engineering Open House and Campus Tour this coming Saturday, July 26th. \n\nCan you confirm where prospective student parking is located? Will there be visitor passes issued at the gate, or should I print something beforehand? We will be arriving with 3 family members.\n\nThanks,\nMarcus Vance`,
    category: "Events",
    confidence: 0.96,
    summary: {
      mainQuestion: "Requesting parking instructions and visitor pass requirements for Saturday's Engineering Open House.",
      keyDetails: "Attending July 26th tour with 3 family members; pre-registered.",
      urgencyLevel: "High"
    },
    routingDestination: "events@college.edu",
    forwardedSubject: "[EVENTS] RSVP & Parking Details for Open House Campus Tour",
    forwardStatus: "success",
    processingTimeMs: 980,
    feedback: "correct"
  },
  {
    id: "inq-9083",
    timestamp: "2026-07-23T08:45:00Z",
    senderName: "Elena Rostova",
    senderEmail: "elena.rostova@yahoo.com",
    originalSubject: "Inquiry about Student Health Insurance Waiver Deadline",
    emailBody: `To Whom It May Concern,\n\nMy daughter is an incoming freshman. She already has comprehensive health insurance under my employer plan. How do we submit the insurance waiver form to avoid being billed for the university health plan, and what is the final deadline for the fall semester?\n\nSincerely,\nElena Rostova`,
    category: "General",
    confidence: 0.94,
    summary: {
      mainQuestion: "Asking how to submit student health insurance waiver form and deadline to avoid university plan fees.",
      keyDetails: "Parent of incoming freshman student covered under private insurance.",
      urgencyLevel: "Normal"
    },
    routingDestination: "general@college.edu",
    forwardedSubject: "[GENERAL] Inquiry about Student Health Insurance Waiver Deadline",
    forwardStatus: "success",
    processingTimeMs: 1050,
    feedback: null
  },
  {
    id: "inq-9084",
    timestamp: "2026-07-23T07:50:00Z",
    senderName: "David Kim",
    senderEmail: "dkim99@gmail.com",
    originalSubject: "Application Fee Waiver Request & Early Decision Eligibility",
    emailBody: `Dear Admissions Committee,\n\nI am writing to inquire if your university offers application fee waivers for students participating in the QuestBridge program. I am preparing my Early Decision submission for Data Science.\n\nPlease let me know what verification documents are needed.\n\nRespectfully,\nDavid Kim`,
    category: "Admissions",
    confidence: 0.99,
    summary: {
      mainQuestion: "Requesting QuestBridge application fee waiver guidelines for Early Decision Data Science application.",
      keyDetails: "QuestBridge participant, Early Decision applicant for Data Science.",
      urgencyLevel: "Normal"
    },
    routingDestination: "admissions@college.edu",
    forwardedSubject: "[ADMISSIONS] Application Fee Waiver Request & Early Decision Eligibility",
    forwardStatus: "success",
    processingTimeMs: 1210,
    feedback: "correct"
  },
  {
    id: "inq-9085",
    timestamp: "2026-07-23T06:30:00Z",
    senderName: "Prof. Arthur Pendelton",
    senderEmail: "apendelton@mit.edu",
    originalSubject: "Guest Lecture Keynote Confirmation for Robotics Symposium",
    emailBody: `Hi Events Coordinator,\n\nFollowing up on our call regarding the Annual Student Robotics Symposium next month. I have finalized my keynote abstract on 'Autonomous Perception in Unstructured Environments'. \n\nPlease send over the AV setup checklist and lodging recommendations near campus.\n\nBest,\nArthur`,
    category: "Events",
    confidence: 0.97,
    summary: {
      mainQuestion: "Submitting keynote abstract for Robotics Symposium and requesting AV checklist and local hotel options.",
      keyDetails: "Visiting keynote speaker from MIT; presentation on Autonomous Perception.",
      urgencyLevel: "Normal"
    },
    routingDestination: "events@college.edu",
    forwardedSubject: "[EVENTS] Guest Lecture Keynote Confirmation for Robotics Symposium",
    forwardStatus: "success",
    processingTimeMs: 890,
    feedback: "correct"
  }
];

export const samplePresetEmails = [
  {
    title: "CS Transfer Credit Inquiry",
    senderName: "Julian Hayes",
    senderEmail: "jhayes.student@gmail.com",
    subject: "Prerequisites evaluation for Artificial Intelligence Major",
    body: "Hi Admissions,\nI am applying for Spring semester admission to your AI & Machine Learning degree program. Can you tell me if Linear Algebra (MATH 240) taken at San Jose State fulfills your major prerequisite requirement?",
    expectedCategory: "Admissions"
  },
  {
    title: "Campus Tour Accessibility Request",
    senderName: "Maria Garcia",
    senderEmail: "garcia.family@hotmail.com",
    subject: "Wheelchair accessibility options during Friday campus tour",
    body: "Hello Event Coordinators,\nOur family will be attending the campus walking tour this Friday at 10 AM. My grandfather uses a motorized wheelchair. Will golf cart transportation or wheelchair-accessible routes be provided along the quad?",
    expectedCategory: "Events"
  },
  {
    title: "Dorm Roommate Policy Question",
    senderName: "Liam O'Connor",
    senderEmail: "liam.oconnor@yahoo.com",
    subject: "Freshman Housing roommate selection form deadline",
    body: "Dear Student Housing Administration,\nI submitted my housing deposit last week. Where do I access the mutual roommate request form, and what is the deadline to request a specific dorm roommate for North Hall?",
    expectedCategory: "General"
  }
];

export const initialConfig = {
  checkFrequency: "5 minutes",
  admissionsEmail: "admissions@college.edu",
  eventsEmail: "events@college.edu",
  generalEmail: "general@college.edu",
  adminAlertEmail: "workflow-admin@college.edu",
  subjectFormat: "[CATEGORY] Original Subject",
  aiModel: "n8n Built-in AI (GPT-4o-mini)",
  autoForwardEnabled: true,
  logRetentionDays: 90
};

export const n8nWorkflowExportJSON = {
  name: "College Inquiry Triage Auto-Classification Workflow",
  nodes: [
    {
      parameters: {
        pollTimes: { item: [{ mode: "everyMinute", value: 5 }] },
        simple: false,
        filters: { readStatus: "unread" }
      },
      name: "Gmail Trigger",
      type: "n8n-nodes-base.gmailTrigger",
      typeVersion: 1,
      position: [250, 300]
    },
    {
      parameters: {
        keepOnlySet: false,
        values: {
          string: [
            { name: "senderEmail", value: "={{ $json.from.value[0].address }}" },
            { name: "senderName", value: "={{ $json.from.value[0].name }}" },
            { name: "subject", value: "={{ $json.subject }}" },
            { name: "bodyText", value: "={{ $json.text }}" }
          ]
        }
      },
      name: "Extract Email Payload",
      type: "n8n-nodes-base.set",
      typeVersion: 1,
      position: [480, 300]
    },
    {
      parameters: {
        model: "gpt-4o-mini",
        prompt: "Analyze the incoming college inquiry email and classify its intent into EXACTLY one of: Admissions, Events, General. Also generate a concise 1-sentence summary, key details, and urgency level.\n\nEmail Body:\n{{ $json.bodyText }}",
        jsonSchema: {
          type: "object",
          properties: {
            category: { type: "string", enum: ["Admissions", "Events", "General"] },
            confidence: { type: "number" },
            mainQuestion: { type: "string" },
            keyDetails: { type: "string" },
            urgencyLevel: { type: "string" }
          }
        }
      },
      name: "AI Intent Classifier & Summarizer",
      type: "n8n-nodes-base.openAi",
      typeVersion: 1,
      position: [710, 300]
    },
    {
      parameters: {
        dataType: "string",
        value1: "={{ $json.category }}",
        rules: {
          rules: [
            { value2: "Admissions", output: 0 },
            { value2: "Events", output: 1 },
            { value2: "General", output: 2 }
          ]
        }
      },
      name: "Department Switch Router",
      type: "n8n-nodes-base.switch",
      typeVersion: 1,
      position: [950, 300]
    },
    {
      parameters: {
        sendTo: "admissions@college.edu",
        subject: "=[ADMISSIONS] {{ $('Extract Email Payload').item.json.subject }}",
        message: "=AI SUMMARY:\nCategory: Admissions\nQuestion: {{ $json.mainQuestion }}\nDetails: {{ $json.keyDetails }}\nUrgency: {{ $json.urgencyLevel }}\n\n-------------------------\nORIGINAL EMAIL:\n{{ $('Extract Email Payload').item.json.bodyText }}"
      },
      name: "Forward to Admissions Dept",
      type: "n8n-nodes-base.gmail",
      typeVersion: 1,
      position: [1200, 180]
    },
    {
      parameters: {
        sendTo: "events@college.edu",
        subject: "=[EVENTS] {{ $('Extract Email Payload').item.json.subject }}",
        message: "=AI SUMMARY:\nCategory: Events\nQuestion: {{ $json.mainQuestion }}\nDetails: {{ $json.keyDetails }}\nUrgency: {{ $json.urgencyLevel }}\n\n-------------------------\nORIGINAL EMAIL:\n{{ $('Extract Email Payload').item.json.bodyText }}"
      },
      name: "Forward to Events Dept",
      type: "n8n-nodes-base.gmail",
      typeVersion: 1,
      position: [1200, 300]
    },
    {
      parameters: {
        sendTo: "general@college.edu",
        subject: "=[GENERAL] {{ $('Extract Email Payload').item.json.subject }}",
        message: "=AI SUMMARY:\nCategory: General\nQuestion: {{ $json.mainQuestion }}\nDetails: {{ $json.keyDetails }}\nUrgency: {{ $json.urgencyLevel }}\n\n-------------------------\nORIGINAL EMAIL:\n{{ $('Extract Email Payload').item.json.bodyText }}"
      },
      name: "Forward to General Dept",
      type: "n8n-nodes-base.gmail",
      typeVersion: 1,
      position: [1200, 420]
    },
    {
      parameters: {
        operation: "append",
        table: "triage_audit_logs"
      },
      name: "Save Log to Database",
      type: "n8n-nodes-base.postgres",
      typeVersion: 1,
      position: [1450, 300]
    }
  ],
  connections: {
    "Gmail Trigger": { main: [[{ node: "Extract Email Payload", type: "main", index: 0 }]] },
    "Extract Email Payload": { main: [[{ node: "AI Intent Classifier & Summarizer", type: "main", index: 0 }]] },
    "AI Intent Classifier & Summarizer": { main: [[{ node: "Department Switch Router", type: "main", index: 0 }]] },
    "Department Switch Router": {
      main: [
        [{ node: "Forward to Admissions Dept", type: "main", index: 0 }],
        [{ node: "Forward to Events Dept", type: "main", index: 0 }],
        [{ node: "Forward to General Dept", type: "main", index: 0 }]
      ]
    },
    "Forward to Admissions Dept": { main: [[{ node: "Save Log to Database", type: "main", index: 0 }]] },
    "Forward to Events Dept": { main: [[{ node: "Save Log to Database", type: "main", index: 0 }]] },
    "Forward to General Dept": { main: [[{ node: "Save Log to Database", type: "main", index: 0 }]] }
  }
};
