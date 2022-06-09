import {ColorDelegate} from "../../types";
import {Done} from "mocha";

export const paintTest = (lib: ColorDelegate, key: string) => (
    function (done: Done) {
        const msg = "Hello world!!!";
        const result = `\x1b[32m${key}\x1b[0m` as any;

        console.time(key);

        const warning = lib.yellow;
        const successful = lib.green
        const error = lib.red;

        console.log(lib.blackBg.red(msg), key);
        console.info(lib.black(msg), key)
        console.warn(warning(msg), key);
        console.log(successful(msg), key);

        console.timeEnd(key)

        done()
    }
)
