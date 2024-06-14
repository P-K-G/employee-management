import React, { useEffect, useState } from 'react';
import maleImage from './images/Male.png';
import femaleImage from './images/Female.png';

const EmployeeList = ({ refresh }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, [refresh]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:5000/employee');
      const data = await response.json();
      if (data) {
        setEmployees(data);
      } else {
        setEmployees([]); // Set to empty array if data.users is undefined
        alert(data);
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
      setEmployees([]); // Set to empty array in case of error
    }
  };
  const getImagePath = (gender) => {
    switch(gender.toLowerCase()) {
      case 'male':
        return maleImage;
      case 'female':
        return femaleImage;
      default:
        return maleImage; // Default image
    }
  };

  return (
    <div className="list">
      {employees.length > 0 ? (
        employees.map(employee => (
          <>
            <div className="dec" key={employee.id}>
              <h2>{employee.name}</h2>
              <h3>{employee.email}</h3>
              <h3>{employee.contact}</h3>
              <h3>{employee.post}</h3>
              <h3>{employee.gender}</h3>
            </div>
            <div className="img">
              <span>
                <img  src={getImagePath(employee.gender)}  alt={employee.name} />
              </span>
            </div>
          </>
        ))
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeList;
