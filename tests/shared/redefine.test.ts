import {redefineInfo, redefineWarn} from "../../src";
import {redefineError} from "../../src/shared";
import {Done} from "mocha";

export function redefineTest(done: Done) {
    console.warn("Warning");
    console.error("Error");
    console.info("Info");

    redefineWarn();
    redefineError();
    redefineInfo();

    console.warn("Warning");
    console.error("Error");
    console.info("Info");

    done();
}