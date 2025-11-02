import {printEmptyLine, resolvePath} from "../../utils/helpers.js";
import path from "node:path";
import fs from "node:fs/promises";
import {createReadStream, createWriteStream} from "node:fs";
import {pipeline} from "node:stream/promises";
import {OPERATION_FAILED} from "../../utils/constants.js";

export async function copy(workPathDir, args) {
    printEmptyLine();

    const sourceFilePath = resolvePath(workPathDir, args[0]);
    const sourceFileName = path.basename(sourceFilePath);
    const newDirPath = resolvePath(workPathDir, args[1]);
    const targetPath = path.resolve(newDirPath, sourceFileName);

    await fs.access(sourceFilePath); //проверка существования файла

    // Проверяем, что директория назначения существует
    const destStat = await fs.stat(newDirPath);
    if (!destStat.isDirectory()) {
        throw new Error(OPERATION_FAILED);
    }

    const readStream = createReadStream(sourceFilePath);
    const writeStream = createWriteStream(targetPath);

    await pipeline(readStream, writeStream);

    console.log(`File ${args[0]} was copied to ${targetPath}`);
}