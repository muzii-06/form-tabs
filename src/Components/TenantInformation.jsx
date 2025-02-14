import React from "react";

const TenantInformation = () => {
  return (
    <div className="form-section">
      <label>Tenant Name</label>
      <input type="text" placeholder="Enter Name" />

      <label>CNIC</label>
      <input type="text" placeholder="Enter CNIC" />

      <label>Cell</label>
      <input type="tel" placeholder="Enter Phone Number" />

      <label>Note</label>
      <textarea placeholder="Additional Notes"></textarea>
    </div>
  );
};

export default TenantInformation;
