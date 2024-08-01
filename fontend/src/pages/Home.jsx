import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import NfcCard from "../components/NfcCard";
import { getCompanies } from "../services/apiMethods";
import nfcGif from '../assets/nfg-gif.gif'
import Footer from "../components/Footer";

function Home() {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await getCompanies();
        setCompanies(data);
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
    <div className="flex flex-col gap-8 mt-5">
      <div className="w-full gap-8 flex flex-col justify-between">
        <div className="flex flex-wrap gap-5 pl-16 items-center">
          {companies.map((company) => (
            <div onClick={() => handleCardClick(company)}> <NfcCard key={company._id} company={company} /></div>
           
          ))}
        </div>
        <div className="flex justify-center">

          <Button
            text={"Get Your New NFC Card"}
            className={"h-full"}
            handleClick={() => navigate("/add-company")}
          />
        </div>
      </div>
      <div className="w-full flex border justify-center">
          <div className="w-1/2 flex items-center">
            <img src={nfcGif} alt=""  className="w-5/6"/>
          </div>
          <div className="w-1/2 flex justify-center flex-col gap-4">
            <p className="font-bold text-lg'">NFC Technology</p>
            <p className="font-semibold text-3xl">All it takes is a tap.</p>
            <p className="w-2/3 ">Every day millions and millions of people use NFC technology to connect to things and the world around them. It’s the super-fast and secure way to pay for things, ride the train, unlock a door, start your car, and even connect to the brands we all love.</p>
          </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;
