import React from "react";
import { TextField, MenuItem } from "@mui/material";
import Button from "../Button";

const DomainSelection = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className="flex w-2/3 flex-col gap-5">
       <div className="flex justify-center">
        <p className="text-xl font-medium text-gray-600"> Domain Details</p>
      </div>
      <TextField
        id="company-domain-type"
        select
        label="Domain Type"
        variant="standard"
        fullWidth
        value={formData.domainType}
        onChange={handleChange("domainType")}
      >
        <MenuItem value="Personal URL">Personal URL</MenuItem>
        <MenuItem value="Default Design">Default Design</MenuItem>
      </TextField>
      {formData.domainType === "Personal URL" && (
        <TextField
          id="company-domain"
          label="Domain"
          variant="standard"
          fullWidth
          value={formData.domain}
          onChange={handleChange("domain")}
        />
      )}
      <div className="flex justify-between gap-3">
        <Button className="w-1/2" text="Back" handleClick={prevStep} />
        <Button className="w-1/2" text="Next" handleClick={nextStep} />
      </div>
    </div>
  );
};

export default DomainSelection;
