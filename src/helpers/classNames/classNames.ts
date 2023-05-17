type ModsType = Record<string, boolean | string>

export function classNames(cls: string, mods: ModsType, additional: string[]): string {

    return [cls, ...additional, ...Object.keys(mods).filter(key => mods[key])].join(' ')
}