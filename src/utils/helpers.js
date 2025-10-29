function tokenizeUserInput(userInput) {
    // 1) Нормализуем ввод
    const raw = (userInput ?? '').trim();
    if (!raw) throw new Error('Invalid input');

    // 2) Микро-проверка на незакрытые кавычки
    const doubleQuotesCount = (raw.match(/"/g) || []).length;
    const singleQuotesCount = (raw.match(/'/g) || []).length;
    if (doubleQuotesCount % 2 !== 0 || singleQuotesCount % 2 !== 0) {
        throw new Error('Invalid input');
    }

    // 3) Токенизация: либо непробельные без кавычек, либо группы в "..." или '...'
    const matched = raw.match(/[^\s"']+|"([^"]*)"|'([^']*)'/g);
    if (!matched) throw new Error('Invalid input');

    // 4) Снимаем внешние кавычки с каждого токена
    const tokens = matched.map((token) => {
        const hasDouble = token.startsWith('"') && token.endsWith('"');
        const hasSingle = token.startsWith("'") && token.endsWith("'");
        return (hasDouble || hasSingle) ? token.slice(1, -1) : token;
    });

    // 5) должны получить хотя бы один токен (команду)
    if (tokens.length === 0) throw new Error('Invalid input');

    // 6) Возвращаем: [команда, ...аргументы] (уже без внешних кавычек)
    return tokens;
}
