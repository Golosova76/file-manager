export function cdGo(argument) {
    let newDir;
    try {
        process.chdir(argument);
        newDir = process.cwd();
        return newDir;
    } catch {
        // Ошибка ОС (не существует путь, нет доступа и т.п.)
        throw new Error('Operation failed');
    }

}