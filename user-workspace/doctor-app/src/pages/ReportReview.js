import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ReportReview = () => {
  const { id } = useParams();

  // Sample data - replace with actual data from your backend
  const report = {
    id: id,
    patientName: 'John Doe',
    age: 35,
    diagnosis: 'Flu',
    suggestedMedicines: ['Paracetamol', 'Cough Syrup'],
    recommendedTests: ['Blood Test'],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Review Report for {report.patientName}</h1>
      <p className="text-gray-700">Age: {report.age}</p>
      <p className="mt-4"><strong>Diagnosis:</strong> {report.diagnosis}</p>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Suggested Medicines:</h2>
        <ul className="list-disc list-inside">
          {report.suggestedMedicines.map((medicine, index) => (
            <li key={index}>{medicine}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Recommended Tests:</h2>
        <ul className="list-disc list-inside">
          {report.recommendedTests.map((test, index) => (
            <li key={index}>{test}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Link to="/ai-reports" className="btn-primary mr-4">Back to Reports</Link>
        <button className="btn-primary">Confirm Review</button>
      </div>
    </div>
  );
};

export default ReportReview;
