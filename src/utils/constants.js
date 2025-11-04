export const COMMANDS_MAP = {
    // Навигация
    'up': {
        description: 'Go upper from current directory',
        usage: 'up',
        requiredArgs: 0,
        category: 'navigation'
    },
    'cd': {
        description: 'Change directory (relative or absolute path)',
        usage: 'cd path_to_directory',
        requiredArgs: 1,
        category: 'navigation'
    },
    'ls': {
        description: 'List folders first, then files (alphabetically)',
        usage: 'ls',
        requiredArgs: 0,
        category: 'navigation'
    },

    // Операции с файлами и папками
    'cat': {
        description: 'Read file and print its content (Readable stream)',
        usage: 'cat path_to_file',
        requiredArgs: 1,
        category: 'file'
    },
    'add': {
        description: 'Create empty file in current working directory',
        usage: 'add new_file_name',
        requiredArgs: 1,
        category: 'file'
    },
    'mkdir': {
        description: 'Create new directory in current working directory',
        usage: 'mkdir new_directory_name',
        requiredArgs: 1,
        category: 'file'
    },
    'rn': {
        description: 'Rename file (content remains unchanged)',
        usage: 'rn path_to_file new_file_name',
        requiredArgs: 2,
        category: 'file'
    },
    'cp': {
        description: 'Copy file using Readable/Writable streams',
        usage: 'cp path_to_file path_to_new_directory',
        requiredArgs: 2,
        category: 'file'
    },
    'mv': {
        description: 'Move file (copy via streams, then delete source)',
        usage: 'mv path_to_file path_to_new_directory',
        requiredArgs: 2,
        category: 'file'
    },
    'rm': {
        description: 'Remove file',
        usage: 'rm path_to_file',
        requiredArgs: 1,
        category: 'file'
    },

    // Информация об ОС
    'os': {
        description: 'Operating system info',
        usage: 'os --EOL',
        requiredArgs: 1,
        category: 'os'
    },

    // Хэш
    'hash': {
        description: 'Calculate file hash (e.g., SHA256) and print',
        usage: 'hash path_to_file',
        requiredArgs: 1,
        category: 'hash'
    },

    // Архивация
    'compress': {
        description: 'Compress file with Brotli (Streams API)',
        usage: 'compress path_to_file path_to_destination',
        requiredArgs: 2,
        category: 'archive'
    },
    'decompress': {
        description: 'Decompress file with Brotli (Streams API)',
        usage: 'decompress path_to_file path_to_destination',
        requiredArgs: 2,
        category: 'archive'
    },
    // Системные команды
    '.exit': {
        description: 'Exit the File Manager',
        usage: '.exit',
        requiredArgs: 0,
        category: 'system'
    },
    'help': {
        description: 'Show available commands and their usage',
        usage: 'help',
        requiredArgs: 0,
        category: 'system'
    }
};

export const OS_COMMANDS = {
    EOL: '--EOL',
    CPUS: '--cpus',
    HOMEDIR: '--homedir',
    USERNAME: '--username',
    ARCHITECTURE: '--architecture',
};

export const OPERATION_FAILED = 'Operation failed';