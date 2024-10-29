const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan"); // to logger messages 
require("dotenv").config();
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");



const app = express();

// app.use midddlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));



// mount the routes ====================
app.use("/api/v1/tours", tourRouter);
app.use("api/v1/users", userRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello from the server", app: "Natures tour" });
});

module.exports = app;