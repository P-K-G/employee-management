import React, { useState } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import AddEmployeeForm from './components/AddEmployeeForm';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleAddEmployee = () => {
    setRefresh(!refresh);
  };

  return (
    <section className="home" id ="home">
      <AddEmployeeForm onAddEmployee={handleAddEmployee} />
      <div className="line"></div>
      <div className="home-img">
        <h2>Employee List</h2>
        <div>
          <div className="dec1">Description</div>
          <div className="img1">Image</div>
        </div>
        <EmployeeList refresh={refresh} />
      </div>
    </section>
  );
}

export default App;