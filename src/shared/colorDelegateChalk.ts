import {ColorDelegate} from "../modules";
import colors from "../modules/color/color.constant";
import {AllColors} from "../modules/color/color.types";
import {output} from "./output";

export const colorDelegateChalk = (function ():ColorDelegate {
    const buffer:string[] = [];
    const {fg, bg ,reset, ...remainingColors} = colors;
    const allColors:AllColors = {...fg, ...bg, ...remainingColors};

    const colorOutput = function (value: unknown) {
        const clone = [...buffer];
        buffer.length = 0;

        return output.call({__buffer:clone}, value)
    } as ColorDelegate

    const getColor = function(this:ColorDelegate, pushColor:string){
        buffer.push(pushColor);

        return this;
    }

    Object.keys(allColors).forEach((key:string)=>Object.defineProperty(colorOutput, key,{
        enumerable: false,
        configurable:false,
        get:getColor.bind(colorOutput, allColors[key])
    }))

    return colorOutput;
}())
