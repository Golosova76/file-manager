import os from "node:os";
import {resolvePath} from "../../utils/helpers.js";
import fs from "node:fs/promises";
import path from "node:path";

export async function rename(workPathDir, args) {
    process.stdout.write(os.EOL);

    const oldFilePath = resolvePath(workPathDir, args[0]);
    const newFileName = path.basename(args[1]);
    const dirOfOldFile = path.dirname(oldFilePath);
    const newFilePath = path.join(dirOfOldFile, newFileName);

    await fs.rename(oldFilePath, newFilePath);
    console.log(`File ${args[0]} was renamed to ${newFileName}`);
}