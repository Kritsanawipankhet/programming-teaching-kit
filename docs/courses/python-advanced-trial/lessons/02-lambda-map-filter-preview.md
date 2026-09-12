---
title: Lambda, Map, and Filter Preview
description: Preview lambda functions, map, and filter as optional Python advanced topics after list comprehension.
---

# Lambda, Map, and Filter Preview

This lesson is an optional extension after list comprehension.

Use it when learners finish the main demo early or want to see another Python style for processing lists.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what a `lambda` function is.
- Use `map()` to transform values.
- Use `filter()` to keep matching values.
- Compare `map()` and `filter()` with list comprehension.

## Lambda Functions

A `lambda` is a small anonymous function.

Anonymous means the function does not need a name.

Normal function:

```python
def double(number):
    return number * 2

print(double(5))
```

Lambda version:

```python
double = lambda number: number * 2

print(double(5))
```

Output

```text
10
```

Basic syntax:

```python
lambda parameter: expression
```

Use `lambda` for short one-line functions.

Use `def` when the function needs a clear name or multiple steps.

## Map

`map()` applies a function to every item.

Example:

```python
scores = [60, 75, 80, 95]

bonus_scores = list(map(lambda score: score + 5, scores))

print(bonus_scores)
```

Output

```text
[65, 80, 85, 100]
```

The same idea with list comprehension:

```python
bonus_scores = [score + 5 for score in scores]
```

For many beginners, the list comprehension version is easier to read.

## Filter

`filter()` keeps items that match a condition.

Example:

```python
scores = [60, 75, 80, 45, 90]

passing_scores = list(filter(lambda score: score >= 70, scores))

print(passing_scores)
```

Output

```text
[75, 80, 90]
```

The same idea with list comprehension:

```python
passing_scores = [score for score in scores if score >= 70]
```

## Map and Filter Together

You can combine them, but readability can drop quickly.

```python
scores = [60, 75, 80, 45, 90]

bonus_passing_scores = list(
    map(
        lambda score: score + 5,
        filter(lambda score: score >= 70, scores)
    )
)

print(bonus_passing_scores)
```

Output

```text
[80, 85, 95]
```

List comprehension version:

```python
bonus_passing_scores = [score + 5 for score in scores if score >= 70]
```

In this case, list comprehension is shorter and easier to explain.

## Quick Comparison

| Goal | List Comprehension | Map or Filter |
|------|--------------------|---------------|
| Transform values | `[x * 2 for x in numbers]` | `map(lambda x: x * 2, numbers)` |
| Filter values | `[x for x in numbers if x > 10]` | `filter(lambda x: x > 10, numbers)` |
| Transform and filter | `[x * 2 for x in numbers if x > 10]` | `map(..., filter(...))` |

## Teaching Notes

For a short trial class:

1. Show `lambda` only after learners understand normal functions.
2. Show `map()` as "apply this function to every item."
3. Show `filter()` as "keep only items where the function returns `True`."
4. Compare each example with list comprehension.
5. Emphasize readability over cleverness.

## Common Mistakes

### Forgetting `list()`

In Python 3, `map()` and `filter()` do not directly return a list.

```python
scores = [60, 75, 80]

result = map(lambda score: score + 5, scores)

print(result)
```

This prints a map object, not the final list.

Use `list()`:

```python
result = list(map(lambda score: score + 5, scores))
```

### Using Lambda for Everything

This is possible:

```python
calculate_final_score = lambda score, bonus, penalty: score + bonus - penalty
```

But a normal function is clearer:

```python
def calculate_final_score(score, bonus, penalty):
    return score + bonus - penalty
```

## Summary

In this lesson, you learned:

- `lambda` creates a small one-line function.
- `map()` transforms every item.
- `filter()` keeps items that match a condition.
- List comprehension is often easier to read for simple list processing.

## Exercises

### Exercise 1

Use `lambda` to create a function that triples a number.

### Exercise 2

Use `map()` to add 10 points to every score.

### Exercise 3

Use `filter()` to keep only even numbers.

### Exercise 4

Rewrite this `map()` code as list comprehension:

```python
numbers = [1, 2, 3, 4]

result = list(map(lambda number: number * number, numbers))
```

### Exercise 5

Rewrite this `filter()` code as list comprehension:

```python
scores = [55, 72, 88, 40]

result = list(filter(lambda score: score >= 70, scores))
```

