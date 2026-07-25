---
title: Basic Syntax
description: Learn the basic syntax of Python.
---

# Basic Syntax

Before learning variables, loops, or functions, it is important to understand the basic syntax of Python.

Programming languages have rules that determine how code should be written. These rules are called **syntax**. If the syntax is incorrect, Python will raise an error and your program will not run.

In this lesson, you will learn the most important syntax rules used in Python.


## Statements

A **statement** is a single instruction that tells Python to perform an action.

Example:

```python
print("Hello")
print("Python")
print("Programming")
```

Each line above is a separate statement.


## Comments

Comments are used to explain code. They are ignored by Python when the program runs.

### Single-line Comment

```python
# This is a comment

print("Hello")
```

### Multi-line Comment

Python does not have an official multi-line comment syntax, but triple quotes are commonly used for documentation or temporary notes.

```python
"""
This is a
multi-line comment.
"""

print("Hello")
```


## Indentation

Unlike many programming languages, Python uses **indentation** (spaces at the beginning of a line) to define blocks of code.

Correct:

```python
if True:
    print("Hello")
```

Incorrect:

```python
if True:
print("Hello")
```

Indentation is required after statements such as:

- if
- elif
- else
- for
- while
- def
- class

By convention, use **4 spaces** for each indentation level.

## Case Sensitivity

Python is **case-sensitive**, which means uppercase and lowercase letters are treated differently.

Correct:

```python
print("Hello")
```

Incorrect:

```python
Print("Hello")
```

Variable names are also case-sensitive.

```python
name = "Alice"
Name = "Bob"

print(name)
print(Name)
```

These are two different variables.


## Whitespace

Whitespace generally does not affect how Python works, but writing clean and consistent code makes it easier to read.

Recommended:

```python
age = 18
score = 95
```

Still valid, but harder to read:

```python
age=18
score=95
```

Following Python's style guide (PEP 8) is recommended.
::: info PEP 8

Throughout this course, all Python code examples follow the recommendations from **PEP 8**, the official Python Style Guide.

PEP 8 helps developers write code that is clean, consistent, and easy to read.

Learn more:
- https://peps.python.org/pep-0008/

:::

## Multiple Statements

Python allows multiple statements on the same line using a semicolon (`;`), but this is generally discouraged.

Example:

```python
x = 10; y = 20
print(x + y)
```

Preferred:

```python
x = 10
y = 20

print(x + y)
```

Writing one statement per line improves readability.


## Common Syntax Errors

Here are some common mistakes made by beginners.

### Missing Parentheses

Incorrect:

```python
print "Hello"
```

Correct:

```python
print("Hello")
```

### Incorrect Indentation

Incorrect:

```python
if True:
print("Hello")
```

Correct:

```python
if True:
    print("Hello")
```

### Misspelled Keywords or Functions

Incorrect:

```python
Print("Hello")
```

Correct:

```python
print("Hello")
```

## Summary

In this lesson, you learned:

- A statement is a single instruction.
- Comments help explain code.
- Python uses indentation to define code blocks.
- Python is case-sensitive.
- Good whitespace improves readability.
- One statement per line is recommended.
- Correct syntax is required for Python programs to run successfully.

## Exercise

### Exercise 1

Which of the following is a valid Python comment?

```python
A. // This is a comment
B. # This is a comment
C. <!-- This is a comment -->
D. /* This is a comment */
```

### Exercise 2

Fix the following code.

```python
if True:
print("Hello")
```

### Exercise 3

What will this program output?

```python
name = "Alice"
Name = "Bob"

print(name)
print(Name)
```