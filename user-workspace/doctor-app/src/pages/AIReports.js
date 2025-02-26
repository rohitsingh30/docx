import React from 'react';
import { Link } from 'react-router-dom';
import {
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

const StatusBadge = ({ status }) => {
  const statusStyles = {
    pending: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-green-100 text-green-800',
    urgent: 'bg-red-100 text-red-800',
  };

  const StatusIcon = {
    pending: ClockIcon,
    completed: CheckCircleIcon,
    urgent: ExclamationCircleIcon,
  }[status];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status]}`}>
      <StatusIcon className="w-4 h-4 mr-1" />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const AIReports = () => {
  // Sample data - replace with actual data from your backend
  const reports = [
    {
      id: '1',
      patientName: 'John Doe',
      age: 35,
      date: '2024-01-20',
      status: 'pending',
      symptoms: ['Fever', 'Cough', 'Fatigue'],
    },
    {
      id: '2',
      patientName: 'Jane Smith',
      age: 28,
      date: '2024-01-20',
      status: 'urgent',
      symptoms: ['Headache', 'Dizziness'],
    },
    {
      id: '3',
      patientName: 'Mike Johnson',
      age: 45,
      date: '2024-01-19',
      status: 'completed',
      symptoms: ['Back Pain', 'Stiffness'],
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">AI Reports</h1>
        <div className="flex space-x-4">
          <select className="input-field text-sm">
            <option value="">All Reports</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="urgent">Urgent</option>
          </select>
          <input
            type="date"
            className="input-field text-sm"
            defaultValue={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Symptoms
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {report.patientName}
                      </div>
                      <div className="text-sm text-gray-500">Age: {report.age}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.date}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {report.symptoms.map((symptom, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={report.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Link
                      to={`/ai-reports/${report.id}`}
                      className="text-primary hover:text-secondary font-medium"
                    >
                      Review Report
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AIReports;
