export class PasswordRegex {
    static validate(regex: string): boolean {
        let PASSWORD_REGEX: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return PASSWORD_REGEX.test(regex);
    }
}
//mật khẩu có ít nhất 8 ký tự, bao gồm ít nhất một chữ số, ít nhất một chữ hoa, và ít nhất một chữ thường