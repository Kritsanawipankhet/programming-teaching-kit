---
title: Hash Tables
description: Learn how dictionaries and sets provide fast lookup in Python.
---

# Hash Tables

A **hash table** stores data so that lookup can be very fast.

In Python, dictionaries and sets are built using hash table ideas.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what hash table lookup means.
- Use dictionaries for key-value lookup.
- Use sets for unique values and membership checks.
- Count values with a dictionary.
- Avoid common hash table mistakes.

## Dictionaries as Hash Tables

A dictionary stores key-value pairs.

```python
scores = {
    "Alice": 90,
    "Bob": 75,
    "Mina": 88
}

print(scores["Alice"])
```

Output

```text
90
```

Looking up a key in a dictionary is usually O(1).

This makes dictionaries useful when you need fast access by a label.

## Sets for Membership Checks

A set stores unique values.

```python
registered_users = {"alice", "bob", "mina"}

if "bob" in registered_users:
    print("Username already exists.")
```

Output

```text
Username already exists.
```

Checking membership in a set is usually O(1).

## Counting with a Dictionary

Problem:

Count how many times each word appears.

```python
words = ["python", "code", "python", "data", "code", "python"]
counts = {}

for word in words:
    if word in counts:
        counts[word] = counts[word] + 1
    else:
        counts[word] = 1

print(counts)
```

Output

```text
{'python': 3, 'code': 2, 'data': 1}
```

## Using get() for Counting

`get()` can make counting shorter.

```python
words = ["python", "code", "python"]
counts = {}

for word in words:
    counts[word] = counts.get(word, 0) + 1

print(counts)
```

Output

```text
{'python': 2, 'code': 1}
```

## Finding Duplicates

Use a set to remember values you have seen.

```python
numbers = [1, 2, 3, 2, 4, 1]
seen = set()
duplicates = set()

for number in numbers:
    if number in seen:
        duplicates.add(number)
    else:
        seen.add(number)

print(duplicates)
```

Output

```text
{1, 2}
```

## Dictionary vs Set

| Use Case | Data Structure |
|----------|----------------|
| Store a value for each key | Dictionary |
| Check if an item exists | Set |
| Count occurrences | Dictionary |
| Remove duplicates | Set |

## Common Mistakes

### Using a list when lookup is the main task

```python
users = ["alice", "bob", "mina"]
```

This works, but membership checks are O(n).

Use a set if you only need to check existence.

```python
users = {"alice", "bob", "mina"}
```

### Accessing a missing dictionary key

```python
scores = {"Alice": 90}

print(scores["Bob"])
```

This causes a `KeyError`.

Use `get()` or check with `in`.

### Using unhashable keys

Lists cannot be dictionary keys.

Incorrect:

```python
data = {
    ["Alice"]: 90
}
```

Use strings, numbers, or tuples as keys.

## Summary

In this lesson, you learned:

- Dictionaries and sets are based on hash table ideas.
- Dictionary lookup is usually O(1).
- Set membership checks are usually O(1).
- Dictionaries are useful for counting.
- Sets are useful for uniqueness and duplicate detection.

## Exercises

### Exercise 1

Create a dictionary of three products and prices.

Print the price of one product.

### Exercise 2

Create a set of usernames.

Ask for a new username and check if it already exists.

### Exercise 3

Count how many times each number appears in this list:

```python
numbers = [1, 2, 2, 3, 3, 3]
```

### Exercise 4

Find duplicate names in this list:

```python
names = ["Alice", "Bob", "Alice", "Mina", "Bob"]
```
