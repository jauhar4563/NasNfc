import React from "react";
import { TextField, MenuItem } from "@mui/material";
import Button from "../Button";

const PaymentDetails = ({
  formData,
  handleChange,
  prevStep,
  handleSubmit,
  loading,
}) => {
  return (
    <div className="flex w-2/3 flex-col gap-5">
       <div className="flex justify-center">
        <p className="text-xl font-medium text-gray-600"> Payment Details</p>
      </div>
      <TextField
        id="payment-method"
        select
        label="Payment Method"
        variant="standard"
        fullWidth
        value={formData.paymentMethod}
        onChange={handleChange("paymentMethod")}
      >
        <MenuItem value="Online Payment">Online Payment</MenuItem>
        <MenuItem value="Cash Payment">Cash Payment</MenuItem>
      </TextField>
     
      <div className="flex justify-between gap-3">
        <Button className="w-1/2" text="Back" handleClick={prevStep} />
        <Button
          className="w-1/2"
          text={loading ? "Submitting..." : "Submit"}
          handleClick={handleSubmit}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default PaymentDetails;
