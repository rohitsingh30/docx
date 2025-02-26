import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Doctor Dashboard</h1>
            <section>
                <h2>Today's AI Reports</h2>
                {/* List of today's AI reports */}
            </section>
            <section>
                <h2>Upcoming Appointments</h2>
                {/* List of upcoming appointments */}
            </section>
            <section>
                <h2>No Recent Prescriptions</h2>
                {/* Display recent prescriptions if any */}
            </section>
        </div>
    );
};

export default Dashboard;
