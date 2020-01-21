import express from "express";
import { Container, injectable } from "inversify";
import "reflect-metadata";
import autoload from "./autoload";
import TestController from "./controllers/TestController";
import TestRoute from "./routes/TestRoute";
import TestService from "./services/TestService";

const app = express();
const port = 3000; // default port to listen

const container = new Container();

// container.bind<TestService>(TestService).toSelf().inSingletonScope();
// container.bind<TestController>(TestController).toSelf().inSingletonScope();
// container.bind<TestRoute>(TestRoute).toSelf().inSingletonScope();

// container.bind<TestService>("TestService").to(TestService).inSingletonScope();
// container.bind<TestController>("TestController").to(TestController).inSingletonScope();
// container.bind<TestRoute>("TestRoute").to(TestRoute).inSingletonScope();

// container.resolve(TestRoute).routeRegister(app);

autoload(container).then(() => {
    // const testService = container.resolve(TestService);
    // console.log("testService", testService);
    // console.log("container", container);
    // const testController = container.resolve(TestController);
    // console.log("testController", testController);
    // const testRoute = container.resolve(TestRoute);
    // console.log("testRoute", testRoute);
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
