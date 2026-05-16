import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart3 } from 'lucide-react';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
      isActive 
        ? 'bg-[#14532d] text-white shadow-sm' 
        : 'text-slate-600 hover:text-[#14532d] hover:bg-slate-50'
    }`;

  return (
    <nav className="bg-white border-b sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo te click korle home page e ashbe */}
        <Link to="/" className="text-2xl font-extrabold text-[#244D3F] tracking-tight">
          Keen<span className="text-black">Keeper</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>
            <Home size={18} />
            <span className="hidden sm:inline">Home</span>
          </NavLink>
          <NavLink to="/timeline" className={linkClass}>
            <Clock size={18} />
            <span className="hidden sm:inline">Timeline</span>
          </NavLink>
          <NavLink to="/stats" className={linkClass}>
            <BarChart3 size={18} />
            <span className="hidden sm:inline">Stats</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

import { Link } from 'react-router-dom';
export default Navbar;