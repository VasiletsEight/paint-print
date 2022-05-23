import {GetProxy, SetProxy} from "../modules/proxy/proxy.type";

export function createProxy<T extends {}, C extends {} = {}>(target: T, getProxy: GetProxy<T>, setProxy: SetProxy, context: C): T {
    const proxyHandler = {
        get: getProxy.bind({...context}),
        set: setProxy.bind({...context})
    }

    return new Proxy(target, proxyHandler);
}