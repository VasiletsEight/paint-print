import {output} from "./output";
import {proxySet, spreadColors} from "./paint";
import {ColorDelegate} from "../modules";

export const colorDelegate = (_buffer: string = ""): ColorDelegate => {
    const colorOutput = (input: unknown) => (output.call({_buffer}, input));
    const compareColor = Object.assign(colorOutput, spreadColors);

    const proxyGet = (target: ColorDelegate, key: string, receiver: ColorDelegate) => {
        _buffer += target[key];
        return receiver
    }

    return new Proxy(compareColor as ColorDelegate, {get: proxyGet, set: proxySet})
}

