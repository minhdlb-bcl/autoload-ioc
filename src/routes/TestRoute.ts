import express from "express";
import { inject, injectable } from "inversify";
import TestController from "../controllers/TestController";
import IBase from "../interfaces/IBase";

@injectable()
class TestRoute implements IBase {
    public testController: TestController;
    public constructor(testController: TestController) {
        this.testController = testController;
    }

    public routeRegister(app: express.Express) {
        app.get("/", (req, res) => { this.testController.Test(req, res); });
    }
}

export default TestRoute;
