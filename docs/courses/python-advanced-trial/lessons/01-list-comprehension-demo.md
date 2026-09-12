---
title: List Comprehension Demo
description: Learn how to use list comprehension to transform and filter list data in Python.
---

# List Comprehension Demo

List comprehension is a compact way to create a new list from an existing list.

It is useful when you want to:

- Transform every item in a list
- Filter some items from a list
- Make simple list-processing code easier to read

## Learning Objectives

After completing this lesson, you will be able to:

- Read basic list comprehension syntax.
- Convert a `for` loop into list comprehension.
- Use `if` inside list comprehension.
- Decide when a normal loop is more readable.

## Start With a Normal Loop

Imagine we have student scores.

We want to add 5 bonus points to every score.

```python
scores = [60, 75, 80, 95]

bonus_scores = []

for score in scores:
    bonus_scores.append(score + 5)

print(bonus_scores)
```

Output

```text
[65, 80, 85, 100]
```

This code works well, but it takes several lines.

## Convert to List Comprehension

The same idea can be written in one line.

```python
scores = [60, 75, 80, 95]

bonus_scores = [score + 5 for score in scores]

print(bonus_scores)
```

Output

```text
[65, 80, 85, 100]
```

Read it like this:

```text
Create a list of score + 5
for each score
in scores
```

## Basic Syntax

```python
new_list = [expression for item in old_list]
```

| Part | Meaning |
|------|---------|
| `expression` | What to put into the new list |
| `item` | Temporary variable for each value |
| `old_list` | The list we loop through |

Example:

```python
numbers = [1, 2, 3, 4]

squares = [number * number for number in numbers]

print(squares)
```

Output

```text
[1, 4, 9, 16]
```

## Add a Condition

Now we want only passing scores.

Passing means the score is at least 70.

Normal loop:

```python
scores = [60, 75, 80, 45, 90]

passing_scores = []

for score in scores:
    if score >= 70:
        passing_scores.append(score)

print(passing_scores)
```

List comprehension:

```python
scores = [60, 75, 80, 45, 90]

passing_scores = [score for score in scores if score >= 70]

print(passing_scores)
```

Output

```text
[75, 80, 90]
```

## Transform and Filter Together

We can transform values and filter them in the same list comprehension.

Example:

Add 5 bonus points, but only for scores that are already passing.

```python
scores = [60, 75, 80, 45, 90]

bonus_passing_scores = [score + 5 for score in scores if score >= 70]

print(bonus_passing_scores)
```

Output

```text
[80, 85, 95]
```

## Mini Challenge

Create report messages for students who passed.

Starter data:

```python
students = [
    {"name": "Mina", "score": 82},
    {"name": "Nina", "score": 58},
    {"name": "Tao", "score": 91},
    {"name": "Krit", "score": 67},
]
```

Expected output:

```text
['Mina passed with 82', 'Tao passed with 91']
```

Solution:

```python
students = [
    {"name": "Mina", "score": 82},
    {"name": "Nina", "score": 58},
    {"name": "Tao", "score": 91},
    {"name": "Krit", "score": 67},
]

reports = [
    f"{student['name']} passed with {student['score']}"
    for student in students
    if student["score"] >= 70
]

print(reports)
```

## When Not to Use List Comprehension

List comprehension is good for simple transformations and filters.

Use a normal loop when:

- The logic has many steps.
- You need several `if` or `else` branches.
- The line becomes hard to read.
- You want to print or debug inside the loop.

Readable code is more important than short code.

## Teaching Notes for a 20-Minute Demo

Use this order when teaching live:

1. Start with a normal loop that learners already understand.
2. Ask what the loop is doing.
3. Rewrite the loop as list comprehension.
4. Read the syntax out loud from right to left.
5. Add `if` only after the basic version feels clear.
6. Finish with the mini challenge.

## Common Mistakes

### Forgetting the expression

```python
numbers = [1, 2, 3]

double_numbers = [for number in numbers]
```

This is invalid because the expression is missing.

Correct version:

```python
double_numbers = [number * 2 for number in numbers]
```

### Putting the `if` in the wrong place

For filtering, put `if` at the end.

```python
passing_scores = [score for score in scores if score >= 70]
```

### Making one line too complicated

This may work, but it is difficult to read:

```python
result = [x * 2 if x > 10 else x + 1 for x in numbers if x != 0]
```

If learners look confused, switch back to a normal loop.

## Summary

In this lesson, you learned:

- List comprehension creates a new list.
- The basic pattern is `[expression for item in list]`.
- Add `if` at the end to filter items.
- List comprehension is best when the logic is simple and readable.

## Exercises

### Exercise 1

Create a list of numbers from 1 to 5.

Use list comprehension to create a new list with every number doubled.

### Exercise 2

Create a list of names.

Use list comprehension to create a new list with every name in uppercase.

### Exercise 3

Create a list of scores.

Use list comprehension to keep only scores greater than or equal to 70.

### Exercise 4

Create a list of prices.

Use list comprehension to add 7% tax to every price.

### Exercise 5

Create a list of words.

Use list comprehension to keep only words with more than 5 letters.

