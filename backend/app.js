const express = require("express");
const app = express();
require("dotenv").config();
require("express-async-errors");
const connectDB = require("./database/connect");
const itemRouter = require("./routes/items");
const loginRouter = require("./routes/login");
const cors = require("cors");

const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

app.use(cors());
app.use(express.json());
app.use("/api/v1/", itemRouter);

app.use("/api/v1/", loginRouter);

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Database connection established successfully...");
    app.listen(port, console.log(`Server started on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

startServer();
