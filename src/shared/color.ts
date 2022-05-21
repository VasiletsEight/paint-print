import {ColorSelf} from "../modules/color.types";
import colors from "../modules/color.constant";

const {reset} = colors;
const output = (value:unknown, buffer:string[]) => [...buffer, value, reset].join("");

const color = function (this:ColorSelf, value:unknown) {
    const cloneBuffer = [...this.buffer];
    this.buffer.length = 0;

    return  output(value, cloneBuffer);
}

export default color;