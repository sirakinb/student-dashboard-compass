
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Settings, User } from 'lucide-react';

/**
 * Layout component that provides a sidebar and top bar structure for the application
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The content to render inside the layout
 * @param {string} props.title - The page title to display in the top bar
 */
const Layout: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { path: '/students', label: 'Students', icon: <Users size={20} /> },
    { path: '/coaches', label: 'Coaches', icon: <User size={20} /> },
    { path: '/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-[#0f1117]">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar shadow-lg border-r border-gray-800/50">
        <div className="p-5 border-b border-gray-800/50">
          <h1 className="text-xl font-bold text-gradient">Student Compass</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-1.5">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 p-2.5 rounded-lg transition-all duration-200 ${
                    location.pathname === item.path 
                      ? 'bg-sidebar-accent text-white' 
                      : 'text-gray-400 hover:bg-sidebar-accent/50 hover:text-gray-200'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top bar */}
        <header className="glass-morphism border-0 border-b border-gray-800/50 shadow-md">
          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold text-gradient">{title}</h1>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
