import {printEmptyLine, resolvePath} from "../../utils/helpers.js";
import fs from "node:fs/promises";

export async function remove(workPathDir, args) {
    printEmptyLine();

    const filePath = resolvePath(workPathDir, args[0]);

    await fs.unlink(filePath);
    console.log(`File ${args[0]} was removed successfully`);
}