export type GetProxy<T> = (target:T, key:string, receiver:T)=>T;
export type SetProxy = ()=>boolean;
