import {describe, it} from "mocha"
import {paint} from "../src";
import {expect} from "chai";

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
});