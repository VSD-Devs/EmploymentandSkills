import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rotate-45 flex items-center justify-center">
                <div className="-rotate-45 text-zinc-900 font-bold">Y</div>
              </div>
              <span className="text-xl font-bold tracking-tight">YORKSHIRE PATHWAYS</span>
            </Link>
            <p className="mt-4 text-zinc-400 text-sm">
              Connecting Yorkshire's future workforce with opportunities for growth and development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                  About SYMCA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/career-quiz" className="text-zinc-400 hover:text-white transition-colors">
                  Career Quiz
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-zinc-400 hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-zinc-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>South Yorkshire Employment & Skills Hub</li>
              <li>South Yorkshire Mayoral Combined Authority</li>
              <li>South Yorkshire</li>
              <li>
                <a href="mailto:info@yorkshireskills.org" className="hover:text-white transition-colors">
                  info@yorkshireskills.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-zinc-400 text-sm text-center">
            © {new Date().getFullYear()} Yorkshire Skills Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer