import React from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Button from "../Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { pink } from '@mui/material/colors';

const SocialMediaUrls = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <>
      <div className="flex w-2/3 flex-col gap-5">
        <div className="flex w-full justify-center">
          <p className="text-lg text-gray-600 font-semibold">
            Give Your Social Media Handlings
          </p>
        </div>
        <TextField
          id="company-whatsapp"
          label="WhatsApp"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <WhatsAppIcon color="success"/>
              </InputAdornment>
            ),
          }}
          fullWidth
          value={formData.whatsapp}
          onChange={handleChange("whatsapp")}
        />
        <TextField
          id="company-instagram"
          label="Instagram"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <InstagramIcon sx={{ color: pink[500] }}/>
              </InputAdornment>
            ),
          }}
          fullWidth
          value={formData.instagram}
          onChange={handleChange("instagram")}
        />
        <TextField
          id="company-facebook"
          label="Facebook"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FacebookIcon color="primary"/>
              </InputAdornment>
            ),
          }}
          fullWidth
          value={formData.facebook}
          onChange={handleChange("facebook")}
        />
        <TextField
          id="company-linkedin"
          label="LinkedIn"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkedInIcon color="primary"/>
              </InputAdornment>
            ),
          }}
          fullWidth
          value={formData.linkedin}
          onChange={handleChange("linkedin")}
        />
        <TextField
          id="company-x"
          label="X"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <XIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
          value={formData.x}
          onChange={handleChange("x")}
        />
        <div className="flex justify-between gap-3">
          <Button className="w-1/2" text="Back" handleClick={prevStep} />
          <Button className="w-1/2" text="Next" handleClick={nextStep} />
        </div>
      </div>
    </>
  );
};

export default SocialMediaUrls;
