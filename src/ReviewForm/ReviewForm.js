import React, { useState } from 'react';
import './ReviewForm.css'; // Add this for custom styling
import GiveReviews from '../GiveReviews/GiveReviews';
function ReviewForm() {
    // Sample doctor data
    const doctors = [
        { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology' },
        { id: 2, name: 'Dr. Jane Smith', specialty: 'Dermatology' }
    ];

    // State to track which review form to show
    const [selectedDoctorId, setSelectedDoctorId] = useState(null);

    // State to track which doctor has a review submitted
    const [reviewSubmitted, setReviewSubmitted] = useState({});

    // Function to handle click event
    const handleReviewClick = (doctorId) => {
        if (selectedDoctorId === doctorId) {
            setSelectedDoctorId(null); // Hide the form
        } else {
            setSelectedDoctorId(doctorId); // Show the form
        }
    };

    // Function to handle review submission
    const handleReviewSubmit = (doctorId) => {
        setReviewSubmitted({ ...reviewSubmitted, [doctorId]: true });
        setSelectedDoctorId(null); // Hide form after submission
    };

    return (
        <div className='review-main'>
            <h2>Reviews</h2>
            <table>
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Specialty</th>
                        <th>Provide feedback</th>
                        <th>Review Given</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor, index) => (
                        <tr key={doctor.id}>
                            <td>{index + 1}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.specialty}</td>
                            <td>
                                <button
                                    onClick={() => handleReviewClick(doctor.id)}
                                    disabled={reviewSubmitted[doctor.id]}
                                >
                                    {reviewSubmitted[doctor.id] ? 'Review Submitted' : 'Click Here'}
                                </button>
                            </td>
                            <td>
                                {selectedDoctorId === doctor.id && (
                                    <GiveReviews
                                        doctor={doctor.name}
                                        onSubmit={() => handleReviewSubmit(doctor.id)}
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ReviewForm;