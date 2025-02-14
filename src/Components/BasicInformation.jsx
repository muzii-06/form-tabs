import React from "react";

const BasicInformation = () => {
  return (
    <div className="form-section">
      <label>ID</label>
      <input type="text" placeholder="Enter ID" />

      <label>Name</label>
      <input type="text" placeholder="Enter Name" />

      <label>Cast</label>
      <input type="text" placeholder="Enter Cast" />

      <label>Cell</label>
      <input type="tel" placeholder="Enter Phone Number" />

      <label>CNIC</label>
      <input type="text" placeholder="Enter CNIC" />
    </div>
  );
};

export default BasicInformation;
