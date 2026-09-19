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

## Game Example: A Player Has a Weapon

In a game, a player **has a** weapon. The player stores the weapon as an object and asks it to perform an attack.

```python
class Sword:
    def attack(self):
        print("Slash!")


class Gun:
    def attack(self):
        print("Bang!")


class Player:
    def __init__(self, weapon):
        self.weapon = weapon

    def attack(self):
        self.weapon.attack()


hero = Player(Sword())
hero.attack()

hero.weapon = Gun()
hero.attack()
```

Output

```text
Slash!
Bang!
```

Here is what happens when we call `hero.attack()`:

1. Python calls the player's `attack` method.
2. `self.weapon` refers to the player's current weapon.
3. `self.weapon.attack()` calls that weapon's `attack` method.

This is called **delegation**: the player lets the weapon handle how to attack. `self.weapon.attack()` calls a method on a separate object; it does not call the player's own method again.

Changing `hero.weapon` from a `Sword` to a `Gun` changes the attack without changing the `Player` class.

## Composition vs Polymorphism

**Composition = has-a**

**Polymorphism = same interface, different behavior**

```text
Player has a Weapon        → Composition

Sword.attack() → Slash! ┐
                       ├─ → Polymorphism
Gun.attack()   → Bang!  ┘
```

Here, `Weapon` describes the role of the object held by the player, not a separate class in the example. The attack calls represent calling `attack()` on instances of `Sword` and `Gun`.

Here, "interface" means the methods an object provides for other code to use. In the game example, both weapons provide an `attack()` method that can be called without extra arguments.

| Concept | What it describes | In the game example |
| --- | --- | --- |
| Composition | How objects are put together | A `Player` has a weapon, stored in `self.weapon`. |
| Polymorphism | How different objects respond to the same operation | `Sword.attack()` prints `Slash!`, while `Gun.attack()` prints `Bang!`. |

The line `self.weapon = weapon` establishes the **has-a** relationship. The call `self.weapon.attack()` uses the **same interface**, while the current weapon determines the behavior.

These ideas work together: composition lets the player hold a weapon, and polymorphism lets the player use different weapons through the same call. Duck typing makes this possible without requiring `Sword` and `Gun` to inherit from a shared weapon class.

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

Inheritance and composition both help reuse code, but they describe different relationships.

**Inheritance = is-a**: a child class is a more specific kind of its parent class.

**Composition = has-a**: an object contains another object and can delegate work to it.

```text
Player is a Character    → Inheritance
Player has a Weapon      → Composition
```

| Question | Inheritance | Composition |
| --- | --- | --- |
| What is the relationship? | One type is a kind of another type. | One object has or uses another object. |
| How is it written? | `class Player(Character):` | `self.weapon = weapon` |
| How is behavior reused? | The child inherits methods from its parent. | The containing object calls methods on its component. |
| How can behavior change? | A child class can override a parent method. | A different compatible component can be supplied or assigned. |

### Inheritance: Players and Enemies Are Characters

Imagine a game where all characters can move. A player and an enemy are both kinds of character, so both can inherit that shared behavior.

```text
Character
├── Player    → is a Character
└── Enemy     → is a Character
```

```python
class Character:
    def move(self):
        print("Move to a new position.")


class Player(Character):
    pass


class Enemy(Character):
    pass


hero = Player()
enemy = Enemy()

hero.move()
enemy.move()
```

Output

```text
Move to a new position.
Move to a new position.
```

Both `Player` and `Enemy` inherit `move()` from `Character`, so we write the shared movement code only once. The first output line comes from `hero.move()`, and the second comes from `enemy.move()`.

There is no separate character object stored inside `hero` or `enemy`; each object itself is a character.

Use inheritance when the child can sensibly be used wherever the parent is expected. For example, code that asks a `Character` to move should also work with a `Player` or an `Enemy`.

### Composition: A Player Has a Weapon

In the earlier weapon example, `Player` stores a separate `Sword` or `Gun` object in `self.weapon`. It delegates attacking to that object with `self.weapon.attack()`.

The relationship is "a player has a weapon." Making `Player` inherit from `Sword` would describe a player as a kind of sword, which does not fit this game.

Composition also lets the same player change equipment. In the earlier weapon example, assigning `hero.weapon = Gun()` changes which weapon handles the next `hero.attack()` call. The player remains the same object, but its weapon now provides a different attack. We do not need separate `SwordPlayer` and `GunPlayer` classes just to represent the equipped weapon.

### Using Both Together

These choices can work together in one design. This complete example gives the player inherited movement and a weapon for attacking:

```python
class Character:
    def move(self):
        print("Move to a new position.")


class Sword:
    def attack(self):
        print("Slash!")


class Gun:
    def attack(self):
        print("Bang!")


class Player(Character):
    def __init__(self, weapon):
        self.weapon = weapon

    def attack(self):
        self.weapon.attack()


hero = Player(Sword())
hero.move()
hero.attack()

hero.weapon = Gun()
hero.attack()
```

Output

```text
Move to a new position.
Slash!
Bang!
```

`hero.move()` uses **inheritance**, while storing the weapon uses **composition**. Calling the same `attack()` method on different weapons also demonstrates **polymorphism**.

### How to Choose

- Choose inheritance when you are modeling a more specific kind of an existing type that should support the parent's expected behavior.
- Choose composition when you are modeling a part, tool, or service that an object uses, especially when it may be replaced independently.
- Do not choose inheritance only to avoid copying a few lines. First check whether the "is-a" relationship makes sense.

For example, a `Dog` is an `Animal`, while a `Car` has an `Engine` and a `Student` has an `Address`. Neither approach is always better; choose the relationship that matches the program you are building.

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
- An object can delegate work to an object it contains, such as a player asking its weapon to attack.
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

### Exercise 4

Extend the game example with a `MagicWand` class.

Give it an `attack` method that prints `Cast a magic spell!`.

Equip the existing hero with a `MagicWand` object, then call `hero.attack()`.

Keep the `Player` class unchanged. Explain why the new weapon works with it.
