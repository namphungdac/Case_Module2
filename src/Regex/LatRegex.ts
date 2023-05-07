export class LatRegex {
    static validate(regex: number): boolean {
        let LatRegex_REGEX: RegExp = /^(20|21)\.\d+$/;
        return LatRegex_REGEX.test(regex.toString());
    }
}