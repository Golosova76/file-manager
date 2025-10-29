import path from 'node:path';

export function goUp(navigation) {
    const workDirPath = navigation.getCurrentDir(); // получаем актуальную рабочую директорию
    // получаем корневую директорию диска (самый верхний уровень файловой системы)
    const rootDirPath = path.parse(workDirPath).root;

    // Проверяем, не в rootDir ли мы
    if (workDirPath === rootDirPath) {
        console.log('Already in root directory');
        return workDirPath;
    }

    // Получаем родительскую директорию рабочей директории
    const parentDirPath = path.dirname(workDirPath);
    // переходим в родительскую директорию
    process.chdir(parentDirPath);

    console.log(`Moved to: ${parentDirPath}`);
    return parentDirPath;
}
