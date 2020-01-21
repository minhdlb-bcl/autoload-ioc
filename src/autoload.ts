import express from "express";
import glob from "glob";
import { Container } from "inversify";
import path from "path";
import IBase from "./interfaces/IBase";
import IRouting from "./interfaces/IRouting";

export default async function autoload(app: express.Express, container: Container): Promise<void> {
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
        container.bind<IRouting>(injectClass.default).toSelf().inSingletonScope();
        const route: IRouting = container.resolve(injectClass.default);
        route.routeRegister(app);
    });
}
