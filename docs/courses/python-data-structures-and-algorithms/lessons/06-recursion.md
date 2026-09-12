---
title: Recursion
description: Learn how recursive functions solve problems by calling themselves.
---

# Recursion

**Recursion** is a technique where a function calls itself.

It is useful when a problem can be broken into smaller versions of the same problem.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what recursion is.
- Identify a base case.
- Identify a recursive case.
- Write simple recursive functions.
- Avoid infinite recursion.

## A Simple Recursive Function

```python
def count_down(number):
    if number == 0:
        print("Done")
        return

    print(number)
    count_down(number - 1)


count_down(3)
```

Output

```text
3
2
1
Done
```

The function calls itself with a smaller number each time.

## Base Case

The **base case** stops the recursion.

```python
if number == 0:
    print("Done")
    return
```

Without a base case, the function can keep calling itself until Python raises an error.

## Recursive Case

The **recursive case** is where the function calls itself.

```python
count_down(number - 1)
```

The recursive case should move closer to the base case.

## Factorial

The factorial of `5` is:

```text
5 * 4 * 3 * 2 * 1
```

Recursive solution:

```python
def factorial(number):
    if number == 1:
        return 1

    return number * factorial(number - 1)


print(factorial(5))
```

Output

```text
120
```

## Sum of a List

```python
def sum_list(numbers):
    if len(numbers) == 0:
        return 0

    return numbers[0] + sum_list(numbers[1:])


print(sum_list([10, 20, 30]))
```

Output

```text
60
```

This is useful for learning recursion.

For real Python programs, `sum(numbers)` is clearer.

## Recursion vs Loops

Many problems can be solved with either recursion or loops.

Loop version:

```python
total = 0

for number in [10, 20, 30]:
    total = total + number

print(total)
```

Recursive version:

```python
def sum_list(numbers):
    if not numbers:
        return 0

    return numbers[0] + sum_list(numbers[1:])
```

Recursion becomes especially useful with tree-like data, such as binary search trees.

## Common Mistakes

### Forgetting the base case

Every recursive function needs a stopping condition.

### Not moving toward the base case

This is incorrect:

```python
def count_down(number):
    count_down(number)
```

The value never changes, so the function never gets closer to stopping.

### Using recursion when a loop is simpler

Use recursion when it makes the problem clearer.

For simple counting, loops are often easier.

## Summary

In this lesson, you learned:

- Recursion means a function calls itself.
- A base case stops recursion.
- A recursive case continues with a smaller problem.
- Recursive functions must move toward the base case.
- Recursion is useful for tree-like structures.

## Exercises

### Exercise 1

Write a recursive function that prints numbers from `5` down to `1`.

### Exercise 2

Write a recursive function that calculates the sum from `1` to `n`.

### Exercise 3

Write a recursive function that counts how many items are in a list.

### Exercise 4

Explain the base case and recursive case of `factorial()`.
