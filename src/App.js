
import React, { useState } from 'react';
import ChildComponent from './Child/Form';

const App = () => {
  const [formData, setFormData] = useState('');

  
  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Form Data: {formData}</p>
      <ChildComponent handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
