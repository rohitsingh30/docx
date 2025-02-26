import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: '⌂', label: 'Dashboard' },
    { path: '/ai-reports', icon: '🤖', label: 'AI Reports' },
    { path: '/appointments', icon: '📅', label: 'Appointments' },
    { path: '/chat', icon: '💬', label: 'Chat' },
    { path: '/settings', icon: '⚙️', label: 'Settings' }
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-indigo-600">MedAI</h1>
      </div>
      
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-indigo-100 text-indigo-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-8">
        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-gray-300 mr-3" />
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-500">Patient</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
