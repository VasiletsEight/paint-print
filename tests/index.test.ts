import {describe, it} from "mocha"
import {paintTest} from "./shared/paint.test";
import {redefineTest} from "./shared/redefine.test";
import {paint} from "../src";
import {anotherPaint} from "../src/shared/colorDelegateChalk";

describe("Test paint-print", function () {
    before("Before Test paint", paintTest(paint, "Default paint"));
    before("Before Test another paint", paintTest(anotherPaint, "Another paint"));

    it("It Test paint", paintTest(paint, "Default paint"));
    it("It Test another paint", paintTest(anotherPaint, "Another paint"));
    it("It Test redefine", redefineTest);

    after("After Test paint", paintTest(paint, "Default paint"));
    after("After Test another paint", paintTest(anotherPaint, "Another paint"));
});