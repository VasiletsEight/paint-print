import {AllColors, ColorDelegate, ColorOutput, ColorSelf} from "../modules/color/color.types";
import colors from "../modules/color/color.constant";
import {output} from "./output";
import {createProxy} from "./createPrxoy";

export const paint = (function (): ColorDelegate {
    const {fg, bg, reset, ...remainingColors} = colors;
    const allColors: AllColors = {...fg, ...bg, ...remainingColors};

    const colorOutput: ColorOutput = function (this: ColorSelf, value: unknown) {
        return output.call({__buffer: this.__buffer}, value)
    }

    const compareFuncColor = (buffer:string[] = [])=> {
        return Object.assign(colorOutput.bind({__buffer:buffer}), allColors) as ColorDelegate;
    }

    const proxySet = () => false;
    const proxyGet = function (this: ColorSelf, target: ColorDelegate, key: string): ColorDelegate {
        const __buffer = [...this.__buffer, target[key]];

        return createProxy(compareFuncColor(__buffer), proxyGet, proxySet, {__buffer});
    };

    return createProxy(compareFuncColor(), proxyGet, proxySet, {__buffer: []});
}())
