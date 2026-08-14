---
title: Classes and Objects
description: Learn the basic ideas of classes and objects in Python.
---

# Classes and Objects

Object-oriented programming helps us organize code around things.

In Python, these things are created from **classes** and are called **objects**.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what object-oriented programming is.
- Explain what a class is.
- Explain what an object is.
- Create a simple class in Python.
- Create objects from a class.
- Understand the difference between a class and an object.

## What is Object-Oriented Programming?

**Object-oriented programming**, or **OOP**, is a way to organize programs by grouping related data and behavior together.

For example, a student has data:

- Name
- Age
- Grade

A student can also have behavior:

- Introduce themself
- Study
- Take an exam

OOP lets us keep this data and behavior in one place.

## What is a Class?

A **class** is a blueprint for creating objects.

It describes what an object should have and what it can do.

Example:

```python
class Student:
    pass
```

This creates a class named `Student`.

The `pass` keyword means the class is empty for now.

## What is an Object?

An **object** is a real item created from a class.

Example:

```python
class Student:
    pass


student1 = Student()
student2 = Student()

print(student1)
print(student2)
```

Output will look similar to this:

```text
<__main__.Student object at 0x000001>
<__main__.Student object at 0x000002>
```

The exact output may be different on your computer.

`student1` and `student2` are two different objects created from the same class.

## Class vs Object

Think of a class as a plan and an object as something made from that plan.

| Concept | Meaning | Example |
|---------|---------|---------|
| Class | Blueprint | `Student` |
| Object | Item created from a class | `student1` |

## Adding Attributes

An **attribute** is data stored inside an object.

Example:

```python
class Student:
    pass


student = Student()
student.name = "Alice"
student.age = 18

print(student.name)
print(student.age)
```

Output

```text
Alice
18
```

In this example, `name` and `age` are attributes of the `student` object.

## Adding a Method

A **method** is a function that belongs to a class.

Example:

```python
class Student:
    def introduce(self):
        print("Hello, I am a student.")


student = Student()
student.introduce()
```

Output

```text
Hello, I am a student.
```

The `self` parameter refers to the object that is calling the method.

## Using self

Use `self` to access attributes inside a method.

```python
class Student:
    def introduce(self):
        print("Hello, my name is", self.name)


student = Student()
student.name = "Alice"
student.introduce()
```

Output

```text
Hello, my name is Alice
```

## A Complete Example

```python
class Student:
    def introduce(self):
        print("Name:", self.name)
        print("Age:", self.age)


student1 = Student()
student1.name = "Alice"
student1.age = 18

student2 = Student()
student2.name = "Bob"
student2.age = 20

student1.introduce()
student2.introduce()
```

Output

```text
Name: Alice
Age: 18
Name: Bob
Age: 20
```

## Common Mistakes

### Forgetting parentheses when creating an object

Incorrect:

```python
student = Student
```

Correct:

```python
student = Student()
```

### Forgetting self in a method

Incorrect:

```python
class Student:
    def introduce():
        print("Hello")
```

Correct:

```python
class Student:
    def introduce(self):
        print("Hello")
```

### Using an attribute before creating it

```python
class Student:
    pass


student = Student()
print(student.name)
```

This causes an `AttributeError` because `name` does not exist yet.

## Summary

In this lesson, you learned:

- OOP groups data and behavior together.
- A class is a blueprint.
- An object is created from a class.
- Attributes store object data.
- Methods define object behavior.
- `self` refers to the current object.

## Exercises

### Exercise 1

Create a class called `Car`.

Create an object from the class and print it.

### Exercise 2

Create a class called `Book`.

Create a book object and add these attributes:

- `title`
- `author`

Print both attributes.

### Exercise 3

Create a class called `Dog` with a method called `bark`.

The method should print:

```text
Woof!
```

### Exercise 4

Create a class called `Player`.

Add a method called `show_name` that prints the player's name.

Create a player object, add a `name` attribute, and call the method.
