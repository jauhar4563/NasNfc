import React from "react";
import { TextField } from "@mui/material";
import Button from "../Button";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InputAdornment from "@mui/material/InputAdornment";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ImageIcon from '@mui/icons-material/Image';

const CompanyDetails = ({ formData, handleChange, nextStep,errors  }) => {
  return (
    <div className="flex w-2/3 flex-col gap-5">
      <div className="flex justify-center">
        <p className="text-xl font-medium text-gray-600"> Company Details</p>
      </div>
      <TextField
        id="company-name"
        label="Company Name"
        variant="standard"
        fullWidth
        value={formData.name}
        onChange={handleChange("name")}
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        id="standard-multiline-static"
        label="About"
        multiline
        rows={4}
        variant="standard"
        fullWidth
        value={formData.about}
        onChange={handleChange("about")}
        error={!!errors.about}
        helperText={errors.about}
     
      />
      <TextField
        id="company-email"
        label="Email"
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AlternateEmailIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        value={formData.email}
        onChange={handleChange("email")}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        id="company-phone"
        label="Phone"
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocalPhoneIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        value={formData.phone}
        onChange={handleChange("phone")}
        error={!!errors.phone}
        helperText={errors.phone}
      />
      
      <TextField
        id="profile-img"
        label="Profile Image URL"
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ImageIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        value={formData.profileImg}
        onChange={handleChange("profileImg")}
        error={!!errors.profileImg}
        helperText={errors.profileImg}
      />
      <Button className="w-full" text="Next" handleClick={nextStep} />
    </div>
  );
};

export default CompanyDetails;
