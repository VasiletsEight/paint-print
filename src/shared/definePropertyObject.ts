function createObjectDefine<T extends {}>(target: T, key: string, getDefine: () => void): void {
    Object.defineProperty(target, key, {
        enumerable: false,
        configurable: false,
        get: getDefine.bind({target, key})
    })
}

export function definePropertyObject<T extends {}>(target: T, key: string | string[], getDefine: () => void): void {
    if (Array.isArray(key)) {
        return key.forEach((item: string) => createObjectDefine(target, item, getDefine))
    }

    return createObjectDefine(target, key, getDefine);
}