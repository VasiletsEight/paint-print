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
        console.log(warning("Hello world"), "Default");
        console.log(error("Hello world"),  "Default");
        console.timeEnd("Default")
        expect("ff0000").to.equal("ff0000");
    });

    it("Test Chalk", function (){
        console.time("Chalk");
        const warning = colorDelegateChalk.yellow;
        const successful = colorDelegateChalk.green;
        const error = colorDelegateChalk.red;
        console.log(warning("Hello world"), "Chalk");
        console.log(error("Hello world"), "Chalk");
        console.timeEnd("Chalk");
        expect("ff0000").to.equal("ff0000");
    });
});