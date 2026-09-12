---
title: Arrays and Python Lists
description: Learn how arrays and Python lists store ordered data.
---

# Arrays and Python Lists

An **array** stores items in order.

In Python, the built-in **list** is the most common array-like structure.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain how arrays store ordered data.
- Use Python lists as array-like structures.
- Access list items by index.
- Add, update, and remove list items.
- Understand common list operation costs.
- Use lists to solve simple algorithm problems.

## Ordered Data

A list stores items in order.

```python
scores = [80, 95, 70, 88]

print(scores[0])
print(scores[2])
```

Output

```text
80
70
```

Python indexes start at `0`.

Accessing a list item by index is O(1).

## Updating Items

Lists are mutable.

This means you can change them after creating them.

```python
scores = [80, 95, 70]
scores[2] = 75

print(scores)
```

Output

```text
[80, 95, 75]
```

## Adding Items

Use `append()` to add an item to the end.

```python
tasks = ["study", "practice"]
tasks.append("review")

print(tasks)
```

Output

```text
['study', 'practice', 'review']
```

Adding to the end is usually efficient.

## Inserting Items

Use `insert()` to add an item at a specific index.

```python
tasks = ["study", "review"]
tasks.insert(1, "practice")

print(tasks)
```

Output

```text
['study', 'practice', 'review']
```

Inserting near the beginning can be slower because other items must move.

## Removing Items

Use `pop()` to remove an item by index.

```python
tasks = ["study", "practice", "review"]
removed_task = tasks.pop(1)

print(removed_task)
print(tasks)
```

Output

```text
practice
['study', 'review']
```

## Common List Operation Costs

| Operation | Example | General Cost |
|-----------|---------|--------------|
| Access by index | `items[0]` | O(1) |
| Append to end | `items.append(value)` | Usually O(1) |
| Search by value | `value in items` | O(n) |
| Insert near start | `items.insert(0, value)` | O(n) |
| Remove near start | `items.pop(0)` | O(n) |

## Algorithm Example: Find the Largest Number

```python
numbers = [12, 5, 30, 18]

largest = numbers[0]

for number in numbers:
    if number > largest:
        largest = number

print("Largest:", largest)
```

Output

```text
Largest: 30
```

This algorithm is O(n) because it checks each number once.

## Algorithm Example: Reverse a List

```python
numbers = [1, 2, 3, 4]
reversed_numbers = []

for index in range(len(numbers) - 1, -1, -1):
    reversed_numbers.append(numbers[index])

print(reversed_numbers)
```

Output

```text
[4, 3, 2, 1]
```

Python also has a shortcut:

```python
print(numbers[::-1])
```

## Common Mistakes

### Using an index that does not exist

```python
numbers = [10, 20]

print(numbers[2])
```

This causes an `IndexError`.

### Removing from the front many times

```python
items.pop(0)
```

This is allowed, but it can become slow for large lists.

You will learn a better queue structure in the next lesson.

### Changing a list while looping over it

Changing a list while looping can skip items or create confusing results.

Create a new list when filtering data.

## Summary

In this lesson, you learned:

- Python lists are array-like structures.
- Lists store ordered data.
- List indexes start at `0`.
- Access by index is O(1).
- Searching a list is O(n).
- Lists are useful for many simple algorithms.

## Exercises

### Exercise 1

Create a list of five numbers and print the first and last number.

### Exercise 2

Write a program that finds the smallest number in a list.

### Exercise 3

Write a program that counts how many numbers in a list are greater than `50`.

### Exercise 4

Write a program that creates a new list containing only even numbers.
