import {printEmptyLine, resolvePath} from "../../utils/helpers.js";
import path from "node:path";
import fs from "node:fs/promises";
import {pipeline} from "node:stream/promises";
import {createReadStream, createWriteStream} from "node:fs";
import { createBrotliCompress } from "node:zlib";

export async function compressFile(workPathDir, args) {
    printEmptyLine();

    // Определяем исходный файл
    const sourceFilePath = resolvePath(workPathDir, args[0]);
    await fs.access(sourceFilePath); // проверяем, что существует

    // Определяем путь назначения (директория или конкретный файл)
    const destinationPath = resolvePath(workPathDir, args[1]);
    let targetPath;

    const stat = await fs.stat(destinationPath);
    if (stat.isDirectory()) {
        // если это директория — кладём туда файл с тем же именем + .br
        const fileName = path.basename(sourceFilePath) + ".br";
        targetPath = path.join(destinationPath, fileName);
    } else {
        // если это существующий файл — сжимаем прямо в него
        targetPath = destinationPath;
    }


    // Создаём стримы
    const readStream = createReadStream(sourceFilePath);
    const brotliStream = createBrotliCompress();
    const writeStream = createWriteStream(targetPath);

    await pipeline(readStream, brotliStream, writeStream);

    console.log(`File ${sourceFilePath} was compressed to ${targetPath}`);
}