
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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-600">Student Compass</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${
                    location.pathname === item.path ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
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
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
