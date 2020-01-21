import express from "express";
export default interface IRouting {
    routeRegister(app: express.Express): void;
}
