import {AllColors, ColorDelegate, ColorOutput, ColorSelf} from "../modules/color/color.types";
import colors from "../modules/color/color.constant";
import {output} from "./output";

export const paint = (function (): ColorDelegate {
    const {fg, bg, reset, ...remainingColors} = colors;
    const allColors: AllColors = {...fg, ...bg, ...remainingColors};

    const colorOutput:ColorOutput = function (this: ColorSelf, value: unknown) {
        return output.call(this, value)
    }
    const compareFuncColor = Object.assign(colorOutput, allColors) as ColorDelegate;

    const proxySet = (): false => false;
    const proxyGet = (target: ColorDelegate, key: string) => {
        return target.bind({__buffer: [...target?.__buffer || [], target[key]]})
    };

    const proxyHandler = {
        get: proxyGet,
        set: proxySet
    }

    return new Proxy(compareFuncColor, proxyHandler);
}())
