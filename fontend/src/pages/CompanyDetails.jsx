import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  WhatsApp,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  LocalPhone,
  AlternateEmail,
} from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import { getCompanyData } from "../services/apiMethods";
import { pink } from "@mui/material/colors";

function CompanyProfile() {
  const { nfcCode } = useParams();
  const [company, setCompany] = useState(null);
  const [message, setMessage] = useState("");

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

  const handleGetInTouch = () => {
    const email = company.email;
    const subject = encodeURIComponent(message);
    window.location.href = `mailto:${email}?subject=${subject}`;
  };

  if (!company) {
    return <p>Loading...</p>;
  }

  const getSocialMediaLink = (platform, link) => {
    if (platform === "whatsapp") {
      return `https://wa.me/${link}`;
    }
    return link;
  };

  const getIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "whatsapp":
        return <WhatsApp color="success" fontSize="large" />;
      case "facebook":
        return <Facebook color="primary" fontSize="large" />;
      case "instagram":
        return <Instagram sx={{ color: pink[500] }} fontSize="large" />;
      case "linkedin":
        return <LinkedIn color="primary" fontSize="large" />;
      case "twitter":
        return <Twitter />;
      default:
        return null;
    }
  };
  return (
    <div className="h-screen w-full p-5">
      <div className="flex w-full justify-center  p-4">
        <div className="bg-white w-full h-full  rounded-lg overflow-hidden flex">
          <div className="w-2/5  p-4 flex  justify-center items-center">
            <img src={company.profileImg} alt="" className="w-80 h-80 mb-4" />
          </div>
          <div className="w-3/5 p-8 flex flex-col justify-center">
            <div className="flex flex-col gap-5">
              <p className="text-lg font-semibold">
                We are {"          "}
                <span className="text-5xl font-semibold text-blue-500">
                  '{company.name}'
                </span>
              </p>
              <p className="text-lg font-normal">{company.about}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-5 items-center w-full ">
        <div>
          <p className="text-3xl text-gray-600 font-medium">
            Get In Touch With Us
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <LocalPhone fontSize="small" />{" "}
          <p className=" font-medium text-lg">{company.phone}</p>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here"
            className=" p-2 border border-gray-300 h-14 px-5 w-80 rounded-md mb-4"
          />
          <button
            onClick={handleGetInTouch}
            className="bg-gray-500 text-white px-4 h-14 rounded-md hover:bg-blue-600"
          >
            <AlternateEmail /> Get In Touch
          </button>
        </div>
        <div className="flex justify-center gap-3 mt-4 space-x-4">
          {company.socialMedia.map((item, index) => (
            <a
              href={getSocialMediaLink(item.platform, item.link)}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500"
            >
              {getIcon(item.platform)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
