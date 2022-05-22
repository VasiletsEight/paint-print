import {AllColors, ColorDelegate, CompareColorFunc} from "../modules/color/color.types";
import colors from "../modules/color/color.constant";
import color from "./color";

export const paint = (function ():ColorDelegate{
    const buffer:string[] = [];
    const {fg, bg ,reset, ...remainingColors} = colors;
    const allColors:AllColors = {...fg, ...bg, ...remainingColors};
    const colorOutput = color.bind({buffer});
    const compareFuncColor = Object.assign(colorOutput, allColors);

    const proxySet = ():false => false;
    const proxyGet =  (target:CompareColorFunc, key:string, receiver:ColorDelegate):ColorDelegate => {
        buffer.push(target[key]);

        return receiver;
    }

    const proxyHandler={
        get:proxyGet,
        set:proxySet
    }

    return  new Proxy(compareFuncColor, proxyHandler) as ColorDelegate;
}())
