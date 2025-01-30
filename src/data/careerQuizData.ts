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
    question: "Which type of tasks energise you the most?",
    options: [
      { id: 'a', text: "Solving complex problems and analysing data", trait: "analytical" },
      { id: 'b', text: "Creating and designing new things", trait: "creative" },
      { id: 'c', text: "Leading teams and making strategic decisions", trait: "leadership" },
      { id: 'd', text: "Helping others learn and develop", trait: "supportive" }
    ]
  },
  {
    id: 2,
    question: "What's your preferred way of learning new skills?",
    options: [
      { id: 'a', text: "Through structured courses and formal education", trait: "methodical" },
      { id: 'b', text: "By experimenting and hands-on practice", trait: "practical" },
      { id: 'c', text: "Through collaboration and peer learning", trait: "collaborative" },
      { id: 'd', text: "By researching and self-directed study", trait: "analytical" }
    ]
  },
  {
    id: 3,
    question: "What kind of work environment do you thrive in?",
    options: [
      { id: 'a', text: "Fast-paced startup with varied responsibilities", trait: "adaptable" },
      { id: 'b', text: "Established organisation with clear structures", trait: "methodical" },
      { id: 'c', text: "Creative studio with flexible working", trait: "creative" },
      { id: 'd', text: "Remote work with autonomous decision-making", trait: "independent" }
    ]
  },
  {
    id: 4,
    question: "What's your biggest career motivation?",
    options: [
      { id: 'a', text: "Making a positive impact on society", trait: "purposeful" },
      { id: 'b', text: "Achieving financial success and stability", trait: "ambitious" },
      { id: 'c', text: "Continuous learning and personal growth", trait: "growth-minded" },
      { id: 'd', text: "Building innovative solutions", trait: "innovative" }
    ]
  },
  {
    id: 5,
    question: "How do you handle challenging situations?",
    options: [
      { id: 'a', text: "Break them down into manageable steps", trait: "analytical" },
      { id: 'b', text: "Seek advice from mentors or experts", trait: "collaborative" },
      { id: 'c', text: "Trust your intuition and experience", trait: "intuitive" },
      { id: 'd', text: "Research similar cases and adapt solutions", trait: "methodical" }
    ]
  },
  {
    id: 6,
    question: "What skills would you most like to develop?",
    options: [
      { id: 'a', text: "Technical and digital skills", trait: "technical" },
      { id: 'b', text: "Leadership and management abilities", trait: "leadership" },
      { id: 'c', text: "Creative and design capabilities", trait: "creative" },
      { id: 'd', text: "Communication and interpersonal skills", trait: "interpersonal" }
    ]
  },
  {
    id: 7,
    question: "How do you prefer to make decisions?",
    options: [
      { id: 'a', text: "Based on data and careful analysis", trait: "analytical" },
      { id: 'b', text: "Through group discussion and consensus", trait: "collaborative" },
      { id: 'c', text: "Quick and decisive based on experience", trait: "decisive" },
      { id: 'd', text: "Considering long-term implications", trait: "strategic" }
    ]
  },
  {
    id: 8,
    question: "What type of projects interest you most?",
    options: [
      { id: 'a', text: "Those that require creative problem-solving", trait: "innovative" },
      { id: 'b', text: "Projects with clear social impact", trait: "purposeful" },
      { id: 'c', text: "Technical challenges requiring expertise", trait: "technical" },
      { id: 'd', text: "Leading and coordinating teams", trait: "leadership" }
    ]
  },
  {
    id: 9,
    question: "Where do you see yourself in 5 years?",
    options: [
      { id: 'a', text: "Leading a team or department", trait: "leadership" },
      { id: 'b', text: "Working as a specialist or expert", trait: "technical" },
      { id: 'c', text: "Running your own business", trait: "entrepreneurial" },
      { id: 'd', text: "Contributing to meaningful projects", trait: "purposeful" }
    ]
  },
  {
    id: 10,
    question: "What's your approach to work-life balance?",
    options: [
      { id: 'a', text: "Structured schedule with clear boundaries", trait: "methodical" },
      { id: 'b', text: "Flexible hours based on project needs", trait: "adaptable" },
      { id: 'c', text: "Results-focused regardless of hours", trait: "ambitious" },
      { id: 'd', text: "Balance of remote and office work", trait: "balanced" }
    ]
  }
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