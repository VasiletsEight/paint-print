import {describe, it} from "mocha"
import {paint} from "../src";
import {colorDelegateChalk} from "../src/shared/colorDelegateChalk";
import {expect} from "chai";

describe("Test paint-print", function() {
    it("Test Chalk", function (){
        // console.time("Chalk");
        // const warning = colorDelegateChalk.yellow;
        // const successful = colorDelegateChalk.green;
        // const error = colorDelegateChalk.red;
        //
        // console.log(colorDelegateChalk.yellow.blueBg("Hello world!!!"), "Chalk");
        // console.info(colorDelegateChalk.green("Hello world!!!"), "Chalk");
        // console.warn(warning("Hello world"), "Chalk");
        // console.log(error("Hello world"), "Chalk");
        // console.timeEnd("Chalk");

        // expect(successful("Chalk")).to.equal("\x1b[32mChalk\x1b[0m");
    });

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