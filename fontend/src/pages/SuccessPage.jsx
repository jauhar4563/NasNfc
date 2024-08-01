import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import NfcCard from "../components/NfcCard";
import { getCompanyData } from "../services/apiMethods";

function Congratulations() {

  const {nfcCode} = useParams();
  const [company, setCompany] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await getCompanyData(nfcCode);
        setCompany(data);
      } catch (error) {
        console.error("Failed to fetch companies", error);
      }
    };

    fetchCompanies();
  }, []);
  const handleCardClick = (company) => {
    if (company.domainType === "Personal URL" && company.domain) {
      window.location.href = company.domain;
    } else {
      navigate(`/${company.nfcCode}`);
    }
  };


  return (
    <div className="flex flex-col items-center  justify-center p-10">
     {company &&  <div onClick={handleCardClick}><NfcCard company={company} /></div>}
      <h1 className="text-3xl text-green-500 mt-8 font-bold mb-5">Congratulations!</h1>
      <p className="text-xl mb-5">You have successfully created an NFC card for your company.</p>
    </div>
  );
}

export default Congratulations;
