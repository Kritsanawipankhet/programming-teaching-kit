---
title: Big O Notation
description: Learn how to describe algorithm efficiency with Big O notation.
---

# Big O Notation

When data grows, some programs stay fast and some programs become slow.

**Big O notation** helps us describe how much work an algorithm does as the input size grows.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what Big O notation is.
- Understand constant time, linear time, and quadratic time.
- Compare simple algorithms.
- Identify common Python operations by their general cost.
- Think about time complexity and space complexity.

## What is Input Size?

The **input size** is how much data an algorithm works with.

Programmers often use `n` to mean input size.

Example:

```python
numbers = [10, 20, 30, 40, 50]
```

Here, `n` is `5` because the list has five items.

## O(1): Constant Time

An algorithm is **O(1)** when it does about the same amount of work no matter how large the input is.

Example:

```python
numbers = [10, 20, 30, 40, 50]

print(numbers[0])
```

Accessing a list item by index is constant time.

It does not matter if the list has 5 items or 5,000 items.

## O(n): Linear Time

An algorithm is **O(n)** when the work grows with the input size.

Example:

```python
numbers = [10, 20, 30, 40, 50]

for number in numbers:
    print(number)
```

If the list has 5 items, the loop runs 5 times.

If the list has 100 items, the loop runs 100 times.

## O(n²): Quadratic Time

An algorithm is **O(n²)** when it has nested loops over the same input.

Example:

```python
numbers = [1, 2, 3]

for a in numbers:
    for b in numbers:
        print(a, b)
```

Output

```text
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```

For 3 numbers, there are 9 pairs.

For 100 numbers, there are 10,000 pairs.

## Time Complexity vs Space Complexity

**Time complexity** describes how much work an algorithm does.

**Space complexity** describes how much extra memory an algorithm uses.

Example:

```python
numbers = [1, 2, 3, 4]
doubled = []

for number in numbers:
    doubled.append(number * 2)

print(doubled)
```

This algorithm is:

- O(n) time because it loops through every number
- O(n) space because it creates a new list

## Comparing Two Solutions

Problem:

Check if a name exists.

Using a list:

```python
names = ["Alice", "Bob", "Mina"]

if "Mina" in names:
    print("Found")
```

This is usually O(n), because Python may need to check each item.

Using a set:

```python
names = {"Alice", "Bob", "Mina"}

if "Mina" in names:
    print("Found")
```

This is usually O(1), because sets are designed for fast membership checks.

## Common Big O Values

| Big O | Name | Example |
|-------|------|---------|
| O(1) | Constant | Access a list item by index |
| O(n) | Linear | Loop through a list |
| O(n²) | Quadratic | Nested loops over a list |
| O(log n) | Logarithmic | Binary search |

## Common Mistakes

### Counting exact seconds

Big O does not measure exact time in seconds.

It describes how work grows.

### Ignoring nested loops

Nested loops can become expensive quickly.

Always check how many times each loop runs.

### Choosing speed too early

For small programs, clear code is often better.

Use Big O to guide decisions when data can grow.

## Summary

In this lesson, you learned:

- Big O describes how algorithms grow with input size.
- O(1) means constant time.
- O(n) means linear time.
- O(n²) means quadratic time.
- Time complexity and space complexity are both important.

## Exercises

### Exercise 1

What is the Big O of this code?

```python
print(numbers[0])
```

### Exercise 2

What is the Big O of this code?

```python
for number in numbers:
    print(number)
```

### Exercise 3

What is the Big O of this code?

```python
for a in numbers:
    for b in numbers:
        print(a, b)
```

### Exercise 4

Create a list of numbers and write an O(n) algorithm to calculate the total without using `sum()`.
