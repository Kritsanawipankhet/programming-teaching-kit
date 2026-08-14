---
title: Attributes, Methods, and Constructors
description: Learn how to initialize objects with attributes and methods.
---

# Attributes, Methods, and Constructors

In the previous lesson, you added attributes to objects after creating them.

In real programs, objects usually receive their starting values when they are created.

Python uses the `__init__` method for this.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what `__init__` does.
- Create instance attributes.
- Create objects with starting values.
- Write methods that use object attributes.
- Return values from methods.
- Avoid common constructor mistakes.

## What is __init__?

`__init__` is a special method that runs automatically when an object is created.

It is often called a **constructor**.

Example:

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age


student = Student("Alice", 18)

print(student.name)
print(student.age)
```

Output

```text
Alice
18
```

## Instance Attributes

Attributes that belong to an object are called **instance attributes**.

Example:

```python
self.name = name
self.age = age
```

Each object has its own values.

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age


student1 = Student("Alice", 18)
student2 = Student("Bob", 20)

print(student1.name)
print(student2.name)
```

Output

```text
Alice
Bob
```

## Methods That Use Attributes

Methods can use attributes through `self`.

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print("Hello, my name is", self.name)
        print("I am", self.age, "years old.")


student = Student("Alice", 18)
student.introduce()
```

Output

```text
Hello, my name is Alice
I am 18 years old.
```

## Returning Values from Methods

A method can return a value like a normal function.

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height


rectangle = Rectangle(5, 3)

print(rectangle.area())
```

Output

```text
15
```

## Updating Attributes

You can update an attribute after an object is created.

```python
class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def add_score(self, points):
        self.score = self.score + points


player = Player("Mina", 10)
player.add_score(5)

print(player.score)
```

Output

```text
15
```

## A Complete Example

This program creates a bank account and updates its balance.

```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance = self.balance + amount

    def show_balance(self):
        print(self.owner, "has", self.balance, "baht.")


account = BankAccount("Alice", 1000)
account.deposit(500)
account.show_balance()
```

Output

```text
Alice has 1500 baht.
```

## Common Mistakes

### Misspelling __init__

Incorrect:

```python
class Student:
    def _init_(self, name):
        self.name = name
```

Correct:

```python
class Student:
    def __init__(self, name):
        self.name = name
```

`__init__` has two underscores before and after `init`.

### Forgetting self

Incorrect:

```python
class Student:
    def __init__(name):
        self.name = name
```

Correct:

```python
class Student:
    def __init__(self, name):
        self.name = name
```

### Passing the wrong number of arguments

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age


student = Student("Alice")
```

This causes a `TypeError` because `age` is missing.

## Summary

In this lesson, you learned:

- `__init__` runs when an object is created.
- Instance attributes store data for each object.
- Methods can use and update attributes.
- Methods can return values.
- Objects can have different values from the same class.

## Exercises

### Exercise 1

Create a class called `Student` with `name` and `age` attributes.

Create one student object and print both attributes.

### Exercise 2

Create a class called `Product` with `name` and `price` attributes.

Add a method called `show_info` that prints the product name and price.

### Exercise 3

Create a class called `Circle` with a `radius` attribute.

Add a method called `area` that returns:

```text
3.14 * radius * radius
```

### Exercise 4

Create a class called `BankAccount`.

It should have:

- `owner`
- `balance`
- `deposit(amount)`
- `withdraw(amount)`
- `show_balance()`
