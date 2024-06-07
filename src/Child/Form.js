
import React, { useState } from 'react';

const Form = ({ handleFormSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();  
    handleFormSubmit(inputValue);
    setInputValue(''); }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
