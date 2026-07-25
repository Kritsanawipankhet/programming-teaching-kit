---
title: Introduction
description: Learn the fundamentals of programming and understand how Python programs work.
---

# Introduction

Welcome to your first programming lesson!

Before learning Python syntax, it is important to understand what programming is and how Python programs are executed.

In this lesson, you will learn the basic concepts of programming, understand how Python executes your code, and write your first Python program.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what programming is.
- Describe what a program is.
- Understand what source code is.
- Explain the role of the Python Interpreter.
- Describe how Python programs are executed.
- Write and run your first Python program.

## What is Programming?

Programming is the process of giving instructions to a computer to perform a task.

A computer cannot think or make decisions on its own. It simply follows the instructions provided by programmers.

Imagine making a sandwich.

```text
Start
  ↓
Get two slices of bread
  ↓
Add ham
  ↓
Add cheese
  ↓
Close the sandwich
  ↓
Done
```

Programming works in the same way.

Instead of giving instructions to a person, we write instructions for a computer to follow.

## What is a Program?

A **program** is a collection of instructions that tells a computer what to do.

For example:

```python
print("Hello")
print("Python")
print("Programming")
```

When the program runs, Python executes each instruction in order.

Output:

```text
Hello
Python
Programming
```

## What is Source Code?

The instructions written by programmers are called **source code**.

Example:

```python
print("Hello, World!")
```

Python source code is typically stored in files with the `.py` extension.

Examples:

```text
hello.py
calculator.py
game.py
```

## How Python Executes Programs

Python source code cannot be understood directly by the computer.

Instead, it is executed by the **Python Interpreter**.

### What is the Python Interpreter?

The **Python Interpreter** is a program that reads and executes Python source code.

Without the interpreter, your computer cannot run Python programs.

### Execution Flow

```text
Python Source Code (.py)
            ↓
Python Interpreter
            ↓
Operating System
            ↓
Computer Hardware
            ↓
Program Output
```

The Python Interpreter acts as a bridge between your source code and your computer.

### How Is Python Different from Other Languages?

Not all programming languages execute programs in the same way.

Python uses an **Interpreter** to execute source code.

```text
Source Code
      ↓
Python Interpreter
      ↓
Program Output
```

Languages such as **C** and **C++** are typically compiled before they can run.

```text
Source Code
      ↓
Compiler
      ↓
Executable Program
      ↓
Program Output
```

Some languages use both compilation and a runtime environment.

```text
Source Code
      ↓
Compiler
      ↓
Intermediate Code
      ↓
Runtime Environment
      ↓
Program Output
```

Examples include:

| Language | How It Runs |
|----------|-------------|
| Python | Python Interpreter |
| C | Compiler |
| C++ | Compiler |
| Java | Compiler + Java Virtual Machine (JVM) |
| C# | Compiler + .NET Common Language Runtime (CLR) |

> **Note**
>
> At this stage, you only need to know that Python programs are executed by the Python Interpreter. We will focus on writing Python programs throughout this course.

## Your First Python Program

Traditionally, the first program programmers write is called **Hello, World!**

```python
print("Hello, World!")
```

Output:

```text
Hello, World!
```

Congratulations! 🎉

You have written your first Python program.

## Running Your First Program

Save your program as:

```text
hello.py
```

Open a terminal and run:

```bash
python hello.py
```

or

```bash
python3 hello.py
```

Expected output:

```text
Hello, World!
```

## Summary

In this lesson, you learned:

- What programming is.
- What a program is.
- What source code is.
- What the Python Interpreter does.
- How Python executes programs.
- How to write and run your first Python program.

## Exercises

### Exercise 1

What is programming?

### Exercise 2

What is the difference between a **program** and **source code**?

### Exercise 3

What is the role of the Python Interpreter?

A. Write Python code

B. Execute Python programs

C. Install Python

D. Edit source code

### Exercise 4

Write a Python program that prints:

```text
Welcome to Python!
```