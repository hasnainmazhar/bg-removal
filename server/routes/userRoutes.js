import express from "express";
import {
  clerkWebHooks,
  RazorpayPayments,
  userCredits,
  verifyRazorpay,
} from "../controllers/userController.js";
import authUser from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/webhooks", clerkWebHooks);
userRouter.get("/credits", authUser, userCredits);
userRouter.post("/pay-razor", authUser, RazorpayPayments);
userRouter.post("/verify-razor", verifyRazorpay);

export default userRouter;
