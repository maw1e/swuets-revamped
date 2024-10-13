import express from "express";
import signup from "../controller/signupController.js";

const route = express.Router();

route.post('/signup', signup);

export default route;

