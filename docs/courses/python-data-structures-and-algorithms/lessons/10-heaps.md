---
title: Heaps
description: Learn how heaps and Python heapq manage priority data.
---

# Heaps

A **heap** is a data structure used to get the smallest or largest item efficiently.

Python provides a heap module called `heapq`.

`heapq` creates a **min heap**, where the smallest item is removed first.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what a heap is.
- Use `heapq` to create a min heap.
- Add items to a heap.
- Remove the smallest item from a heap.
- Use heaps for priority queue problems.

## Why Use a Heap?

Imagine a task list where each task has a priority.

You always want to handle the most important task first.

A heap helps keep the next item ready without sorting the whole list every time.

## Creating a Heap

```python
import heapq

numbers = [5, 2, 8, 1, 3]

heapq.heapify(numbers)

print(numbers)
```

Output may look like this:

```text
[1, 2, 8, 5, 3]
```

The printed list may not look fully sorted.

That is normal.

A heap only guarantees that the smallest item is at the front.

## Removing the Smallest Item

Use `heappop()` to remove and return the smallest item.

```python
import heapq

numbers = [5, 2, 8, 1, 3]
heapq.heapify(numbers)

smallest = heapq.heappop(numbers)

print(smallest)
print(numbers)
```

Output

```text
1
[2, 3, 8, 5]
```

## Adding an Item

Use `heappush()` to add an item.

```python
import heapq

numbers = [2, 3, 8, 5]

heapq.heappush(numbers, 1)

print(heapq.heappop(numbers))
```

Output

```text
1
```

## Priority Queue Example

Use tuples to store priority and task name.

```python
import heapq

tasks = []

heapq.heappush(tasks, (2, "write notes"))
heapq.heappush(tasks, (1, "fix bug"))
heapq.heappush(tasks, (3, "clean files"))

while tasks:
    priority, task = heapq.heappop(tasks)
    print(priority, task)
```

Output

```text
1 fix bug
2 write notes
3 clean files
```

Lower priority numbers come out first.

## Getting the Largest Items

`heapq` is a min heap by default.

To get largest values, use `nlargest()`.

```python
import heapq

scores = [75, 90, 82, 100, 68]

top_three = heapq.nlargest(3, scores)

print(top_three)
```

Output

```text
[100, 90, 82]
```

## Common Heap Operations

| Operation | Example | General Cost |
|-----------|---------|--------------|
| Create heap | `heapq.heapify(items)` | O(n) |
| Add item | `heapq.heappush(heap, item)` | O(log n) |
| Remove smallest | `heapq.heappop(heap)` | O(log n) |
| Peek smallest | `heap[0]` | O(1) |

## Common Mistakes

### Expecting the heap list to look sorted

A heap is not the same as a sorted list.

Only the smallest item is guaranteed to be at index `0`.

### Forgetting to import heapq

```python
import heapq
```

You need this before using heap functions.

### Using high numbers for high priority without adjusting

In a min heap, smaller values come first.

Use smaller numbers for higher priority, or store negative values when needed.

## Summary

In this lesson, you learned:

- A heap helps manage priority data.
- Python's `heapq` module provides min heap behavior.
- `heappush()` adds an item.
- `heappop()` removes the smallest item.
- Heaps are useful for priority queues and top-k problems.

## Exercises

### Exercise 1

Create a heap from this list and pop all numbers in order:

```python
numbers = [9, 4, 7, 1, 3]
```

### Exercise 2

Create a priority queue with three tasks.

Print the tasks in priority order.

### Exercise 3

Use `heapq.nlargest()` to find the top two scores.

### Exercise 4

Explain why a heap is not the same as a fully sorted list.
