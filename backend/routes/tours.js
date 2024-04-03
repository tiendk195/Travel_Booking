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
const router = express.Router();

//create new tour
router.post("/", createTour);
//get all tours
router.get("/", getAllTours);
//get Details of Tour
router.get("/:id", getDetailsOfTour);
//update tour
router.put("/:id", updateTour);
//delete tour
router.delete("/:id", deleteTour);
//search tour
router.get("/search/getTourBySearch", getTourBySearch);
//feaured tour
router.get("/search/getFeaturedTour", getFeaturedTour);
//get tour counts
router.get("/search/getTourCount", getTourCount);
export default router;
