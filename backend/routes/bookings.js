import express from "express";
import {
  createBooking,
  getDetailBooking,
  getAllBookings,
} from "../controllers/bookingController.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getDetailBooking);
router.get("/", verifyAdmin, getAllBookings);
export default router;
