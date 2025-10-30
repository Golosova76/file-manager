import os from "node:os";
import {resolvePath} from "../../utils/helpers.js";
import fs from "node:fs/promises";

export async function addFile(workPathDir, args) {
    process.stdout.write(os.EOL);

    const filePath = resolvePath(workPathDir, args);

    await fs.writeFile(filePath, '', { flag: 'wx' });
    console.log(`File ${args} was created successfully in ${workPathDir}`);
}