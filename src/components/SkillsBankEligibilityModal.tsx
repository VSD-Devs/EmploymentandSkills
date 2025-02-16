'use client'

import React from 'react'
import { X } from 'lucide-react'
import SkillsBankEligibilityChecker from './SkillsBankEligibilityChecker'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SkillsBankEligibilityModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
        <div className="p-6">
          <SkillsBankEligibilityChecker />
        </div>
      </div>
    </div>
  )
} 