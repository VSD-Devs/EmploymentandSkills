import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="bg-white border-b border-zinc-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-zinc-900 rotate-45 flex items-center justify-center">
                <div className="-rotate-45 text-white font-bold">Y</div>
              </div>
              <span className="text-xl font-bold tracking-tight">YORKSHIRE PATHWAYS</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/educators" className="text-zinc-600 hover:text-zinc-900 transition-colors text-sm uppercase tracking-wide">Educators</Link>
            <Link to="/businesses" className="text-zinc-600 hover:text-zinc-900 transition-colors text-sm uppercase tracking-wide">Businesses</Link>
            <Link to="/adults" className="text-zinc-600 hover:text-zinc-900 transition-colors text-sm uppercase tracking-wide">Adults</Link>
            <Link to="/young-people" className="text-zinc-600 hover:text-zinc-900 transition-colors text-sm uppercase tracking-wide">Young people</Link>
            <Link to="/parents" className="text-zinc-600 hover:text-zinc-900 transition-colors text-sm uppercase tracking-wide">Parents</Link>
            <div className="h-4 w-px bg-zinc-200"></div>
            <button className="flex items-center space-x-1 bg-zinc-900 text-white px-4 py-2 rounded-full text-sm hover:bg-zinc-800 transition-colors">
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation; 