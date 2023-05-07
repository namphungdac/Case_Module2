import {eNodeCodeBRegex} from "../Regex/eNodeCodeBRegex";
import {LatRegex} from "../Regex/LatRegex";
import {LongRegex} from "../Regex/LongRegex";
import {eNodeBManager} from "../Controller/eNodeBManager";

export class ValidateInputBaseStation {
    static validate_eNodeBCode(code: string):boolean {
        let check: boolean = true;
        if (!eNodeCodeBRegex.validate(code)) {
            console.log('eNodeB_Code Not Validate');
            check = false;
        }
        return check;
    }

    static validate_Lat(value: number):boolean {
        let check: boolean = true;
        if (!LatRegex.validate(value)) {
            console.log('Latitude Not Validate');
            check = false;
        }
        return check;
    }
    static validate_Long(value: number):boolean {
        let check: boolean = true;
        if (!LongRegex.validate(value)) {
            console.log('Longitude Not Validate');
            check = false;
        }
        return check;
    }
}
