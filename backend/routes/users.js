import express from "express";
import {
  createUser,
  getAllUsers,
  getDetailsOfUser,
  updateUser,
  deleteUser,
} from "./../controllers/userController.js";
const router = express.Router();

//create new user
router.post("/", createUser);
//get all users
router.get("/", getAllUsers);
//get Details of User
router.get("/:id", getDetailsOfUser);
//update user
router.put("/:id", updateUser);
//delete user
router.delete("/:id", deleteUser);

export default router;
