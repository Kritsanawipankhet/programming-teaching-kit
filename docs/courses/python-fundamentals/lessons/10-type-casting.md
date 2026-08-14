---
title: Type Casting
description: Learn how to convert values from one data type to another in Python.
---

# Type Casting

Programs often need to change data from one type to another.

For example, input from a user is always text, but sometimes we need to use it as a number.

Python uses **type casting** to convert values between data types.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what type casting is.
- Convert values using `int()`.
- Convert values using `float()`.
- Convert values using `str()`.
- Convert values using `bool()`.
- Convert user input into numbers.
- Handle invalid conversions with `try...except`.
- Avoid common mistakes when casting types.

## What is Type Casting?

**Type casting** means converting a value from one data type to another.

Example:

```python
age_text = "18"
age_number = int(age_text)

print(age_number)
print(type(age_number))
```

Output

```text
18
<class 'int'>
```

The value `"18"` starts as a string.

After using `int()`, it becomes an integer.

## Why Use Type Casting?

Type casting is useful when a value has the wrong data type for the task.

Example:

```python
age = input("Enter your age: ")

print(age + 1)
```

This causes an error because `input()` returns a string.

To do math, convert the input to a number first.

```python
age = input("Enter your age: ")
age = int(age)

print(age + 1)
```

If the user enters:

```text
18
```

Output

```text
19
```

## Common Casting Functions

| Function | Converts to | Example | Result |
|----------|-------------|---------|--------|
| `int()` | Integer | `int("10")` | `10` |
| `float()` | Decimal number | `float("3.14")` | `3.14` |
| `str()` | String | `str(100)` | `"100"` |
| `bool()` | Boolean | `bool(1)` | `True` |

## Converting to int

Use `int()` to convert a value to an integer.

Example:

```python
number = int("25")

print(number)
print(type(number))
```

Output

```text
25
<class 'int'>
```

You can use `int()` when the text contains a whole number.

```python
age = int(input("Enter your age: "))

print("Next year you will be", age + 1)
```

Example output

```text
Enter your age: 18
Next year you will be 19
```

## Converting to float

Use `float()` to convert a value to a decimal number.

Example:

```python
price = float("19.99")

print(price)
print(type(price))
```

Output

```text
19.99
<class 'float'>
```

Use `float()` when the value may contain a decimal point.

```python
height = float(input("Enter your height: "))

print("Your height is", height)
```

## Converting to str

Use `str()` to convert a value to text.

Example:

```python
age = 18
message = "I am " + str(age) + " years old."

print(message)
```

Output

```text
I am 18 years old.
```

Without `str()`, Python cannot join text and numbers using `+`.

## Converting to bool

Use `bool()` to convert a value to `True` or `False`.

Example:

```python
print(bool(1))
print(bool(0))
print(bool("Hello"))
print(bool(""))
```

Output

```text
True
False
True
False
```

In Python:

- `0` becomes `False`
- An empty string `""` becomes `False`
- Most other values become `True`

## Casting Between int and float

You can convert integers and floats.

Example:

```python
number = 10
decimal_number = float(number)

print(decimal_number)
```

Output

```text
10.0
```

You can also convert a float to an integer.

```python
price = 19.99
whole_price = int(price)

print(whole_price)
```

Output

```text
19
```

`int()` does not round the number.

It removes the decimal part.

## Invalid Conversions

Not every value can be converted.

Example:

```python
number = int("hello")
```

This causes:

```text
ValueError
```

Python cannot convert `"hello"` into an integer.

Another example:

```python
number = int("3.14")
```

This also causes a `ValueError` because `"3.14"` is not a whole number.

Use `float()` first if the text contains a decimal number.

```python
number = float("3.14")
```

## Handling Invalid Input

Use `try...except` when user input might not be valid.

Example:

```python
try:
    age = int(input("Enter your age: "))
    print("Next year you will be", age + 1)
except ValueError:
    print("Please enter a valid whole number.")
```

If the user enters:

```text
hello
```

Output

```text
Please enter a valid whole number.
```

## A Complete Example

This program calculates the total price.

```python
try:
    price = float(input("Price: "))
    quantity = int(input("Quantity: "))

    total = price * quantity

    print("Total:", total)
except ValueError:
    print("Please enter valid numbers.")
```

Example output

```text
Price: 19.99
Quantity: 3
Total: 59.97
```

## Common Mistakes

### Forgetting that input() returns a string

Incorrect:

```python
age = input("Age: ")

print(age + 1)
```

Correct:

```python
age = int(input("Age: "))

print(age + 1)
```

### Converting invalid text to int

Incorrect:

```python
number = int("Python")
```

Correct:

```python
number = int("100")
```

### Expecting int() to round numbers

```python
print(int(3.9))
```

Output

```text
3
```

Use `round()` if you want to round a number.

```python
print(round(3.9))
```

Output

```text
4
```

### Joining strings and numbers without str()

Incorrect:

```python
age = 18

print("Age: " + age)
```

Correct:

```python
age = 18

print("Age: " + str(age))
```

You can also use an f-string.

```python
age = 18

print(f"Age: {age}")
```

## Summary

In this lesson, you learned:

- What type casting is.
- How to convert values with `int()`.
- How to convert values with `float()`.
- How to convert values with `str()`.
- How to convert values with `bool()`.
- That `input()` always returns a string.
- That invalid conversions can cause `ValueError`.
- How to handle invalid input with `try...except`.

## Exercises

### Exercise 1

Convert the string `"25"` to an integer and print its type.

### Exercise 2

Convert the string `"3.14"` to a float and print its type.

### Exercise 3

Ask the user for their age.

Convert the input to an integer.

Print the age they will be next year.

### Exercise 4

What is the output?

```python
print(int(4.8))
```

### Exercise 5

What is the output?

```python
print(bool(0))
print(bool("Python"))
print(bool(""))
```

### Exercise 6

Fix the error.

```python
score = 100

print("Score: " + score)
```

### Exercise 7

Write a program that asks for:

- Price
- Quantity

Convert the values to the correct types and print the total price.

### Exercise 8

Write a program that asks the user for a number.

If the input is not a valid number, print:

```text
Invalid number.
```
