declare const colors: {
    readonly reset: "\u001B[0m";
    readonly bright: "\u001B[1m";
    readonly dim: "\u001B[2m";
    readonly underscore: "\u001B[4m";
    readonly blink: "\u001B[5m";
    readonly reverse: "\u001B[7m";
    readonly hidden: "\u001B[8m";
    readonly fg: {
        readonly black: "\u001B[30m";
        readonly red: "\u001B[31m";
        readonly green: "\u001B[32m";
        readonly yellow: "\u001B[33m";
        readonly blue: "\u001B[34m";
        readonly magenta: "\u001B[35m";
        readonly cyan: "\u001B[36m";
        readonly white: "\u001B[37m";
        readonly crimson: "\u001B[38m";
    };
    readonly bg: {
        readonly blackBg: "\u001B[40m";
        readonly redBg: "\u001B[41m";
        readonly greenBg: "\u001B[42m";
        readonly yellowBg: "\u001B[43m";
        readonly blueBg: "\u001B[44m";
        readonly magentaBg: "\u001B[45m";
        readonly cyanBg: "\u001B[46m";
        readonly whiteBg: "\u001B[47m";
        readonly crimsonBg: "\u001B[48m";
    };
};
export default colors;
