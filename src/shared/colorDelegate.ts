import {AllColors, ColorDelegate, ColorOutput, ColorSelf} from "../modules/color/color.types";
import colors from "../modules/color/color.constant";
import {output} from "./output";

export const paint = (function (): ColorDelegate {
    const buffer:string[] = []
    const {fg, bg, reset, ...remainingColors} = colors;
    const allColors: AllColors = {...fg, ...bg, ...remainingColors};

    const colorOutput:ColorOutput = function (this: ColorSelf, value: unknown) {
        const __buffer = structuredClone(buffer)
        buffer.length = 0;

        return output.call({__buffer}, value)
    }
    const compareFuncColor = Object.assign(colorOutput, allColors) as ColorDelegate;

    const proxySet = (target:any, key:string, value:string) => {target[key] = value; return true};
    const proxyGet = (target: ColorDelegate, key: string, receiver:any) => {
        buffer.push(target[key])
        return receiver

    };

    const proxyHandler = {
        get: proxyGet,
        set: proxySet
    }

    return new Proxy(compareFuncColor, proxyHandler);
}())
