import React from "react";

const ReferenceDetails = () => {
  return (
    <div className="form-section">
      <label>Name</label>
      <input type="text" placeholder="Enter Name" />

      <label>CNIC</label>
      <input type="text" placeholder="Enter CNIC" />

      <label>Cell</label>
      <input type="tel" placeholder="Enter Phone Number" />

      <label>Remarks</label>
      <textarea placeholder="Enter Remarks"></textarea>
    </div>
  );
};

export default ReferenceDetails;
