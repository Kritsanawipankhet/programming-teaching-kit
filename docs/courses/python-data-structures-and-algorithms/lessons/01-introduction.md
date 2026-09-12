---
title: Introduction to Data Structures and Algorithms
description: Learn what data structures and algorithms are and why they matter in Python.
---

# Introduction to Data Structures and Algorithms

Programs do more than store data.

They also need to find, change, organize, and process data.

**Data structures** help us organize data.

**Algorithms** help us solve problems step by step.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what a data structure is.
- Explain what an algorithm is.
- Identify simple data structures in Python.
- Describe a problem using input, process, and output.
- Understand why efficiency matters.

## What is a Data Structure?

A **data structure** is a way to store and organize data.

Python has several built-in data structures.

| Data Structure | Example Use |
|----------------|-------------|
| List | Store ordered items |
| Tuple | Store fixed ordered items |
| Set | Store unique items |
| Dictionary | Store key-value pairs |

Example:

```python
students = ["Alice", "Bob", "Mina"]
scores = {
    "Alice": 90,
    "Bob": 75,
    "Mina": 88
}
```

The list stores names in order.

The dictionary lets us find a score by name.

## What is an Algorithm?

An **algorithm** is a set of steps used to solve a problem.

Example problem:

Find the highest score in a list.

Algorithm:

1. Start with the first score as the highest score.
2. Look at each score.
3. If the current score is higher, update the highest score.
4. Print the highest score.

Python example:

```python
scores = [75, 90, 82, 100, 68]

highest = scores[0]

for score in scores:
    if score > highest:
        highest = score

print("Highest score:", highest)
```

Output

```text
Highest score: 100
```

## Input, Process, and Output

Many problems can be described using three parts.

| Part | Meaning |
|------|---------|
| Input | Data given to the program |
| Process | Steps used to solve the problem |
| Output | Result from the program |

Example:

| Part | Description |
|------|-------------|
| Input | `[75, 90, 82]` |
| Process | Add all scores and divide by the count |
| Output | Average score |

## Why Efficiency Matters

Two programs can produce the same answer but take different amounts of work.

Example:

```python
names = ["Alice", "Bob", "Mina", "John"]

if "Mina" in names:
    print("Found")
```

Python checks the list from the beginning until it finds `"Mina"`.

For a small list, this is fine.

For a very large list, choosing the right data structure can make the program much faster.

## A Complete Example

This program counts how many times each item appears.

```python
items = ["pen", "book", "pen", "bag", "book", "pen"]
counts = {}

for item in items:
    if item in counts:
        counts[item] = counts[item] + 1
    else:
        counts[item] = 1

print(counts)
```

Output

```text
{'pen': 3, 'book': 2, 'bag': 1}
```

This uses:

- A list to store all items
- A dictionary to count items by name
- A loop algorithm to process each item

## Common Mistakes

### Thinking only about the answer

A correct answer is important, but the steps also matter.

Try to explain how your program solves the problem.

### Using a list for every problem

Lists are useful, but they are not always the best choice.

Use a dictionary when you need to find values by key.

Use a set when you need unique values.

### Skipping small examples

Before writing code, test your idea with a small example.

This makes algorithms easier to understand.

## Summary

In this lesson, you learned:

- Data structures organize data.
- Algorithms solve problems step by step.
- Python has lists, tuples, sets, and dictionaries.
- Problems can be described with input, process, and output.
- Efficient choices become important when data grows.

## Exercises

### Exercise 1

Write the input, process, and output for a program that calculates the total price of a shopping cart.

### Exercise 2

Create a list of five numbers and write an algorithm to find the smallest number.

### Exercise 3

Create a dictionary that stores three products and their prices.

Print the price of one product by using its name.

### Exercise 4

Create a list with repeated names.

Use a dictionary to count how many times each name appears.
