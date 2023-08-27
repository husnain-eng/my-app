import React, { useState } from 'react';
import axiosInstance from '../utils/axios-util';
import './AssignmentForm.css';

const AssignmentForm = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null)
  const [courseTitle, setCourseTitle] = useState('')
  const [courseCode, setCourseCode] = useState('')
  
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('courseTitle', courseTitle);
      formData.append('courseCode', courseCode);
      formData.append('file', file);

      try {
        await axiosInstance.post('/assignment/upload', formData);
        console.log('Assignment uploaded successfully');
      } catch (error) {
        console.error('Error uploading assignment:', error);
      }
    }
    else {
      console.error('Please select a file');
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
        <div className="mb-2">
          <label htmlFor="courseTitle" className="form-label">Course title:</label>
          <input
            type="text"
            className="form-control"
            id="courseTitle"
            name="courseTitle"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="courseCode" className="form-label">Course Code:</label>
          <input
            type="text"
            className="form-control"
            id="courseCode"
            name="courseCode"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
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