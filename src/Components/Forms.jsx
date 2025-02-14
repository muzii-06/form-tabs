import React, { useState } from "react";
import "./Forms.css";
import BasicInformation from "./BasicInformation";
import PropertyDetails from "./PropertyDetails";
import ProjectInformation from "./ProjectInformation";
import TenantInformation from "./TenantInformation";
import ReferenceDetails from "./ReferenceDetails";

const Forms = () => {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="container">
      <h2 className="form-title">Rent Owner Form</h2>

      {/* Navigation Tabs */}
      <ul className="nav-tabs">
        {[
          { key: "basic", label: "Basic Information" },
          { key: "property", label: "Property Details" },
          { key: "project", label: "Project Information" },
          { key: "tenant", label: "Tenant Information" },
          { key: "reference", label: "Reference Details" },
        ].map((tab) => (
          <li
            key={tab.key}
            className={`nav-item ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="form-content">
        {activeTab === "basic" && <BasicInformation />}
        {activeTab === "property" && <PropertyDetails />}
        {activeTab === "project" && <ProjectInformation />}
        {activeTab === "tenant" && <TenantInformation />}
        {activeTab === "reference" && <ReferenceDetails />}
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </div>
  );
};

export default Forms;
