import express from "express";
import {
//   registerUserController,
  loginUserController,
//   googleAuthController,


} from "../controllers/userController.js";


const router = express.Router();

// router.post("/register", registerUserController);
router.post("/login", loginUserController);
// router.post("/google-auth", googleAuthController);

export default router;