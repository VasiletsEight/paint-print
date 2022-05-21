import colors from "./color.constant";
import { Mutable } from "../utillity/utility.type";
declare type Special = Omit<typeof colors, "reset" | "fg" | "bg">;
declare type FgMutable = Mutable<typeof colors.fg>;
declare type BgMutable = Mutable<typeof colors.bg>;
declare type Colors = FgMutable & BgMutable & Special;
declare type KeyFgAndBg = keyof Colors;
export declare type ColorFunc = (value: unknown) => string;
export declare type CompareColorFunc = ColorFunc & AllColors;
export declare type ColorDelegate = {
    readonly [K in KeyFgAndBg]: ColorDelegate;
} & CompareColorFunc;
export interface AllColors {
    [key: string]: string;
}
export interface ColorSelf {
    buffer: string[];
}
export {};
