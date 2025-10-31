import {OS_COMMANDS} from "../utils/constants.js";
import os from "node:os";
import {printEmptyLine} from "../utils/helpers.js";

export class OperatingSystemHandler {
    run(args) {
        const flag = args[0];

        switch (flag) {
            case OS_COMMANDS.EOL:
                this.getEOL();
                break;
            case OS_COMMANDS.CPUS:
                this.getCPUs();
                break;

            case OS_COMMANDS.HOMEDIR:
                this.getHomeDir();
                break;

            case OS_COMMANDS.USERNAME:
                this.getUsername();
                break;

            case OS_COMMANDS.ARCHITECTURE:
                this.getArchitecture();
                break;

            default:
                console.log('Invalid input');
        }
    }

    getEOL() {
        printEmptyLine();
        console.log(JSON.stringify(os.EOL));
    }

    getCPUs() {
        printEmptyLine();
        const cpus = os.cpus();
        console.log(`Overall amount of CPUs: ${cpus.length}`);
        cpus.forEach((cpu, index) => {
            console.log(`${index + 1}. ${cpu.model.trim()} — ${(cpu.speed / 1000).toFixed(2)} GHz`);
        });
    }

    getHomeDir() {
        printEmptyLine();
        console.log(os.homedir());
    }

    getUsername() {
        printEmptyLine();
        console.log(os.userInfo().username);
    }

    getArchitecture() {
        printEmptyLine();
        console.log(os.arch());
    }
}