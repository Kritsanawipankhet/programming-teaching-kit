---
title: Encapsulation
description: Learn how encapsulation protects object data and behavior.
---

# Encapsulation

Encapsulation means keeping an object's data and behavior together and controlling how the data is changed.

It helps prevent mistakes in larger programs.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain encapsulation.
- Use methods to control object data.
- Understand public attributes.
- Understand internal attributes by convention.
- Understand double underscore name mangling.
- Create getter and setter methods.
- Validate values before changing attributes.
- Avoid common encapsulation mistakes.

## Why Encapsulation Matters

Imagine a bank account object.

If any part of the program can change the balance directly, invalid values can happen.

```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance


account = BankAccount("Alice", 1000)
account.balance = -5000

print(account.balance)
```

Output

```text
-5000
```

A negative balance may not be allowed.

Encapsulation helps us protect the data by changing it through methods.

## Access Modifiers in Python

Some programming languages have access modifiers such as `public`, `private`, and `protected`.

Python does not use access modifier keywords.

Instead, Python uses naming conventions.

| Style | Example | Meaning |
| --- | --- | --- |
| Public | `name` | Can be used from outside the class |
| Internal by convention | `_balance` | Should be used only inside the class or related code |
| Name mangling | `__pin` | Harder to access directly from outside the class |

These rules are conventions that help programmers communicate intent.

They do not make attributes fully private in the same way as languages like Java or C++.

## Public Attributes

A public attribute can be accessed directly from outside the class.

```python
class Student:
    def __init__(self, name):
        self.name = name


student = Student("Alice")

print(student.name)
student.name = "Alicia"
print(student.name)
```

Output

```text
Alice
Alicia
```

Public attributes are fine when direct access is simple and safe.

## Internal Attributes by Convention

Python uses a naming convention to show that an attribute should be treated as private.

Internal-style attributes start with one underscore.

```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self._balance = balance
```

The underscore tells other programmers:

```text
This attribute is for internal use.
Do not change it directly from outside the class.
```

## Double Underscore Name Mangling

Attributes that start with two underscores are name-mangled by Python.

This means Python changes the attribute name internally to make accidental access harder.

```python
class BankAccount:
    def __init__(self, pin):
        self.__pin = pin

    def check_pin(self, pin):
        return pin == self.__pin


account = BankAccount("1234")

print(account.check_pin("1234"))
```

Output

```text
True
```

Trying to access `account.__pin` directly will not work as expected.

```python
print(account.__pin)
```

This causes an `AttributeError`.

For beginner code, use one underscore most of the time.

Use two underscores only when you need to avoid name conflicts, especially in inheritance.

## Controlling Changes with Methods

Use methods to control how data changes.

```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self._balance = balance

    def deposit(self, amount):
        if amount > 0:
            self._balance = self._balance + amount

    def withdraw(self, amount):
        if amount > 0 and amount <= self._balance:
            self._balance = self._balance - amount

    def show_balance(self):
        print("Balance:", self._balance)


account = BankAccount("Alice", 1000)
account.deposit(500)
account.withdraw(300)
account.show_balance()
```

Output

```text
Balance: 1200
```

## Getter Methods

A **getter** method returns an attribute value.

```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self._balance = balance

    def get_balance(self):
        return self._balance


account = BankAccount("Alice", 1000)

print(account.get_balance())
```

Output

```text
1000
```

## Setter Methods

A **setter** method changes an attribute value in a controlled way.

```python
class Student:
    def __init__(self, name, score):
        self.name = name
        self._score = score

    def set_score(self, score):
        if score >= 0 and score <= 100:
            self._score = score
        else:
            print("Invalid score")

    def get_score(self):
        return self._score


student = Student("Alice", 80)
student.set_score(95)

print(student.get_score())
```

Output

```text
95
```

## A Complete Example

This program protects a product price from becoming negative.

```python
class Product:
    def __init__(self, name, price):
        self.name = name
        self._price = 0
        self.set_price(price)

    def set_price(self, price):
        if price >= 0:
            self._price = price
        else:
            print("Price cannot be negative.")

    def get_price(self):
        return self._price

    def show_info(self):
        print(self.name, "costs", self._price, "baht.")


product = Product("Notebook", 35)
product.set_price(-10)
product.show_info()
```

Output

```text
Price cannot be negative.
Notebook costs 35 baht.
```

## Common Mistakes

### Changing internal attributes directly

Avoid this:

```python
account._balance = -1000
```

Use methods instead:

```python
account.withdraw(1000)
```

### Validating too late

Incorrect:

```python
self._score = score
if score < 0:
    print("Invalid")
```

Correct:

```python
if score >= 0:
    self._score = score
```

### Creating getters and setters for everything

Not every attribute needs getter and setter methods.

Use them when you need validation or controlled access.

### Thinking underscores make data fully private

This is a convention:

```python
account._balance
```

It tells programmers not to use the value directly.

It does not completely block access.

Double underscores make direct access harder, but they are still not a security feature.

## Summary

In this lesson, you learned:

- Encapsulation protects object data.
- Methods can control how attributes change.
- Python does not use access modifier keywords.
- Public attributes can be accessed directly.
- A single underscore means an attribute is internal by convention.
- Double underscores trigger name mangling.
- Getter methods return values.
- Setter methods update values safely.
- Validation helps prevent invalid object states.

## Exercises

### Exercise 1

Create a class called `Student`.

Use `_score` as an internal attribute.

Add:

- `get_score()`
- `set_score(score)`

The score must be between `0` and `100`.

### Exercise 2

Create a class called `BankAccount`.

Use `_balance` as an internal attribute.

Add:

- `deposit(amount)`
- `withdraw(amount)`
- `get_balance()`

Do not allow negative deposits or withdrawals greater than the balance.

### Exercise 3

Create a class called `Temperature`.

Use `_celsius` as an internal attribute.

Do not allow a value below `-273.15`.

### Exercise 4

Create a class called `UserAccount`.

It should have:

- A public attribute called `username`
- An internal attribute called `_email`
- A double underscore attribute called `__password`
- A method called `check_password(password)` that returns `True` or `False`
