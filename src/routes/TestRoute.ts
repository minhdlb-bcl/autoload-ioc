import express, { IRoute } from "express";
import { injectable } from "inversify";
import TestController from "../controllers/TestController";
import IRouting from "../interfaces/IRouting";

@injectable()
class TestRoute implements IRouting {
    public testController: TestController;
    public constructor(testController: TestController) {
        this.testController = testController;
    }

    public routeRegister(app: express.Express) {
        app.get("/", (req, res) => { this.testController.Test(req, res); });
    }
}

export default TestRoute;
