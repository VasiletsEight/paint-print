import {ColorOutput, ColorSelf} from "../modules/color/color.types";
import colors from "../modules/color/color.constant";

const {reset} = colors;

export const output:ColorOutput =  function (this:ColorSelf, value:unknown) {
    return [...this.__buffer, value, reset].join("");
}
