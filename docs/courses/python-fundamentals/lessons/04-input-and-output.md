---
title: Input and Output
description: Learn how to receive input from users and display output in Python.
---

# Input and Output

Most programs need to communicate with users.

This communication happens in two ways:

- **Input** – Receive data from the user.
- **Output** – Display information to the user.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain the difference between input and output.
- Display output using the `print()` function.
- Receive user input using the `input()` function.
- Store user input in variables.
- Display variables using `print()`.
- Format output using f-strings.

## What is Output?

Output is information displayed by a program.

In Python, the `print()` function is used to display output.

Example:

```python
print("Hello, World!")
```

Output:

```text
Hello, World!
```

You can print numbers as well.

```python
print(100)
print(3.14)
```

Output:

```text
100
3.14
```

## Printing Variables

The `print()` function can display variables.

```python
name = "Alice"

print(name)
```

Output:

```text
Alice
```

You can print multiple values.

```python
name = "Alice"
age = 18

print(name, age)
```

Output:

```text
Alice 18
```

## What is Input?

Input allows users to enter information while a program is running.

Python uses the `input()` function.

Example:

```python
name = input("Enter your name: ")
```

When the program runs:

```text
Enter your name: Alice
```

The value entered by the user is stored in the variable.

## Displaying User Input

```python
name = input("Enter your name: ")

print("Hello,", name)
```

Example:

```text
Enter your name: Alice
Hello, Alice
```

## Using f-Strings

Python provides **f-strings** for formatting text.

```python
name = "Alice"

print(f"Hello, {name}!")
```

Output:

```text
Hello, Alice!
```

Another example:

```python
name = input("Name: ")
age = input("Age: ")

print(f"{name} is {age} years old.")
```

Example output:

```text
Name: Alice
Age: 18
Alice is 18 years old.
```

## Important Note

The `input()` function always returns a **string**.

```python
age = input("Age: ")

print(type(age))
```

Output:

```text
<class 'str'>
```

You will learn how to convert input into numbers in the **Type Casting** lesson.


## Common Mistakes

### Forgetting quotation marks

Incorrect:

```python
print(Hello)
```

Correct:

```python
print("Hello")
```

### Forgetting to store input

Incorrect:

```python
input("Enter your name: ")
```

Correct:

```python
name = input("Enter your name: ")
```

### Forgetting the `f` in an f-string

Incorrect:

```python
name = "Alice"

print("Hello, {name}")
```

Output:

```text
Hello, {name}
```

Correct:

```python
print(f"Hello, {name}")
```

Output:

```text
Hello, Alice
```

## Summary

In this lesson, you learned:

- How to display output using `print()`.
- How to receive user input using `input()`.
- How to store user input in variables.
- How to use f-strings.
- That `input()` always returns a string.

## Exercises

### Exercise 1

Write a program that prints:

```text
Welcome to Python!
```

### Exercise 2

Ask the user for their name and display:

```text
Hello, Alice!
```

### Exercise 3

Ask the user for:

- Name
- Favorite programming language

Display the result using an f-string.

### Exercise 4

What is the output?

```python
language = "Python"

print(f"I love {language}!")
```