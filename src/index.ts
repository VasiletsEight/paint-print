import palette from "./shared/colorDelegate";
import colorDelegateChalk from "./shared/colorDelegateChalk";

console.log(colorDelegateChalk.red.blueBg("Hello world!!!"));
console.log(colorDelegateChalk.red("Red chalk"))

console.log(palette.blue("Work"));
console.log(palette.yellow.blueBg("Hello world!!!"));
console.warn(palette.redBg("Work"));
console.warn(palette.green("Green"));

const test = palette.redBg

console.log(test("error"))
console.log(palette.red("red"))