import { injectable } from "inversify";
import IBase from "../interfaces/IBase";

@injectable()
class TestService implements IBase {
    public constructor() {
        console.log("Test Service Called");
    }

    public getMessage(s: string): string {
        return `Test Service :${s}`;
    }
}

export default TestService;
