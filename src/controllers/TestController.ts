import express from "express";
import { injectable } from "inversify";
import IBase from "../interfaces/IBase";
import TestService from "../services/TestService";

@injectable()
class TestController implements IBase {
    public testService: TestService;
    public constructor(testService: TestService) {
        this.testService = testService;
    }

    public Test(req: express.Request, res: express.Response) {
        return res
            .status(200)
            .json({
                messge: this.testService.getMessage("Inversify IoC In NodeJS")
            });
    }
}

export default TestController;
