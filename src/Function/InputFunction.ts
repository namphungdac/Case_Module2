// import * as readlineSync from 'readline-sync'
import {ValidateInputBaseStation} from "../Validate/ValidateInputBaseStation";
import {ValidateInputAccount} from "../Validate/ValidateInputAccount";
import {Status,Band4G,Provider,District} from "../Module/BaseStation";
import {Bandwidth} from "../Module/eNodeB";

const readlineSync = require('readline-sync')

export class InputFunction {
    static inputAccount():string {
        let account: string;
        do {
            account = readlineSync.question('Enter Account: ');
        } while (!ValidateInputAccount.validateAccount(account));
        return account;
    }

    static inputPassword():string {
        let password: string;
        do {
            password = readlineSync.question('Enter Password: ', {hideEchoBack: true});
        } while (!ValidateInputAccount.validatePassword(password));
        return password;
    }

    static input_eNodeBCode(): string {
        let eNodeBCode: string;
        do {
            eNodeBCode = readlineSync.question('Input eNodeB Code:');
        } while (!ValidateInputBaseStation.validate_eNodeBCode(eNodeBCode));
        return eNodeBCode;
    }

    static inputStatus(): Status {
        const Status: Status[] = ['ON', 'OFF'];
        const index = readlineSync.keyInSelect(Status, 'Select Status: ', {cancel: false});
        return index === 0 ? 'ON' : 'OFF';
    }

    static inputBand4G(): Band4G {
        const Band4G: Band4G[] = ['700Mhz', '1800Mhz', '2100Mhz', '2600Mhz'];
        const index = readlineSync.keyInSelect(Band4G, 'Select Band: ', {cancel: false});
        if (index === 0) return '700Mhz';
        else if (index === 1)  return '1800Mhz';
        else if (index === 2)  return '2100Mhz';
        else return '2600Mhz';
        // switch (index) {
        //     case 0:
        //         return '700Mhz';
        //     case 1:
        //         return '1800Mhz';
        //     case 2:
        //         return '2100Mhz';
        //     case 3:
        //         return '2600Mhz';
        // }
    }

    static inputBandwidth(): Bandwidth {
        const Bandwidth: Bandwidth[] = [10, 15, 20];
        const index = readlineSync.keyInSelect(Bandwidth, 'Select Bandwidth: ', {cancel: false});
        if (index === 0) return 10;
        else if (index === 1)  return 15;
        else  return 20;
    }

    static inputLat(): number {
        let Latitude: number;
        do {
            Latitude = +readlineSync.question('Input Latitude:');
        } while (!ValidateInputBaseStation.validate_Lat(Latitude));
        return Latitude;
    }

    static inputLong(): number {
        let Longitude: number;
        do {
            Longitude = +readlineSync.question('Input Longitude:');
        } while (!ValidateInputBaseStation.validate_Long(Longitude));
        return Longitude;
    }

    static inputDistrict(): District {
        const District: string[] = ['Cau Giay', 'Nam Tu Liem', 'Ha Dong', 'Thanh Xuan'];
        const index = readlineSync.keyInSelect(District, 'Select District: ', {cancel: false});
        if (index === 0) return 'Cầu Giấy';
        else if (index === 1) return 'Nam Từ Liêm';
        else if (index === 2) return 'Hà Đông';
        else return 'Thanh Xuân';
        // switch (index) {
        //     case 0:
        //         return 'Cầu Giấy';
        //     case 1:
        //         return 'Nam Từ Liêm';
        //     case 2:
        //         return 'Hà Đông';
        //     case 3:
        //         return 'Thanh Xuân';
        // }
    }

    static inputProvider(): Provider {
        const Provider: Provider[] = ['Ericsson', 'Nokia', 'Huawei', 'ZTE'];
        const index = readlineSync.keyInSelect(Provider, 'Select Provider: ', {cancel: false});
        if (index === 0)  return 'Ericsson';
        else if (index === 1) return 'Nokia';
        else if (index === 2) return 'Huawei';
        else return 'ZTE';
        // switch (index) {
        //     case 0:
        //         return 'Ericsson';
        //     case 1:
        //         return 'Nokia';
        //     case 2:
        //         return 'Huawei';
        //     case 3:
        //         return 'ZTE';
        // }
    }
}
