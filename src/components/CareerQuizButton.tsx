import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import CareerQuiz from './CareerQuiz'

interface CareerQuizButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function CareerQuizButton({ className = '', variant = 'primary' }: CareerQuizButtonProps) {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  const buttonStyles = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200',
    secondary: 'bg-white text-emerald-600 border border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50'
  }

  return (
    <>
      <button
        onClick={() => setIsQuizOpen(true)}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${buttonStyles[variant]} ${className}`}
      >
        <Sparkles className="w-5 h-5" />
        Take Career Quiz
      </button>

      <CareerQuiz 
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />
    </>
  )
} 