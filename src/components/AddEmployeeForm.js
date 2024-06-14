import React, { useState } from 'react';

const AddEmployeeForm = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [postName, setPostName] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          contact,
          post: postName,
          gender,
        }),
      });
      const data = await response.json();
      onAddEmployee(data);
      setName('');
      setEmail('');
      setContact('');
      setPostName('');
      setGender('');
      alert("Adding employee success");
    } catch (error) {
      alert("Error adding employee");
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div className="home-content">
      <h2>Enroll Here..</h2>
      <form id="myForm" onSubmit={handleSubmit}>
        <div className="input-box">
          <label>Full Name:</label>
          <input type="text" name="name" id="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="input-box">
          <label>Email ID:</label>
          <input className="input" type="email" id="email" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-box">
          <label>Contact No.:</label>
          <input type="number" id="num" name="contact" placeholder="Mobile Number" value={contact} onChange={(e) => setContact(e.target.value)} required />
        </div>
        <div className="input-box">
          <label>Post Name:</label>
          <input type="text" id="url" name="postName" placeholder="Post Name" value={postName} onChange={(e) => setPostName(e.target.value)} required />
        </div>
        <div className="check-box">
          <label>Gender:</label><br />
          <input type="radio" id="male" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} required />Male
          <input type="radio" id="female" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} required />Female
          <input type="radio" id="other" name="gender" value="Other" checked={gender === 'Other'} onChange={(e) => setGender(e.target.value)} required />Other
        </div>
        <button className="btn" type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
