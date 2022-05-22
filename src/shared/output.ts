import {ColorSelf} from "../modules/color/color.types";
import colors from "../modules/color/color.constant";

const {reset} = colors;

export function output (this:ColorSelf, value:unknown) {
    return [...this.buffer, value, reset].join("");
}
