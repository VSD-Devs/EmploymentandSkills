'use client';

import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  contrast: 'normal' | 'high' | 'highest';
  textHighlight: 'none' | 'all' | 'headers' | 'links';
  highlightColor: string;
  dyslexicFont: boolean;
}

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActivated, setIsActivated] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 100,
    lineHeight: 1.5,
    letterSpacing: 0,
    contrast: 'normal',
    textHighlight: 'none',
    highlightColor: '#FFEB3B',
    dyslexicFont: false,
  });

  useEffect(() => {
    // Load saved activation state
    const savedActivation = localStorage.getItem('accessibilityActivated');
    if (savedActivation === 'true') {
      setIsActivated(true);
      // Only load and apply settings if activated
      const savedSettings = localStorage.getItem('accessibilitySettings');
      if (savedSettings) {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
        applySettings(parsedSettings);
      }
    }
  }, []);

  const applySettings = (newSettings: AccessibilitySettings) => {
    if (!isActivated) return;
    
    const body = document.body;
    
    // Apply basic text settings
    body.style.fontSize = `${newSettings.fontSize}%`;
    body.style.lineHeight = newSettings.lineHeight.toString();
    body.style.letterSpacing = `${newSettings.letterSpacing}px`;

    // Apply contrast settings
    if (newSettings.contrast === 'high') {
      body.style.filter = 'contrast(1.2)';
    } else if (newSettings.contrast === 'highest') {
      body.style.filter = 'contrast(1.4)';
    } else {
      body.style.filter = '';
    }

    // Apply text highlighting
    const allText = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');
    allText.forEach(element => {
      (element as HTMLElement).style.backgroundColor = '';
    });

    if (newSettings.textHighlight !== 'none') {
      let selector = '';
      switch (newSettings.textHighlight) {
        case 'all':
          selector = 'p, h1, h2, h3, h4, h5, h6, span';
          break;
        case 'headers':
          selector = 'h1, h2, h3, h4, h5, h6';
          break;
        case 'links':
          selector = 'a';
          break;
      }
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        (element as HTMLElement).style.backgroundColor = newSettings.highlightColor + '40';
      });
    }
    
    if (newSettings.dyslexicFont) {
      body.style.fontFamily = '"OpenDyslexic", sans-serif';
    } else {
      body.style.fontFamily = '';
    }

    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings));
  };

  const updateSettings = (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  };

  const toggleActivation = () => {
    const newActivation = !isActivated;
    setIsActivated(newActivation);
    localStorage.setItem('accessibilityActivated', newActivation.toString());
    
    if (!newActivation) {
      // Reset all styles when deactivating
      const body = document.body;
      body.style.fontSize = '';
      body.style.lineHeight = '';
      body.style.letterSpacing = '';
      body.style.fontFamily = '';
      body.style.filter = '';
      
      // Reset text highlighting
      const allText = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');
      allText.forEach(element => {
        (element as HTMLElement).style.backgroundColor = '';
      });

      document.documentElement.classList.remove('accessibility-active');
    } else {
      // Apply settings when activating
      document.documentElement.classList.add('accessibility-active');
      applySettings(settings);
    }
  };

  return (
    <div className="fixed right-4 top-24 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
        aria-label="Toggle accessibility settings"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-72">
          <h2 className="text-lg font-semibold mb-4">Accessibility Settings</h2>
          
          <div className="space-y-4">
            <div className="border-b pb-4 mb-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isActivated}
                  onChange={toggleActivation}
                  className="rounded"
                />
                <span className="text-sm font-medium">Enable Accessibility Features</span>
              </label>
            </div>

            {isActivated && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-1">Text Size</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="80"
                      max="200"
                      value={settings.fontSize}
                      onChange={(e) => updateSettings('fontSize', parseInt(e.target.value))}
                      className="w-full"
                    />
                    <span className="text-sm w-12">{settings.fontSize}%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Line Height</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="1"
                      max="2"
                      step="0.1"
                      value={settings.lineHeight}
                      onChange={(e) => updateSettings('lineHeight', parseFloat(e.target.value))}
                      className="w-full"
                    />
                    <span className="text-sm w-12">{settings.lineHeight}x</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Letter Spacing</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="0"
                      max="5"
                      value={settings.letterSpacing}
                      onChange={(e) => updateSettings('letterSpacing', parseInt(e.target.value))}
                      className="w-full"
                    />
                    <span className="text-sm w-12">{settings.letterSpacing}px</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Contrast</label>
                  <select
                    value={settings.contrast}
                    onChange={(e) => updateSettings('contrast', e.target.value)}
                    className="w-full p-2 rounded border"
                  >
                    <option value="normal">Normal</option>
                    <option value="high">High Contrast</option>
                    <option value="highest">Highest Contrast</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Text Highlighting</label>
                  <select
                    value={settings.textHighlight}
                    onChange={(e) => updateSettings('textHighlight', e.target.value)}
                    className="w-full p-2 rounded border mb-2"
                  >
                    <option value="none">No Highlighting</option>
                    <option value="all">All Text</option>
                    <option value="headers">Headers Only</option>
                    <option value="links">Links Only</option>
                  </select>
                  {settings.textHighlight !== 'none' && (
                    <input
                      type="color"
                      value={settings.highlightColor}
                      onChange={(e) => updateSettings('highlightColor', e.target.value)}
                      className="w-full h-8 rounded cursor-pointer"
                    />
                  )}
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.dyslexicFont}
                      onChange={(e) => updateSettings('dyslexicFont', e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm font-medium">Dyslexic-friendly Font</span>
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityToolbar; 