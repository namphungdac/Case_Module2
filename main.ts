// import * as readlineSync from 'readline-sync'
import {InputFunction} from "./src/Function/InputFunction";
import {MenuManager_eNodeB} from "./src/Menu/MenuManager_eNodeB";

const readlineSync = require('readline-sync')

function getUserChoice(options: string[]) {
    const index = readlineSync.keyInSelect(options, "Enter your choice: ");
    if (index === -1) {
        return 0;
    }
    return index + 1;
}

function main() {
    const MainMenu: string[] = ['Sign In', 'Exit'];
    let exit: boolean = true;
    while (exit) {
        switch (getUserChoice(MainMenu)) {
            case 1:
                InputFunction.inputAccount();
                InputFunction.inputPassword();
                MenuManager_eNodeB.MenuManagereNodeB();
                break;
            case 2:
                if (readlineSync.keyInYN('Confirm Exit: ')) {
                    exit = false;
                }
                break;
            default:
                console.log("Invalid choice");
        }
    }
}

main();