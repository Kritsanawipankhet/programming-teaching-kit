---
title: Linked Lists
description: Learn how linked lists store ordered data with connected nodes.
---

# Linked Lists

A **linked list** stores items as connected nodes.

Each node stores a value and a reference to the next node.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what a linked list is.
- Create linked list nodes.
- Link nodes together.
- Traverse a linked list.
- Compare arrays and linked lists.
- Add a value to the front of a linked list.

## What is a Linked List?

A linked list is made from nodes.

Each node has:

- A value
- A link to the next node

The first node is often called the **head**.

## Creating a Node

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
```

`next` is `None` when the node does not point to another node yet.

## Linking Nodes Together

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


first = Node("Alice")
second = Node("Bob")
third = Node("Mina")

first.next = second
second.next = third
```

The list now looks like this:

```text
Alice -> Bob -> Mina
```

## Traversing a Linked List

To traverse means to visit each node.

```python
current = first

while current is not None:
    print(current.value)
    current = current.next
```

Output

```text
Alice
Bob
Mina
```

## Adding to the Front

Adding to the front of a linked list is efficient.

```python
new_node = Node("John")
new_node.next = first
first = new_node
```

The list now starts with `"John"`.

```text
John -> Alice -> Bob -> Mina
```

## Linked List Search

Searching a linked list checks nodes one by one.

```python
target = "Bob"
current = first
found = False

while current is not None:
    if current.value == target:
        found = True
        break

    current = current.next

print(found)
```

Output

```text
True
```

Search is O(n).

## Array vs Linked List

| Operation | Python List | Linked List |
|-----------|-------------|-------------|
| Access by index | Fast, O(1) | Slow, O(n) |
| Search by value | O(n) | O(n) |
| Add to end | Usually fast | Fast if tail is stored |
| Insert at front | O(n) | O(1) |
| Memory layout | Items are stored together | Nodes are connected by links |

## Common Mistakes

### Forgetting to move to the next node

```python
current = current.next
```

Without this line, the loop can run forever.

### Losing the head

Keep a variable such as `head` or `first` so you can reach the list.

### Expecting index access

Linked lists do not support fast index access like Python lists.

To reach an item, you move from node to node.

## Summary

In this lesson, you learned:

- Linked lists store data as connected nodes.
- Each node stores a value and a next reference.
- The first node is called the head.
- Traversal visits each node from the head.
- Adding to the front is O(1).
- Searching is O(n).

## Exercises

### Exercise 1

Create three linked nodes and print their values in order.

### Exercise 2

Add a new node to the front of a linked list.

### Exercise 3

Write a search loop that checks if a value exists in a linked list.

### Exercise 4

Explain one situation where a Python list is easier to use than a linked list.
