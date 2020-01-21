import express from "express";
import { Container, injectable } from "inversify";
import "reflect-metadata";
import autoload from "./autoload";

const app = express();
const port = 3000; // default port to listen

const container = new Container();

autoload(app, container);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
