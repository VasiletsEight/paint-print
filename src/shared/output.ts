import {ColorSelf} from "../modules/color/color.types";
import colors from "../modules/color/color.constant";

const {reset} = colors;

export function output(this: ColorSelf, value: unknown): string {
    return [this._buffer, value, reset].join("");
}
