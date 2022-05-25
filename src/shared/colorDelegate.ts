import {AllColors, ColorDelegate, ColorSelf} from "../modules/color/color.types";
import colors from "../modules/color/color.constant";
import {output} from "./output";
import {createProxy} from "./createPrxoy";
import {ProxyBoundArgs} from "../modules/proxy/proxy.type";

export const paint = (function (): ColorDelegate {
    const {fg, bg, reset, ...remainingColors} = colors;
    const allColors: AllColors = {...fg, ...bg, ...remainingColors};

    const compareFuncColor = (buffer: string[] = []): ColorDelegate => (
        Object.assign(output.bind({_buffer: buffer}), allColors) as ColorDelegate
    )

    const proxySet = () => false;
    const proxyGet = function (this: ColorSelf, target: ColorDelegate, key: string): ColorDelegate {
        const _buffer = [...this._buffer, target[key]];

        return createProxy.call<ColorSelf, ProxyBoundArgs, ColorDelegate>({_buffer}, compareFuncColor(_buffer), proxyGet, proxySet);
    };

    return createProxy.call<ColorSelf, ProxyBoundArgs, ColorDelegate>({_buffer: []}, compareFuncColor(), proxyGet, proxySet);
}())