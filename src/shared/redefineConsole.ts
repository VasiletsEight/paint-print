import {colorDelegate} from "./colorDelegate";
import {definePropertyObject} from "./definePropertyObject";
import {ColorDelegate} from "../modules";

export const redefineCustom = (key:"warn"|"info"|"error", chainColor:ColorDelegate)=>{
    const initConsole = console[key]?.bind({});

    definePropertyObject(console, key, ()=> (input:unknown)=>initConsole(chainColor(input)))
}

export const redefineWarn = ():void=>{
    redefineCustom("warn", colorDelegate().yellow);
}

export const test = ()=>{
    const initConsole = console.warn.bind({});
    console.warn = (input:unknown)=> initConsole(colorDelegate().yellow(input))
}

export const redefineError = ():void=>{
    redefineCustom("error", colorDelegate().black.redBg);
}

export const redefineInfo = ():void=>{
    redefineCustom("info", colorDelegate().green);
}
