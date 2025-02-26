import React from 'react';
import { Link } from 'react-router-dom';
import {
  ClipboardDocumentCheckIcon,
  CalendarIcon,
  UserGroupIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const DashboardCard = ({ title, count, icon: Icon, link, linkText }) => (
  <div className="card">
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-3xl font-bold text-primary mt-2">{count}</p>
      </div>
      <div className="bg-primary bg-opacity-10 p-3 rounded-full">
        <Icon className="w-6 h-6 text-primary" />
      </div>
    </div>
    {link && (
      <Link
        to={link}
        className="text-primary hover:text-secondary font-medium text-sm inline-flex items-center"
      >
        {linkText}
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    )}
  </div>
);

const Dashboard = () => {
  // Sample data - replace with actual data from your backend
  const stats = {
    aiReports: 5,
    appointments: 8,
    patients: 120,
    prescriptions: 25,
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Today's AI Reports"
          count={stats.aiReports}
          icon={ClipboardDocumentCheckIcon}
          link="/ai-reports"
          linkText="View all reports"
        />
        <DashboardCard
          title="Today's Appointments"
          count={stats.appointments}
          icon={CalendarIcon}
          link="/appointments"
          linkText="View schedule"
        />
        <DashboardCard
          title="Total Patients"
          count={stats.patients}
          icon={UserGroupIcon}
          link="/patients"
          linkText="View all patients"
        />
        <DashboardCard
          title="Recent Prescriptions"
          count={stats.prescriptions}
          icon={DocumentTextIcon}
          link="/prescriptions"
          linkText="View prescriptions"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Patient History */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Patient History</h2>
          <div className="space-y-4">
            {/* Add patient history items here */}
            <p className="text-gray-500 text-sm">No recent patient history</p>
          </div>
        </div>

        {/* Today's AI Reports */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's AI Reports</h2>
          <div className="space-y-4">
            {/* Add AI report items here */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Report #12345</p>
                <p className="text-sm text-gray-500">Pending Review</p>
              </div>
              <Link
                to="/ai-reports/12345"
                className="btn-primary text-sm"
              >
                Review
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
