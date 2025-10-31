# 📁 File Manager (RS School Assignment)

## 📖 Description

Your task is to implement a **File Manager** using **Node.js APIs**.

The file manager should:

- Work using **Command Line Interface (CLI)**
- Perform **basic file operations** (copy, move, delete, rename, etc.)
- Utilize **Streams API**
- Retrieve **operating system information**
- Perform **hash calculations**
- **Compress** and **decompress** files

---

## ⚙️ Technical Requirements

- **No external dependencies** are allowed
- Use **Node.js v24.x.x** (≥ 24.14.0)
- The application must be started via npm script:

```
npm run start -- --username=your_username
```

---

## 🖥️ Program Behavior

### ▶️ Start

When the program starts, it should display:

```text
Welcome to the File Manager, Username!
```

`Username` is taken from the `--username` argument.

### ⏹️ Exit

When the program exits (via `Ctrl + C` or `.exit` command), it should display:

```text
Thank you for using File Manager, Username, goodbye!
```

### 📂 Working Directory

- The starting directory is the user's home directory (e.g., `C:\Users\Username` on Windows)
- At the **start** of the program and **after each end of input/operation** the current working directory must be printed in the following format:

```text
You are currently in path_to_working_directory
```


### ⚠️ Input & Error Handling

- In case of an **unknown operation** or **invalid input** (for example, missing mandatory arguments or incorrect data), the program should **print to the console**:  
  ```text
  Invalid input
  ```
- In case of an **error during execution of an operation**, the program should **print to the console**:
  ```text
  Operation failed
  ```
- The user **cannot go above** the root directory (e.g., `C:\` on Windows)

---

## 🧭 Navigation & Working Directory (nwd)

| Command | Description |
|----------|--------------|
| `up` | Go one level up from the current directory (does nothing at root) |
| `cd path_to_directory` | Change current directory (accepts relative or absolute paths) |
| `ls` | List all files and folders in the current directory |

### `ls` Output Requirements

- Folders and files must be **alphabetically sorted (ascending)**
- **Folders first**, then files
- Each item should clearly indicate its **type** (e.g., `file` or `directory`)
- **Example output:**



| (index) | Name                | Type        |
|----------|---------------------|-------------|
| 0        | '.git'              | 'directory' |
| 1        | 'node_modules'      | 'directory' |
| 2        | 'src'               | 'directory' |
| 3        | '.eslintrc.cjs'     | 'file'      |
| 4        | '.gitignore'        | 'file'      |
| 5        | '.prettierignore'   | 'file'      |
| 6        | '.prettierrc'       | 'file'      |
| 7        | 'LICENSE'           | 'file'      |
| 8        | 'package-lock.json' | 'file'      |
| 9        | 'package.json'      | 'file'      |

---

## 🗂️ Basic File Operations

| Command | Description |
|----------|--------------|
| `cat path_to_file` | Read file content and print it to console (Readable Stream) |
| `add new_file_name` | Create an empty file in the current directory |
| `mkdir new_directory_name` | Create a new directory |
| `rn path_to_file new_filename` | Rename a file (contents remain unchanged) |
| `cp path_to_file path_to_new_directory` | Copy file (Readable + Writable Streams) |
| `mv path_to_file path_to_new_directory` | Move file (copy + delete original) |
| `rm path_to_file` | Delete file |

---

## 🧠 Operating System Info (os command)

| Command | Description |
|----------|--------------|
| `os --EOL` | Get and print system End-Of-Line marker |
| `os --cpus` | Print CPU info (count, model, and clock rate in GHz) |
| `os --homedir` | Print home directory path |
| `os --username` | Print current system user name |
| `os --architecture` | Print CPU architecture used to compile Node.js |

---

## 🔒 Hash Calculation

| Command | Description |
|----------|--------------|
| `hash path_to_file` | Calculate and print SHA-256 hash of the file |

---

## 🗜️ Compression and Decompression

| Command | Description |
|----------|--------------|
| `compress path_to_file path_to_destination` | Compress file using Brotli algorithm (Streams API) |
| `decompress path_to_file path_to_destination` | Decompress Brotli-compressed file (Streams API) |

> 📝 **Note:** After decompressing a previously compressed file, the result must be identical to the original file.

---

## 📌 Example Session
```
> npm run start -- --username=Chloe

Welcome to the File Manager, Chloe!

You are currently in C:\Users\Chloe
```

```
> ls


| (index) | Name        | Type        |
|---------|--------------|-------------|
| 0       | 'Desktop'   | 'directory' |
| 1       | 'Documents' | 'directory' |
| 2       | 'hello.txt' | 'file'      |

```
```
> cat hello.txt

Hello World!
You are currently in C:\Users\Chloe
```

```
> compress hello.txt C:\Users\Chloe\hello.txt.br
> decompress C:\Users\Chloe\hello.txt.br C:\Users\Chloe\hello_copy.txt
> hash hello.txt

9f64a747e1d9f2e7b...
You are currently in C:\Users\Chloe
```

```
> .exit

Thank you for using File Manager, Chloe, goodbye!
```

---

## 🧩 Summary

**Implemented features:**

- CLI-based navigation and file management
- Stream-based file operations
- OS information retrieval
- Hash calculation (SHA-256)
- Brotli compression and decompression
- Error handling and user-friendly messages

---

