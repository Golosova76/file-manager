import os from "node:os";
import {resolvePath} from "../../utils/helpers.js";
import fs from "node:fs/promises";

export async function addMkDir(workPathDir, args) {
    process.stdout.write(os.EOL);

    const filePath = resolvePath(workPathDir, args);

    await fs.mkdir(filePath, { recursive: false });
    console.log(`Directory ${args} was created successfully in ${workPathDir}`);
}