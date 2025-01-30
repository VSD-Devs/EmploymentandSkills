import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/advice" className="hover:text-blue-400">Advice</a></li>
              <li><a href="/engage" className="hover:text-blue-400">Engage</a></li>
              <li><a href="/learn" className="hover:text-blue-400">Learn</a></li>
              <li><a href="/whats-happening" className="hover:text-blue-400">What's happening?</a></li>
              <li><a href="/about-us" className="hover:text-blue-400">About us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">West Yorkshire Combined Authority</h3>
            <address className="not-italic">
              <p>Wellington House</p>
              <p>40-50 Wellington Street</p>
              <p>Leeds</p>
              <p>LS1 2DE</p>
            </address>
          </div>

          {/* Regional Map */}
          <div>
            <div className="bg-white p-4 rounded-lg">
              <img
                src="/images/region-map.svg"
                alt="Map of South Yorkshire region"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src="/images/combined-authority-logo.svg" alt="Combined Authority" className="h-12" />
              <img src="/images/northern-powerhouse-logo.svg" alt="Northern Powerhouse" className="h-12" />
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Instagram size={24} /></a>
            </div>
          </div>

          {/* Copyright and Legal */}
          <div className="mt-8 text-sm text-gray-400 flex flex-wrap justify-center md:justify-start gap-4">
            <span>© 2024</span>
            <a href="/terms" className="hover:text-white">Terms & Conditions</a>
            <a href="/privacy" className="hover:text-white">Privacy and Cookie Policy</a>
            <a href="/accessibility" className="hover:text-white">Accessibility Statement</a>
            <a href="/sitemap" className="hover:text-white">Sitemap</a>
            <a href="/cookie-preferences" className="hover:text-white">Cookie preferences</a>
          </div>
          <div className="mt-4 text-sm text-gray-400 text-center md:text-left">
            Powered by uMotif
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;