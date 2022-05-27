import {describe} from "mocha"
import {paintTest} from "./shared/paint.test";
import {paint} from "../src";

describe("Test paint-print", function () {
    beforeEach("Before Test paint", (done) => paintTest(done, paint, "After Default paint"));

    Array.from({length: 10}, (_, i) => i).forEach(() => it("It Test paint", (done) => paintTest(done, paint, "It Default paint")))

    afterEach("After Test paint", (done) => paintTest(done, paint, "After Default paint"));
});