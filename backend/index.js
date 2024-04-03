import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
dotenv.config();
const port = process.env.PORT || 9999;
const app = express();
const corsOptions = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};
//database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`Connect failed: ${error}`);
  }
};

//middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/tours", tourRoute);
app.use("/users", userRoute);
app.use("/auth", authRoute);

app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});
