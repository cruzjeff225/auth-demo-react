import express from "express";
import cors from "cors"
import UserRoute from "./routes/UserRoute.js"
//Creating our server
const app = express()
//Become JSON response
app.use(express.json())
//Cors
app.use(cors())

//Define a port
const port = process.env.port ?? 3000

app.use(UserRoute)

//Running the server
app.listen(port,()=>{
    console.log('Server running at the port: ' + port);
})
