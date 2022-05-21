export declare type Mutable<Immutable> = {
    -readonly [K in keyof Immutable]: Immutable[K];
};
