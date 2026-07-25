---
title: Install Python
description: Learn why Python is required and how to install it on your computer.
---

# Install Python

Before you can start writing Python programs, you need to install **Python** on your computer.

In this lesson, you will learn why Python is required, how to install it, and how to verify that the installation was successful.


## Why Do We Need to Install Python?

When you write Python code, your computer cannot understand it directly.

For example, consider the following program:

```python
print("Hello, World!")
```

To execute this program, your computer needs **Python**, which reads your code and translates it into instructions that the operating system can understand.

Without Python installed, your computer does not know how to execute `.py` files.

## What Does Each Software Do?

Throughout this course, you will use three tools.

| Software | Purpose |
|----------|---------|
| **Python** | Executes Python programs. |
| **Visual Studio Code** | A code editor used to write Python code. |
| **Python Extension** | Adds Python support to Visual Studio Code, including syntax highlighting, IntelliSense, debugging, and more. |

Think of them like this:

- **Python** is the engine that runs your code.
- **Visual Studio Code** is where you write your code.
- **Python Extension** adds helpful development tools to VS Code.

Together, these tools provide a complete Python development environment.


## Download Python

Visit the official Python website:

👉 https://www.python.org/downloads/

Download the latest stable version available for your operating system.

Python supports:

- Windows
- macOS
- Linux


## Install Python (Windows)

1. Run the downloaded installer.
2. **Check the option "Add Python to PATH".**
3. Click **Install Now**.
4. Wait for the installation to complete.
5. Click **Close**.

> **Important**
>
> Make sure to enable **Add Python to PATH** before installing. This allows you to run Python from the command line.


## Verify the Installation

Open a terminal.

### Windows

Open **Command Prompt** or **PowerShell**.

### macOS / Linux

Open **Terminal**.

Run the following command:

```bash
python --version
```

If that doesn't work, try:

```bash
python3 --version
```

You should see output similar to:

```text
Python 3.13.7
```

The version number may be different depending on the latest release.

## Running the Python Interpreter

After installation, you can start the Python interpreter.

```bash
python
```

or

```bash
python3
```

You should see something similar to:

```text
Python 3.13.7
>>>
```

The `>>>` prompt indicates that Python is ready to execute commands.

Try typing:

```python
print("Hello, World!")
```

Expected output:

```text
Hello, World!
```

To exit the interpreter:

```python
exit()
```

or press:

- **Ctrl + Z**, then **Enter** (Windows)
- **Ctrl + D** (macOS/Linux)

## Troubleshooting

### "'python' is not recognized..."

Python may not have been added to your system PATH.

Try reinstalling Python and ensure that **Add Python to PATH** is checked during installation.

### Command Not Found

On macOS and Linux, use:

```bash
python3 --version
```

instead of:

```bash
python --version
```

## Summary

In this lesson, you learned:

- Why Python must be installed.
- The role of Python, Visual Studio Code, and the Python Extension.
- How to download and install Python.
- How to verify that Python is installed correctly.
- How to start the Python interpreter.

## References

- Python Software Foundation. https://www.python.org/
- Python Downloads. https://www.python.org/downloads/