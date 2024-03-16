import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
// import userRoute from "./routes/users.js";

const app = express();
dotenv.config();
// dotenv.config(
//   {
//     path: './.env'
//   }
// );

// const connectDB = () => {
//   const connectionInstance = mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then (() => {
//     // console.log(connectionInstance)
//     console.log(`MongoDB Connected Successfully!! DB HOST: ${connectionInstance.connection.host}`)
//     // console.log(`MongoDB Connected Successfully!!`);
//   })
//   .catch ((error) => {
//     console.error('MongoDB Connection Failed:', error)
//   });
// };
const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log(`MongoDB Connected Successfully!! DB HOST: ${mongoose.connection.host}`);
    })
    .catch((error) => {
      console.error('MongoDB Connection Failed:', error);
    });
};


// const connect = () => {
//   mongoose.connect(process.env.MONGO)
//   .then(() => {
//     console.log("Connected to DB");    
//   })
//   .catch((err) => {
//     throw err;
//   });
// };

//middlewares
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);
// app.use("/api/users", userRoute);

//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(3000, () => {
  // connect();
  connectDB();
  console.log("Connected to Server");
});
