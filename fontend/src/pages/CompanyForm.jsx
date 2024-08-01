import React, { useState } from "react";
import CompanyDetails from "../components/form/CompanyDetailsForm";
import SocialMediaUrls from "../components/form/SocialMediaForm";
import DomainSelection from "../components/form/DomainForm";
import PaymentDetails from "../components/form/PaymentForm";
import { addCompany } from "../services/apiMethods";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function CompanyForm() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    email: "",
    phone: "",
    profileImg: "",
    whatsapp: "",
    instagram: "",
    facebook: "",
    linkedin: "",
    x: "",
    domainType: "Default Design",
    domain: "",
    paymentMethod: "Online Payment",
    paymentStatus: "Pending",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    about: "",
    phone: "",
    profileImg: "",
    domain: "",
  });

  const validateStep = (currentStep) => {
    let isValid = true;
    let tempErrors = {};

    switch (currentStep) {
      case 1:
        if (!formData.name) {
          tempErrors.name = "Name is required.";
          isValid = false;
        }
        if (!formData.email) {
          tempErrors.email = "Email is required.";
          isValid = false;
        }
        if (!formData.about) {
          tempErrors.about = "About is required.";
          isValid = false;
        }
        if (!formData.phone) {
          tempErrors.phone = "Phone is required.";
          isValid = false;
        }
        if (!formData.profileImg) {
          tempErrors.profileImg = "Profile Image URL is required.";
          isValid = false;
        }
        setErrors(tempErrors);
        return isValid;
      case 2:
        return true; 
      case 3:
        // if (formData.domainType === "Personal URL" && !formData.domain) {
        //   setErrors(prev => ({ ...prev, domain: "Domain is required for Personal URL." }));
        //   return false;
        // }
        // setErrors(prev => ({ ...prev, domain: "" }));
        return true;
      case 4:
        return true; 
      default:
        return false;
    }
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    } else {
      setError("Please fill out all required fields.");
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await addCompany(formData);
      toast('Company added successfully!')
      setSuccess("Company added successfully!");
      console.log(response);
      navigate(`/congratulations/${response.company.nfcCode}`);
      console.log(response);
    } catch (error) {
      setError("Failed to add company. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pl-16 flex h-2/3 items-center gap-5 w-full">
      <div className="w-1/2 flex">
      <img src="https://printthatnow.com/wp-content/uploads/2023/06/NFC-Card.jpg" 
      className=""
      alt="" />
      </div>
      <div className="w-1/2">
        {success && <p className="text-green-500">{success}</p>}
        {/* {error && <p className="text-red-500">{error}</p>} */}
        {step === 1 && (
          <CompanyDetails
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            errors={errors}

          />
        )}
        {step === 2 && (
          <SocialMediaUrls
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <DomainSelection
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 4 && (
          <PaymentDetails
            formData={formData}
            handleChange={handleChange}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
}

export default CompanyForm;
