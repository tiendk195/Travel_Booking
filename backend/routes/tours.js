import express from "express";
import {
  createTour,
  getAllTours,
  getDetailsOfTour,
  updateTour,
  deleteTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} from "./../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create new tour
router.post("/", verifyAdmin, createTour);
//get all tours
router.get("/", getAllTours);
//get Details of Tour
router.get("/:id", getDetailsOfTour);
//update tour
router.put("/:id", verifyAdmin, updateTour);
//delete tour
router.delete("/:id", verifyAdmin, deleteTour);
//search tour
router.get("/search/getTourBySearch", getTourBySearch);
//feaured tour
router.get("/search/getFeaturedTour", getFeaturedTour);
//get tour counts
router.get("/search/getTourCount", getTourCount);
export default router;
