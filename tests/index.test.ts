import {describe, Done} from "mocha"
import {paintTest} from "./shared/paint.test";
import {paint} from "../src";

const testInput = (done: Done) => paintTest(done, paint, "After Default paint")

describe("Test paint-print", function () {
    beforeEach("Before Test paint", testInput);

    Array.from(Array(10).keys()).forEach(() => it("It Test paint", testInput))

    afterEach("After Test paint", testInput);
});