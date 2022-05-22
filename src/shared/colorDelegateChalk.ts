import {AllColors, ColorDelegate} from "../modules/color/color.types";
import colors from "../modules/color/color.constant";
import {output} from "./output";

export const colorDelegateChalk = (function():ColorDelegate {
    const {fg, bg ,reset, ...remainingColors} = colors;
    const allColors:AllColors = {...fg, ...bg, ...remainingColors};
    const colorOutput = function (this:any, value:unknown) {
        return output.call(this, value)
    }
    const getColor = function(this:any, pushColor:string){
        const buffer = [...this?.buffer || [], pushColor]

        return this.bind({buffer});
    }

    Object.keys(allColors).forEach((key:string)=>Object.defineProperty(colorOutput, key,{
        enumerable: false,
        configurable:false,
        get:getColor.bind(colorOutput, allColors[key])
    }))

    return colorOutput as ColorDelegate;
}())
