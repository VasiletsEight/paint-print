import colors from "./color.constant";
import {Mutable} from "./utility.type";

type Special = Omit<typeof colors, "reset" | "fg" | "bg">;
type FgMutable = Mutable<typeof colors.fg>;
type BgMutable = Mutable<typeof colors.bg>;
type Colors = FgMutable & BgMutable & Special;
type KeyFgAndBg = keyof Colors;

export type ColorFunc = (value:unknown)=> string;
export type CompareColorFunc =  ColorFunc & AllColors;

export type ColorDelegate  = {
    readonly [K in KeyFgAndBg]:ColorDelegate;
} & CompareColorFunc;

export interface AllColors{
    [key:string]:string;
}

export interface ColorSelf{
    buffer:string[]
}
