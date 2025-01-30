export interface Career {
  title: string;
  description: string;
  salary: string;
  demand: string;
  progression: {
    entry: string;
    mid: string;
    senior: string;
    timeline: string;
  };
  localOpportunities: {
    employers: string[];
    courses: {
      provider: string;
      location: string;
      type: string;
    }[];
    networking: string[];
  };
  keyProjects: string[];
}

export interface Skill {
  name: string;
  description: string;
  learning_resources: string[];
}

export interface CareerProfile {
  careers: Career[];
  skills: Skill[];
  description: string;
}

export interface CareerProfiles {
  [key: string]: CareerProfile;
}

export interface QuizOption {
  id: string;
  text: string;
  trait: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

// Quiz questions data
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How do you prefer to solve problems?",
    options: [
      { id: 'a', text: "Analyzing data and finding logical solutions", trait: "analytical" },
      { id: 'b', text: "Brainstorming creative and innovative approaches", trait: "creative" },
      { id: 'c', text: "Discussing with others to reach a consensus", trait: "collaborative" },
      { id: 'd', text: "Following established procedures and best practices", trait: "methodical" }
    ]
  },
  // ... Add more questions as needed
];

// Career profiles data
export const careerProfiles: CareerProfiles = {
  analytical: {
    careers: [
      {
        title: "Data Analyst",
        description: "Analyse complex data sets to help businesses make better decisions. You'll work with databases, create visualisations, and uncover valuable insights.",
        salary: "£25,000 - £45,000",
        demand: "High demand in Yorkshire",
        progression: {
          entry: "Junior Data Analyst",
          mid: "Senior Data Analyst",
          senior: "Lead Data Scientist",
          timeline: "3-5 years to senior level"
        },
        localOpportunities: {
          employers: [
            "Sky Betting & Gaming (Leeds)",
            "NHS Digital (Leeds)"
          ],
          courses: [
            {
              provider: "University of Sheffield",
              location: "Sheffield",
              type: "Data Analytics MSc"
            }
          ],
          networking: ["Yorkshire Data Network"]
        },
        keyProjects: ["NHS Data Analysis"]
      }
    ],
    skills: [
      {
        name: "SQL",
        description: "Essential database querying language for data analysis",
        learning_resources: ["Online SQL courses", "Local workshops"]
      }
    ],
    description: "You excel at logical thinking and data-driven decision making."
  },
  // ... Add more profiles as needed
}; 