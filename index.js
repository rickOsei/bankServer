const express = require("express");
const server = express();
const routes = require("./routes/bank_routes");
const connectDB = require("./db/connect");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();

// middlewares
server.use(express.json());
server.use(express.static("./public"));
// Routes
server.use("/bank", routes);
// Handle request not found
server.use(notFound);
// Handle errors
server.use(errorHandler);

// // routes
// server.get("/bank", getAllBanks);
// server.post("/bank", createBank);
// server.put("/bank/:id", updateBank);
// server.get("/bank/:id", getSingleBank)
// server.delete("/bank/:id", deleteBank);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    server.listen(port, () => console.log("server is ready"));
  } catch (error) {
    console.log(error);
  }
};

start();
