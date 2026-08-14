---
title: Polymorphism
description: Learn how different objects can use the same method name in different ways.
---

# Polymorphism

Polymorphism means many forms.

In programming, it allows different objects to use the same method name in different ways.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain polymorphism.
- Use the same method name in different classes.
- Write functions that work with different object types.
- Understand why polymorphism makes code flexible.
- Avoid common polymorphism mistakes.

## Same Method Name, Different Behavior

Different classes can have methods with the same name.

```python
class Dog:
    def make_sound(self):
        print("Woof")


class Cat:
    def make_sound(self):
        print("Meow")


dog = Dog()
cat = Cat()

dog.make_sound()
cat.make_sound()
```

Output

```text
Woof
Meow
```

Both objects use `make_sound`, but each object behaves differently.

## Polymorphism with Functions

A function can call the same method on different objects.

```python
class Dog:
    def make_sound(self):
        print("Woof")


class Cat:
    def make_sound(self):
        print("Meow")


def play_sound(animal):
    animal.make_sound()


dog = Dog()
cat = Cat()

play_sound(dog)
play_sound(cat)
```

Output

```text
Woof
Meow
```

The `play_sound` function does not need to know whether the object is a dog or a cat.

It only needs the object to have a `make_sound` method.

## Polymorphism with Inheritance

Polymorphism is often used with inheritance.

```python
class Shape:
    def area(self):
        return 0


class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height


class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius


shapes = [
    Rectangle(5, 3),
    Circle(4)
]

for shape in shapes:
    print(shape.area())
```

Output

```text
15
50.24
```

Each shape has an `area` method, but the calculation is different.

## A Complete Example

This program prints reports for different types of users.

```python
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def get_report(self):
        return self.name + " scored " + str(self.score)


class Teacher:
    def __init__(self, name, subject):
        self.name = name
        self.subject = subject

    def get_report(self):
        return self.name + " teaches " + self.subject


def print_report(person):
    print(person.get_report())


student = Student("Alice", 95)
teacher = Teacher("Mr. Somchai", "Python")

print_report(student)
print_report(teacher)
```

Output

```text
Alice scored 95
Mr. Somchai teaches Python
```

## Common Mistakes

### Using different method names

Polymorphism works when objects share the same method name.

Incorrect:

```python
class Dog:
    def bark(self):
        print("Woof")


class Cat:
    def meow(self):
        print("Meow")
```

Better:

```python
class Dog:
    def make_sound(self):
        print("Woof")


class Cat:
    def make_sound(self):
        print("Meow")
```

### Calling a method that does not exist

```python
def play_sound(animal):
    animal.make_sound()
```

Every object passed to `play_sound` must have a `make_sound` method.

## Summary

In this lesson, you learned:

- Polymorphism means many forms.
- Different classes can use the same method name.
- The same function can work with different object types.
- Polymorphism makes code more flexible and reusable.

## Exercises

### Exercise 1

Create two classes:

- `Dog`
- `Cat`

Both classes should have a method called `make_sound`.

Call the method on both objects.

### Exercise 2

Create a function called `show_area(shape)`.

The function should print `shape.area()`.

Create two classes:

- `Rectangle`
- `Square`

Both classes should have an `area` method.

### Exercise 3

Create two classes:

- `EmailNotification`
- `SmsNotification`

Both classes should have a method called `send`.

Create a function called `send_notification(notification)` that calls `notification.send()`.
