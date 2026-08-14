---
title: Composition
description: Learn how to build classes that contain other objects.
---

# Composition

Composition means building a class by using objects from other classes.

It is useful when one object **has a** relationship with another object.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain composition.
- Create objects that contain other objects.
- Understand "has a" relationships.
- Choose between inheritance and composition.
- Build a small program using multiple classes.

## What is Composition?

Composition happens when an object stores another object as an attribute.

Example:

```python
class Engine:
    def start(self):
        print("Engine started.")


class Car:
    def __init__(self):
        self.engine = Engine()

    def drive(self):
        self.engine.start()
        print("Car is driving.")


car = Car()
car.drive()
```

Output

```text
Engine started.
Car is driving.
```

The car has an engine.

This is a "has a" relationship.

## Passing Objects into Other Objects

You can create an object first, then pass it into another object.

```python
class Address:
    def __init__(self, city, country):
        self.city = city
        self.country = country


class Student:
    def __init__(self, name, address):
        self.name = name
        self.address = address

    def show_info(self):
        print("Name:", self.name)
        print("City:", self.address.city)
        print("Country:", self.address.country)


address = Address("Bangkok", "Thailand")
student = Student("Alice", address)

student.show_info()
```

Output

```text
Name: Alice
City: Bangkok
Country: Thailand
```

## Composition with Lists of Objects

One object can contain a list of other objects.

```python
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score


class Classroom:
    def __init__(self, name):
        self.name = name
        self.students = []

    def add_student(self, student):
        self.students.append(student)

    def show_students(self):
        print("Classroom:", self.name)
        for student in self.students:
            print(student.name, student.score)


classroom = Classroom("Python OOP")
classroom.add_student(Student("Alice", 90))
classroom.add_student(Student("Bob", 85))

classroom.show_students()
```

Output

```text
Classroom: Python OOP
Alice 90
Bob 85
```

## Inheritance vs Composition

Use inheritance for an **is a** relationship.

```text
Dog is an Animal
Teacher is a Person
```

Use composition for a **has a** relationship.

```text
Car has an Engine
Student has an Address
Classroom has Students
```

## A Complete Example

This program uses composition to build a simple course report.

```python
class Lesson:
    def __init__(self, title, duration_minutes):
        self.title = title
        self.duration_minutes = duration_minutes


class Course:
    def __init__(self, title):
        self.title = title
        self.lessons = []

    def add_lesson(self, lesson):
        self.lessons.append(lesson)

    def total_duration(self):
        total = 0
        for lesson in self.lessons:
            total = total + lesson.duration_minutes
        return total

    def show_report(self):
        print("Course:", self.title)
        for lesson in self.lessons:
            print("-", lesson.title, lesson.duration_minutes, "minutes")
        print("Total:", self.total_duration(), "minutes")


course = Course("Python OOP")
course.add_lesson(Lesson("Classes and Objects", 45))
course.add_lesson(Lesson("Inheritance", 50))

course.show_report()
```

Output

```text
Course: Python OOP
- Classes and Objects 45 minutes
- Inheritance 50 minutes
Total: 95 minutes
```

## Common Mistakes

### Using inheritance for a "has a" relationship

Incorrect idea:

```text
Car is an Engine
```

Better idea:

```text
Car has an Engine
```

### Creating too many unrelated classes

Classes should make the program easier to understand.

If a class has no clear data or behavior, it may not be needed.

### Forgetting to pass objects

```python
student = Student("Alice", address)
```

The `address` object must exist before it is passed into `Student`.

## Summary

In this lesson, you learned:

- Composition means one object contains another object.
- Composition is useful for "has a" relationships.
- Objects can store other objects as attributes.
- Objects can store lists of other objects.
- Composition and inheritance solve different design problems.

## Exercises

### Exercise 1

Create a class called `Battery` with a method called `show_power`.

Create a class called `Phone` that has a `Battery` object.

Call `show_power` through the phone object.

### Exercise 2

Create a class called `Address` with:

- `city`
- `country`

Create a class called `Customer` with:

- `name`
- `address`

Create a customer and print the city.

### Exercise 3

Create a class called `Task` with:

- `title`
- `is_done`

Create a class called `TodoList` that stores a list of tasks.

Add methods to:

- Add a task
- Show all tasks
- Count completed tasks
