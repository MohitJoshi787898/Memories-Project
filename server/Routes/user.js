import express from "express";
import {signIn,signUp} from"../Controlers/users.js"
const routes=express.Router();

routes.post("/signUpUser",signUp);

routes.post("/signInUser",signIn);


export default routes;