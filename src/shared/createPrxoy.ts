import {GetProxy, SetProxy} from "../modules/proxy/proxy.type";

export function createProxy<T extends {}, C extends {} = {}>(this: C, target: T, getProxy: GetProxy<T>, setProxy: SetProxy): T {
    const proxyHandler = {
        get: getProxy.bind(this),
        set: setProxy.bind(this)
    }

    return new Proxy(target, proxyHandler);
}