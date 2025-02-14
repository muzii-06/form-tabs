import React from "react";

const ProjectInformation = () => {
  return (
    <div className="form-section">
      <label>Project</label>
      <select>
        <option>Select Project</option>
        <option>Project A</option>
        <option>Project B</option>
      </select>

      <label>Plot No</label>
      <input type="text" placeholder="Enter Plot No" />

      <label>Project Features</label>
      <textarea placeholder="Enter Features"></textarea>

      <label>Location</label>
      <input type="text" placeholder="Enter Location" />

      <label>Area</label>
      <input type="text" placeholder="Enter Area" />
    </div>
  );
};

export default ProjectInformation;
