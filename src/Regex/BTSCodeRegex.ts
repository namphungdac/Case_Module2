export class BTSCodeRegex {
    static validate(regex: string): boolean {
        let CodeBTS_REGEX: RegExp = /^g[A-Z]{3}\d{5}$/; //gHNI00012
        return CodeBTS_REGEX.test(regex);
    }
}