import express from "express";
import bodyParser from "body-parser";
import tweetRoutes from "./routes/tweetRoutes";
import userRoutes from "./routes/userRoutes";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/tweets", tweetRoutes);
app.use("/users", userRoutes);

export default app;
