import {GetProxy, SetProxy} from "../modules/proxy/proxy.type";

export const createProxy = <T extends object>(target:T, getProxy:GetProxy<T>, setProxy:SetProxy):T=>{
    const proxyHandler = {
        get: getProxy.bind({}),
        set: setProxy.bind({})
    }

    return new Proxy(target, proxyHandler);
}