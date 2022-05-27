import {ColorDelegate} from "../modules";
import colors from "../modules/color/color.constant";
import {AllColors} from "../modules/color/color.types";
import {colorDelegate} from "./colorDelegate";

const {fg, bg, reset, ...remainingColors} = colors;
export const spreadColors: AllColors = {...fg, ...bg, ...remainingColors};
export const proxySet = () => false;

export const paint = (function (): ColorDelegate {
    const proxyGet = (target: AllColors, key: string): ColorDelegate => colorDelegate(target[key])

    return new Proxy(spreadColors, {get: proxyGet, set: proxySet}) as ColorDelegate;
}());