import User from "../user/index.js";
import {Navigation} from "../navigation-pwd/index.js";

export default class Cli {
    constructor() {
        this.user = new User();
        this.navigation = new Navigation();
        this.#printCurrentDirectory();
    }

    #printCurrentDirectory() {
        const workDirPath = this.navigation.getCurrentDir();
        console.log(`You are currently in ${workDirPath}`);
    }
}