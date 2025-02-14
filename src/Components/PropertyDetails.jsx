import React from "react";

const PropertyDetails = () => {
  return (
    <div className="form-section">
      <label>Bedrooms</label>
      <input type="number" min="0" placeholder="0" />

      <label>Bathrooms</label>
      <input type="number" min="0" placeholder="0" />

      <label>Floor</label>
      <input type="text" placeholder="Enter Floor" />

      <label>Block</label>
      <input type="text" placeholder="Enter Block" />

      <label>Square Feet</label>
      <input type="text" placeholder="Enter Area in Sqft" />
    </div>
  );
};

export default PropertyDetails;
