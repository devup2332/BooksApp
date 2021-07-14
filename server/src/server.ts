import express from "express";
import cors from "cors";
import morgan from "morgan";
import ApiRouter from "./routes/api.router";

const server = express();

//Configurations
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

//Routes
server.use("/api", ApiRouter);

server.listen(8000, () => {
  console.log("Server is running in port 8000");
});

export default server;
