// 1. POST 
// 2. GET 
// 3. GET (FOR SINGLE USER)
// 4. PUT 
// 5. DELETE 

import express from "express";


const usersRouter = express.Router()

//1.
usersRouter.post("/", async (req,res)=>{

    console.log("REQUEST BODY: ", req.body)

    const newUser = new UsersModel(req.body) // this is going to VALIDATE the req.body
    const savedUser = await newUser.save() // This saves the validated body into the users' collection

    res.send(savedUser)

})

//2.
usersRouter.get("/", async (req,res)=>{
    const users = await UsersModel.find()
    res.send(users)
})

//3.
usersRouter.get("/:id", async (req,res)=>{
    const user = await UsersModel.findById(req.params.userId)
    res.send(user)
})

//4.
usersRouter.put("/:id", async (req,res)=>{
    const updatedUser = await UsersModel.findByIdAndUpdate(
        req.params.userId, // WHO
        req.body, // HOW
        { new: true } // OPTIONS (if you want to obtain the updated user you should specify new: true)
      )
      res.send(updatedUser)
})

//5.
usersRouter.delete("/:id", async (req,res)=>{
    await UsersModel.findByIdAndDelete(req.params.userId)
    res.status(204).send()
})



export default usersRouter