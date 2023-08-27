import React, { useState } from 'react';
import './AssignmentForm.css';

const AssignmentForm = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    regNo: '',
    degreeType: 'BS',
    degreeName: '',
    sectionName: ''
  });
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log('File uploaded:', file);
      console.log('Student information:', studentInfo);
      setFile(null);
      setFileName('');
      setStudentInfo({
        name: '',
        regNo: '',
        degreeType: 'BS',
        degreeName: '',
        sectionName: ''
      });
      setUploadSuccess(true);
    }
  };

  return (
    <div >
      <div>
      <h2 className="text-center mt-5 mb-4">Upload Question Assignment</h2>
      {uploadSuccess && (
        <div className="alert alert-success" role="alert">
          File has been successfully uploaded!
        </div>
      )}
      <form onSubmit={handleSubmit} className="mx-auto mt-2 form-container" >
        <div className="mb-1">
          <label htmlFor="name" className="form-label">Student Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={studentInfo.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="regNo" className="form-label">Registration Number:</label>
          <input
            type="text"
            className="form-control"
            id="regNo"
            name="regNo"
            value={studentInfo.regNo}
            onChange={handleInputChange}
          />
        </div>
        {/* <div className="mb-2">
          <label htmlFor="degreeType" className="form-label">Degree Type (BS/MS):</label>
          <select
            className="form-select"
            id="degreeType"
            name="degreeType"
            value={studentInfo.degreeType}
            onChange={handleInputChange}
          >
            <option value="BS">BS</option>
            <option value="MS">MS</option>
          </select>
        </div> */}
        <div className="mb-2">
          <label htmlFor="courseTitle" className="form-label">Course title:</label>
          <input
            type="text"
            className="form-control"
            id="courseTitle"
            name="courseTitle"
            value={studentInfo.courseTitle}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="courseCode" className="form-label">Course Code:</label>
          <input
            type="text"
            className="form-control"
            id="courseCode"
            name="courseCode"
            value={studentInfo.courseCode}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="assignmentFile" className="form-label">Select a Word or PDF file:</label>
          <input
            type="file"
            accept=".doc, .docx, .pdf"
            className="form-control"
            id="assignmentFile"
            onChange={handleFileChange}
          />
        </div>
        {fileName && <p>Selected file: {fileName}</p>}
        <button type="submit" className="btn btn-primary">Upload</button>
        <button onClick={() => window.location.href = '/'}>Return to Home</button>
      </form>
      </div>
    </div>
  );
};

export default AssignmentForm;