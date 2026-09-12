---
title: Stacks and Queues
description: Learn stack and queue behavior using Python lists, then see why deque is useful.
---

# Stacks and Queues

Stacks and queues are data structures that control the order of removing items.

A **stack** removes the newest item first.

A **queue** removes the oldest item first.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain stack behavior.
- Explain queue behavior.
- Implement a stack with a Python list.
- Implement a simple queue with a Python list.
- Understand why `collections.deque` is useful for queues.
- Choose between stack and queue behavior.

## Stack: Last In, First Out

A stack uses **Last In, First Out**, or **LIFO**.

The last item added is the first item removed.

Example ideas:

- Undo history
- Browser back button
- Function call stack

## Stack with a List

Use `append()` to push an item.

Use `pop()` to remove the top item.

```python
stack = []

stack.append("page 1")
stack.append("page 2")
stack.append("page 3")

last_page = stack.pop()

print(last_page)
print(stack)
```

Output

```text
page 3
['page 1', 'page 2']
```

## Checking if a Stack is Empty

```python
stack = []

if len(stack) == 0:
    print("Stack is empty.")
```

You can also write:

```python
if not stack:
    print("Stack is empty.")
```

## Queue: First In, First Out

A queue uses **First In, First Out**, or **FIFO**.

The first item added is the first item removed.

Example ideas:

- Waiting line
- Print jobs
- Customer support tickets

## Simple Queue with a List

You can create a simple queue with a Python list.

Use `append()` to add an item to the back.

Use `pop(0)` to remove the item at the front.

```python
queue = []

queue.append("Alice")
queue.append("Bob")
queue.append("Mina")

first_customer = queue.pop(0)

print(first_customer)
print(queue)
```

Output

```text
Alice
['Bob', 'Mina']
```

This is easy to understand because it uses list methods you already know.

However, `pop(0)` can become slow for large queues because the remaining items must move forward.

## Queue with deque

Python has a built-in module called `collections`.

A **module** is a file of ready-made Python code that we can import and use.

`collections` includes `deque`, which is designed for adding and removing items from both ends efficiently.

For queues, use `deque` from the `collections` module.

```python
from collections import deque

queue = deque()

queue.append("Alice")
queue.append("Bob")
queue.append("Mina")

first_customer = queue.popleft()

print(first_customer)
print(queue)
```

Output

```text
Alice
deque(['Bob', 'Mina'])
```

`popleft()` is efficient for removing from the front.

## Stack vs Queue

| Data Structure | Rule | Add | Remove |
|----------------|------|-----|--------|
| Stack | Last In, First Out | `append()` | `pop()` |
| Simple queue with list | First In, First Out | `append()` | `pop(0)` |
| Efficient queue with deque | First In, First Out | `append()` | `popleft()` |

## A Complete Example: Undo Feature

```python
actions = []

actions.append("type A")
actions.append("type B")
actions.append("delete B")

last_action = actions.pop()

print("Undo:", last_action)
print("Remaining actions:", actions)
```

Output

```text
Undo: delete B
Remaining actions: ['type A', 'type B']
```

## A Complete Example: Customer Queue

Simple list version:

```python
customers = []

customers.append("Alice")
customers.append("Bob")
customers.append("Mina")

while customers:
    current_customer = customers.pop(0)
    print("Serving:", current_customer)
```

Output

```text
Serving: Alice
Serving: Bob
Serving: Mina
```

Efficient `deque` version:

```python
from collections import deque

customers = deque()

customers.append("Alice")
customers.append("Bob")
customers.append("Mina")

while customers:
    current_customer = customers.popleft()
    print("Serving:", current_customer)
```

Output

```text
Serving: Alice
Serving: Bob
Serving: Mina
```

## Common Mistakes

### Using pop(0) for large queues

```python
items.pop(0)
```

This works, but it can be slow for large lists.

Use `deque.popleft()` for queue behavior.

### Using popleft() without importing deque

Incorrect:

```python
queue = []
queue.popleft()
```

Lists do not have `popleft()`.

Use `deque` first:

```python
from collections import deque

queue = deque()
```

### Popping from an empty stack

```python
stack = []
stack.pop()
```

This causes an `IndexError`.

Check first:

```python
if stack:
    stack.pop()
```

### Mixing stack and queue rules

Decide whether the newest item or oldest item should come out first.

That choice tells you whether you need a stack or a queue.

## Summary

In this lesson, you learned:

- Stacks use Last In, First Out.
- Queues use First In, First Out.
- Python lists work well for stacks.
- Python lists can show queue behavior with `pop(0)`.
- `collections.deque` works better for large queues.
- `import` lets you use ready-made code from a module.
- Always check before removing from an empty structure.

## Exercises

### Exercise 1

Create a stack of three browser pages.

Pop one page and print the remaining stack.

### Exercise 2

Create a queue of three customer names using `deque`.

Serve each customer in order.

### Exercise 3

Create a queue of three customer names using a list.

Use `pop(0)` to serve each customer in order.

### Exercise 4

Write a program that stores undo actions in a stack.

Add four actions and undo the last two.

### Exercise 5

Explain whether a playlist history should use a stack or a queue.
