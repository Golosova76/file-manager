import User from "../user/index.js";
import { Navigation } from "../navigation-pwd/index.js";
import * as readline from "node:readline";
import { COMMANDS_MAP } from "../utils/constants.js";
import { tokenizeUserInput } from "../utils/helpers.js";

export default class Cli {
    constructor() {
        this.user = new User();
        this.navigation = new Navigation();

        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: '>',
        })

        this.handleLine = this.handleLine.bind(this);
        this.handleSigint = this.handleSigint.bind(this);
    }

    #printCurrentDirectory() {
        const workDirPath = this.navigation.getCurrentDir();
        console.log(`You are currently in ${workDirPath}`);
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
        this.navigation.printCurrentDir();
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