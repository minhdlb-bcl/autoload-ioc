import glob from "glob";
import { Container } from "inversify";
import path from "path";
import IBase from "./interfaces/IBase";

import TestController from "./controllers/TestController";
import TestRoute from "./routes/TestRoute";
import TestService from "./services/TestService";

export default async function autoload(container: Container): Promise<void> {
    await glob.sync("**/services/*.js").map(async (file) => {
        const injectClass = await import(path.resolve(file));
        container.bind<IBase>(injectClass.default).toSelf().inSingletonScope();
    });

    await glob.sync("**/controllers/*.js").map(async (file) => {
        const injectClass = await import(path.resolve(file));
        container.bind<IBase>(injectClass.default).toSelf().inSingletonScope();
    });

    await glob.sync("**/routes/*.js").map(async (file) => {
        const injectClass = await import(path.resolve(file));
        container.bind<IBase>(injectClass.default).toSelf().inSingletonScope();
    });

    const testService = container.resolve(TestService);
    console.log("testService ===>", testService);
    const testController = container.resolve(TestController);
    console.log("testController ===>", testController);
    const testRoute = container.resolve(TestRoute);
    console.log("testRoute ===>", testRoute);
}
