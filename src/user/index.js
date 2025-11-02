import os, { EOL } from "node:os";

const USER_NAME_PREFIX = '--username';

export default class User {
    constructor() {
        this.user = this.#findUser();
        this.#welcome(this.user);
    }

    #welcome(username) {
        console.log(`Welcome to the File Manager, ${username}!`);
        process.stdout.write(os.EOL);
    }

    #goodbye(username) {
        console.log(`${EOL}Thank you for using File Manager, ${username}, goodbye!`);
        process.exit();
    }

    #findUser() {
        const args = process.argv;
        const arg = args.find((a) => a.startsWith(`${USER_NAME_PREFIX}=`));
        const username = arg?.slice(USER_NAME_PREFIX.length + 1) || 'Anonymous';
        return username;
    }

    sayGoodbye() {
        this.#goodbye(this.user);
    }

    handleInvalidInput() {
        console.log('Invalid input');
    }

    handleOperationError(error) {
        console.log('Operation failed');
    }
}

