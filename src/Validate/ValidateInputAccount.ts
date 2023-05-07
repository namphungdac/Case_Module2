import {AccountRegex} from "../Regex/AccountRegex";
import {PasswordRegex} from "../Regex/PasswordRegex";

export class ValidateInputAccount {
    static validateAccount(account: string): boolean {
        let check: boolean = true;
        if (!AccountRegex.validate(account)) {
            console.log('Account Not Validate');
            check = false;
        }
        return check;
    }
    static validatePassword(password: string): boolean {
        let check: boolean = true;
        if (!PasswordRegex.validate(password)) {
            console.log('Account Not Validate');
            check = false;
        }
        return check;
    }

}