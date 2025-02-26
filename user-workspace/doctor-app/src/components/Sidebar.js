import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: HomeIcon },
    { path: '/ai-reports', label: 'AI Reports', icon: ClipboardDocumentCheckIcon },
    { path: '/appointments', label: 'Appointments', icon: CalendarIcon },
    { path: '/patients', label: 'Patients', icon: UserGroupIcon },
    { path: '/chat', label: 'Chat', icon: ChatBubbleLeftRightIcon },
    { path: '/settings', label: 'Settings', icon: Cog6ToothIcon },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <h1 className="text-xl font-bold text-primary">Doctor Portal</h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                location.pathname === item.path ? 'bg-primary bg-opacity-10 text-primary border-r-4 border-primary' : ''
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
