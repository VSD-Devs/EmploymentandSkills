import { 
  Briefcase, 
  Phone, 
  Mail, 
  Users, 
  Target, 
  Sparkles, 
  Clock, 
  CheckCircle2,
  FileCheck,
  X,
  MessageSquare,
  HelpCircle,
  GraduationCap,
  MapPin,
  Star,
  RefreshCw,
  PieChart,
  Award,
  Gauge,
  BookOpen,
  Lightbulb,
  Heart,
  ArrowRight,
  Clipboard,
  BarChart3,
  LineChart,
  PanelRight,
  Monitor,
  LucideIcon
} from 'lucide-react'

import { SkillCategory, CareerPath, FormStep, SuccessStory, Question } from './types'

// Images for the page
export const IMAGES = {
  hero: "/images/employment-support/hero.jpg",
  assessment: "/images/skills-bank-learning.jpg",
  pathfinder: "/images/employment-support/pathfinder.jpg",
  connectToWork: "/images/employment-support/connect-to-work.jpg",
  workWell: "/images/employment-support/work-well.jpg",
  integrated: "/images/employment-support/integrated.jpg",
  story1: "/images/employment-support/story1.jpg",
  story2: "/images/employment-support/story2.jpg",
  story3: "/images/employment-support/story3.jpg",
}

// Skill categories for assessment
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Work Readiness",
    icon: Briefcase,
    description: "Skills that make you ready for employment",
    skills: [
      {
        name: "CV & Application Skills",
        description: "Ability to create professional CVs and job applications",
        levels: ["Beginner", "Developing", "Competent", "Advanced"]
      },
      {
        name: "Interview Skills",
        description: "Confidence and preparation for job interviews",
        levels: ["Beginner", "Developing", "Competent", "Advanced"]
      },
      {
        name: "Time Management",
        description: "Ability to manage time effectively and meet deadlines",
        levels: ["Beginner", "Developing", "Competent", "Advanced"]
      }
    ]
  },
  {
    name: "Digital",
    icon: Monitor,
    description: "Technology and computer skills",
    skills: [
      {
        name: "Basic Computer Skills",
        description: "Using computers for everyday tasks",
        levels: ["Beginner", "Developing", "Competent", "Advanced"]
      },
      {
        name: "Online Job Search",
        description: "Finding and applying for jobs online",
        levels: ["Beginner", "Developing", "Competent", "Advanced"]
      },
      {
        name: "Social Media",
        description: "Using social media for networking and job hunting",
        levels: ["Beginner", "Developing", "Competent", "Advanced"]
      }
    ]
  },
  {
    name: "Communication",
    icon: MessageSquare,
    description: "Interpersonal and workplace communication skills",
    skills: [
      {
        name: "Verbal Communication",
        description: "Expressing yourself clearly when speaking",
        levels: ["Beginner", "Developing", "Competent", "Advanced"]
      },
      {
        name: "Written Communication",
        description: "Writing clearly and effectively",
        levels: ["Beginner", "Developing", "Competent", "Advanced"]
      },
      {
        name: "Teamwork",
        description: "Working effectively with others",
        levels: ["Beginner", "Developing", "Competent", "Advanced"]
      }
    ]
  }
]

// Career paths for the pathfinder section
export const CAREER_PATHS: CareerPath[] = [
  {
    id: "customer-service",
    title: "Customer Service & Support",
    description: "Help businesses deliver great customer experiences through various support channels.",
    image: IMAGES.pathfinder,
    skills: ["Communication", "Problem-Solving", "Patience", "Empathy"],
    jobExamples: [
      "Customer Service Representative",
      "Call Centre Agent",
      "Help Desk Support",
      "Retail Assistant"
    ],
    programmes: ["Connect to Work Programme", "Integrated Support Network"]
  },
  {
    id: "administration",
    title: "Administration & Office Support",
    description: "Keep organisations running smoothly with organisational and administrative skills.",
    image: IMAGES.pathfinder,
    skills: ["Organisation", "Attention to Detail", "Computer Skills", "Time Management"],
    jobExamples: [
      "Administrative Assistant",
      "Office Clerk",
      "Data Entry Operator",
      "Receptionist"
    ],
    programmes: ["WorkWell Service", "Connect to Work Programme"]
  },
  {
    id: "healthcare-support",
    title: "Healthcare Support",
    description: "Make a difference in people's lives by supporting healthcare professionals.",
    image: IMAGES.pathfinder,
    skills: ["Empathy", "Reliability", "Communication", "Physical Stamina"],
    jobExamples: [
      "Healthcare Assistant",
      "Care Worker",
      "Support Worker",
      "Patient Transport"
    ],
    programmes: ["Connect to Work Programme", "WorkWell Service"]
  }
]

// Form steps for the application process
export const FORM_STEPS: FormStep[] = [
  {
    title: "Personal Details",
    fields: ["fullName", "email", "phone", "dateOfBirth"],
    icon: Users
  },
  {
    title: "Location",
    fields: ["address", "city", "postcode"],
    icon: MapPin
  },
  {
    title: "Your Situation",
    fields: ["healthCondition", "currentStatus", "employmentGoals"],
    icon: Clipboard
  },
  {
    title: "Programme Selection",
    fields: ["preferredProgramme", "referralSource", "additionalSupport"],
    icon: Target
  }
]

// Success stories for testimonials
export const SUCCESS_STORIES: SuccessStory[] = [
  {
    name: "Sarah Johnson",
    image: IMAGES.story1,
    challenge: "After being diagnosed with anxiety and depression, Sarah struggled to find work that accommodated her mental health needs.",
    solution: "Through our Connect to Work programme, Sarah received specialised support including confidence building workshops and workplace adjustment advice.",
    outcome: "Now thriving as an Administrative Assistant with flexible working hours",
    quote: "The team understood my challenges and helped me find a job that works around my wellbeing needs. I never thought I'd find work I enjoy that also supports my health."
  },
  {
    name: "James Taylor",
    image: IMAGES.story2,
    challenge: "James had been unemployed for 2 years after a workplace injury and had lost confidence in his ability to return to work.",
    solution: "Our WorkWell Service provided personalised rehabilitation support and identified transferable skills for a career change.",
    outcome: "Successfully transitioned to a Customer Service role with an inclusive employer",
    quote: "They didn't just help me find any job - they helped me find the right job for my situation. The ongoing support made all the difference."
  },
  {
    name: "Priya Patel",
    image: IMAGES.story3,
    challenge: "As a single parent with caring responsibilities, Priya needed flexible work but had gaps in her employment history.",
    solution: "The Integrated Support Network connected Priya with childcare resources, skills training, and employers offering family-friendly policies.",
    outcome: "Secured part-time work with a pathway to increase hours as family circumstances allow",
    quote: "I thought my caring responsibilities meant I couldn't work, but they helped me find a balance that works for my family and provides financial stability."
  }
]

// Questions for the eligibility checker
export const QUESTIONS: Question[] = [
  {
    question: "Are you aged 16 or over?",
    options: ["Yes", "No"],
    disqualifyIf: "No"
  },
  {
    question: "Do you have a health condition or disability that affects your daily life?",
    options: ["Yes", "No", "Prefer not to say"],
    disqualifyIf: null
  },
  {
    question: "Which best describes your current situation?",
    options: [
      "Currently employed but struggling",
      "Recently unemployed (less than 12 months)",
      "Long-term unemployed (more than 12 months)",
      "Never been employed before",
      "Student or recent graduate"
    ],
    disqualifyIf: null
  },
  {
    question: "Where do you live?",
    options: [
      "England or Wales",
      "Scotland",
      "Northern Ireland",
      "Outside the UK"
    ],
    disqualifyIf: "Outside the UK"
  },
  {
    question: "What is your main employment goal?",
    options: [
      "Find any job as soon as possible",
      "Find a job that matches my skills",
      "Change careers completely",
      "Progress in my current career",
      "Start my own business"
    ],
    disqualifyIf: null
  }
]

// Common barriers for job seekers
export const COMMON_BARRIERS = [
  "Health condition",
  "Lack of qualifications",
  "Caring responsibilities",
  "Transportation issues",
  "Digital access limitations",
  "Interview anxiety",
  "CV/Resume gaps",
  "Limited work experience",
  "Age concerns",
  "Language barriers"
] 