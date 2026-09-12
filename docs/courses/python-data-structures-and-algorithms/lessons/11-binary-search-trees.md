---
title: Binary Search Trees
description: Learn how binary search trees organize values for searching.
---

# Binary Search Trees

A **binary search tree**, or **BST**, stores values in a tree structure.

Each node can have:

- A left child
- A right child

In a BST:

- Smaller values go to the left.
- Larger values go to the right.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what a binary search tree is.
- Create a tree node.
- Insert values into a BST.
- Search for values in a BST.
- Traverse a BST in sorted order.

## Creating a Tree Node

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

Each node stores one value and links to two possible child nodes.

## Inserting Values

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def insert(root, value):
    if root is None:
        return Node(value)

    if value < root.value:
        root.left = insert(root.left, value)
    elif value > root.value:
        root.right = insert(root.right, value)

    return root


root = None

for number in [50, 30, 70, 20, 40, 60, 80]:
    root = insert(root, number)
```

This uses recursion to move left or right until it finds an empty position.

## Searching a BST

```python
def search(root, target):
    if root is None:
        return False

    if root.value == target:
        return True

    if target < root.value:
        return search(root.left, target)

    return search(root.right, target)


print(search(root, 60))
print(search(root, 90))
```

Output

```text
True
False
```

## In-order Traversal

An **in-order traversal** visits values from smallest to largest.

```python
def inorder(root):
    if root is None:
        return

    inorder(root.left)
    print(root.value)
    inorder(root.right)


inorder(root)
```

Output

```text
20
30
40
50
60
70
80
```

## Why BSTs Matter

A balanced BST can search, insert, and delete in O(log n) time.

But if values are inserted in sorted order, the tree can become unbalanced.

Example:

```text
10 -> 20 -> 30 -> 40
```

This behaves more like a linked list, and searching can become O(n).

## Common Mistakes

### Forgetting the BST rule

Smaller values go left.

Larger values go right.

### Forgetting to return the root

The insert function should return the current root so links are preserved.

### Thinking every BST is fast

A balanced BST is fast.

An unbalanced BST can become slow.

## Summary

In this lesson, you learned:

- A binary search tree stores values in nodes.
- Each node has left and right child references.
- Smaller values go left and larger values go right.
- Recursion works naturally with trees.
- In-order traversal prints values in sorted order.

## Exercises

### Exercise 1

Create a `Node` class for a binary search tree.

### Exercise 2

Insert these numbers into a BST:

```python
numbers = [40, 20, 60, 10, 30, 50, 70]
```

### Exercise 3

Write a search function that returns `True` if a value exists.

### Exercise 4

Write an in-order traversal that prints values from smallest to largest.
