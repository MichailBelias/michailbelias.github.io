const logotext = "MICHAEL";

const meta = {
  title: "Michael Belias",
  description:
    "Business Intelligence, Data Engineering & Analytics | Azure, Synapse, Power BI, D365 F&O | Web Apps (React, Python, R Shiny)",
};

const introdata = {
  title: "I’m Michael Belias",
  animated: {
    first: "I build data platforms (Azure, Synapse, SQL).",
    second: "I deliver BI products (Power BI, semantic models).",
    third: "I create internal web apps that automate workflows.",
  },
  description:
    "Business Analytics & Data Science professional focused on modern data warehousing, reporting modernization, and automation—especially around D365 F&O, Azure, and Power BI.",
  // Prefer a local asset under /public/assets for stability
  your_img_url: "/assets/profile.jpg",
};

const dataabout = {
  title: "About me",
  aboutme:
    "I work at Saracakis Group (Greece) on BI, data engineering, and analytics initiatives, modernizing data flows from D365 F&O into Azure-based platforms (SQL, Synapse, lakehouse patterns) and delivering insights through Power BI. I also build internal web applications that streamline reporting, dealer performance monitoring, and operational workflows.",
};

const worktimeline = [
  {
    jobtitle: "Business Analytics & Data Science / Data Engineering",
    where: "Saracakis Group (Greece)",
    date: "202X–Present",
  },
  {
    jobtitle: "Business Intelligence & Reporting",
    where: "PREVIOUS COMPANY / ROLE",
    date: "202X–202X",
  },
  {
    jobtitle: "Earlier roles",
    where: "PREVIOUS COMPANY",
    date: "201X–202X",
  },
];

const skills = [
  { name: "SQL (T-SQL, modeling, optimization)", value: 95 },
  { name: "Azure (Synapse, Storage, ADF, App Service)", value: 85 },
  { name: "Power BI (DAX, semantic models, governance)", value: 90 },
  { name: "Data Engineering (ETL/ELT, medallion, star schemas)", value: 90 },
  { name: "Python (Flask, automation, APIs)", value: 75 },
  { name: "R (Shiny, analytics workflows)", value: 70 },
  { name: "React / JavaScript", value: 65 },
];

const services = [
  {
    title: "Data Platform Modernization",
    description:
      "Design and migration of BI/DWH solutions (SSIS/SSAS/SQL Server) to Azure architectures (Synapse, lakehouse/medallion, serverless/dedicated patterns).",
  },
  {
    title: "Analytics & Power BI Delivery",
    description:
      "End-to-end reporting solutions: data models, DAX measures, governance, performance tuning, and stakeholder-ready dashboards.",
  },
  {
    title: "Workflow Automation & Internal Apps",
    description:
      "Lightweight web applications and automation pipelines (Python/Flask, React, R Shiny) connected to Azure Storage and databases to eliminate manual reporting work.",
  },
];

const dataportfolio = [
  {
    img: "/assets/portfolio/dealer-performance.jpg",
    description:
      "Dealer Performance Web App — KPI dashboards, targets vs actuals, and workflow automation (Azure + React/Charting).",
    link: "https://YOUR-LINK-HERE",
  },
  {
    img: "/assets/portfolio/d365-synapse.jpg",
    description:
      "D365 F&O to Azure Synapse — curated tables, medallion layers, and analytics-ready star schemas.",
    link: "https://YOUR-LINK-HERE",
  },
  {
    img: "/assets/portfolio/powerbi-model.jpg",
    description:
      "Power BI semantic model — governance-ready dataset, performance optimizations, and reusable measures.",
    link: "https://YOUR-LINK-HERE",
  },
  {
    img: "/assets/portfolio/shiny.jpg",
    description:
      "R Shiny dashboards — market registrations, dealer insights, and interactive analytics experiences.",
    link: "https://YOUR-LINK-HERE",
  },
];

const contactConfig = {
  YOUR_EMAIL: "michaelbelias@gmail.com",
  YOUR_FONE: "+306970222633",
  description:
    "If you’d like to discuss BI modernization, Azure data engineering, Power BI delivery, or internal analytics applications, feel free to reach out.",
  // EmailJS (optional). Leave empty if you are not using it.
  YOUR_SERVICE_ID: "",
  YOUR_TEMPLATE_ID: "",
  YOUR_USER_ID: "",
};

const socialprofils = {
  github: "https://github.com/michailbelias",
  linkedin: "https://www.linkedin.com/in/mikebelias/",
  // Keep only what you use; empty strings are fine if the UI hides them
  twitter: "",
  facebook: "",
};

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
