import fs from 'node:fs/promises';

export async function list(navigation) {
    try {
        const workDirPath = navigation.getCurrentDir();

        // Читаем содержимое текущей директории
        const items = await fs.readdir(workDirPath, { withFileTypes: true });

        // Разделяем на папки и файлы
        const folders = [];
        const files = [];

        for (const item of items) {
            if (item.isDirectory()) {
                folders.push({ Name: item.name, Type: 'directory' });
            } else if (item.isFile()) {
                files.push({ Name: item.name, Type: 'file' });
            }
        }

        // Сортируем по алфавиту
        folders.sort((a, b) => a.Name.localeCompare(b.Name));
        files.sort((a, b) => a.Name.localeCompare(b.Name));

        // Объединяем: сначала папки, потом файлы
        const sortedItems = [...folders, ...files];

        // вывод в консоль в виде таблицы
        console.table(sortedItems);
    } catch {
        console.error('Operation failed');
    }
}
