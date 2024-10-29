const express = require('express');
const userController = require('../controllers/userController');


const userRouter = express.Router();

userRouter.get("/", userController.getUsers);
userRouter.post("/", userController.createUser);
// app.get("/api/v1/users/:id", getUserById);
// app.patch("/api/v1/users/:id", updateUser);
// app.delete("/api/v1/users/:id", deleteUser)





module.exports = userRouter;
