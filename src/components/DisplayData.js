// src/components/DisplayData.js
import React from 'react';

const DisplayData = ({ formData }) => (
  <div className="display-container">
    <p><strong>Email:</strong> {formData.email}</p>
    <p><strong>Full Name:</strong> {formData.name}</p>
    <p><strong>Address:</strong> {formData.address1}, {formData.address2}</p>
    <p><strong>City:</strong> {formData.city}</p>
    <p><strong>Province:</strong> {formData.province}</p>
    <p><strong>Postal Code:</strong> {formData.postalCode}</p>
  </div>
);

export default DisplayData;
