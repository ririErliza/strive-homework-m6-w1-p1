import express from 'express';
import listEndpoints from 'exppress-list-endpoints'
import usersRouter from './services/users';

const server = express()

const port = 3001

// _____________ Endpoints ______________

server.use("/users", usersRouter) // all the endpoints in the usersRouter will have http://localhost:3001/users as a URL


server.listen(port, () =>{
    console.table(listEndpoints(server))
    console.log(`Server is running on port ${port}`) // backtick (don't forget)
})