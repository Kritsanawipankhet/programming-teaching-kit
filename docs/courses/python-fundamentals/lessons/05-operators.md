---
title: Operators
description: Learn how to perform calculations and comparisons using Python operators.
---

# Operators

Operators allow you to perform calculations, compare values, and combine conditions.

They are essential for writing programs that make decisions and process data.

## Learning Objectives

After completing this lesson, you will be able to:

- Use arithmetic operators.
- Use assignment operators.
- Use comparison operators.
- Use logical operators.
- Understand operator precedence.

## Arithmetic Operators

Arithmetic operators perform mathematical calculations.

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `5 + 2` |
| `-` | Subtraction | `5 - 2` |
| `*` | Multiplication | `5 * 2` |
| `/` | Division | `5 / 2` |
| `//` | Floor Division | `5 // 2` |
| `%` | Modulus | `5 % 2` |
| `**` | Exponent | `5 ** 2` |

Example:

```python
a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
print(a ** b)
```

## Assignment Operators

Assignment operators assign values to variables.

| Operator | Example |
|----------|---------|
| `=` | `x = 10` |
| `+=` | `x += 5` |
| `-=` | `x -= 5` |
| `*=` | `x *= 2` |
| `/=` | `x /= 2` |

Example:

```python
score = 10

score += 5

print(score)
```

Output:

```text
15
```

## Comparison Operators

Comparison operators compare two values.

| Operator | Meaning |
|----------|---------|
| `==` | Equal to |
| `!=` | Not equal to |
| `>` | Greater than |
| `>=` | Greater than or equal to |
| `<` | Less than |
| `<=` | Less than or equal to |

Example:

```python
age = 18

print(age >= 18)
```

Output:

```text
True
```

Comparison operators return either `True` or `False`.

## Logical Operators

Logical operators combine multiple conditions.

| Operator | Description |
|----------|-------------|
| `and` | Both conditions must be true |
| `or` | At least one condition must be true |
| `not` | Reverses a Boolean value |

Example:

```python
age = 20
has_ticket = True

print(age >= 18 and has_ticket)
```

Output:

```text
True
```

## Operator Precedence

Python evaluates some operators before others.

Example:

```python
print(2 + 3 * 4)
```

Output:

```text
14
```

Use parentheses to make expressions clearer.

```python
print((2 + 3) * 4)
```

Output:

```text
20
```

## Common Mistakes

### Using `=` instead of `==`

Incorrect:

```python
if age = 18:
```

Correct:

```python
if age == 18:
```

### Forgetting Operator Precedence

```python
2 + 3 * 4
```

is not the same as

```python
(2 + 3) * 4
```

## Summary

In this lesson, you learned:

- Arithmetic operators.
- Assignment operators.
- Comparison operators.
- Logical operators.
- Operator precedence.

## Exercises

### Exercise 1

Calculate:

- 20 + 5
- 20 - 5
- 20 * 5
- 20 / 5

### Exercise 2

Predict the output.

```python
x = 10

x += 3

print(x)
```

### Exercise 3

What is the output?

```python
print(10 > 5)
print(10 == 5)
```

### Exercise 4

What is the output?

```python
print(True and False)
print(True or False)
print(not True)
```

### Exercise 5

What is the output?

```python
print(5 + 2 * 3)
print((5 + 2) * 3)
```
