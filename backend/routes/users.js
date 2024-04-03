import express from "express";
import {
  createUser,
  getAllUsers,
  getDetailsOfUser,
  updateUser,
  deleteUser,
} from "./../controllers/userController.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create new user
// router.post("/", createUser);
//get all users
router.get("/", verifyAdmin, getAllUsers);
//get Details of User
router.get("/:id", verifyUser, getDetailsOfUser);
//update user
router.put("/:id", verifyUser, updateUser);
//delete user
router.delete("/:id", verifyUser, deleteUser);

export default router;
