//import bodyParser from "body-parser";
import express, { request } from "express";
//import { dirname } from "path";
//import { fileURLToPath } from "url";
//const __dirname = dirname(fileURLToPath(import.meta.url));
import {userRoutes} from './routes/userRoutes.js'
import { driverRoutes } from './routes/driverRoutes.js';

export const app= express();
export const port=3001;

app.use('/',userRoutes);
// (Use later)app.use('/',driverRoutes); 
//Last Middlewares 404
app.use((request,response,next)=>{
    response.json({message:'Invalid Url'})
})

//app.use(bodyParser.urlencoded({extended:true}));
/*app.post("/login ", (req, res) => {
  console.log(req.body);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./routes/userRoutes.js");
});*/

app.listen(port, (err) => {
    if(err){
        console.log(" Server Crash");
    }
    else{
    console.log(`Server running on port ${port}`);
    }
});