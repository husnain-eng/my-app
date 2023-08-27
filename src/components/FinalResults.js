import React, { useState } from 'react';
import './FinalResults.css'

const StudentCard = ({ student }) => {
    return (
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{student.name}</h5>
          <p className="card-text">Reg No: {student.regNo}</p>
          <p className="card-text">Course Title: {student.courseTitle}</p>
          <p className="card-text">Course Code: {student.courseCode}</p>
          <p className="card-text">Total Marks: {student.totalMarks}</p>
          <p className="card-text">Obtained Marks: {student.obtainedMarks}</p>
        </div>
      </div>
    );
  };
  
  const StudentsList = ({ students }) => {
    return (
      <div className="row justify-content-center">
        {students.map((student, index) => (
          <div key={index} className="col-md-4">
            <StudentCard student={student} />
          </div>
        ))}
      </div>
    );
  };
  
  const FinalResults = () => {
    const [students] = useState([
      {
        name: 'John Doe',
        regNo: '12345',
        courseTitle: 'Mathematics',
        courseCode: 'MATH101',
        totalMarks: 100,
        obtainedMarks: 85,
      },
    ]);
  
    return (
      <div className='container text-center py-5'>
        <h1 className="mb-4">Student Results</h1>
        <StudentsList students={students} />
        <button className="btn submit-button " onClick={() => window.location.href = '/'}>Return to Home</button>
      </div>
    );
  };
  
  export default FinalResults;