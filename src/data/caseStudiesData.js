export const caseStudiesData = [
  {
    slug: "ai-automation-data-fetching",
    company: "Intelligent Data Extraction & Workflow Automation",
    type: "Automation Engineering",
    title: "Intelligent Data Extraction & Workflow Automation",
    result:
      "We engineered a robust automation pipeline that fetches, structures, and syncs data directly into the database, eliminating repetitive tasks and enabling real-time data availability.",
    overview:
      "The client relied heavily on manual website data extraction, which slowed operations and introduced inconsistencies. We transformed this into an automation-first workflow that is reliable, repeatable, and ready to scale.",
    challenge:
      "The existing process was highly manual and time-intensive, prone to human copy-paste errors, inconsistent in data structure, and slowed decision-making across teams that depended on timely and accurate data.",
    solution:
      "We designed and deployed a seamless automation workflow using n8n and Selenium. The system automatically navigates and extracts website data, processes and cleans raw data, converts it into structured JSON, syncs it directly into the database, and runs on a repeatable scalable flow.",
    impact: [
      "Significant reduction in manual effort and operational workload.",
      "Error-free, standardized data for downstream systems.",
      "Faster decision-making with real-time database updates.",
      "Scalable automation pipeline ready for future expansion.",
    ],
    stack: ["n8n", "Selenium", "JSON Parsing", "Database Integration"],
    visualSuggestions: [
      {
        section: "Hero Section Image",
        concept: "Automation Flow",
        points: [
          "Flow diagram: Website -> Bot -> JSON -> Database.",
          "Add glowing arrows or smooth flow lines.",
          "Dark background with neon blue/purple accents.",
        ],
      },
      {
        section: "Challenge Section Visual",
        concept: "Manual Chaos",
        points: [
          "Person copying data from screen to Excel.",
          "Messy UI with multiple tabs open.",
          "Red warning/error icons.",
        ],
      },
      {
        section: "Solution Section Visual",
        concept: "Smart Automation",
        points: [
          "Robot or automation pipeline illustration.",
          "Clean structured blocks: Extract -> Process -> Convert -> Store.",
          "Use minimal modern UI-style graphics.",
        ],
      },
      {
        section: "Impact Section Visual",
        concept: "Growth & Efficiency",
        points: [
          "Upward graphs.",
          "Speed icons.",
          "Before vs After comparison.",
        ],
      },
      {
        section: "Tech Stack Icons Section",
        concept: "Premium Icon Strip",
        points: [
          "Use n8n logo, Selenium logo, JSON icon, and Database icon.",
          "Keep style monochrome or minimal gradient for premium feel.",
        ],
      },
    ],
  },
  {
    slug: "agentic-financial-advisor",
    company: "Agentic Financial Advisor",
    type: "AI + Finance Advisory",
    title: "Built an agentic advisor that connects QuickBooks data to AI recommendations using n8n low-code/no-code workflows.",
    result:
      "Financial review and advisory preparation became faster and more consistent, with automated insights such as hygiene score and tax analysis delivered from live accounting data.",
    challenge:
      "Financial advisory workflows required manual review of business books, which made analysis slower and hard to scale across clients.",
    solution:
      "We created an agentic financial advisor orchestrated through n8n (low-code/no-code) that logs into user/business QuickBooks, fetches financial data, and uses Perplexity AI to process and generate recommendations.",
    impact: [
      "Automated extraction and processing of accounting data from QuickBooks.",
      "Generated actionable recommendations including books hygiene score and tax analysis.",
      "Reduced dependency on manual advisory effort and improved turnaround time.",
    ],
    stack: ["n8n (Low-Code/No-Code)", "QuickBooks", "Perplexity AI", "Data Processing Agents", "Recommendation Engine"],
  },
  {
    slug: "ai-call-bot-virtual-receptionist",
    company: "AI Call Bot Automation",
    type: "Voice Automation",
    title: "Automated outbound calling bot that replaces repetitive telecalling workflows.",
    result:
      "The bot automatically fetches lead data from sheets, places calls, captures call outcomes, and reduces dependency on manual telecalling for high-volume outreach and receptionist-style use cases.",
    overview:
      "We designed an AI-assisted call bot to automate repetitive calling operations where teams previously depended on manual telecallers for lead follow-up and reception workflows.",
    challenge:
      "The team was manually calling every contact from sheets, which created delays, inconsistent follow-up, and high staffing dependency for repetitive call tasks.",
    solution:
      "We built a call automation system that reads user data from sheets, initiates calls automatically, and marks outcomes such as converted, pending, no answer, or callback required for the next workflow.",
    impact: [
      "Reduced telecaller workload for repetitive outbound calls.",
      "Enabled scalable outreach without linear headcount growth.",
      "Standardized call outcome tracking for better lead operations.",
      "Supported virtual receptionist style use cases for routing and first-touch response.",
    ],
    stack: ["Sheet Data Fetch", "Call Bot Workflow", "Outcome Tracking", "Lead Automation"],
  },
  {
    slug: "grl-balaji-transporter-platform",
    company: "GRL Balaji Transport Platform",
    type: "Operations Platform",
    title: "Engineered a unified transport operations platform with end-to-end visibility across trips, fleets, workforce, expenses, and audits.",
    result:
      "The platform centralized logistics operations into one command layer, combining trip and vehicle tracking, staff and vendor workflows, expense controls, and user-level audit logs for stronger operational governance.",
    overview:
      "For GRL Balaji, we developed an end-to-end transporter platform focused on day-to-day execution visibility and accountability across logistics operations.",
    challenge:
      "Operations data was spread across workflows and teams, making it difficult to track trips, vehicle status, attendance, expenses, and user activity in a unified and auditable way.",
    solution:
      "We implemented a centralized platform that tracks vehicle details, trip flow, vendors, attendance, daily office expenses, reporting modules, and admin activity logs that capture user actions across modules.",
    impact: [
      "Unified trip, vehicle, staff, and vendor operations into one dashboard.",
      "Improved control with expense tracking and report-level visibility.",
      "Enabled auditability through activity log tracking for user actions.",
      "Increased operational clarity and decision speed for the management team.",
    ],
    stack: ["Operations Dashboard", "Trip Management", "Expense Tracker", "Admin Activity Logs"],
    screenshots: [
      "/case-studies/grl-balaji-sanitized-1.png",
      "/case-studies/grl-balaji-sanitized-2.png",
      "/case-studies/grl-balaji-sanitized-3.png",
      "/case-studies/grl-balaji-sanitized-4.png",
      "/case-studies/grl-balaji-sanitized-5.png",
      "/case-studies/grl-balaji-sanitized-6.png",
      "/case-studies/grl-balaji-sanitized-7.png",
    ],
  },
];
