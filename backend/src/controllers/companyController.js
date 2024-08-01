import { Console } from "console";
import Company from "../models/companyModel.js";
import { nanoid } from 'nanoid';

export const addCompany = async (req, res) => {
    try {
      const {
        name,
        email,
        about,
        phone,
        profileImg,
        whatsapp,
        facebook,
        instagram,
        linkedin,
        x,
        domainType,
        domain,
        paymentMethod,
      } = req.body;
      const paymentStatus = paymentMethod==='Online Payment'?'Completed':'Pending'
      const nfcCode = nanoid();
  
      let finalDomain = domain;
      if (domainType === "Default Design") {
        finalDomain = `http://localhost:3000/${nfcCode}`;
      }
  
      const socialMediaLinks = [];
      if (whatsapp) socialMediaLinks.push({ platform: "whatsapp", link: whatsapp });
      if (facebook) socialMediaLinks.push({ platform: "facebook", link: facebook });
      if (instagram) socialMediaLinks.push({ platform: "instagram", link: instagram });
      if (linkedin) socialMediaLinks.push({ platform: "linkedin", link: linkedin });
      if (x) socialMediaLinks.push({ platform: "x", link: x });
  
      const newCompany = new Company({
        name,
        email,
        about,
        phone,
        profileImg,
        socialMedia: socialMediaLinks,
        domainType,
        domain: finalDomain,
        nfcCode,
        paymentMethod,
        paymentStatus,
      });
  
      await newCompany.save();
      console.log(newCompany);
  
      res.status(201).json({ message: "Company added successfully", company: newCompany });
    } catch (error) {
      console.error("Error adding company:", error); 
  
      if (error.code === 11000) {
        return res.status(400).json({ message: "Email or NFC code already exists" });
      }
  
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };



export const getCompanyUrl = async (req, res) => {
    try {
        const { nfcCode } = req.params;

        const company = await Company.findOne({ nfcCode });

        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.redirect(company.domain);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


export const getCompanyData = async (req, res) => {
    try {
        const { nfcCode } = req.params;
        console.log(nfcCode)
        const company = await Company.findOne({ nfcCode });

        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json(company );
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getAllCompanies = async (req, res) => {
    try {
        console.log("got here")
        const company = await Company.find();

        res.status(200).json(company );

        
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};