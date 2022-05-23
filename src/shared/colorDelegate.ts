import {AllColors, ColorDelegate, ColorOutput} from "../modules/color/color.types";
import colors from "../modules/color/color.constant";
import {output} from "./output";
import {createProxy} from "./createPrxoy";

export const paint = (function (): ColorDelegate {
    const buffer:string[] = []
    const {fg, bg, reset, ...remainingColors} = colors;
    const allColors: AllColors = {...fg, ...bg, ...remainingColors};

    const colorOutput:ColorOutput = function ( value: unknown) {
        const clone = [...buffer];
        buffer.length = 0;

        return output.call({__buffer:clone}, value)
    }
    const compareFuncColor = Object.assign(colorOutput, allColors) as ColorDelegate;

    const proxySet = () => {return false};
    const proxyGet = (target:ColorDelegate, key: string, receiver:ColorDelegate):ColorDelegate => {
        buffer.push(target[key]);

        return receiver
    };

    return createProxy(compareFuncColor, proxyGet, proxySet);
}())
