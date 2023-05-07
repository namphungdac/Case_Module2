// import * as readlineSync from 'readline-sync'
import {eNodeBManager} from "../Controller/eNodeBManager";

const readlineSync = require('readline-sync')

function getUserChoice(options: string[]) {
    const index = readlineSync.keyInSelect(options, "Enter your choice: ");
    if (index === -1) {
        return 0;
    }
    return index + 1;
}

export class MenuManager_eNodeB {
    static MenuManagereNodeB(): void {
        const Menu: string[] = ['Add new eNodeB', 'Show eNodeB Information', 'Update eNodeB Information', 'Delete eNodeB', 'Back'];
        let backToMenu: boolean = true;
        while (backToMenu) {
            switch (getUserChoice(Menu)) {
                case 1:
                    eNodeBManager.add_eNodeB();
                    break;
                case 2:
                    eNodeBManager.show_eNodeB();
                    break;
                case 3:
                    eNodeBManager.update_eNodeB();
                    break;
                case 4:
                    eNodeBManager.delete_eNodeB();
                    break;
                case 5:
                    backToMenu = false;
                    break;
                default:
                    console.log("Invalid choice");
            }
        }
    }
}
