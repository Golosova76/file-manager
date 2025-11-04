import {printEmptyLine} from "../../utils/helpers.js";

export function cdGo(argument) {
    printEmptyLine();
    let newDir;
    process.chdir(argument);
    newDir = process.cwd();
    console.log(`Moved to: ${newDir}`);
    return newDir;
}