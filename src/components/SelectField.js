// src/components/SelectField.js
import React from 'react';

const SelectField = ({ label, name, value, onChange }) => (
  <div>
    <label>{label}</label>
    <select name={name} value={value} onChange={onChange}>
      <option value="">Choose...</option>
      <option value="Alberta">Alberta</option>
      <option value="British Columbia">British Columbia</option>
      <option value="Manitoba">Manitoba</option>
      <option value="New Brunswick">New Brunswick</option>
      <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
      <option value="Nova Scotia">Nova Scotia</option>
      <option value="Ontario">Ontario</option>
      <option value="Prince Edward Island">Prince Edward Island</option>
      <option value="Quebec">Quebec</option>
      <option value="Saskatchewan">Saskatchewan</option>
    </select>
  </div>
);

export default SelectField;
