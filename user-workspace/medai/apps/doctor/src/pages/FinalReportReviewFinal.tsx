import React from 'react';
import { commonStyles } from '../../user/src/styles/commonStyles'; // Import common styles from user directory

const FinalReportReviewFinal: React.FC = () => {
    const handleConfirm = () => {
        // Logic to confirm the review
    };

    return (
        <div style={commonStyles.container}> {/* Apply common container style */}
            <h1 style={commonStyles.headerTitle}>Final Report Review Final</h1>
            <section>
                <h2>Diagnosis</h2>
                {/* Display diagnosis details */}
            </section>
            <section>
                <h2>Suggested Medicines</h2>
                {/* List of suggested medicines */}
            </section>
            <section>
                <h2>Recommended Tests</h2>
                {/* List of recommended tests */}
            </section>
            <section>
                <h2>Dosages</h2>
                {/* Display dosages */}
            </section>
            <button style={commonStyles.primaryButton} onClick={handleConfirm}>
                Confirm Review
            </button>
        </div>
    );
};

export default FinalReportReviewFinal;
