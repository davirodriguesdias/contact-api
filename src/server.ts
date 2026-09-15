import express from "express";
import {router} from "./routes";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running in Port ${PORT}`)
})

app.use("/", router);