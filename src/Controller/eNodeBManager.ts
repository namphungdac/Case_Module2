// import * as readlineSync from 'readline-sync'
import {eNodeB} from "../Module/eNodeB";
import {InputFunction} from "../Function/InputFunction";
import {Status, Band4G, Provider, District} from "../Module/BaseStation";
import {Bandwidth} from "../Module/eNodeB";

const readlineSync = require('readline-sync')
let eNodeB1 = new eNodeB('eHNI00001', 'ON', '1800Mhz', 10, 21.1, 105.1, 'Cầu Giấy', 'Ericsson');

function getUserChoice(options: string[]) {
    const index = readlineSync.keyInSelect(options, "Enter your choice: ");
    if (index === -1) {
        return 0;
    }
    return index + 1;
}

function checkReturnedResult(result: eNodeB[] | []) {
    if (!result[0]) return 'eNodeB not found';
    else return result;
}

export class eNodeBManager {
    private static eNodeBList: eNodeB[] = [];


    static add_eNodeB(): void {
        let code: string = InputFunction.input_eNodeBCode();
        let status: Status = InputFunction.inputStatus();
        let band: Band4G = InputFunction.inputBand4G();
        let bandwidth: Bandwidth = InputFunction.inputBandwidth();
        let lat: number = InputFunction.inputLat();
        let long: number = InputFunction.inputLong();
        let district: District = InputFunction.inputDistrict();
        let provider: Provider = InputFunction.inputProvider();
        this.eNodeBList.push(new eNodeB(code, status, band, bandwidth, lat, long, district, provider));
    }

    static show_eNodeBList(): eNodeB[] {
        return this.eNodeBList;
    }

    static findIndex_eNodeBByCode(code: string): number {
        return this.eNodeBList.findIndex(element => element.getCode() === code);
    }

    static find_eNodeBByCode() {
        let code: string = InputFunction.input_eNodeBCode();
        let result = this.eNodeBList.find(element => element.getCode() === code);
        if (!result) console.log('eNodeB not found');
        else return result;
    }

    static find_eNodeBByStatus() {
        let status: Status = InputFunction.inputStatus();
        let result = this.eNodeBList.filter(element => element.getStatus() === status);
        return checkReturnedResult(result);
    }

    static find_eNodeBByBand() {
        let band: Band4G = InputFunction.inputBand4G();
        let result = this.eNodeBList.filter(element => element.getBand() === band);
        return checkReturnedResult(result);
    }

    static find_eNodeBByDistrict() {
        let district: District = InputFunction.inputDistrict();
        let result = this.eNodeBList.filter(element => element.getDistrict() === district);
        return checkReturnedResult(result);
    }

    static find_eNodeBByProvider() {
        let provider: Provider = InputFunction.inputProvider();
        let result = this.eNodeBList.filter(element => element.getProvider() === provider);
        return checkReturnedResult(result);
    }

    static show_eNodeB(): void {
        if (this.eNodeBList.length === 0) console.log('List eNodeB is empty');
        else {
            const ShowOptions: string[] = ['List all eNodeB', 'Single eNodeB By Code', 'List eNodeB By Status', 'List eNodeB By Band', 'List eNodeB By District', 'List eNodeB By Provider', 'Back'];
            let back: boolean = true;
            while (back) {
                switch (getUserChoice(ShowOptions)) {
                    case 1:
                        console.table(this.show_eNodeBList());
                        break;
                    case 2:
                        console.table([this.find_eNodeBByCode()]);
                        break;
                    case 3:
                        console.table(this.find_eNodeBByStatus());
                        break;
                    case 4:
                        console.table(this.find_eNodeBByBand());
                        break;
                    case 5:
                        console.table(this.find_eNodeBByDistrict());
                        break;
                    case 6:
                        console.table(this.find_eNodeBByProvider());
                        break;
                    case 7:
                        back = false;
                        break;
                    default:
                        console.log("Invalid choice");
                }
            }
        }
    }

    static update_eNodeBCode(element: eNodeB): void {
        let code: string = InputFunction.input_eNodeBCode();
        element.setCode(code);
        console.log('Successfully updated');
    }

    static update_eNodeBStatus(element: eNodeB): void {
        let status: Status = InputFunction.inputStatus();
        element.setStatus(status);
        console.log('Successfully updated');
    }

    static update_eNodeBBandwidth(element: eNodeB): void {
        let bandwidth: Bandwidth = InputFunction.inputBandwidth();
        element.setBandwidth(bandwidth);
        console.log('Successfully updated');
    }

    static update_eNodeB(): void {
        if (this.eNodeBList.length === 0) console.log('List eNodeB is empty');
        else {
            let eNodeBNeedsUpdate = this.find_eNodeBByCode();
            if (eNodeBNeedsUpdate === undefined) return;
            else {
                const valueNeedsUpdate: string[] = ['code', 'status', 'bandwidth', 'Back'];
                let back: boolean = true;
                while (back) {
                    switch (getUserChoice(valueNeedsUpdate)) {
                        case 1:
                            this.update_eNodeBCode(eNodeBNeedsUpdate);
                            break;
                        case 2:
                            this.update_eNodeBStatus(eNodeBNeedsUpdate);
                            break;
                        case 3:
                            this.update_eNodeBBandwidth(eNodeBNeedsUpdate);
                            break;
                        case 4:
                            back = false;
                            break;
                        default:
                            console.log("Invalid choice");
                    }
                }
            }
        }
    }

    static delete_Single_eNodeBByCode(): void {
        let code: string = InputFunction.input_eNodeBCode();
        let result = this.eNodeBList.filter(element => element.getCode() === code);
        if (!result[0]) console.log('eNodeB not found');
        else {
            this.eNodeBList = this.eNodeBList.filter(element => element.getCode() !== code);
            console.log('Successfully deleted');
        }
    }

    static delete_List_eNodeBByStatus(): void {
        let status: Status = InputFunction.inputStatus();
        let result = this.eNodeBList.filter(element => element.getStatus() === status);
        if (!result[0]) console.log('eNodeB not found');
        else {
            this.eNodeBList = this.eNodeBList.filter(element => element.getStatus() !== status);
            console.log('Successfully deleted');
        }
    }

    static delete_List_eNodeBByBand(): void {
        let band: Band4G = InputFunction.inputBand4G();
        let result = this.eNodeBList.filter(element => element.getBand() === band);
        if (!result[0]) console.log('eNodeB not found');
        else {
            this.eNodeBList = this.eNodeBList.filter(element => element.getBand() !== band);
            console.log('Successfully deleted');
        }
    }

    static delete_List_eNodeBByDistrict(): void {
        let district: District = InputFunction.inputDistrict();
        let result = this.eNodeBList.filter(element => element.getDistrict() === district);
        if (!result[0]) console.log('eNodeB not found');
        else {
            this.eNodeBList = this.eNodeBList.filter(element => element.getDistrict() !== district);
            console.log('Successfully deleted');
        }
    }

    static delete_List_eNodeBByProvider(): void {
        let provider: Provider = InputFunction.inputProvider();
        let result = this.eNodeBList.filter(element => element.getProvider() === provider);
        if (!result[0]) console.log('eNodeB not found');
        else {
            this.eNodeBList = this.eNodeBList.filter(element => element.getProvider() !== provider);
            console.log('Successfully deleted');
        }
    }

    static delete_eNodeB(): void {
        if (this.eNodeBList.length === 0) console.log('List eNodeB is empty');
        else {
            const DeleteOptions: string[] = ['Single eNodeB By Code', 'List eNodeB By Status', 'List eNodeB By Band', 'List eNodeB By District', 'List eNodeB By Provider', 'Back'];
            let back: boolean = true;
            while (back) {
                switch (getUserChoice(DeleteOptions)) {
                    case 1:
                        this.delete_Single_eNodeBByCode();
                        break;
                    case 2:
                        this.delete_List_eNodeBByStatus();
                        break;
                    case 3:
                        this.delete_List_eNodeBByBand();
                        break;
                    case 4:
                        this.delete_List_eNodeBByDistrict();
                        break;
                    case 5:
                        this.delete_List_eNodeBByProvider();
                        break;
                    case 6:
                        back = false;
                        break;
                    default:
                        console.log("Invalid choice");
                }
            }
        }
    }
}