import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/signupRoute.js";


const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("DB Connected Successfully!");
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING ON PORT: ${PORT}`  )
        });
    })
    .catch((error) => {
        console.log(error);
    })

    

app.use('/api', route);


