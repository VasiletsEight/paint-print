import colors from "./color.constant";
import {Mutable} from "../utillity/utility.type";

type Special = Omit<typeof colors, "reset" | "fg" | "bg">;
type FgMutable = Mutable<typeof colors.fg>;
type BgMutable = Mutable<typeof colors.bg>;
type Colors = FgMutable & BgMutable & Special;
type KeyFgAndBg = keyof Colors;

export type ColorOutput = (value:unknown)=> string;
export type CompareColorOutput =  ColorOutput & AllColors;

export type ColorDelegate  = {
    readonly [K in KeyFgAndBg]:ColorDelegate;
} & CompareColorOutput;

export interface AllColors{
    [key:string]:string;
}

export interface ColorSelf{
    __buffer:string[]
}
