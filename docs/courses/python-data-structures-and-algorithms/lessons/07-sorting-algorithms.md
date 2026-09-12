---
title: Sorting Algorithms
description: Learn basic sorting algorithms and Python built-in sorting tools.
---

# Sorting Algorithms

**Sorting** means arranging data in order.

Examples:

- Numbers from smallest to largest
- Names from A to Z
- Scores from highest to lowest

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what sorting means.
- Write bubble sort.
- Write selection sort.
- Write insertion sort.
- Use `sorted()` and `.sort()`.
- Choose built-in sorting for real Python programs.

## Bubble Sort

Bubble sort compares neighboring items and swaps them if they are in the wrong order.

```python
numbers = [5, 2, 8, 1]

for pass_number in range(len(numbers)):
    for index in range(0, len(numbers) - 1):
        if numbers[index] > numbers[index + 1]:
            numbers[index], numbers[index + 1] = numbers[index + 1], numbers[index]

print(numbers)
```

Output

```text
[1, 2, 5, 8]
```

Bubble sort is O(n²).

## Selection Sort

Selection sort finds the smallest remaining item and moves it to the front.

```python
numbers = [5, 2, 8, 1]

for start in range(len(numbers)):
    smallest_index = start

    for index in range(start + 1, len(numbers)):
        if numbers[index] < numbers[smallest_index]:
            smallest_index = index

    numbers[start], numbers[smallest_index] = numbers[smallest_index], numbers[start]

print(numbers)
```

Output

```text
[1, 2, 5, 8]
```

Selection sort is O(n²).

## Insertion Sort

Insertion sort builds a sorted section one item at a time.

```python
numbers = [5, 2, 8, 1]

for index in range(1, len(numbers)):
    current = numbers[index]
    position = index - 1

    while position >= 0 and numbers[position] > current:
        numbers[position + 1] = numbers[position]
        position = position - 1

    numbers[position + 1] = current

print(numbers)
```

Output

```text
[1, 2, 5, 8]
```

Insertion sort is O(n²), but it can work well on small or nearly sorted lists.

## Python Built-in Sorting

In real projects, use Python's built-in sorting tools.

```python
numbers = [5, 2, 8, 1]

sorted_numbers = sorted(numbers)

print(sorted_numbers)
print(numbers)
```

Output

```text
[1, 2, 5, 8]
[5, 2, 8, 1]
```

`sorted()` returns a new sorted list.

`.sort()` changes the original list.

```python
numbers.sort()
print(numbers)
```

## Sorting with reverse

```python
scores = [80, 95, 70, 88]
scores.sort(reverse=True)

print(scores)
```

Output

```text
[95, 88, 80, 70]
```

## Sorting Dictionaries by Value

```python
students = {
    "Alice": 90,
    "Bob": 75,
    "Mina": 88
}

ranking = sorted(students.items(), key=lambda item: item[1], reverse=True)

print(ranking)
```

Output

```text
[('Alice', 90), ('Mina', 88), ('Bob', 75)]
```

## Common Mistakes

### Using learning algorithms in real projects

Bubble sort, selection sort, and insertion sort are good for practice.

For real Python code, use `sorted()` or `.sort()`.

### Confusing sorted() and sort()

`sorted()` creates a new list.

`.sort()` changes the original list.

### Forgetting reverse=True

Use `reverse=True` when you need highest to lowest order.

## Summary

In this lesson, you learned:

- Sorting arranges data in order.
- Bubble sort, selection sort, and insertion sort are beginner-friendly algorithms.
- These basic algorithms are usually O(n²).
- Python has powerful built-in sorting tools.
- Use `key` and `reverse` to control sorting behavior.

## Exercises

### Exercise 1

Use bubble sort to sort this list:

```python
numbers = [9, 3, 7, 1]
```

### Exercise 2

Use selection sort to sort this list:

```python
numbers = [4, 2, 6, 5]
```

### Exercise 3

Use insertion sort to sort this list:

```python
numbers = [8, 1, 6, 2]
```

### Exercise 4

Create a dictionary of students and scores.

Print students from highest score to lowest score.
