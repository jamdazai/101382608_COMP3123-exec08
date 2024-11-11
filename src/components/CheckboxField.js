import React from 'react';

const CheckboxField = ({ label, name, checked, onChange }) => (
  <div className="checkbox-container">
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <label>{label}</label>
  </div>
);

export default CheckboxField;
