---
title: Inheritance
description: Learn how classes can reuse code through inheritance.
---

# Inheritance

Inheritance allows one class to reuse code from another class.

It helps you avoid repeating the same attributes and methods.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain inheritance.
- Create a parent class.
- Create a child class.
- Reuse methods from a parent class.
- Override methods in a child class.
- Use `super()` to call the parent constructor.

## Parent and Child Classes

A **parent class** contains common code.

A **child class** inherits from the parent class.

Example:

```python
class Animal:
    def eat(self):
        print("This animal is eating.")


class Dog(Animal):
    pass


dog = Dog()
dog.eat()
```

Output

```text
This animal is eating.
```

`Dog` can use the `eat` method because it inherits from `Animal`.

## Adding Child Methods

A child class can have its own methods.

```python
class Animal:
    def eat(self):
        print("This animal is eating.")


class Dog(Animal):
    def bark(self):
        print("Woof!")


dog = Dog()
dog.eat()
dog.bark()
```

Output

```text
This animal is eating.
Woof!
```

## Using __init__ with Inheritance

A child class can call the parent constructor with `super()`.

```python
class Person:
    def __init__(self, name):
        self.name = name

    def introduce(self):
        print("My name is", self.name)


class Student(Person):
    def __init__(self, name, grade):
        super().__init__(name)
        self.grade = grade

    def show_grade(self):
        print("Grade:", self.grade)


student = Student("Alice", "A")
student.introduce()
student.show_grade()
```

Output

```text
My name is Alice
Grade: A
```

## Method Overriding

A child class can replace a method from the parent class.

This is called **method overriding**.

```python
class Animal:
    def make_sound(self):
        print("Some sound")


class Cat(Animal):
    def make_sound(self):
        print("Meow")


cat = Cat()
cat.make_sound()
```

Output

```text
Meow
```

## A Complete Example

```python
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def show_info(self):
        print("Name:", self.name)
        print("Salary:", self.salary)


class Developer(Employee):
    def __init__(self, name, salary, programming_language):
        super().__init__(name, salary)
        self.programming_language = programming_language

    def show_info(self):
        super().show_info()
        print("Language:", self.programming_language)


developer = Developer("Mina", 50000, "Python")
developer.show_info()
```

Output

```text
Name: Mina
Salary: 50000
Language: Python
```

## Common Mistakes

### Forgetting to inherit from the parent class

Incorrect:

```python
class Dog:
    pass
```

Correct:

```python
class Dog(Animal):
    pass
```

### Forgetting super()

Incorrect:

```python
class Student(Person):
    def __init__(self, name, grade):
        self.grade = grade
```

Correct:

```python
class Student(Person):
    def __init__(self, name, grade):
        super().__init__(name)
        self.grade = grade
```

### Using inheritance for unrelated classes

Inheritance should describe an "is a" relationship.

For example:

```text
Dog is an Animal
Student is a Person
```

Do not use inheritance just to share random code.

## Summary

In this lesson, you learned:

- Inheritance lets a child class reuse code from a parent class.
- A child class can add its own methods.
- `super()` calls code from the parent class.
- A child class can override parent methods.
- Inheritance works best for "is a" relationships.

## Exercises

### Exercise 1

Create a parent class called `Animal` with a method called `eat`.

Create a child class called `Bird` that inherits from `Animal`.

Create a bird object and call `eat`.

### Exercise 2

Create a parent class called `Person` with a `name` attribute.

Create a child class called `Teacher` with a `subject` attribute.

Use `super()` in the child class.

### Exercise 3

Create a parent class called `Vehicle` with a method called `move`.

Create a child class called `Car` that overrides `move` and prints:

```text
The car is driving.
```
