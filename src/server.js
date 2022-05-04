import express from 'express';
import listEndpoints from 'express-list-endpoints'
import usersRouter from './services/users/index.js';
import authorsRouter from './services/users/index.js';
import mongoose from 'mongoose';

const server = express()

const port = 3001

server.use(express.json()) // if you don't add this line BEFORE the endpoints, all requests' bodies will be UNDEFINED

// _____________ Endpoints ______________

server.use("/users", usersRouter) // all the endpoints in the usersRouter will have http://localhost:3001/users as a URL
server.use("/authors", authorsRouter)
// _____________ Database Connection ______________

mongoose.connect("mongodb+srv://test:test@cluster0.4cpy1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB`)
server.listen(port, () =>{
    console.table(listEndpoints(server))
    console.log(`Server is running on port ${port}`) // backtick (don't forget)
})

})