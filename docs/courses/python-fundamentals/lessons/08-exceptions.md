---
title: Exceptions
description: Learn how to handle errors safely using exceptions in Python.
---

# Exceptions

Programs do not always run perfectly.

Sometimes users type the wrong input, a file is missing, or a calculation cannot be completed.

Python uses **exceptions** to handle these problems.

Exceptions help your program respond to errors without crashing immediately.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what an exception is.
- Understand why exceptions are useful.
- Use `try` and `except` to handle errors.
- Handle different types of exceptions.
- Use `else` and `finally`.
- Raise an exception with `raise`.
- Create your own exception class.
- Avoid common mistakes when handling exceptions.

## What is an Exception?

An **exception** is an error that happens while a program is running.

Example:

```python
number = int("hello")
```

Python cannot convert `"hello"` into an integer.

This causes an exception:

```text
ValueError
```

Without exception handling, the program stops.

## Why Handle Exceptions?

Exception handling allows your program to keep control when something goes wrong.

For example, instead of showing a scary error message, your program can show a helpful message:

```text
Please enter a valid number.
```

This makes programs friendlier and easier to use.

## Common Exception Types

Here are some common exceptions in Python.

| Exception | Meaning | Example |
|-----------|---------|---------|
| `ValueError` | A value has the wrong format | `int("hello")` |
| `TypeError` | An operation uses the wrong data type | `"Age: " + 18` |
| `ZeroDivisionError` | A number is divided by zero | `10 / 0` |
| `NameError` | A variable name does not exist | `print(score)` when `score` was not created |
| `IndexError` | A list index does not exist | `names[5]` when the list is too short |
| `KeyError` | A dictionary key does not exist | `student["grade"]` when `"grade"` is missing |
| `FileNotFoundError` | A file cannot be found | `open("missing.txt")` |

## The try...except Statement

Use `try` when you want Python to try running code that might cause an exception.

Use `except` to decide what happens if an exception occurs.

Syntax:

```python
try:
    # code that might cause an exception
except:
    # code to run if an exception happens
```

Example:

```python
try:
    age = int(input("Enter your age: "))
    print("Your age is", age)
except:
    print("Please enter a number.")
```

If the user types:

```text
hello
```

Output

```text
Please enter a number.
```

## Catching a Specific Exception

It is better to catch a specific exception instead of catching every exception.

Example:

```python
try:
    age = int(input("Enter your age: "))
    print("Your age is", age)
except ValueError:
    print("Please enter a valid number.")
```

This handles only `ValueError`.

It makes the program easier to understand and debug.

## Handling Multiple Exceptions

A program can handle different exceptions in different ways.

Example:

```python
try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(result)
except ValueError:
    print("Please enter a valid number.")
except ZeroDivisionError:
    print("You cannot divide by zero.")
```

If the user types:

```text
0
```

Output

```text
You cannot divide by zero.
```

## Using else

The `else` block runs only when no exception happens.

Example:

```python
try:
    number = int(input("Enter a number: "))
except ValueError:
    print("Please enter a valid number.")
else:
    print("Thank you! You entered", number)
```

Use `else` for code that should run only after the `try` block succeeds.

## Using finally

The `finally` block always runs.

It runs whether an exception happens or not.

Example:

```python
try:
    number = int(input("Enter a number: "))
    print(10 / number)
except ZeroDivisionError:
    print("You cannot divide by zero.")
finally:
    print("Program finished.")
```

The `finally` block is often used for cleanup tasks, such as closing files.

## Raising an Exception

Sometimes you may want to throw, or **raise**, an exception yourself.

Use `raise` when a value should not be allowed.

Example:

```python
age = -5

if age < 0:
    raise ValueError("Age cannot be negative.")
```

This tells Python that the value is not valid.

You can also catch the exception after raising it.

Example:

```python
try:
    age = -5

    if age < 0:
        raise ValueError("Age cannot be negative.")
except ValueError as error:
    print("Invalid age:", error)
```

Output

```text
Invalid age: Age cannot be negative.
```

## Creating Your Own Exception

Python has many built-in exception types, such as `ValueError` and `TypeError`.

Sometimes a program needs a more specific exception.

You can create your own exception by creating a class that inherits from `Exception`.

Syntax:

```python
class MyError(Exception):
    pass
```

Example:

```python
class InvalidScoreError(Exception):
    pass


score = 120

if score < 0 or score > 100:
    raise InvalidScoreError("Score must be between 0 and 100.")
```

This creates a new exception type called `InvalidScoreError`.

Custom exception names usually end with `Error`.

## Catching Your Own Exception

You can catch your own exception just like a built-in exception.

Example:

```python
class InvalidScoreError(Exception):
    pass


try:
    score = 120

    if score < 0 or score > 100:
        raise InvalidScoreError("Score must be between 0 and 100.")
except InvalidScoreError as error:
    print("Invalid score:", error)
```

Output

```text
Invalid score: Score must be between 0 and 100.
```

Use custom exceptions when a normal built-in exception is not clear enough for your program.

## A Complete Example

This program asks for a score and checks if it is valid.

```python
class InvalidScoreError(Exception):
    pass


try:
    score = int(input("Enter your score: "))

    if score < 0 or score > 100:
        raise InvalidScoreError("Score must be between 0 and 100.")
except ValueError as error:
    print("Invalid input:", error)
except InvalidScoreError as error:
    print("Invalid score:", error)
else:
    print("Your score is", score)
finally:
    print("Done.")
```

Example output:

```text
Enter your score: 120
Invalid score: Score must be between 0 and 100.
Done.
```

## Common Mistakes

### Catching every exception

Avoid this when possible:

```python
try:
    number = int(input("Enter a number: "))
except:
    print("Something went wrong.")
```

Better:

```python
try:
    number = int(input("Enter a number: "))
except ValueError:
    print("Please enter a valid number.")
```

### Putting too much code in try

Avoid:

```python
try:
    name = input("Enter your name: ")
    age = int(input("Enter your age: "))
    print("Hello", name)
    print("Next year you will be", age + 1)
except ValueError:
    print("Invalid age.")
```

Better:

```python
name = input("Enter your name: ")

try:
    age = int(input("Enter your age: "))
except ValueError:
    print("Invalid age.")
else:
    print("Hello", name)
    print("Next year you will be", age + 1)
```

### Forgetting the colon

Incorrect:

```python
try
    print(10 / 0)
except ZeroDivisionError
    print("Cannot divide by zero.")
```

Correct:

```python
try:
    print(10 / 0)
except ZeroDivisionError:
    print("Cannot divide by zero.")
```

### Creating a custom exception incorrectly

Incorrect:

```python
class InvalidScoreError:
    pass
```

Correct:

```python
class InvalidScoreError(Exception):
    pass
```

A custom exception should inherit from `Exception`.

## Summary

In this lesson, you learned:

- What exceptions are.
- Why exception handling is useful.
- How to use `try` and `except`.
- How to catch specific exceptions.
- How to handle multiple exceptions.
- How to use `else` and `finally`.
- How to raise an exception with `raise`.
- How to create your own exception class.
- Common mistakes when handling exceptions.

## Exercises

### Exercise 1

What exception happens in this code?

```python
number = int("cat")
```

### Exercise 2

Write a program that asks the user for their age.

If the user types something that is not a number, print:

```text
Please enter a valid age.
```

### Exercise 3

Write a program that asks the user for a number and prints:

```python
100 / number
```

Handle the case where the user enters `0`.

### Exercise 4

What is the output?

```python
try:
    print(10 / 0)
except ZeroDivisionError:
    print("Cannot divide by zero.")
finally:
    print("Finished.")
```

### Exercise 5

Fix the errors.

```python
try
    age = int(input("Age: "))
except ValueError
    print("Invalid age")
```

### Exercise 6

Write a program that asks for a score.

If the score is less than `0` or greater than `100`, raise a `ValueError`.

Otherwise, print the score.

### Exercise 7

Create your own exception called `InvalidPasswordError`.

Write a program that checks a password.

If the password has fewer than `8` characters, raise `InvalidPasswordError`.

Otherwise, print:

```text
Password accepted.
```
