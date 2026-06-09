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
    alternateName: "",
    title: "Data Analyst | SQL | Python | Excel |Tableau | veterinary Health professional",
    headline: "Transforming Raw Data Into Actionable Business Insights",
    bio: "Highly analytical and detail-oriented Data Analyst with expertise in using AI o solve world healthcare and public health challenges accross Africa. Combines a research oriented mindset with analytical thinking to transform complex  data into meaningful insights that support innovation, efficiency and impactful solutions.",
    avatarUrl: "/sandra3.jpeg", // Professional female avatar
    resumeUrl: "/Nzekwe_Sandra_CV.pdf", // Placeholder for resume download
    githubUrl: "",
    linkedinUrl: "https://linkedin.com/in/sandra-nzekwe-37416a239",
    email: "nzekwesandra2018@gmail.com",
    stats: {
      projectsCount: "20+",
      rowsAnalyzed: "10+",
      dashboardsCount: "9+",
      modelAccuracy: "90%",
    },
    timeline: [
      {
        id: "excel-analysis",
        stage: "Excel Analysis",
        year: "2023 - 2024",
        description: "Transitioned to advanced data manipulation, modeling, and automated macros.",
        iconName: "Table",
        details: [
          "Built robust financial planning and budgeting templates.",
          "Mastered advanced functions (INDEX/MATCH, XLOOKUP, pivot tables).",
          "Developed custom VBA scripts that saved 10+ hours of manual reporting weekly."
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
        id: "data-analytics",
        stage: "Data Analytics",
        year: "2024 - present",
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
      { name: "Python", category: "Languages", level: 50, projectsCount: 12 },
      { name: "Power BI", category: "Tools", level: 62, projectsCount: 10 },
      { name: "Excel", category: "Tools", level: 70, projectsCount: 18 },
      { name: "PostgreSQL", category: "Databases", level: 90, projectsCount: 9 },
      { name: "Tableau", category: "Tools", level: 70, projectsCount: 4 },
      { name: "Statistics", category: "Methodologies", level: 85, projectsCount: 8 },
      { name: "Machine Learning", category: "Methodologies", level: 68, projectsCount: 6 }
    ]
  };
  