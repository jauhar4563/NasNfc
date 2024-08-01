import express from "express";
import {
  addCompany,
  getCompanyUrl,
  getAllCompanies,
  getCompanyData,
} from "../controllers/companyController.js";

const router = express.Router();

router.post("/add-compnay", addCompany);
router.get("/get-companies", getAllCompanies);
router.get("/get-companyData/:nfcCode", getCompanyData);
router.get("/:nfcCode", getCompanyUrl);

export default router;
