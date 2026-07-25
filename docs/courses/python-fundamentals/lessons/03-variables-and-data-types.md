---
title: Variables and Data Types
description: Learn how to store data in variables and work with Python's basic data types.
---

# Variables and Data Types

Variables allow you to store information in your program so that it can be used later.

In this lesson, you will learn how to create variables, assign values, and work with Python's basic data types.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what a variable is.
- Create and use variables.
- Understand Python's basic data types.
- Check the type of a value.
- Follow Python naming conventions for variables.

## What is a Variable?

A **variable** is a named location used to store data.

Think of a variable as a labeled box.

```text
+-------------+
| age         |
|-------------|
| 18          |
+-------------+
```

The label is the variable name, and the value inside the box is the data.

## Creating Variables

In Python, you create a variable using the assignment operator (`=`).

```python
name = "Alice"
age = 18
height = 170.5
```

Unlike some programming languages, Python does **not** require you to declare the data type before creating a variable.

## Using Variables

Variables can be used anywhere in your program.

```python
name = "Alice"

print(name)
```

Output

```text
Alice
```

Variables can also be combined.

```python
first_name = "Alice"
last_name = "Smith"

print(first_name)
print(last_name)
```

Output

```text
Alice
Smith
```

## Updating Variables

The value of a variable can be changed.

```python
score = 10

print(score)

score = 20

print(score)
```

Output

```text
10
20
```

The variable name stays the same, but its value changes.

## Variable Naming Rules

Variable names should follow these rules:

- Must begin with a letter or underscore (`_`)
- Cannot begin with a number
- Can contain letters, numbers, and underscores
- Cannot contain spaces
- Cannot use Python keywords

Valid examples:

```python
name = "Alice"
student_age = 18
_score = 100
```

Invalid examples:

```python
2name = "Alice"
student age = 18
class = "Python"
```

## Variable Naming Convention

Python follows the **PEP 8** style guide.

Use **snake_case** for variable names.

Good examples:

```python
student_name = "Alice"
total_score = 100
is_logged_in = True
```

Avoid:

```python
StudentName = "Alice"
studentName = "Alice"
TOTALSCORE = 100
```

## What are Data Types?

Every value in Python has a data type.

The data type tells Python what kind of information is being stored.

Some common data types include:

| Data Type | Description | Example |
|-----------|-------------|---------|
| `int` | Integer numbers | `10` |
| `float` | Decimal numbers | `3.14` |
| `str` | Text | `"Hello"` |
| `bool` | True or False | `True` |

## Integer (`int`)

Integers represent whole numbers.

```python
age = 18
year = 2026
```

## Float (`float`)

Floats represent decimal numbers.

```python
height = 170.5
price = 19.99
```

## String (`str`)

Strings represent text.

```python
name = "Alice"
message = "Hello, World!"
```

Strings can use either double quotes or single quotes.

```python
language = "Python"
course = 'Programming'
```

## Boolean (`bool`)

A Boolean value has only two possible values.

```python
True
False
```

Example:

```python
is_student = True
is_logged_in = False
```

## Checking Data Types

Use the `type()` function to check a value's data type.

```python
age = 18

print(type(age))
```

Output

```text
<class 'int'>
```

Another example:

```python
print(type("Python"))
print(type(3.14))
print(type(True))
```

Output

```text
<class 'str'>
<class 'float'>
<class 'bool'>
```

## Summary

In this lesson, you learned:

- What variables are.
- How to create variables.
- How to update variables.
- Python variable naming rules.
- The four basic Python data types.
- How to check data types using `type()`.

## Exercises

### Exercise 1

Create variables for the following information.

- Your name
- Your age
- Your height
- Whether you are a student

### Exercise 2

Which of the following are valid variable names?

```python
student_name
StudentName
student age
2score
_score
```

### Exercise 3

What data type is each value?

```python
100
3.14
"Python"
False
```

### Exercise 4

Write a Python program that creates the following variables and prints them.

- `name`
- `age`
- `country`

Expected output

```text
Alice
18
Thailand
```