export class LongRegex {
    static validate(regex: number): boolean {
        let LongRegex_REGEX: RegExp = /^105\.\d+$/;
        return LongRegex_REGEX.test(regex.toString());
    }
}