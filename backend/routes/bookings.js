import express from "express";
import { createBooking } from "../controllers/bookingController.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyUser, createBooking);
export default router;
