export interface TimelineItem {
    id: string;
    stage: string;
    year: string;
    description: string;
    iconName: string;
    details: string[];
  }
  
  export interface SkillItem {
    name: string;
    category: "Languages" | "Databases" | "Tools" | "Methodologies";
    level: number; // 0 to 100
    projectsCount: number;
  }
  
  export interface ProfileData {
    name: string;
    alternateName: string;
    title: string;
    headline: string;
    bio: string;
    avatarUrl: string;
    resumeUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    email: string;
    stats: {
      projectsCount: string;
      rowsAnalyzed: string;
      dashboardsCount: string;
      modelAccuracy: string;
    };
    timeline: TimelineItem[];
    skills: SkillItem[];
  }
  
  export const profileData: ProfileData = {
    name: "Sandra Nzekwe",
    alternateName: "Jude Okafor",
    title: "Data Analyst | SQL | Python | Power BI | Business Intelligence",
    headline: "Transforming Raw Data Into Actionable Business Insights",
    bio: "Highly analytical and detail-oriented Data Analyst with expertise in database querying, automated pipeline creation, and interactive dashboard engineering. Proven track record of turning complex unstructured datasets into interactive visual insights that drive executive business choices.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop", // Professional female avatar
    resumeUrl: "#", // Placeholder for resume download
    githubUrl: "https://github.com/sandranzekwe",
    linkedinUrl: "https://linkedin.com/in/sandranzekwe",
    email: "sandra.nzekwe@example.com",
    stats: {
      projectsCount: "20+",
      rowsAnalyzed: "500K+",
      dashboardsCount: "10+",
      modelAccuracy: "90%",
    },
    timeline: [
      {
        id: "civil-eng",
        stage: "Civil Engineering",
        year: "2020 - 2021",
        description: "Graduated and worked as a structural coordinator, managing site materials and budgets.",
        iconName: "HardHat",
        details: [
          "Coordinated structural blueprints and logistics schedules.",
          "Discovered a strong interest in analytical problem-solving while checking materials margins.",
          "Began automating manual spreadsheets to optimize subcontractor timelines."
        ]
      },
      {
        id: "excel-analysis",
        stage: "Excel Analysis",
        year: "2021 - 2022",
        description: "Transitioned to advanced data manipulation, modeling, and automated macros.",
        iconName: "Table",
        details: [
          "Built robust financial planning and budgeting templates.",
          "Mastered advanced functions (INDEX/MATCH, XLOOKUP, pivot tables).",
          "Developed custom VBA scripts that saved 10+ hours of manual reporting weekly."
        ]
      },
      {
        id: "sql",
        stage: "SQL",
        year: "2022 - 2023",
        description: "Delved into relational databases, structured queries, and data warehousing.",
        iconName: "Database",
        details: [
          "Learned PostgreSQL, MySQL, and Microsoft SQL Server.",
          "Optimized query performance using proper indexing, subqueries, and window functions.",
          "Designed schemas for small-to-medium enterprise sales databases."
        ]
      },
      {
        id: "python",
        stage: "Python",
        year: "2023 - 2024",
        description: "Mastered python programming, web scraping, and data transformation pipelines.",
        iconName: "Code2",
        details: [
          "Automated ELT/ETL routines with pandas, numpy, and BeautifulSoup.",
          "Created custom scripts to clean unstructured CSV and JSON server logs.",
          "Calculated complex metrics and conducted hypothesis tests using scipy and statsmodels."
        ]
      },
      {
        id: "power-bi",
        stage: "Power BI",
        year: "2024 - 2025",
        description: "Designed executive-level interactive BI dashboards and semantic data models.",
        iconName: "BarChart3",
        details: [
          "Authored advanced DAX scripts (Data Analysis Expressions) for time-intelligence metrics.",
          "Connected disparate sources (SQL Server, web APIs, SharePoint) into integrated schemas.",
          "Created beautiful, mobile-optimized visual interfaces for regional sales teams."
        ]
      },
      {
        id: "data-analytics",
        stage: "Data Analytics",
        year: "2025 - Present",
        description: "Delivering business-facing pipelines, machine learning predictions, and analytics insights.",
        iconName: "LineChart",
        details: [
          "Building end-to-end analytics stacks for high-growth tech startups.",
          "Applying scikit-learn models (regression, classification, clustering) for customer segmentation.",
          "Mentoring junior analysts and advising leadership on metrics definitions and KPI tracking."
        ]
      }
    ],
    skills: [
      { name: "SQL", category: "Languages", level: 95, projectsCount: 15 },
      { name: "Python", category: "Languages", level: 90, projectsCount: 12 },
      { name: "Power BI", category: "Tools", level: 92, projectsCount: 10 },
      { name: "Excel", category: "Tools", level: 98, projectsCount: 18 },
      { name: "PostgreSQL", category: "Databases", level: 90, projectsCount: 9 },
      { name: "Tableau", category: "Tools", level: 80, projectsCount: 4 },
      { name: "Statistics", category: "Methodologies", level: 85, projectsCount: 8 },
      { name: "Machine Learning", category: "Methodologies", level: 78, projectsCount: 6 }
    ]
  };
  