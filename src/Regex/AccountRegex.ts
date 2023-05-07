export class AccountRegex {
    static validate(regex: string): boolean {
        let ACCOUNT_REGEX: RegExp = /^[A-Za-z0-9]+@viettel\.com\.vn$/;
        return ACCOUNT_REGEX.test(regex);
    }
}