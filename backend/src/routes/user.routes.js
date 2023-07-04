const express = require("express");
const { getUsers } = require('../controllers/user.controller.js');
const { protect } = require("../middlewares/authMiddleware.js");
// const {protectRole}  = require("../middlewares/roleMiddleware.js");


const userRouter = express.Router();


// userRouter.route("/users").get( ()=>(protectRole(["sudoAdmin","superAdmin"])), getUsers);


userRouter.route("/users").get(protect, getUsers);



module.exports = userRouter;