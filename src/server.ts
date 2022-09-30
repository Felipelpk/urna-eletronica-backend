import "reflect-metadata";
import express from "express";
import cors from 'cors';
import { routes } from "./routes";
import { AppDataSource } from "./data-source";

const app = express();

AppDataSource.initialize().then(() => {
    app.use(cors({
        origin: '*', //allowedOrigins,
    }));
    app.use(express.json()) // for parsing application/json
    app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    app.use(routes);
    app.listen(3001, () => console.log('Server is Running'));
})