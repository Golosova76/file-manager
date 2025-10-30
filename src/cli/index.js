import User from "../user/index.js";
import { Navigation } from "../navigation-pwd/index.js";
import * as readline from "node:readline";
import { COMMANDS_MAP } from "../utils/constants.js";
import { tokenizeUserInput } from "../utils/helpers.js";
import {FileOperations} from "../file-operations/index.js";
import os from "node:os";

export default class Cli {
    constructor() {
        this.user = new User();
        this.navigation = new Navigation();
        this.fileOperations = new FileOperations();

        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: '> ',
        })

        this.handleLine = this.handleLine.bind(this);
        this.handleSigint = this.handleSigint.bind(this);
    }

    #printCurrentDirectory() {
        const workDirPath = this.navigation.getCurrentDir();
        console.log(`You are currently in ${workDirPath}`);
        process.stdout.write(os.EOL);
    }

    start() {
        this.#printCurrentDirectory();
        this.rl.prompt();

        this.rl.on("line", this.handleLine);
        this.rl.on('SIGINT', this.handleSigint);
    }

    async handleLine (line) {
        let shouldContinue = true;

        try {
            const tokens = tokenizeUserInput(line);
            const [commands, ...args] = tokens;

            const meta = COMMANDS_MAP[commands];
            if (!meta || args.length < meta.requiredArgs) {
                this.user.handleInvalidInput();
                return this.afterCommand();
            }

            switch (commands) {
                case 'up':
                    this.navigation.navigateUp();
                    break;
                case 'cd':
                    this.navigation.navigateCd(args[0]);
                    break;
                case 'ls':
                    await this.navigation.printLs();
                    break;
                // file-operations
                case 'cat':{
                    const workPathDir = this.navigation.getCurrentDir();
                    await this.fileOperations.cat(workPathDir, args[0]);
                    break;
                }
                case 'add':{
                    const workPathDir = this.navigation.getCurrentDir();
                    await this.fileOperations.add(workPathDir, args[0]);
                    break;
                }
                case 'mkdir':{
                    const workPathDir = this.navigation.getCurrentDir();
                    await this.fileOperations.mkdir(workPathDir, args[0]);
                    break;
                }
                case 'rn':{
                    const workPathDir = this.navigation.getCurrentDir();
                    await this.fileOperations.rn(workPathDir, args);
                    break;
                }
                case 'cp':{
                    const workPathDir = this.navigation.getCurrentDir();
                    await this.fileOperations.cp(workPathDir, args);
                    break;
                }
                case 'mv':{
                    const workPathDir = this.navigation.getCurrentDir();
                    await this.fileOperations.mv(workPathDir, args);
                    break;
                }
                case 'rm':{
                    const workPathDir = this.navigation.getCurrentDir();
                    await this.fileOperations.rm(workPathDir, args);
                    break;
                }
                // systems
                case '.exit':
                    this.user.sayGoodbye();
                    shouldContinue = false;
                    break;
                case 'help':
                    this.printHelp();
                    break;
                default:
                    this.user.handleInvalidInput();
            }
        } catch (error) {
            if (error?.message === 'Invalid input') {
                this.user.handleInvalidInput();
            } else {
                this.user.handleOperationError(error);
            }
        } finally {
            this.afterCommand();
        }
    }

    afterCommand() {
        process.stdout.write(os.EOL);
        this.navigation.printCurrentDir();
        process.stdout.write(os.EOL);
        this.rl.prompt();
    }

    printHelp() {
        const rows = Object.entries(COMMANDS_MAP).map(([name, meta]) => ({
            Command: name,
            Usage: meta.usage,
            Category: meta.category,
        }));
        console.table(rows);
    }

    handleSigint() {
        this.user.sayGoodbye();
    }
}