import {assert} from "chai";
import {ColorDelegate} from "../../types";

export const paintTest = (lib: ColorDelegate, key: string) => (
    function () {
        const msg = "Hello world!!!";
        const result = `\x1b[32m${key}\x1b[0m`;

        console.time(key);

        const warning = lib.yellow;
        const successful = lib.green
        const error = lib.red;

        console.log(lib.blackBg.red(msg), key);
        console.info(lib.black(msg), key)
        console.warn(warning(msg), key);
        console.log(successful(msg), key);

        console.timeEnd(key)

        assert.strictEqual(successful(key), result);
    }
)