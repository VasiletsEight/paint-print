import {AllColors, ColorDelegate} from "../modules/color/color.types";
import colors from "../modules/color/color.constant";
import {output} from "./output";

export const paint = (function ():ColorDelegate{
    const {fg, bg ,reset, ...remainingColors} = colors;
    const allColors:AllColors = {...fg, ...bg, ...remainingColors};
    const colorOutput = function (this:any, value:unknown) {
        return output.call(this, value)
    }
    const compareFuncColor = Object.assign(colorOutput, allColors);

    const proxySet = ():false => false;
    const proxyGet =  (target:ColorDelegate, key:string):ColorDelegate => {
        const buffer = [...target?.buffer || [], target[key]];

        return target.bind({buffer});
    }

    const proxyHandler={
        get:proxyGet,
        set:proxySet
    }

    return new Proxy(compareFuncColor, proxyHandler) as ColorDelegate;
}())
