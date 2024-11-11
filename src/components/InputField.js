import React from 'react';

const InputField = ({ label, name, value, onChange, placeholder }) => (
  <div>
    <label>{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default InputField;
