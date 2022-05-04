// 1. POST 
// 2. GET 
// 3. GET (FOR SINGLE USER)
// 4. PUT 
// 5. DELETE 

import express from "express";

const usersRouter = express.Router()

//1.
usersRouter.post("/", (req,res)=>{})

//2.
usersRouter.get("/", (req,res)=>{})

//3.
usersRouter.get("/:id", (req,res)=>{})

//4.
usersRouter.put("/:id", (req,res)=>{})

//5.
usersRouter.delete("/:id", (req,res)=>{})



export default usersRouter