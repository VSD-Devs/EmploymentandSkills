'use client'

import React from 'react'
import { X } from 'lucide-react'
import SkillsDiagnosticTool from './SkillsDiagnosticTool'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const SkillsDiagnosticModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
          {/* Close button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              type="button"
              className="rounded-full bg-white/90 p-2 text-slate-400 hover:text-slate-600 focus:outline-none"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Modal header */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 px-6 py-5 text-white">
            <h3 className="text-2xl font-bold">
              Business Skills Diagnostic
            </h3>
            <p className="mt-1 text-blue-100">
              Seek the right training and funding options for your business
            </p>
          </div>
          
          {/* Modal body - Skills Diagnostic Tool */}
          <SkillsDiagnosticTool />
        </div>
      </div>
    </div>
  )
}

export default SkillsDiagnosticModal 