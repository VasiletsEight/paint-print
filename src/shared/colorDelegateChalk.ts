import {ColorDelegate} from "../modules";
import colors from "../modules/color/color.constant";
import {AllColors} from "../modules/color/color.types";
import {output} from "./output";
import {definePropertyObject} from "./definePropertyObject";
import {DefinePropertyBound} from "../modules/defineProperty/defineProperty.type";

const {fg, bg ,reset, ...remainingColors} = colors;
const allColors:AllColors = {...fg, ...bg, ...remainingColors};

function colorDelegateChalk (buffer:string[]=[]):ColorDelegate {
    const colorOutput = output.bind({_buffer:buffer}) as ColorDelegate;

    const getColor = function(this:DefinePropertyBound<ColorDelegate>){
        return colorDelegateChalk([...buffer, allColors[this.key]]);
    }

    definePropertyObject(colorOutput, Object.keys(allColors), getColor)

    return colorOutput;
}

export const anotherPaint = colorDelegateChalk();