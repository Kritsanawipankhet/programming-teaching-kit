---
title: Functions and Built-in Functions
description: Learn how to organize code with functions and use Python's built-in functions.
---

# Functions and Built-in Functions

Programs can become long when we write many instructions.

Functions help us organize code into smaller reusable parts.

Python also provides many ready-to-use functions called **built-in functions**.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what a function is.
- Create and call your own functions.
- Use parameters and arguments.
- Return values from functions.
- Understand the difference between `print()` and `return`.
- Use common built-in functions.
- Avoid common mistakes when writing functions.

## What is a Function?

A **function** is a named block of code that performs a specific task.

You can call a function whenever you want to run that task.

Example:

```python
print("Hello")
```

`print()` is a function that displays output.

Functions help make programs:

- Easier to read
- Easier to reuse
- Easier to fix

## Defining a Function

Use the `def` keyword to create a function.

Syntax:

```python
def function_name():
    # code to run
```

Example:

```python
def say_hello():
    print("Hello!")
```

This creates a function named `say_hello`.

The code inside the function does not run until the function is called.

## Calling a Function

To call a function, write its name followed by parentheses.

Example:

```python
def say_hello():
    print("Hello!")


say_hello()
```

Output

```text
Hello!
```

You can call the same function many times.

```python
def say_hello():
    print("Hello!")


say_hello()
say_hello()
say_hello()
```

Output

```text
Hello!
Hello!
Hello!
```

## Parameters and Arguments

A **parameter** is a variable inside a function definition.

An **argument** is the value you pass into the function when you call it.

Example:

```python
def greet(name):
    print("Hello,", name)


greet("Alice")
greet("Bob")
```

Output

```text
Hello, Alice
Hello, Bob
```

In this example:

- `name` is a parameter.
- `"Alice"` and `"Bob"` are arguments.

## Multiple Parameters

A function can have more than one parameter.

Example:

```python
def add_numbers(a, b):
    print(a + b)


add_numbers(3, 5)
```

Output

```text
8
```

The arguments are matched to the parameters in order.

## Returning Values

Use `return` when a function should send a value back to the part of the program that called it.

Example:

```python
def add_numbers(a, b):
    return a + b


result = add_numbers(3, 5)

print(result)
```

Output

```text
8
```

The returned value can be stored in a variable and used later.

## print() vs return

`print()` displays a value on the screen.

`return` sends a value back from a function.

Example using `print()`:

```python
def add_numbers(a, b):
    print(a + b)


result = add_numbers(3, 5)

print(result)
```

Output

```text
8
None
```

The function printed `8`, but it did not return a value.

Example using `return`:

```python
def add_numbers(a, b):
    return a + b


result = add_numbers(3, 5)

print(result)
```

Output

```text
8
```

Use `return` when you want to use the result later.

## Default Parameter Values

A parameter can have a default value.

If no argument is provided, Python uses the default value.

Example:

```python
def greet(name="Student"):
    print("Hello,", name)


greet()
greet("Alice")
```

Output

```text
Hello, Student
Hello, Alice
```

## Keyword Arguments

You can pass arguments by writing the parameter names.

These are called **keyword arguments**.

Example:

```python
def introduce(name, age):
    print(name, "is", age, "years old.")


introduce(age=18, name="Alice")
```

Output

```text
Alice is 18 years old.
```

Keyword arguments make function calls easier to understand.

## Scope

Variables created inside a function are called **local variables**.

They can only be used inside that function.

Example:

```python
def show_message():
    message = "Hello"
    print(message)


show_message()
```

Output

```text
Hello
```

This will cause an error:

```python
def show_message():
    message = "Hello"


print(message)
```

`message` was created inside the function, so it cannot be used outside the function.

## Built-in Functions

Python has many functions that are ready to use.

These are called **built-in functions**.

You have already used some built-in functions:

```python
print("Hello")
input("Enter your name: ")
type(10)
```

## Common Built-in Functions

| Function | What it does | Example | Result |
|----------|--------------|---------|--------|
| `print()` | Displays output | `print("Hi")` | Shows `Hi` |
| `input()` | Gets user input | `input("Name: ")` | Returns text from the user |
| `type()` | Checks a value's type | `type(10)` | `<class 'int'>` |
| `int()` | Converts a value to an integer | `int("5")` | `5` |
| `float()` | Converts a value to a decimal number | `float("3.14")` | `3.14` |
| `str()` | Converts a value to text | `str(10)` | `"10"` |
| `len()` | Counts the length of a sequence | `len("Python")` | `6` |
| `max()` | Finds the largest value | `max(3, 7, 2)` | `7` |
| `min()` | Finds the smallest value | `min(3, 7, 2)` | `2` |
| `sum()` | Adds values in a list | `sum([1, 2, 3])` | `6` |
| `round()` | Rounds a number | `round(3.14159, 2)` | `3.14` |
| `abs()` | Finds the absolute value | `abs(-10)` | `10` |

## Built-in Function Examples

### len()

```python
word = "Python"

print(len(word))
```

Output

```text
6
```

### max() and min()

```python
print(max(10, 25, 8))
print(min(10, 25, 8))
```

Output

```text
25
8
```

### sum()

```python
scores = [80, 90, 100]

print(sum(scores))
```

Output

```text
270
```

### round()

```python
price = 19.987

print(round(price, 2))
```

Output

```text
19.99
```

## A Complete Example

This program uses a custom function and built-in functions together.

```python
def calculate_average(scores):
    total = sum(scores)
    average = total / len(scores)
    return round(average, 2)


student_scores = [80, 90, 100]
average_score = calculate_average(student_scores)

print("Average score:", average_score)
```

Output

```text
Average score: 90.0
```

## Common Mistakes

### Forgetting the parentheses when calling a function

Incorrect:

```python
say_hello
```

Correct:

```python
say_hello()
```

### Forgetting the colon

Incorrect:

```python
def say_hello()
    print("Hello")
```

Correct:

```python
def say_hello():
    print("Hello")
```

### Incorrect indentation

Incorrect:

```python
def say_hello():
print("Hello")
```

Correct:

```python
def say_hello():
    print("Hello")
```

### Using a variable before returning it

Incorrect:

```python
def add_numbers(a, b):
    result = a + b


print(result)
```

Correct:

```python
def add_numbers(a, b):
    result = a + b
    return result


answer = add_numbers(3, 5)
print(answer)
```

## Summary

In this lesson, you learned:

- What functions are.
- How to define and call functions.
- How to use parameters and arguments.
- How to return values from functions.
- The difference between `print()` and `return`.
- How local variables work.
- How to use common built-in functions.
- Common mistakes when writing functions.

## Exercises

### Exercise 1

Create a function called `say_hello` that prints:

```text
Hello, Python!
```

Call the function.

### Exercise 2

Create a function called `greet` that has one parameter, `name`.

The function should print:

```text
Hello, Alice!
```

when called with `"Alice"`.

### Exercise 3

Create a function called `add_numbers` that takes two numbers and returns their sum.

Call the function and print the result.

### Exercise 4

What is the output?

```python
def double(number):
    return number * 2


print(double(4))
```

### Exercise 5

What is the output?

```python
def say_hi():
    print("Hi")


result = say_hi()
print(result)
```

### Exercise 6

Use built-in functions to find:

- The length of `"Programming"`
- The largest number in `10`, `25`, and `7`
- The smallest number in `10`, `25`, and `7`

### Exercise 7

Create a function called `calculate_area` that takes `width` and `height`.

The function should return the area of a rectangle.

Formula:

```text
area = width * height
```

### Exercise 8

Create a function called `calculate_average` that takes a list of scores.

The function should return the average score rounded to 2 decimal places.
