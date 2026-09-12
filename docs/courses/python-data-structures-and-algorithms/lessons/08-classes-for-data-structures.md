---
title: Classes for Data Structures
description: Learn the small amount of Python class syntax needed to build node-based data structures.
---

# Classes for Data Structures

Some data structures are built from small objects connected together.

Before learning linked lists and trees, you need a little bit of class syntax.

This lesson only covers the class features needed for data structures.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain why classes are useful for data structures.
- Create a simple class.
- Use `__init__()` to store initial data.
- Use `self` to access object attributes.
- Create a node object for linked structures.

## Why Classes?

A list can store values directly.

```python
numbers = [10, 20, 30]
```

But some data structures need each item to store extra information.

For example, a linked list node stores:

- A value
- A reference to the next node

A class lets us group those two pieces together.

## Creating a Simple Class

```python
class Student:
    pass
```

This creates a class named `Student`.

`pass` means the class is empty for now.

Create an object from the class:

```python
student = Student()
```

## Attributes

An attribute is data stored inside an object.

```python
class Student:
    pass


student = Student()
student.name = "Alice"
student.score = 90

print(student.name)
print(student.score)
```

Output

```text
Alice
90
```

## Using __init__()

`__init__()` runs when a new object is created.

It is useful for setting starting values.

```python
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score


student = Student("Alice", 90)

print(student.name)
print(student.score)
```

Output

```text
Alice
90
```

## What is self?

`self` refers to the current object.

```python
self.name = name
```

This means:

Store the value from `name` inside this object's `name` attribute.

## Creating a Node Class

A **node** is a small object used inside linked data structures.

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
```

This node has:

- `value` for the data
- `next` for the next node

At first, `next` is `None` because the node is not connected to anything yet.

## Linking Two Nodes

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


first = Node("Alice")
second = Node("Bob")

first.next = second

print(first.value)
print(first.next.value)
```

Output

```text
Alice
Bob
```

`first.next` points to the second node.

## Common Mistakes

### Forgetting self

Incorrect:

```python
class Node:
    def __init__(value):
        value = value
```

Correct:

```python
class Node:
    def __init__(self, value):
        self.value = value
```

### Forgetting parentheses when creating an object

Incorrect:

```python
node = Node
```

Correct:

```python
node = Node("Alice")
```

### Confusing a class and an object

A class is the blueprint.

An object is one real thing created from that blueprint.

## Summary

In this lesson, you learned:

- Classes group related data together.
- Objects are created from classes.
- `__init__()` sets starting values.
- `self` refers to the current object.
- Node classes are useful for linked lists and trees.

## Exercises

### Exercise 1

Create a class called `Book`.

The class should store `title` and `author`.

### Exercise 2

Create a class called `Player`.

The class should store `name` and `score`.

### Exercise 3

Create a `Node` class with `value` and `next` attributes.

### Exercise 4

Create two nodes and link the first node to the second node.
