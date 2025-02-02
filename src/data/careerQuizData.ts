export interface Career {
  title: string;
  description: string;
  salary: string;
  demand: string;
  progression: {
    entry: string;
    mid: string;
    senior: string;
  };
  localOpportunities: {
    employers: string[];
    courses: {
      provider: string;
      location: string;
      type: string;
    }[];
  };
}

export interface CareerPath {
  title: string;
  description: string;
  careers: Career[];
  traits: string[];
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
  paths: string[];
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
    question: "Which of these activities do you enjoy the most?",
    options: [
      { id: 'a', text: "Solving puzzles or working with numbers", paths: ["tech", "digital-tech", "manufacturing"] },
      { id: 'b', text: "Helping people and making a difference in their lives", paths: ["healthcare", "hospitality", "education"] },
      { id: 'c', text: "Working with tools, machines, or your hands", paths: ["manufacturing", "construction", "trades"] },
      { id: 'd', text: "Creating something new, like art, music, or stories", paths: ["creative", "creative-media", "digital-tech"] },
      { id: 'e', text: "Organising, planning, and working with details", paths: ["logistics-transport", "business", "hospitality-tourism"] },
      { id: 'f', text: "Selling or persuading people about ideas", paths: ["business", "creative-media", "hospitality-tourism"] }
    ]
  },
  {
    id: 2,
    question: "When working on a project, what part excites you the most?",
    options: [
      { id: 'a', text: "Figuring out the most efficient way to get things done", paths: ["digital-tech", "manufacturing", "logistics-transport"] },
      { id: 'b', text: "Collaborating with a team to bring ideas to life", paths: ["creative-media", "business", "digital-tech"] },
      { id: 'c', text: "Taking charge and making key decisions", paths: ["business", "hospitality-tourism", "logistics-transport"] },
      { id: 'd', text: "Coming up with creative and original solutions", paths: ["creative-media", "digital-tech", "manufacturing"] },
      { id: 'e', text: "Working independently and focusing on the details", paths: ["digital-tech", "construction", "manufacturing"] },
      { id: 'f', text: "Making sure everything is structured and follows a process", paths: ["healthcare", "logistics-transport", "manufacturing"] }
    ]
  },
  {
    id: 3,
    question: "Which work environment sounds the most appealing to you?",
    options: [
      { id: 'a', text: "A high-energy corporate office with lots of networking", paths: ["business", "digital-tech", "creative-media"] },
      { id: 'b', text: "A calm, research-driven space where you analyse and problem-solve", paths: ["digital-tech", "healthcare", "manufacturing"] },
      { id: 'c', text: "A hands-on setting like a workshop, lab, or outdoor space", paths: ["construction", "manufacturing", "healthcare"] },
      { id: 'd', text: "A creative and flexible environment where ideas flow freely", paths: ["creative-media", "digital-tech", "business"] },
      { id: 'e', text: "A structured and organised office where details matter", paths: ["logistics-transport", "business", "healthcare"] },
      { id: 'f', text: "A field-based job where you engage with people daily", paths: ["hospitality-tourism", "healthcare", "construction"] }
    ]
  },
  {
    id: 4,
    question: "How do you approach problem-solving?",
    options: [
      { id: 'a', text: "I look for logical and data-driven solutions", paths: ["digital-tech", "manufacturing", "business"] },
      { id: 'b', text: "I rely on creativity and thinking outside the box", paths: ["creative-media", "digital-tech", "business"] },
      { id: 'c', text: "I trust my instincts and make quick decisions", paths: ["hospitality-tourism", "business", "healthcare"] },
      { id: 'd', text: "I consult others and seek different perspectives", paths: ["healthcare", "hospitality-tourism", "creative-media"] },
      { id: 'e', text: "I prefer following established processes and best practices", paths: ["logistics-transport", "manufacturing", "healthcare"] },
      { id: 'f', text: "I experiment and try different hands-on methods", paths: ["construction", "manufacturing", "creative-media"] }
    ]
  },
  {
    id: 5,
    question: "Which of these sounds like your dream job?",
    options: [
      { id: 'a', text: "Managing a business or leading a team", paths: ["business", "hospitality-tourism", "logistics-transport"] },
      { id: 'b', text: "Designing or creating new products, content, or media", paths: ["creative-media", "digital-tech", "manufacturing"] },
      { id: 'c', text: "Helping others improve their health, education, or wellbeing", paths: ["healthcare", "hospitality-tourism", "creative-media"] },
      { id: 'd', text: "Working with technology, data, or solving complex problems", paths: ["digital-tech", "manufacturing", "business"] },
      { id: 'e', text: "Working outdoors, with my hands, or in a practical trade", paths: ["construction", "manufacturing", "logistics-transport"] },
      { id: 'f', text: "Planning events, organising details, or analysing trends", paths: ["hospitality-tourism", "business", "logistics-transport"] }
    ]
  },
  {
    id: 6,
    question: "What kind of challenges do you enjoy most?",
    options: [
      { id: 'a', text: "Negotiating and persuading others", paths: ["business", "creative-media", "hospitality-tourism"] },
      { id: 'b', text: "Designing or improving systems and processes", paths: ["digital-tech", "manufacturing", "logistics-transport"] },
      { id: 'c', text: "Finding creative solutions to new problems", paths: ["creative-media", "digital-tech", "manufacturing"] },
      { id: 'd', text: "Helping people and making an impact on their lives", paths: ["healthcare", "hospitality-tourism", "creative-media"] },
      { id: 'e', text: "Managing multiple tasks and keeping things organised", paths: ["logistics-transport", "business", "hospitality-tourism"] },
      { id: 'f', text: "Learning new technical or practical skills", paths: ["digital-tech", "construction", "manufacturing"] }
    ]
  },
  {
    id: 7,
    question: "How do you feel about working with others?",
    options: [
      { id: 'a', text: "I love working in a team and bouncing ideas off others", paths: ["creative-media", "business", "hospitality-tourism"] },
      { id: 'b', text: "I prefer working alone so I can focus and be productive", paths: ["digital-tech", "manufacturing", "construction"] },
      { id: 'c', text: "I enjoy a mix of both—some independent work, some teamwork", paths: ["manufacturing", "digital-tech", "logistics-transport"] },
      { id: 'd', text: "I like leading teams and motivating people towards a goal", paths: ["business", "hospitality-tourism", "healthcare"] },
      { id: 'e', text: "I prefer interacting with people in small, meaningful ways", paths: ["healthcare", "hospitality-tourism", "creative-media"] },
      { id: 'f', text: "I like collaborating on creative projects but value independence", paths: ["creative-media", "digital-tech", "manufacturing"] }
    ]
  },
  {
    id: 8,
    question: "What&apos;s your biggest motivation when choosing a career?",
    options: [
      { id: 'a', text: "High salary and financial success", paths: ["digital-tech", "business", "manufacturing"] },
      { id: 'b', text: "Freedom to be creative and express myself", paths: ["creative-media", "digital-tech", "hospitality-tourism"] },
      { id: 'c', text: "Stability and security in a structured job", paths: ["logistics-transport", "healthcare", "manufacturing"] },
      { id: 'd', text: "Helping others and making a difference", paths: ["healthcare", "hospitality-tourism", "creative-media"] },
      { id: 'e', text: "Excitement, adventure, or working outdoors", paths: ["construction", "hospitality-tourism", "creative-media"] },
      { id: 'f', text: "Constant learning and problem-solving", paths: ["digital-tech", "manufacturing", "business"] }
    ]
  },
  {
    id: 9,
    question: "If you had to pick one of these skills as your strongest, which would it be?",
    options: [
      { id: 'a', text: "Communication and persuasion", paths: ["business", "creative-media", "hospitality-tourism"] },
      { id: 'b', text: "Logical thinking and data analysis", paths: ["digital-tech", "manufacturing", "logistics-transport"] },
      { id: 'c', text: "Creativity and design", paths: ["creative-media", "digital-tech", "manufacturing"] },
      { id: 'd', text: "Practical skills like fixing or building things", paths: ["construction", "manufacturing", "logistics-transport"] },
      { id: 'e', text: "Organising and structuring information", paths: ["logistics-transport", "business", "digital-tech"] },
      { id: 'f', text: "Leadership and decision-making", paths: ["business", "hospitality-tourism", "healthcare"] }
    ]
  },
  {
    id: 10,
    question: "Which statement best describes your approach to work?",
    options: [
      { id: 'a', text: "I want to be my own boss and build something from scratch", paths: ["business", "creative-media", "digital-tech"] },
      { id: 'b', text: "I like stability and clear career progression", paths: ["healthcare", "logistics-transport", "manufacturing"] },
      { id: 'c', text: "I prefer a dynamic, ever-changing work environment", paths: ["creative-media", "hospitality-tourism", "digital-tech"] },
      { id: 'd', text: "I enjoy mastering technical skills and applying them", paths: ["digital-tech", "manufacturing", "construction"] },
      { id: 'e', text: "I want to help others and contribute to society", paths: ["healthcare", "hospitality-tourism", "creative-media"] },
      { id: 'f', text: "I thrive in creative, fast-paced settings", paths: ["creative-media", "digital-tech", "hospitality-tourism"] }
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
          senior: "Lead Data Scientist"
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
          ]
        }
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

// Career paths and their associated careers will be defined here
export const careerPaths: { [key: string]: CareerPath } = {
  // Add career paths here
}; 