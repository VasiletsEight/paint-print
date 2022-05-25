import {ColorDelegate} from "../color/color.types";

export type GetProxy<T> = (target:T, key:string, receiver:T)=>T;
export type SetProxy = ()=>boolean;
export type ProxyBoundArgs = [ColorDelegate, GetProxy<ColorDelegate> ,()=>boolean];