---
title: Conditionals
description: Learn how to make decisions in Python using conditional statements.
---

# Conditionals

Programs often need to make decisions.

For example:

- Is the user old enough to vote?
- Is the password correct?
- Is the score high enough to pass?

Python uses **conditional statements** to execute different code depending on whether a condition is true or false.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what a conditional statement is.
- Use the `if` statement.
- Use the `if...else` statement.
- Use the `if...elif...else` statement.
- Write nested conditional statements.
- Use comparison and logical operators in conditions.

## What is a Conditional?

A **conditional** allows a program to make decisions.

A condition always evaluates to either:

- `True`
- `False`

For example:

```python
age = 20

print(age >= 18)
```

Output

```text
True
```

Since the condition is `True`, Python can choose which code to execute.

## The if Statement

The simplest conditional statement is `if`.

Syntax:

```python
if condition:
    # code to execute
```

Example:

```python
age = 20

if age >= 18:
    print("You are an adult.")
```

Output

```text
You are an adult.
```

If the condition is `False`, nothing happens.

Example:

```python
age = 15

if age >= 18:
    print("You are an adult.")
```

Output

```text
(no output)
```

## The if...else Statement

Use `else` when you want to execute another block of code if the condition is false.

Example:

```python
age = 15

if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")
```

Output

```text
You are a minor.
```

## The if...elif...else Statement

Use `elif` to check multiple conditions.

Example:

```python
score = 85

if score >= 90:
    print("Grade A")
elif score >= 80:
    print("Grade B")
elif score >= 70:
    print("Grade C")
else:
    print("Grade D")
```

Output

```text
Grade B
```

Python checks conditions from top to bottom.

Once a condition is `True`, the remaining conditions are skipped.

## Comparison Operators

Conditional statements often use comparison operators.

| Operator | Meaning | Example |
|----------|---------|---------|
| `==` | Equal to | `x == 5` |
| `!=` | Not equal to | `x != 5` |
| `>` | Greater than | `x > 5` |
| `>=` | Greater than or equal to | `x >= 5` |
| `<` | Less than | `x < 5` |
| `<=` | Less than or equal to | `x <= 5` |

Example:

```python
temperature = 30

if temperature > 25:
    print("It's hot.")
```

## Logical Operators

Logical operators combine multiple conditions.

| Operator | Description |
|----------|-------------|
| `and` | Both conditions must be true |
| `or` | At least one condition must be true |
| `not` | Reverses the result |

Example:

```python
age = 20
has_ticket = True

if age >= 18 and has_ticket:
    print("You may enter.")
```

Output

```text
You may enter.
```

Example:

```python
is_raining = False

if not is_raining:
    print("Let's go outside!")
```

Output

```text
Let's go outside!
```

## Nested Conditionals

An `if` statement can be placed inside another `if` statement.

Example:

```python
age = 20
has_ticket = True

if age >= 18:
    if has_ticket:
        print("Welcome!")
```

Output

```text
Welcome!
```

Use nested conditionals only when they make the program easier to understand.

## Common Mistakes

### Forgetting the colon

Incorrect:

```python
if age >= 18
    print("Adult")
```

Correct:

```python
if age >= 18:
    print("Adult")
```

### Incorrect indentation

Incorrect:

```python
if age >= 18:
print("Adult")
```

Correct:

```python
if age >= 18:
    print("Adult")
```

### Using `=` instead of `==`

Incorrect:

```python
if age = 18:
```

Correct:

```python
if age == 18:
```

## Summary

In this lesson, you learned:

- What conditional statements are.
- How to use `if`.
- How to use `if...else`.
- How to use `if...elif...else`.
- How to use comparison operators.
- How to use logical operators.
- How to write nested conditional statements.

## Exercises

### Exercise 1

Write a program that prints:

- `"Adult"` if the age is 18 or older.
- `"Minor"` otherwise.

### Exercise 2

Write a program that prints the letter grade using the following rules:

- 90 or above → A
- 80–89 → B
- 70–79 → C
- Below 70 → D

### Exercise 3

Given:

```python
temperature = 32
is_raining = False
```

Write a program that prints:

```text
Go outside!
```

only if:

- the temperature is greater than 30, and
- it is not raining.

### Exercise 4

What is the output?

```python
x = 10

if x > 20:
    print("A")
elif x > 5:
    print("B")
else:
    print("C")
```

### Exercise 5

Fix the errors.

```python
age = 18

if age = 18
print("Adult")
```