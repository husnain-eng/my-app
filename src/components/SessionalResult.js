import React, { useState } from 'react';
import assign1 from './assign1.png';
import './SessionalResult.css';

const SessionalResult = () => {
  const [quizMarks, setQuizMarks] = useState({});
  const [assignmentMarks, setAssignmentMarks] = useState({});
  const [internalMarks, setInternalMarks] = useState('');
  const [regNo, setRegNo] = useState('');
  const [showMarks, setShowMarks] = useState(false);

  const handleCheckNowClick = () => {
    // Simulate fetching data from your backend based on the regNo
    // For now, I'll keep it simple
    if (regNo === '12345') { // Replace '12345' with your actual registration number
      setQuizMarks({
        Quiz1: 85,
        Quiz2: 70,
        Quiz3: 95,
        Quiz4: 60,
        Quiz5: 80,
      });
      setAssignmentMarks({
        Assignment1: 90,
        Assignment2: 75,
        Assignment3: 85,
        Assignment4: 70,
        Assignment5: 95,
      });
      setInternalMarks('A');
      setShowMarks(true); // Show marks after fetching data
    } else {
      // Clear the data if regNo is not valid
      setQuizMarks({});
      setAssignmentMarks({});
      setInternalMarks('');
      setShowMarks(false);
    }
  };

  return (
    <div className="container text-center">
      <div className="product col-lg-3 col-md-4 col-12 mx-auto">
        <img className="img-fluid mb-3" src={assign1} alt="" />
        <h5 className="p-name">Sessional Result</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Registration Number"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleCheckNowClick}>Check Now</button>
        {showMarks && (
          <div className="mt-3 marks-container">
            <div className="marks-column">
              <h6>Quiz Marks</h6>
              <ul className="list-unstyled">
                {Object.keys(quizMarks).map((quiz, index) => (
                  <li key={index}>{`${quiz}: ${quizMarks[quiz]}`}</li>
                ))}
              </ul>
            </div>
            <div className="marks-column">
              <h6>Assignment Marks</h6>
              <ul className="list-unstyled">
                {Object.keys(assignmentMarks).map((assignment, index) => (
                  <li key={index}>{`${assignment}: ${assignmentMarks[assignment]}`}</li>
                ))}
              </ul>
            </div>
            <div className="marks-column">
              <h6>Internal Marks</h6>
              <p>{internalMarks}</p>
            </div>
          </div>
        )}
      </div>
      {showMarks && (
        <div className="mt-1">
          <button className="btn submit-button" onClick={() => window.location.href = '/'}>Return to Home</button>
        </div>
      )}
    </div>
  );
};

export default SessionalResult;