import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

// Define skill assessment type
export interface SkillLevel {
  name: string
  description: string
  levels: string[]
}

export interface SkillCategory {
  name: string
  icon: LucideIcon
  description: string
  skills: SkillLevel[]
}

// Define career path type
export interface CareerPath {
  id: string
  title: string
  description: string
  image: string
  skills: string[]
  programmes: string[]
  jobExamples: string[]
}

// Define form data type
export interface FormData {
  fullName: string
  email: string
  phone: string
  dateOfBirth: string
  address: string
  city: string
  postcode: string
  healthCondition: string
  currentStatus: string
  employmentGoals: string
  preferredProgramme: string
  referralSource: string
  additionalSupport: string
  skills: Record<string, number>
  barriers: string[]
  [key: string]: string | number | string[] | Record<string, number>
}

// Define success story type
export interface SuccessStory {
  name: string
  image: string
  outcome: string
  challenge: string
  solution: string
  quote: string
}

// Define eligibility question type
export interface Question {
  question: string
  options: string[]
  disqualifyIf: string | null
}

// Define form step type
export interface FormStep {
  title: string
  fields: string[]
  icon: LucideIcon
}

// Define prop types for components
export interface HeroSectionProps {
  setShowEligibilityChecker: (show: boolean) => void
  setActiveSection: (section: string) => void
}

export interface StatsSectionProps {
  stats: Array<{
    figure: string
    label: string
    icon: React.ComponentType<any>
  }>
}

export interface NavigationBarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  setShowEligibilityChecker: (show: boolean) => void
  isMobile?: boolean
}

export interface SkillsAssessmentSectionProps {
  setShowSkillsAssessment: (show: boolean) => void
}

export interface CareerPathfinderSectionProps {
  careerPaths: CareerPath[]
  selectedCareerPath: string | null
  setSelectedCareerPath: (id: string) => void
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  setShowSkillsAssessment: (show: boolean) => void
}

export interface ProgrammesSectionProps {
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

export interface SuccessStoriesSectionProps {
  stories: SuccessStory[]
  activeStory: number
  setActiveStory: React.Dispatch<React.SetStateAction<number>>
}

export interface ApplicationFormProps {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  formStep: number
  setFormStep: React.Dispatch<React.SetStateAction<number>>
  formSteps: FormStep[]
  formErrors: Record<string, string>
  setFormErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
  barriersTags: string[]
  setBarriersTags: React.Dispatch<React.SetStateAction<string[]>>
  commonBarriers: string[]
  showSubmitSuccess: boolean
  handleSubmit: (e: React.FormEvent) => Promise<void>
}

export interface SkillsAssessmentModalProps {
  showSkillsAssessment: boolean
  setShowSkillsAssessment: (show: boolean) => void
  currentSkillCategory: number
  setCurrentSkillCategory: React.Dispatch<React.SetStateAction<number>>
  skillsCompleted: boolean
  setSkillsCompleted: React.Dispatch<React.SetStateAction<boolean>>
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  barriersTags: string[]
  setBarriersTags: React.Dispatch<React.SetStateAction<string[]>>
  commonBarriers: string[]
  setActiveSection: (section: string) => void
}

export interface EligibilityCheckerModalProps {
  showEligibilityChecker: boolean
  setShowEligibilityChecker: (show: boolean) => void
  currentQuestion: number
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>
  answers: string[]
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>
  showResult: boolean
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>
  questions: Question[]
  isEligible: () => boolean
  suggestedProgramme: () => string
  resetChecker: () => void
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
} 