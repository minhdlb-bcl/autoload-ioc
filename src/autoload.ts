import express from "express";
import glob from "glob";
import { Container } from "inversify";
import path from "path";
import IBase from "./interfaces/IBase";
import IRouting from "./interfaces/IRouting";

export default async function autoload(app: express.Express, container: Container): Promise<void> {
    await glob.sync(`${__dirname}/services/*.*(js|ts)`).map(async (file) => {
        const injectClass = await import(path.resolve(file));
        container.bind<IBase>(injectClass.default).toSelf().inSingletonScope();
    });

    await glob.sync(`${__dirname}/controllers/*.*(js|ts)`).map(async (file) => {
        const injectClass = await import(path.resolve(file));
        container.bind<IBase>(injectClass.default).toSelf().inSingletonScope();
    });

    await glob.sync(`${__dirname}/routes/*.*(js|ts)`).map(async (file) => {
        const injectClass = await import(path.resolve(file));
        container.bind<IRouting>(injectClass.default).toSelf().inSingletonScope();
        const route: IRouting = container.resolve(injectClass.default);
        route.routeRegister(app);
    });
}
