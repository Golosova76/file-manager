import { homedir } from "node:os";
import {goUp} from "./commands/up.js";
import {cdGo} from "./commands/cd.js";
import {list} from "./commands/ls.js";

export class Navigation {
    constructor() {
        this.homeDir = homedir();  // домашняя директория (фиксированная)
        process.chdir(this.homeDir);  // стартуем из неё
    }

    getHomeDir() {
        return this.homeDir;
    }

    getCurrentDir() {
        return process.cwd(); // всегда актуальная рабочая директория
    }

    printCurrentDir() {
        console.log(`You are currently in ${this.getCurrentDir()}`);
    }

    navigateUp() {
        // Передаем текущий объект Navigation в функцию goUp
        return goUp(this);
    }

    navigateCd(argument) {
        return cdGo(argument);
    }

    printLs() {
        // Передаем текущий объект Navigation в функцию list
        return list(this);
    }
}