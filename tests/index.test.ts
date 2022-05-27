import {describe} from "mocha"
import {paintTest} from "./shared/paint.test";
import {paint} from "../src";

describe("Test paint-print", function () {
    beforeEach("Before Test paint", paintTest(paint, "Before paint paint"));

    Array.from(Array(10).keys()).forEach(() => it("It Test paint", paintTest(paint, "It paint paint")))

    afterEach("After Test paint", paintTest(paint, "After paint paint"));
});