import {describe, it} from "mocha"
import {paintTest} from "./shared/paint.test";
import {paint} from "../src";

describe("Test paint-print", function () {
    before("Before Test paint", paintTest(paint, "Default paint"));

    it("It Test paint", paintTest(paint, "Default paint"));

    after("After Test paint", paintTest(paint, "Default paint"));
});