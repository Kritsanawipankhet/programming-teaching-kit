---
title: Tuples
description: Learn how to store ordered values that should not change using Python tuples.
---

# Tuples

A **tuple** is a collection of values.

Tuples are similar to lists, but tuples cannot be changed after they are created.

Use tuples when you want to store data that should stay the same.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what a tuple is.
- Create tuples in Python.
- Access tuple items using indexes.
- Understand that tuples are immutable.
- Loop through a tuple.
- Use tuple unpacking.
- Choose when to use a tuple instead of a list.
- Avoid common mistakes when using tuples.

## What is a Tuple?

A **tuple** stores multiple values in one variable.

Tuples are written with parentheses (`()`).

Example:

```python
days = ("Monday", "Tuesday", "Wednesday")

print(days)
```

Output

```text
('Monday', 'Tuesday', 'Wednesday')
```

## Creating Tuples

A tuple can contain strings, numbers, Booleans, or mixed values.

```python
point = (10, 20)
student = ("Alice", 18, True)
scores = (80, 90, 100)
```

To create a tuple with only one item, you must add a comma.

```python
favorite_language = ("Python",)

print(type(favorite_language))
```

Output

```text
<class 'tuple'>
```

Without the comma, Python treats the value as a string, number, or other normal value.

```python
not_a_tuple = ("Python")

print(type(not_a_tuple))
```

Output

```text
<class 'str'>
```

Tuples can also contain duplicate values.

```python
numbers = (1, 2, 2, 3)

print(numbers)
```

Output

```text
(1, 2, 2, 3)
```

## Accessing Tuple Items

Tuple indexes start at `0`, just like lists.

```python
colors = ("red", "green", "blue")

print(colors[0])
print(colors[1])
print(colors[2])
```

Output

```text
red
green
blue
```

## Negative Indexes

Negative indexes count from the end of the tuple.

```python
colors = ("red", "green", "blue")

print(colors[-1])
```

Output

```text
blue
```

## Tuples are Immutable

Tuples are **immutable**.

This means you cannot change, add, or remove items after the tuple is created.

Example:

```python
colors = ("red", "green", "blue")

colors[0] = "yellow"
```

This causes a `TypeError`.

If you need to change the values, use a list instead.

## Tuple Length

Use `len()` to count the items in a tuple.

```python
colors = ("red", "green", "blue")

print(len(colors))
```

Output

```text
3
```

## Looping Through a Tuple

Use a `for` loop to go through each item in a tuple.

```python
days = ("Monday", "Tuesday", "Wednesday")

for day in days:
    print(day)
```

Output

```text
Monday
Tuesday
Wednesday
```

## Tuple Unpacking

Tuple unpacking lets you assign tuple items to variables.

Example:

```python
point = (10, 20)

x, y = point

print(x)
print(y)
```

Output

```text
10
20
```

This is useful when a tuple stores related values.

## When to Use Tuples

Use a tuple when the data should not change.

Examples:

- Coordinates: `(10, 20)`
- RGB color values: `(255, 0, 0)`
- Days of the week
- A fixed pair of values, such as `(username, score)`

## Lists vs Tuples

| Feature | List | Tuple |
|---------|------|-------|
| Brackets | `[]` | `()` |
| Ordered | Yes | Yes |
| Changeable | Yes | No |
| Allows duplicates | Yes | Yes |

## A Complete Example

This program stores a position using a tuple.

```python
position = (5, 10)

x, y = position

print("X:", x)
print("Y:", y)
```

Output

```text
X: 5
Y: 10
```

## Common Mistakes

### Trying to change a tuple

```python
days = ("Monday", "Tuesday")

days[0] = "Sunday"
```

This causes a `TypeError`.

### Forgetting the comma in a one-item tuple

Incorrect:

```python
item = ("apple")
```

Correct:

```python
item = ("apple",)
```

### Unpacking the wrong number of values

```python
point = (10, 20)

x, y, z = point
```

This causes a `ValueError` because the tuple has only two items.

## Summary

In this lesson, you learned:

- Tuples store multiple values.
- Tuples use parentheses (`()`).
- Tuple indexes start at `0`.
- Tuples are ordered.
- Tuples are immutable.
- How to loop through tuples.
- How to unpack tuples.
- When to use tuples instead of lists.

## Exercises

### Exercise 1

Create a tuple of three days of the week and print it.

### Exercise 2

Create this tuple:

```python
colors = ("red", "green", "blue")
```

Print the last item.

### Exercise 3

What happens when this code runs?

```python
numbers = (1, 2, 3)

numbers[0] = 10
```

### Exercise 4

Loop through this tuple and print each item:

```python
languages = ("Python", "JavaScript", "HTML")
```

### Exercise 5

Use tuple unpacking with this tuple:

```python
student = ("Alice", 18)
```

Store the values in `name` and `age`, then print them.

### Exercise 6

Create a tuple with one item: `"Python"`.

Print its type.

### Exercise 7

Choose the better collection: list or tuple?

- A shopping cart that changes
- A coordinate point `(x, y)`
- A list of scores that may get new scores
