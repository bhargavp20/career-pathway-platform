export type Pathway = {
  title: string;
  category: string;
  description: string;

  subjects: string[];
  activities: string[];
  interests: string[];

  skills: string[];

  degreeOptions: string[];
  careerRoles: string[];

  salaryRoles: {
  role: string;
  average: string;
  range: string;
  source: string;
  updated: string;
}[];

  learningResources: {
    title: string;
    platform: string;
    description: string;
    url: string;
  }[];

  higherStudies: string[];

  journey: {
    stage: string;
    title: string;
    description: string;
  }[];
};

export const pathways: Pathway[] = [
  // =========================================================
  // 1. COMPUTER SCIENCE
  // =========================================================

  {
    title: "Computer Science",
    category: "Technology",
    description:
      "Computer Science focuses on programming, algorithms, software, systems and computational problem solving. It can lead to many different technology careers.",

    subjects: ["Computer Science", "Mathematics", "Physics"],
    activities: ["Coding", "Problem Solving", "Building Things", "Analysis"],
    interests: ["Technology", "Software", "AI & Machine Learning", "Data"],

    skills: [
      "Programming",
      "Data Structures & Algorithms",
      "Database Management",
      "Computer Networks",
      "Software Development",
      "Problem Solving",
    ],

    degreeOptions: [
      "B.Tech Computer Science",
      "B.E. Computer Science",
      "B.Sc Computer Science",
      "BCA",
      "B.Tech Information Technology",
    ],

    careerRoles: [
      "Software Developer",
      "Software Engineer",
      "Web Developer",
      "Systems Engineer",
      "Backend Developer",
      "Full Stack Developer",
    ],

    salaryRoles: [
        {
            role: "Software Developer",
            average: "₹7–9 L/year",
            range: "₹4–15 L/year",
            source: "Indicative India estimate",
            updated: "2026",
        },
        {
            role: "Software Engineer",
            average: "₹8–10 L/year",
            range: "₹4–18 L/year",
            source: "Indeed India",
            updated: "2026",
        },
        {
            role: "Web Developer",
            average: "₹5–7 L/year",
            range: "₹3–12 L/year",
            source: "Indicative India estimate",
            updated: "2026",
        },
        {
            role: "Systems Engineer",
            average: "₹6–9 L/year",
            range: "₹4–14 L/year",
            source: "Indicative India estimate",
            updated: "2026",
        },
        {
            role: "Backend Developer",
            average: "₹8–11 L/year",
            range: "₹5–18 L/year",
            source: "Indicative India estimate",
            updated: "2026",
        },
        {
            role: "Full Stack Developer",
            average: "₹7–10 L/year",
            range: "₹4–18 L/year",
            source: "Indicative India estimate",
            updated: "2026",
        },
        ],
    learningResources: [
      {
        title: "CS50",
        platform: "Harvard",
        description:
          "An introduction to computer science and programming fundamentals.",
        url: "https://cs50.harvard.edu/",
      },
      {
        title: "freeCodeCamp",
        platform: "freeCodeCamp",
        description:
          "Free programming and web development learning resources.",
        url: "https://www.freecodecamp.org/",
      },
    ],

    higherStudies: [
      "M.Tech Computer Science",
      "M.Sc Computer Science",
      "MCA",
      "M.Tech Artificial Intelligence",
      "Master's in Computer Science Abroad",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Build Foundations",
        description:
          "Strengthen mathematics, computer science and logical problem-solving fundamentals.",
      },
      {
        stage: "Undergraduate",
        title: "Study Computer Science",
        description:
          "Learn programming, algorithms, databases, operating systems and computer networks.",
      },
      {
        stage: "Skills",
        title: "Build Projects",
        description:
          "Develop projects and strengthen programming and problem-solving abilities.",
      },
      {
        stage: "Experience",
        title: "Internships",
        description:
          "Gain practical experience through internships, projects or open-source work.",
      },
      {
        stage: "Career",
        title: "Choose a Specialisation",
        description:
          "Explore software, AI, data, cybersecurity, cloud or other technology roles.",
      },
    ],
  },

  // =========================================================
  // 2. ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
  // =========================================================

  {
    title: "Artificial Intelligence & Machine Learning",
    category: "Technology & AI",
    description:
      "Artificial Intelligence and Machine Learning combine programming, mathematics and data to build systems that can learn patterns and perform intelligent tasks.",

    subjects: ["Computer Science", "Mathematics", "Physics"],
    activities: [
      "Coding",
      "Problem Solving",
      "Working with Data",
      "Research",
      "Analysis",
    ],
    interests: [
      "AI & Machine Learning",
      "Technology",
      "Data",
      "Research",
      "Robotics",
    ],

    skills: [
      "Python",
      "Linear Algebra",
      "Probability",
      "Machine Learning",
      "Deep Learning",
      "Data Analysis",
    ],

    degreeOptions: [
      "B.Tech Artificial Intelligence",
      "B.Tech AI & Machine Learning",
      "B.Tech Computer Science",
      "B.Sc Artificial Intelligence",
      "B.Sc Data Science",
    ],

    careerRoles: [
      "Machine Learning Engineer",
      "AI Engineer",
      "Data Scientist",
      "ML Researcher",
      "Computer Vision Engineer",
      "NLP Engineer",
    ],

    salaryRoles: [
  {
    role: "Machine Learning Engineer",
    average: "₹10–14 L/year",
    range: "₹6–25 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "AI Engineer",
    average: "₹9–13 L/year",
    range: "₹6–22 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Data Scientist",
    average: "₹12.4 L/year",
    range: "₹7.2–21.3 L/year",
    source: "Indeed India",
    updated: "September 2026",
  },
  {
    role: "ML Researcher",
    average: "₹8–12 L/year",
    range: "₹5–20 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Computer Vision Engineer",
    average: "₹8–12 L/year",
    range: "₹5–20 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "NLP Engineer",
    average: "₹8–13 L/year",
    range: "₹5–22 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
],

    learningResources: [
      {
        title: "Machine Learning",
        platform: "Google",
        description:
          "Practical introductory resources for understanding machine learning concepts.",
        url: "https://developers.google.com/machine-learning",
      },
      {
        title: "Machine Learning Specialization",
        platform: "Coursera",
        description:
          "A structured introduction to machine learning concepts and practice.",
        url: "https://www.coursera.org/specializations/machine-learning-introduction",
      },
    ],

    higherStudies: [
      "M.Tech Artificial Intelligence",
      "M.Tech Machine Learning",
      "M.Sc Artificial Intelligence",
      "M.Sc Data Science",
      "Master's in AI Abroad",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Strengthen Mathematics",
        description:
          "Develop mathematics, logical reasoning and programming foundations.",
      },
      {
        stage: "Undergraduate",
        title: "Study Computing",
        description:
          "Learn programming, algorithms, statistics and computer science fundamentals.",
      },
      {
        stage: "Specialisation",
        title: "Learn Machine Learning",
        description:
          "Study machine learning, deep learning and data processing techniques.",
      },
      {
        stage: "Projects",
        title: "Build AI Systems",
        description:
          "Create practical projects using datasets and machine learning models.",
      },
      {
        stage: "Career",
        title: "Explore AI Roles",
        description:
          "Explore engineering, research, data and specialised AI roles.",
      },
    ],
  },

  // =========================================================
  // 3. CYBERSECURITY
  // =========================================================

  {
    title: "Cybersecurity",
    category: "Technology & Security",
    description:
      "Cybersecurity focuses on protecting computers, networks, applications and information from security threats.",

    subjects: ["Computer Science", "Mathematics", "Physics"],
    activities: [
      "Problem Solving",
      "Coding",
      "Analysis",
      "Research",
      "Working with Technology",
    ],
    interests: ["Cybersecurity", "Technology", "Software", "Research"],

    skills: [
      "Networking",
      "Linux",
      "Programming",
      "Cryptography",
      "Security Analysis",
      "Ethical Hacking",
    ],

    degreeOptions: [
      "B.Tech Cybersecurity",
      "B.Tech Computer Science",
      "B.Sc Cybersecurity",
      "BCA",
      "B.Sc Information Technology",
    ],

    careerRoles: [
      "Cybersecurity Analyst",
      "Security Engineer",
      "Security Consultant",
      "SOC Analyst",
      "Penetration Tester",
      "Security Researcher",
    ],

    salaryRoles: [
  {
    role: "Cybersecurity Analyst",
    average: "₹6–9 L/year",
    range: "₹4–14 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Security Engineer",
    average: "₹8–12 L/year",
    range: "₹5–20 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Security Consultant",
    average: "₹8–12 L/year",
    range: "₹5–18 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "SOC Analyst",
    average: "₹5–8 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Penetration Tester",
    average: "₹6–10 L/year",
    range: "₹4–16 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Security Researcher",
    average: "₹8–13 L/year",
    range: "₹5–22 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
],

    learningResources: [
      {
        title: "Cybersecurity",
        platform: "Cisco",
        description:
          "Cybersecurity learning resources covering foundational security concepts.",
        url: "https://www.cisco.com/site/us/en/learn/topics/security/what-is-cybersecurity.html",
      },
      {
        title: "TryHackMe",
        platform: "TryHackMe",
        description:
          "Hands-on cybersecurity learning through guided practical environments.",
        url: "https://tryhackme.com/",
      },
    ],

    higherStudies: [
      "M.Tech Cybersecurity",
      "M.Sc Cybersecurity",
      "M.Tech Information Security",
      "Master's in Cybersecurity Abroad",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Build Technical Foundations",
        description:
          "Develop mathematics, computing and logical reasoning skills.",
      },
      {
        stage: "Undergraduate",
        title: "Study Computing",
        description:
          "Learn programming, operating systems, databases and computer networks.",
      },
      {
        stage: "Security",
        title: "Learn Security",
        description:
          "Study networking security, cryptography and common security concepts.",
      },
      {
        stage: "Practice",
        title: "Build Practical Skills",
        description:
          "Use labs and projects to understand defensive and offensive security concepts.",
      },
      {
        stage: "Career",
        title: "Enter Security Roles",
        description:
          "Explore security analysis, engineering, consulting and research roles.",
      },
    ],
  },

  // =========================================================
  // 4. DATA SCIENCE
  // =========================================================

  {
    title: "Data Science",
    category: "Data & Technology",
    description:
      "Data Science combines mathematics, statistics, programming and domain knowledge to analyse data and discover useful patterns.",

    subjects: ["Mathematics", "Computer Science", "Statistics"],
    activities: [
      "Working with Data",
      "Problem Solving",
      "Coding",
      "Research",
      "Analysis",
    ],
    interests: ["Data", "Technology", "AI & Machine Learning", "Research"],

    skills: [
      "Python",
      "Statistics",
      "SQL",
      "Data Analysis",
      "Machine Learning",
      "Data Visualisation",
    ],

    degreeOptions: [
      "B.Sc Data Science",
      "B.Tech Data Science",
      "B.Tech Computer Science",
      "B.Sc Statistics",
      "B.Sc Mathematics",
    ],

    careerRoles: [
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
      "Business Analyst",
      "Data Engineer",
      "Research Analyst",
    ],

    salaryRoles: [
  {
    role: "Data Scientist",
    average: "₹12.4 L/year",
    range: "₹7.2–21.3 L/year",
    source: "Indeed India",
    updated: "September 2026",
  },
  {
    role: "Data Analyst",
    average: "₹6–8 L/year",
    range: "₹4–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Machine Learning Engineer",
    average: "₹10–14 L/year",
    range: "₹6–25 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Business Analyst",
    average: "₹7–10 L/year",
    range: "₹4–15 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Data Engineer",
    average: "₹9–12 L/year",
    range: "₹6–20 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Research Analyst",
    average: "₹5–8 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
],

    learningResources: [
      {
        title: "Python",
        platform: "Python.org",
        description:
          "Official Python documentation and learning resources.",
        url: "https://www.python.org/about/gettingstarted/",
      },
      {
        title: "Kaggle Learn",
        platform: "Kaggle",
        description:
          "Short practical courses covering Python, data analysis and machine learning.",
        url: "https://www.kaggle.com/learn",
      },
    ],

    higherStudies: [
      "M.Sc Data Science",
      "M.Sc Statistics",
      "M.Tech Data Science",
      "M.Sc Artificial Intelligence",
      "Master's in Data Science Abroad",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Build Mathematics",
        description:
          "Develop mathematics, statistics and logical reasoning foundations.",
      },
      {
        stage: "Undergraduate",
        title: "Choose a Data Route",
        description:
          "Explore degrees in data science, statistics, mathematics or computer science.",
      },
      {
        stage: "Skills",
        title: "Learn Data Tools",
        description:
          "Develop Python, SQL, statistics, visualisation and machine learning skills.",
      },
      {
        stage: "Projects",
        title: "Work With Data",
        description:
          "Build projects using real datasets and communicate your findings.",
      },
      {
        stage: "Career",
        title: "Explore Data Roles",
        description:
          "Explore analytics, data science, engineering and research opportunities.",
      },
    ],
  },

  // =========================================================
  // 5. STATISTICS
  // =========================================================

  {
    title: "Statistics",
    category: "Mathematics & Data",
    description:
      "Statistics focuses on collecting, analysing and interpreting data to understand patterns, uncertainty and relationships.",

    subjects: ["Mathematics", "Computer Science", "Biology"],
    activities: [
      "Working with Data",
      "Research",
      "Problem Solving",
      "Analysis",
    ],
    interests: ["Research", "Data", "Science", "Finance", "Healthcare"],

    skills: [
      "Probability",
      "Statistical Analysis",
      "Data Visualisation",
      "Research Methods",
      "Programming",
      "Mathematical Reasoning",
    ],

    degreeOptions: [
      "B.Sc Statistics",
      "B.Sc Mathematics",
      "B.Sc Data Science",
      "B.Stat",
      "B.Tech Data Science",
    ],

    careerRoles: [
      "Statistician",
      "Data Analyst",
      "Research Analyst",
      "Biostatistician",
      "Statistical Programmer",
      "Data Scientist",
    ],

    salaryRoles: [
  {
    role: "Statistician",
    average: "₹6–9 L/year",
    range: "₹4–14 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Data Analyst",
    average: "₹6–8 L/year",
    range: "₹4–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Research Analyst",
    average: "₹5–8 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Biostatistician",
    average: "₹6–10 L/year",
    range: "₹4–16 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Statistical Programmer",
    average: "₹6–10 L/year",
    range: "₹4–15 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Data Scientist",
    average: "₹12.4 L/year",
    range: "₹7.2–21.3 L/year",
    source: "Indeed India",
    updated: "September 2026",
  },
],

    learningResources: [
      {
        title: "Statistics with R",
        platform: "Khan Academy",
        description:
          "Free introductory resources for probability and statistics.",
        url: "https://www.khanacademy.org/math/statistics-probability",
      },
      {
        title: "R Project",
        platform: "R Project",
        description:
          "Official resources for the R statistical programming language.",
        url: "https://www.r-project.org/",
      },
    ],

    higherStudies: [
      "M.Sc Statistics",
      "M.Sc Data Science",
      "M.Stat",
      "M.Sc Biostatistics",
      "Master's in Statistics Abroad",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Strengthen Mathematics",
        description:
          "Build a strong foundation in mathematics and probability.",
      },
      {
        stage: "Undergraduate",
        title: "Study Statistics",
        description:
          "Learn probability, statistical inference, modelling and data analysis.",
      },
      {
        stage: "Computing",
        title: "Learn Programming",
        description:
          "Develop skills in R, Python, SQL or other analytical tools.",
      },
      {
        stage: "Experience",
        title: "Analyse Real Data",
        description:
          "Work on projects involving real datasets and statistical questions.",
      },
      {
        stage: "Career",
        title: "Choose a Domain",
        description:
          "Apply statistics in technology, healthcare, finance, research or other fields.",
      },
    ],
  },

  // =========================================================
  // 6. ACTUARIAL SCIENCE
  // =========================================================

  {
    title: "Actuarial Science",
    category: "Mathematics & Finance",
    description:
      "Actuarial Science applies mathematics, statistics and financial reasoning to analyse uncertainty and risk.",

    subjects: ["Mathematics", "Computer Science", "Economics"],
    activities: ["Problem Solving", "Working with Data", "Analysis"],
    interests: ["Finance", "Mathematics", "Data", "Business"],

    skills: [
      "Probability",
      "Statistics",
      "Financial Mathematics",
      "Risk Analysis",
      "Data Analysis",
      "Communication",
    ],

    degreeOptions: [
      "B.Sc Actuarial Science",
      "B.Sc Mathematics",
      "B.Sc Statistics",
      "B.Com",
      "BBA Finance",
    ],

    careerRoles: [
      "Actuarial Analyst",
      "Risk Analyst",
      "Insurance Analyst",
      "Financial Analyst",
      "Actuary",
      "Consultant",
    ],

    salaryRoles: [
  {
    role: "Actuarial Analyst",
    average: "₹6–9 L/year",
    range: "₹4–14 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Risk Analyst",
    average: "₹6–9 L/year",
    range: "₹4–14 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Insurance Analyst",
    average: "₹5–8 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Financial Analyst",
    average: "₹6–9 L/year",
    range: "₹4–14 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Actuary",
    average: "₹10–18 L/year",
    range: "₹6–30 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Consultant",
    average: "₹8–13 L/year",
    range: "₹5–20 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
],

    learningResources: [
      {
        title: "Actuarial Profession",
        platform: "Institute of Actuaries of India",
        description:
          "Information about the actuarial profession and qualification pathway in India.",
        url: "https://www.actuariesindia.org/",
      },
      {
        title: "Probability & Statistics",
        platform: "Khan Academy",
        description:
          "Free resources for probability and statistics fundamentals.",
        url: "https://www.khanacademy.org/math/statistics-probability",
      },
    ],

    higherStudies: [
      "Actuarial Qualifications",
      "M.Sc Actuarial Science",
      "M.Sc Statistics",
      "M.Sc Financial Mathematics",
      "Master's in Risk Management",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Build Mathematics",
        description:
          "Develop strong mathematics and probability foundations.",
      },
      {
        stage: "Undergraduate",
        title: "Study Quantitative Subjects",
        description:
          "Explore mathematics, statistics, economics or finance-related degrees.",
      },
      {
        stage: "Examinations",
        title: "Pursue Actuarial Qualifications",
        description:
          "Progress through professional actuarial examinations and learning requirements.",
      },
      {
        stage: "Experience",
        title: "Gain Industry Experience",
        description:
          "Work with insurance, risk, finance or related datasets and problems.",
      },
      {
        stage: "Career",
        title: "Work in Risk",
        description:
          "Explore actuarial, risk, insurance and financial roles.",
      },
    ],
  },

  // =========================================================
  // 7. MATHEMATICS
  // =========================================================

  {
    title: "Mathematics",
    category: "Mathematics & Research",
    description:
      "Mathematics develops abstract reasoning, logical thinking and quantitative problem-solving skills that can be applied across science, technology, finance and research.",

    subjects: ["Mathematics", "Physics", "Computer Science"],
    activities: ["Problem Solving", "Research", "Analysis", "Working with Numbers"],
    interests: ["Science", "Research", "Technology", "Finance"],

    skills: [
      "Logical Reasoning",
      "Proof Techniques",
      "Problem Solving",
      "Mathematical Modelling",
      "Statistics",
      "Programming",
    ],

    degreeOptions: [
      "B.Sc Mathematics",
      "B.Math",
      "B.Stat",
      "B.Tech",
      "Integrated M.Sc Mathematics",
    ],

    careerRoles: [
      "Mathematician",
      "Data Analyst",
      "Statistician",
      "Quantitative Analyst",
      "Researcher",
      "Teacher / Lecturer",
    ],

    salaryRoles: [
  {
    role: "Mathematician",
    average: "₹6–9 L/year",
    range: "₹4–14 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Data Analyst",
    average: "₹6–8 L/year",
    range: "₹4–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Statistician",
    average: "₹6–9 L/year",
    range: "₹4–14 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Quantitative Analyst",
    average: "₹10–18 L/year",
    range: "₹6–30 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Researcher",
    average: "₹5–9 L/year",
    range: "₹4–15 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Teacher / Lecturer",
    average: "₹4–7 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
],

    learningResources: [
      {
        title: "Mathematics",
        platform: "Khan Academy",
        description:
          "Free mathematics lessons ranging from fundamentals to advanced topics.",
        url: "https://www.khanacademy.org/math",
      },
      {
        title: "MIT OpenCourseWare",
        platform: "MIT",
        description:
          "Free university-level mathematics course materials.",
        url: "https://ocw.mit.edu/search/?q=mathematics",
      },
    ],

    higherStudies: [
      "M.Sc Mathematics",
      "M.Math",
      "M.Stat",
      "PhD Mathematics",
      "Master's in Applied Mathematics",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Build Mathematical Foundations",
        description:
          "Develop algebra, calculus, geometry and problem-solving skills.",
      },
      {
        stage: "Undergraduate",
        title: "Study Mathematics",
        description:
          "Explore pure mathematics, applied mathematics and mathematical modelling.",
      },
      {
        stage: "Specialisation",
        title: "Choose a Direction",
        description:
          "Explore statistics, computing, finance, physics or pure mathematics.",
      },
      {
        stage: "Research",
        title: "Develop Deeper Skills",
        description:
          "Work on advanced problems, projects or research.",
      },
      {
        stage: "Career",
        title: "Apply Mathematics",
        description:
          "Use mathematics in research, technology, finance, education or industry.",
      },
    ],
  },

  // =========================================================
  // 8. ECONOMICS
  // =========================================================

  {
    title: "Economics",
    category: "Economics & Finance",
    description:
      "Economics studies how individuals, organisations and societies make decisions about resources, markets and incentives.",

    subjects: ["Mathematics", "Computer Science"],
    activities: ["Analysis", "Working with Data", "Research", "Problem Solving"],
    interests: ["Economics", "Finance", "Business", "Data"],

    skills: [
      "Economic Analysis",
      "Statistics",
      "Data Analysis",
      "Research",
      "Mathematical Reasoning",
      "Communication",
    ],

    degreeOptions: [
      "B.A Economics",
      "B.Sc Economics",
      "B.A Economics with Mathematics",
      "B.Sc Economics",
      "Integrated Economics Programs",
    ],

    careerRoles: [
      "Economic Analyst",
      "Financial Analyst",
      "Research Analyst",
      "Policy Analyst",
      "Market Analyst",
      "Business Analyst",
    ],

    salaryRoles: [
  {
    role: "Economic Analyst",
    average: "₹6–10 L/year",
    range: "₹4–15 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Financial Analyst",
    average: "₹6–9 L/year",
    range: "₹4–14 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Research Analyst",
    average: "₹5–8 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Policy Analyst",
    average: "₹6–10 L/year",
    range: "₹4–15 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Market Analyst",
    average: "₹6–9 L/year",
    range: "₹4–14 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Business Analyst",
    average: "₹7–10 L/year",
    range: "₹4–15 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
],

    learningResources: [
      {
        title: "Economics",
        platform: "Khan Academy",
        description:
          "Free introductory economics lessons and concepts.",
        url: "https://www.khanacademy.org/economics-finance-domain",
      },
      {
        title: "Economics",
        platform: "MIT OpenCourseWare",
        description:
          "University-level economics course materials.",
        url: "https://ocw.mit.edu/search/?q=economics",
      },
    ],

    higherStudies: [
      "M.A Economics",
      "M.Sc Economics",
      "M.Sc Finance",
      "Master's in Economics Abroad",
      "PhD Economics",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Build Quantitative Skills",
        description:
          "Develop mathematics, logical reasoning and analytical skills.",
      },
      {
        stage: "Undergraduate",
        title: "Study Economics",
        description:
          "Learn microeconomics, macroeconomics, statistics and economic theory.",
      },
      {
        stage: "Data",
        title: "Learn Analysis",
        description:
          "Develop statistical and data analysis skills using suitable tools.",
      },
      {
        stage: "Experience",
        title: "Study Real Problems",
        description:
          "Work on research projects, economic datasets or internships.",
      },
      {
        stage: "Career",
        title: "Choose a Domain",
        description:
          "Explore finance, policy, research, consulting or business analytics.",
      },
    ],
  },

  // =========================================================
  // 9. BIOINFORMATICS
  // =========================================================

  {
    title: "Bioinformatics",
    category: "Biology + Computing",
    description:
      "Bioinformatics combines biology, computing and data analysis to study biological information such as genes, proteins and biological datasets.",

    subjects: ["Biology", "Computer Science", "Mathematics", "Chemistry"],
    activities: [
      "Research",
      "Coding",
      "Working with Data",
      "Experimenting",
      "Analysis",
    ],
    interests: ["Biotechnology", "Healthcare", "Research", "Data", "Technology"],

    skills: [
      "Biology",
      "Programming",
      "Statistics",
      "Data Analysis",
      "Genomics",
      "Computational Thinking",
    ],

    degreeOptions: [
      "B.Sc Bioinformatics",
      "B.Tech Bioinformatics",
      "B.Sc Biotechnology",
      "B.Sc Life Sciences",
      "B.Tech Biotechnology",
    ],

    careerRoles: [
      "Bioinformatics Analyst",
      "Bioinformatics Scientist",
      "Computational Biologist",
      "Genomics Analyst",
      "Research Assistant",
      "Biological Data Analyst",
    ],

    salaryRoles: [
  {
    role: "Bioinformatics Analyst",
    average: "₹5–8 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Bioinformatics Scientist",
    average: "₹7–11 L/year",
    range: "₹4–18 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Computational Biologist",
    average: "₹7–12 L/year",
    range: "₹4–20 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Genomics Analyst",
    average: "₹5–9 L/year",
    range: "₹3–15 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Research Assistant",
    average: "₹4–6 L/year",
    range: "₹3–9 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Biological Data Analyst",
    average: "₹5–9 L/year",
    range: "₹3–14 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
],

    learningResources: [
      {
        title: "Bioinformatics",
        platform: "NCBI",
        description:
          "Biological databases and tools used in bioinformatics research.",
        url: "https://www.ncbi.nlm.nih.gov/",
      },
      {
        title: "EMBL-EBI Training",
        platform: "EMBL-EBI",
        description:
          "Training resources for bioinformatics and biological data analysis.",
        url: "https://www.ebi.ac.uk/training/",
      },
    ],

    higherStudies: [
      "M.Sc Bioinformatics",
      "M.Tech Bioinformatics",
      "M.Sc Computational Biology",
      "M.Sc Genomics",
      "PhD Bioinformatics",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Build Biology + Computing",
        description:
          "Develop biology foundations while building interest in mathematics and computing.",
      },
      {
        stage: "Undergraduate",
        title: "Study Biology & Computing",
        description:
          "Choose a suitable bioinformatics, biotechnology, life science or computing route.",
      },
      {
        stage: "Skills",
        title: "Learn Programming",
        description:
          "Develop Python, statistics and biological data analysis skills.",
      },
      {
        stage: "Research",
        title: "Work With Biological Data",
        description:
          "Explore genomics, proteins, biological databases and computational projects.",
      },
      {
        stage: "Career",
        title: "Explore Computational Biology",
        description:
          "Explore research, biotechnology, genomics and biological data roles.",
      },
    ],
  },

  // =========================================================
  // 10. BIOTECHNOLOGY
  // =========================================================

  {
    title: "Biotechnology",
    category: "Biology & Life Sciences",
    description:
      "Biotechnology applies biological knowledge and laboratory techniques to areas such as healthcare, agriculture, food and industrial processes.",

    subjects: ["Biology", "Chemistry", "Physics"],
    activities: ["Experimenting", "Research", "Working with Nature", "Analysis"],
    interests: ["Biotechnology", "Healthcare", "Science", "Research"],

    skills: [
      "Cell Biology",
      "Molecular Biology",
      "Laboratory Techniques",
      "Biochemistry",
      "Research",
      "Data Analysis",
    ],

    degreeOptions: [
      "B.Tech Biotechnology",
      "B.Sc Biotechnology",
      "B.Sc Life Sciences",
      "B.Sc Microbiology",
      "B.Sc Biochemistry",
    ],

    careerRoles: [
      "Biotechnologist",
      "Research Assistant",
      "Laboratory Analyst",
      "Quality Control Analyst",
      "Clinical Research Assistant",
      "Bioprocess Associate",
    ],

    salaryRoles: [
  {
    role: "Biotechnologist",
    average: "₹5–8 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Research Assistant",
    average: "₹4–6 L/year",
    range: "₹3–9 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Laboratory Analyst",
    average: "₹4–7 L/year",
    range: "₹3–11 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Quality Control Analyst",
    average: "₹5–8 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Clinical Research Assistant",
    average: "₹4–7 L/year",
    range: "₹3–11 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Bioprocess Associate",
    average: "₹5–8 L/year",
    range: "₹3–13 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
],

    learningResources: [
      {
        title: "Biotechnology",
        platform: "NPTEL",
        description:
          "University-level courses covering biotechnology and biological sciences.",
        url: "https://nptel.ac.in/",
      },
      {
        title: "NCBI",
        platform: "NCBI",
        description:
          "Access biological databases and research resources.",
        url: "https://www.ncbi.nlm.nih.gov/",
      },
    ],

    higherStudies: [
      "M.Sc Biotechnology",
      "M.Tech Biotechnology",
      "M.Sc Molecular Biology",
      "M.Sc Bioinformatics",
      "PhD Biotechnology",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Build Biology Foundations",
        description:
          "Strengthen biology, chemistry and laboratory science fundamentals.",
      },
      {
        stage: "Undergraduate",
        title: "Study Biotechnology",
        description:
          "Learn molecular biology, genetics, biochemistry and biotechnology techniques.",
      },
      {
        stage: "Laboratory",
        title: "Develop Practical Skills",
        description:
          "Gain laboratory and research experience through practical work.",
      },
      {
        stage: "Experience",
        title: "Explore Applications",
        description:
          "Explore healthcare, agriculture, industrial biotechnology or research.",
      },
      {
        stage: "Career",
        title: "Choose a Specialisation",
        description:
          "Continue into industry, research or specialised postgraduate study.",
      },
    ],
  },

  // =========================================================
  // 11. MICROBIOLOGY
  // =========================================================

  {
    title: "Microbiology",
    category: "Biology & Life Sciences",
    description:
      "Microbiology studies microorganisms and their interactions with humans, animals, plants and the environment.",

    subjects: ["Biology", "Chemistry"],
    activities: ["Experimenting", "Research", "Working with Nature", "Analysis"],
    interests: ["Healthcare", "Science", "Research", "Biotechnology"],

    skills: [
      "Microbiology",
      "Laboratory Techniques",
      "Biochemistry",
      "Research Methods",
      "Data Analysis",
      "Scientific Communication",
    ],

    degreeOptions: [
      "B.Sc Microbiology",
      "B.Sc Biotechnology",
      "B.Sc Life Sciences",
      "B.Sc Biochemistry",
    ],

    careerRoles: [
      "Microbiology Analyst",
      "Laboratory Technician",
      "Research Assistant",
      "Quality Control Analyst",
      "Clinical Laboratory Assistant",
      "Food Microbiology Analyst",
    ],

    salaryRoles: [
  {
    role: "Microbiology Analyst",
    average: "₹4–7 L/year",
    range: "₹3–11 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Laboratory Technician",
    average: "₹3–5 L/year",
    range: "₹2.5–8 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Research Assistant",
    average: "₹4–6 L/year",
    range: "₹3–9 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Quality Control Analyst",
    average: "₹5–8 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Clinical Laboratory Assistant",
    average: "₹4–6 L/year",
    range: "₹3–9 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Food Microbiology Analyst",
    average: "₹4–7 L/year",
    range: "₹3–11 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
],

    learningResources: [
      {
        title: "Microbiology",
        platform: "NPTEL",
        description:
          "University-level courses and lectures related to microbiology and life sciences.",
        url: "https://nptel.ac.in/",
      },
      {
        title: "NCBI",
        platform: "NCBI",
        description:
          "Research databases and biological information resources.",
        url: "https://www.ncbi.nlm.nih.gov/",
      },
    ],

    higherStudies: [
      "M.Sc Microbiology",
      "M.Sc Biotechnology",
      "M.Sc Molecular Biology",
      "M.Sc Medical Microbiology",
      "PhD Microbiology",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Build Biology Foundations",
        description:
          "Strengthen biology and chemistry fundamentals.",
      },
      {
        stage: "Undergraduate",
        title: "Study Microbiology",
        description:
          "Learn microorganisms, genetics, biochemistry and laboratory methods.",
      },
      {
        stage: "Laboratory",
        title: "Develop Practical Skills",
        description:
          "Gain experience with laboratory techniques and scientific experiments.",
      },
      {
        stage: "Research",
        title: "Explore Applications",
        description:
          "Explore healthcare, food, environment, biotechnology or research.",
      },
      {
        stage: "Career",
        title: "Specialise",
        description:
          "Continue into industry, research or postgraduate study.",
      },
    ],
  },

  // =========================================================
  // 12. BIOCHEMISTRY
  // =========================================================

  {
    title: "Biochemistry",
    category: "Biology + Chemistry",
    description:
      "Biochemistry studies the chemical processes and molecules involved in living organisms.",

    subjects: ["Biology", "Chemistry"],
    activities: ["Experimenting", "Research", "Analysis"],
    interests: ["Healthcare", "Science", "Research", "Biotechnology"],

    skills: [
      "Biochemistry",
      "Molecular Biology",
      "Laboratory Techniques",
      "Chemistry",
      "Data Analysis",
      "Research",
    ],

    degreeOptions: [
      "B.Sc Biochemistry",
      "B.Sc Biotechnology",
      "B.Sc Life Sciences",
      "B.Sc Chemistry",
    ],

    careerRoles: [
      "Biochemist",
      "Laboratory Analyst",
      "Research Assistant",
      "Clinical Research Assistant",
      "Quality Control Analyst",
      "Biotechnology Associate",
    ],

    salaryRoles: [
  {
    role: "Biochemist",
    average: "₹5–8 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Laboratory Analyst",
    average: "₹4–7 L/year",
    range: "₹3–11 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Research Assistant",
    average: "₹4–6 L/year",
    range: "₹3–9 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Clinical Research Assistant",
    average: "₹4–7 L/year",
    range: "₹3–11 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Quality Control Analyst",
    average: "₹5–8 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Biotechnology Associate",
    average: "₹5–8 L/year",
    range: "₹3–13 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
],

    learningResources: [
      {
        title: "Biochemistry",
        platform: "Khan Academy",
        description:
          "Free lessons covering important biochemistry concepts.",
        url: "https://www.khanacademy.org/science/biology",
      },
      {
        title: "NCBI",
        platform: "NCBI",
        description:
          "Biological databases and research resources.",
        url: "https://www.ncbi.nlm.nih.gov/",
      },
    ],

    higherStudies: [
      "M.Sc Biochemistry",
      "M.Sc Molecular Biology",
      "M.Sc Biotechnology",
      "M.Sc Biomedical Science",
      "PhD Biochemistry",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Build Biology + Chemistry",
        description:
          "Develop strong biology and chemistry foundations.",
      },
      {
        stage: "Undergraduate",
        title: "Study Biochemistry",
        description:
          "Learn biological molecules, metabolism, molecular biology and chemistry.",
      },
      {
        stage: "Laboratory",
        title: "Develop Practical Skills",
        description:
          "Gain laboratory experience through practicals and projects.",
      },
      {
        stage: "Research",
        title: "Explore Applications",
        description:
          "Explore healthcare, pharmaceuticals, biotechnology or research.",
      },
      {
        stage: "Career",
        title: "Specialise",
        description:
          "Continue into research, industry or specialised postgraduate study.",
      },
    ],
  },

  // =========================================================
  // 13. PHYSICS
  // =========================================================

  {
    title: "Physics",
    category: "Science & Research",
    description:
      "Physics studies matter, energy, motion, forces and the fundamental laws that describe the natural world.",

    subjects: ["Physics", "Mathematics", "Chemistry", "Computer Science"],
    activities: ["Problem Solving", "Experimenting", "Research", "Analysis"],
    interests: ["Science", "Space & Astronomy", "Research", "Technology"],

    skills: [
      "Mathematical Modelling",
      "Problem Solving",
      "Experimental Methods",
      "Programming",
      "Data Analysis",
      "Scientific Reasoning",
    ],

    degreeOptions: [
      "B.Sc Physics",
      "B.Sc Physics Honours",
      "B.Tech Engineering Physics",
      "Integrated M.Sc Physics",
    ],

    careerRoles: [
      "Physicist",
      "Research Assistant",
      "Data Analyst",
      "Scientific Programmer",
      "Laboratory Scientist",
      "Science Educator",
    ],

    salaryRoles: [
  {
    role: "Physicist",
    average: "₹6–10 L/year",
    range: "₹4–16 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Research Assistant",
    average: "₹4–7 L/year",
    range: "₹3–10 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Data Analyst",
    average: "₹6–8 L/year",
    range: "₹4–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Scientific Programmer",
    average: "₹7–11 L/year",
    range: "₹5–18 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Laboratory Scientist",
    average: "₹5–8 L/year",
    range: "₹3–13 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Science Educator",
    average: "₹4–7 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
],

    learningResources: [
      {
        title: "Physics",
        platform: "Khan Academy",
        description:
          "Free physics lessons covering fundamental concepts.",
        url: "https://www.khanacademy.org/science/physics",
      },
      {
        title: "MIT OpenCourseWare",
        platform: "MIT",
        description:
          "University-level physics course materials.",
        url: "https://ocw.mit.edu/search/?q=physics",
      },
    ],

    higherStudies: [
      "M.Sc Physics",
      "M.Tech Engineering Physics",
      "M.Sc Astrophysics",
      "M.Sc Computational Physics",
      "PhD Physics",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Build Physics + Mathematics",
        description:
          "Develop strong physics, mathematics and problem-solving foundations.",
      },
      {
        stage: "Undergraduate",
        title: "Study Physics",
        description:
          "Learn mechanics, electromagnetism, quantum physics and experimental methods.",
      },
      {
        stage: "Skills",
        title: "Learn Computing",
        description:
          "Develop programming and computational analysis skills.",
      },
      {
        stage: "Research",
        title: "Explore a Specialisation",
        description:
          "Explore areas such as materials, astrophysics, computational physics or quantum science.",
      },
      {
        stage: "Career",
        title: "Continue or Apply",
        description:
          "Continue into research or apply physics and quantitative skills in industry.",
      },
    ],
  },

  // =========================================================
  // 14. ASTRONOMY & ASTROPHYSICS
  // =========================================================

  {
    title: "Astronomy & Astrophysics",
    category: "Physics & Space",
    description:
      "Astronomy and astrophysics use physics, mathematics and computational methods to study stars, planets, galaxies and the universe.",

    subjects: ["Physics", "Mathematics", "Computer Science"],
    activities: ["Research", "Problem Solving", "Working with Data", "Analysis"],
    interests: ["Space & Astronomy", "Science", "Research", "Technology"],

    skills: [
      "Physics",
      "Mathematics",
      "Programming",
      "Data Analysis",
      "Scientific Computing",
      "Research",
    ],

    degreeOptions: [
      "B.Sc Physics",
      "B.Sc Astronomy",
      "B.Sc Astrophysics",
      "Integrated M.Sc Physics",
      "B.Tech Engineering Physics",
    ],

    careerRoles: [
      "Astronomer",
      "Astrophysicist",
      "Research Assistant",
      "Scientific Programmer",
      "Data Analyst",
      "Science Communicator",
    ],

    salaryRoles: [
  {
    role: "Astronomer",
    average: "₹6–10 L/year",
    range: "₹4–16 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Astrophysicist",
    average: "₹6–10 L/year",
    range: "₹4–18 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Research Assistant",
    average: "₹4–7 L/year",
    range: "₹3–10 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Scientific Programmer",
    average: "₹7–11 L/year",
    range: "₹5–18 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Data Analyst",
    average: "₹6–8 L/year",
    range: "₹4–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Science Communicator",
    average: "₹5–8 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
],

    learningResources: [
      {
        title: "NASA",
        platform: "NASA",
        description:
          "Educational and scientific resources about space and astronomy.",
        url: "https://science.nasa.gov/learn/",
      },
      {
        title: "Astronomy",
        platform: "Khan Academy",
        description:
          "Introductory astronomy and cosmology learning resources.",
        url: "https://www.khanacademy.org/science/cosmology-and-astronomy",
      },
    ],

    higherStudies: [
      "M.Sc Astrophysics",
      "M.Sc Astronomy",
      "M.Sc Physics",
      "PhD Astrophysics",
      "PhD Astronomy",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Build Physics + Mathematics",
        description:
          "Develop strong physics and mathematics foundations.",
      },
      {
        stage: "Undergraduate",
        title: "Study Physics",
        description:
          "A physics degree can provide a foundation for later astrophysics specialisation.",
      },
      {
        stage: "Computing",
        title: "Learn Scientific Computing",
        description:
          "Develop programming, simulation and data analysis skills.",
      },
      {
        stage: "Specialisation",
        title: "Study Astrophysics",
        description:
          "Explore stars, galaxies, cosmology, planetary science or related areas.",
      },
      {
        stage: "Research",
        title: "Continue to Advanced Study",
        description:
          "Research careers generally involve postgraduate study and specialised training.",
      },
    ],
  },

  // =========================================================
  // 15. CHEMISTRY
  // =========================================================

  {
    title: "Chemistry",
    category: "Chemistry & Science",
    description:
      "Chemistry studies matter, its properties, structure and transformations, with applications across healthcare, materials, environment and industry.",

    subjects: ["Chemistry", "Biology", "Physics", "Mathematics"],
    activities: ["Experimenting", "Research", "Analysis", "Working with Nature"],
    interests: ["Science", "Healthcare", "Research", "Biotechnology"],

    skills: [
      "Chemical Analysis",
      "Laboratory Techniques",
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Data Analysis",
      "Scientific Reasoning",
    ],

    degreeOptions: [
      "B.Sc Chemistry",
      "B.Sc Chemistry Honours",
      "B.Tech Chemical Engineering",
      "B.Sc Industrial Chemistry",
    ],

    careerRoles: [
      "Chemist",
      "Laboratory Analyst",
      "Quality Control Analyst",
      "Research Assistant",
      "Chemical Analyst",
      "Environmental Analyst",
    ],

    salaryRoles: [
  {
    role: "Chemist",
    average: "₹5–8 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Laboratory Analyst",
    average: "₹4–7 L/year",
    range: "₹3–11 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Quality Control Analyst",
    average: "₹5–8 L/year",
    range: "₹3–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Research Assistant",
    average: "₹4–6 L/year",
    range: "₹3–9 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Chemical Analyst",
    average: "₹5–8 L/year",
    range: "₹3–13 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Environmental Analyst",
    average: "₹5–8 L/year",
    range: "₹3–13 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
],

    learningResources: [
      {
        title: "Chemistry",
        platform: "Khan Academy",
        description:
          "Free chemistry lessons covering foundational concepts.",
        url: "https://www.khanacademy.org/science/chemistry",
      },
      {
        title: "Chemistry",
        platform: "MIT OpenCourseWare",
        description:
          "University-level chemistry course materials.",
        url: "https://ocw.mit.edu/search/?q=chemistry",
      },
    ],

    higherStudies: [
      "M.Sc Chemistry",
      "M.Sc Analytical Chemistry",
      "M.Sc Organic Chemistry",
      "M.Sc Materials Chemistry",
      "PhD Chemistry",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Build Chemistry Foundations",
        description:
          "Develop chemistry, mathematics and laboratory science fundamentals.",
      },
      {
        stage: "Undergraduate",
        title: "Study Chemistry",
        description:
          "Learn organic, inorganic, physical and analytical chemistry.",
      },
      {
        stage: "Laboratory",
        title: "Develop Practical Skills",
        description:
          "Build laboratory, measurement and scientific analysis skills.",
      },
      {
        stage: "Specialisation",
        title: "Choose an Area",
        description:
          "Explore materials, pharmaceuticals, environment, analytical chemistry or research.",
      },
      {
        stage: "Career",
        title: "Apply Chemistry",
        description:
          "Explore laboratory, research, quality, industrial or postgraduate opportunities.",
      },
    ],
  },

  // =========================================================
  // 16. ENVIRONMENTAL SCIENCE
  // =========================================================

  {
    title: "Environmental Science",
    category: "Environment & Sustainability",
    description:
      "Environmental Science combines natural sciences and data-driven approaches to understand environmental systems and sustainability challenges.",

    subjects: ["Biology", "Chemistry", "Physics", "Mathematics"],
    activities: [
      "Research",
      "Experimenting",
      "Working with Nature",
      "Working with Data",
      "Analysis",
    ],
    interests: ["Environment", "Science", "Agriculture", "Social Impact"],

    skills: [
      "Environmental Analysis",
      "Data Analysis",
      "Field Research",
      "Ecology",
      "Scientific Communication",
      "GIS Fundamentals",
    ],

    degreeOptions: [
      "B.Sc Environmental Science",
      "B.Sc Environmental Studies",
      "B.Sc Ecology",
      "B.Sc Life Sciences",
      "B.Tech Environmental Engineering",
    ],

    careerRoles: [
      "Environmental Analyst",
      "Environmental Consultant",
      "Research Assistant",
      "Sustainability Analyst",
      "Ecology Researcher",
      "Environmental Scientist",
    ],

    salaryRoles: [
  {
    role: "Environmental Analyst",
    average: "₹5–8 L/year",
    range: "₹3–13 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Environmental Consultant",
    average: "₹6–10 L/year",
    range: "₹4–16 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Research Assistant",
    average: "₹4–7 L/year",
    range: "₹3–10 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Sustainability Analyst",
    average: "₹6–10 L/year",
    range: "₹4–16 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Ecology Researcher",
    average: "₹5–8 L/year",
    range: "₹3–13 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Environmental Scientist",
    average: "₹5–9 L/year",
    range: "₹3–15 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
],

    learningResources: [
      {
        title: "Earth & Environmental Science",
        platform: "MIT OpenCourseWare",
        description:
          "University-level environmental and earth science learning materials.",
        url: "https://ocw.mit.edu/search/?q=environmental+science",
      },
      {
        title: "Climate Change",
        platform: "NASA",
        description:
          "Educational resources about Earth's climate and environmental systems.",
        url: "https://science.nasa.gov/climate-change/",
      },
    ],

    higherStudies: [
      "M.Sc Environmental Science",
      "M.Sc Environmental Management",
      "M.Tech Environmental Engineering",
      "M.Sc Climate Science",
      "PhD Environmental Science",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Build Science Foundations",
        description:
          "Develop biology, chemistry, physics and mathematics foundations.",
      },
      {
        stage: "Undergraduate",
        title: "Study Environmental Science",
        description:
          "Learn ecology, environmental systems, pollution and sustainability.",
      },
      {
        stage: "Field Skills",
        title: "Develop Practical Skills",
        description:
          "Gain experience in field research, data collection and environmental analysis.",
      },
      {
        stage: "Projects",
        title: "Work on Environmental Problems",
        description:
          "Explore projects related to climate, biodiversity, water, waste or sustainability.",
      },
      {
        stage: "Career",
        title: "Explore Sustainability Roles",
        description:
          "Explore research, consulting, environmental analysis and sustainability careers.",
      },
    ],
  },

  // =========================================================
  // 17. AGRICULTURE
  // =========================================================

  {
    title: "Agriculture",
    category: "Agriculture & Life Sciences",
    description:
      "Agriculture combines biological science, technology and resource management to improve crop production, food systems and agricultural sustainability.",

    subjects: ["Biology", "Chemistry", "Mathematics"],
    activities: [
      "Working with Nature",
      "Experimenting",
      "Research",
      "Working with Data",
      "Building Things",
    ],
    interests: ["Agriculture", "Environment", "Biotechnology", "Science"],

    skills: [
      "Crop Science",
      "Soil Science",
      "Agricultural Research",
      "Data Analysis",
      "Plant Biology",
      "Farm Technology",
    ],

    degreeOptions: [
      "B.Sc Agriculture",
      "B.Tech Agricultural Engineering",
      "B.Sc Horticulture",
      "B.Sc Forestry",
      "B.Sc Agricultural Biotechnology",
    ],

    careerRoles: [
      "Agricultural Scientist",
      "Agriculture Officer",
      "Agricultural Consultant",
      "Agronomist",
      "Research Assistant",
      "Agri-Tech Specialist",
    ],

    salaryRoles: [
  {
    role: "Agricultural Scientist",
    average: "₹6–10 L/year",
    range: "₹4–16 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Agriculture Officer",
    average: "₹5–8 L/year",
    range: "₹4–12 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Agricultural Consultant",
    average: "₹5–9 L/year",
    range: "₹3–15 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Agronomist",
    average: "₹5–8 L/year",
    range: "₹3–13 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Research Assistant",
    average: "₹4–7 L/year",
    range: "₹3–10 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
  {
    role: "Agri-Tech Specialist",
    average: "₹6–10 L/year",
    range: "₹4–16 L/year",
    source: "Indicative India estimate",
    updated: "2026",
  },
],
    learningResources: [
      {
        title: "Agriculture",
        platform: "ICAR",
        description:
          "Information and educational resources related to agricultural education and research in India.",
        url: "https://icar.gov.in/",
      },
      {
        title: "Agriculture",
        platform: "FAO",
        description:
          "Global resources covering agriculture, food systems and sustainability.",
        url: "https://www.fao.org/",
      },
    ],

    higherStudies: [
      "M.Sc Agriculture",
      "M.Sc Agronomy",
      "M.Tech Agricultural Engineering",
      "M.Sc Agricultural Biotechnology",
      "PhD Agricultural Sciences",
    ],

    journey: [
      {
        stage: "Class 12",
        title: "Build Biology Foundations",
        description:
          "Develop biology, chemistry and quantitative reasoning skills.",
      },
      {
        stage: "Undergraduate",
        title: "Study Agriculture",
        description:
          "Learn crop science, soil science, plant biology and agricultural systems.",
      },
      {
        stage: "Practical",
        title: "Gain Field Experience",
        description:
          "Develop practical understanding through fieldwork, projects and experiments.",
      },
      {
        stage: "Technology",
        title: "Explore Modern Agriculture",
        description:
          "Learn about data, sensors, automation, biotechnology and precision agriculture.",
      },
      {
        stage: "Career",
        title: "Choose a Direction",
        description:
          "Explore research, agribusiness, government, consulting or agri-tech opportunities.",
      },
    ],
  },
];