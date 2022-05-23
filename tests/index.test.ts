import {describe, it} from "mocha"
import {expect} from "chai";
import {paint} from "../src";
import {colorDelegateChalk} from "../src/shared/colorDelegateChalk";

describe("Test paint-print", function() {
    it("Test paint", function() {
        console.time("Default")
        const warning = paint.yellow;
        const successful = paint.green
        const error = paint.red;

        console.info(successful("Hello world!!!"), "Default")
        console.warn(warning("Hello world"), "Default");
        console.log(error("Hello world"),  "Default");
        console.timeEnd("Default")

        expect(successful("Default")).to.equal("\x1b[32mDefault\x1b[0m");
    });

    it("Test Chalk", function (){
        console.time("Chalk");
        const warning = colorDelegateChalk.yellow;
        const successful = colorDelegateChalk.green;
        const error = colorDelegateChalk.red;

        console.info(successful("Hello world!!!"), "Chalk")
        console.warn(warning("Hello world"), "Chalk");
        console.log(error("Hello world"), "Chalk");
        console.timeEnd("Chalk");

        expect(successful("Chalk")).to.equal("\x1b[32mChalk\x1b[0m");
    });
});