export class eNodeCodeBRegex {
    static validate(regex: string): boolean {
        let CodeeNodeB_REGEX: RegExp = /^e[A-Z]{3}\d{5}$/; //eHNI00012
        return CodeeNodeB_REGEX.test(regex);
    }
}
