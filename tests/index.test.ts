import {describe, it} from "mocha"
import {paint} from "../src";
import {expect} from "chai";
import {redefineError, redefineInfo, redefineWarn} from "../src/shared";
import {anotherPaint} from "../src/shared/colorDelegateChalk";

describe("Test paint-print", function() {
    it("Test paint", function() {
        console.time("Default")
        const warning = paint.yellow;
        const successful = paint.green
        const error = paint.red;

        console.log(paint.blackBg.red("Hello world!!!"), "Default");
        console.info(paint.black("Hello world!!!"), "Default")
        console.warn(warning("Hello world"), "Default");
        console.log(successful("Hello world"),  "Default");
        console.timeEnd("Default")

        expect(successful("Default")).to.equal("\x1b[32mDefault\x1b[0m");
    });

    it("Test another paint", function() {
        console.time("AnotherPaint")
        const warning = anotherPaint.yellow;
        const successful = anotherPaint.green
        const error = anotherPaint.red;

        console.log(anotherPaint.blackBg.red("Hello world!!!"), "AnotherPaint");
        console.info(anotherPaint.black("Hello world!!!"), "AnotherPaint")
        console.warn(warning("Hello world"), "AnotherPaint");
        console.log(successful("Hello world"),  "AnotherPaint");
        console.timeEnd("AnotherPaint")
    });

    it("Test redefine", function() {
        console.warn("Warning");
        console.error("Error");
        console.info("Info");

        redefineWarn();
        redefineError();
        redefineInfo();

        console.warn("Warning");
        console.error("Error");
        console.info("Info");
    });
});