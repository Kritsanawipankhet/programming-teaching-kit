---
title: Lists
description: Learn how to store, access, change, and loop through multiple values using Python lists.
---

# Lists

Programs often need to store more than one value.

For example:

- A list of student names
- A list of scores
- A list of favorite colors

Python uses **lists** to store multiple values in one variable.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what a list is.
- Create lists in Python.
- Access list items using indexes.
- Change items in a list.
- Add and remove items from a list.
- Use `len()` with lists.
- Loop through a list.
- Avoid common mistakes when using lists.

## What is a List?

A **list** is a collection of values.

Lists are written with square brackets (`[]`).

Example:

```python
fruits = ["apple", "banana", "orange"]

print(fruits)
```

Output

```text
['apple', 'banana', 'orange']
```

A list can store strings, numbers, Booleans, or mixed values.

```python
scores = [80, 90, 100]
mixed = ["Alice", 18, True]
```

## Accessing List Items

Each item in a list has an **index**.

Python indexes start at `0`.

```python
fruits = ["apple", "banana", "orange"]

print(fruits[0])
print(fruits[1])
print(fruits[2])
```

Output

```text
apple
banana
orange
```

## Negative Indexes

Negative indexes count from the end of the list.

```python
fruits = ["apple", "banana", "orange"]

print(fruits[-1])
print(fruits[-2])
```

Output

```text
orange
banana
```

## Changing List Items

Lists are **changeable**.

You can update an item by using its index.

```python
fruits = ["apple", "banana", "orange"]

fruits[1] = "mango"

print(fruits)
```

Output

```text
['apple', 'mango', 'orange']
```

## Adding Items

Use `append()` to add an item to the end of a list.

```python
fruits = ["apple", "banana"]

fruits.append("orange")

print(fruits)
```

Output

```text
['apple', 'banana', 'orange']
```

Use `insert()` to add an item at a specific index.

```python
fruits = ["apple", "orange"]

fruits.insert(1, "banana")

print(fruits)
```

Output

```text
['apple', 'banana', 'orange']
```

## Removing Items

Use `remove()` to remove a specific value.

```python
fruits = ["apple", "banana", "orange"]

fruits.remove("banana")

print(fruits)
```

Output

```text
['apple', 'orange']
```

Use `pop()` to remove an item by index.

```python
fruits = ["apple", "banana", "orange"]

removed_fruit = fruits.pop(1)

print(removed_fruit)
print(fruits)
```

Output

```text
banana
['apple', 'orange']
```

## List Length

Use `len()` to count how many items are in a list.

```python
fruits = ["apple", "banana", "orange"]

print(len(fruits))
```

Output

```text
3
```

## Looping Through a List

Use a `for` loop to go through each item in a list.

```python
fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print(fruit)
```

Output

```text
apple
banana
orange
```

## Checking if an Item Exists

Use `in` to check if an item is in a list.

```python
fruits = ["apple", "banana", "orange"]

if "banana" in fruits:
    print("Banana is in the list.")
```

Output

```text
Banana is in the list.
```

## A Complete Example

This program stores scores and calculates the average.

```python
scores = [80, 90, 100]

total = sum(scores)
average = total / len(scores)

print("Scores:", scores)
print("Average:", average)
```

Output

```text
Scores: [80, 90, 100]
Average: 90.0
```

## Common Mistakes

### Using an index that does not exist

```python
fruits = ["apple", "banana"]

print(fruits[2])
```

This causes an `IndexError`.

The valid indexes are `0` and `1`.

### Forgetting that indexes start at 0

```python
fruits = ["apple", "banana", "orange"]

print(fruits[1])
```

Output

```text
banana
```

`fruits[1]` is the second item, not the first item.

### Removing a value that is not in the list

```python
fruits = ["apple", "banana"]

fruits.remove("orange")
```

This causes a `ValueError`.

Check first with `in` if you are not sure.

```python
if "orange" in fruits:
    fruits.remove("orange")
```

## Summary

In this lesson, you learned:

- Lists store multiple values.
- Lists use square brackets (`[]`).
- List indexes start at `0`.
- Lists are changeable.
- How to add and remove list items.
- How to use `len()` with lists.
- How to loop through a list.

## Exercises

### Exercise 1

Create a list of three favorite foods and print the list.

### Exercise 2

Create this list:

```python
colors = ["red", "green", "blue"]
```

Print the first item.

### Exercise 3

Change `"green"` to `"yellow"` in this list:

```python
colors = ["red", "green", "blue"]
```

### Exercise 4

Create a list of student names.

Add one new name using `append()`.

### Exercise 5

Remove one item from this list:

```python
animals = ["cat", "dog", "bird"]
```

### Exercise 6

Loop through this list and print each score:

```python
scores = [75, 80, 95]
```

### Exercise 7

What is the output?

```python
numbers = [10, 20, 30]

print(numbers[0])
print(numbers[-1])
```

### Exercise 8

Create a list of numbers and print the total using `sum()`.
