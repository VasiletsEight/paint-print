import {AllColors, ColorDelegate, ColorFunc} from "../modules/color/color.types";
import colors from "../modules/color/color.constant";
import color from "./color";

const colorDelegateChalk = ():ColorDelegate => {
    const buffer:string[] = [];
    const {fg, bg ,reset, ...remainingColors} = colors;
    const allColors:AllColors = {...fg, ...bg, ...remainingColors};
    const colorOutput = color.bind({buffer});

    const getColor = function(this:ColorFunc, pushColor:string){
        buffer.push(pushColor);

        return this;
    }

    Object.keys(allColors).forEach((key:string)=>Object.defineProperty(colorOutput, key,{
        enumerable: false,
        configurable:false,
        get:getColor.bind(colorOutput, allColors[key])
    }))

    return colorOutput as ColorDelegate;
}

export default colorDelegateChalk();