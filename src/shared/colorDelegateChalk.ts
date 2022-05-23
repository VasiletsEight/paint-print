import {AllColors, ColorDelegate, ColorSelf} from "../modules/color/color.types";
import colors from "../modules/color/color.constant";
import {output} from "./output";

export const colorDelegateChalk = (function():ColorDelegate {
    const {fg, bg ,reset, ...remainingColors} = colors;
    const allColors:AllColors = {...fg, ...bg, ...remainingColors};

    const colorOutput = function (this:ColorSelf, value:unknown) {
        return output.call(this, value)
    } as ColorDelegate

    const getColor = function(this:ColorDelegate, pushColor:string):ColorDelegate{
        return this.bind({__buffer:[...this?.buffer || [], pushColor]});
    }

    Object.keys(allColors).forEach((key:string)=>Object.defineProperty(colorOutput, key,{
        enumerable: false,
        configurable:false,
        get:getColor.bind(colorOutput, allColors[key])
    }))

    return colorOutput;
}())
