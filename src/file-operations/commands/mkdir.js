import {printEmptyLine, resolvePath} from "../../utils/helpers.js";
import fs from "node:fs/promises";

export async function addMkDir(workPathDir, args) {
    printEmptyLine();

    const filePath = resolvePath(workPathDir, args);

    await fs.mkdir(filePath, { recursive: false });
    console.log(`Directory ${args} was created successfully in ${workPathDir}`);

    printEmptyLine();
}