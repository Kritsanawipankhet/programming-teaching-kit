---
title: Dictionaries
description: Learn how to store key-value pairs using Python dictionaries.
---

# Dictionaries

A **dictionary** stores data as key-value pairs.

Dictionaries are useful when each value has a name or label.

For example, a student can have a name, age, and grade.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what a dictionary is.
- Create dictionaries in Python.
- Access values using keys.
- Add and update dictionary items.
- Remove dictionary items.
- Check if a key exists.
- Loop through a dictionary.
- Use nested dictionaries.
- Avoid common mistakes when using dictionaries.

## What is a Dictionary?

A **dictionary** is a collection of key-value pairs.

Each item has:

- A **key**
- A **value**

Example:

```python
student = {
    "name": "Alice",
    "age": 18,
    "grade": "A"
}

print(student)
```

Output

```text
{'name': 'Alice', 'age': 18, 'grade': 'A'}
```

In this example:

- `"name"` is a key, and `"Alice"` is its value.
- `"age"` is a key, and `18` is its value.
- `"grade"` is a key, and `"A"` is its value.

## Creating a Dictionary

Dictionaries use curly braces (`{}`).

Each key and value are separated by a colon (`:`).

```python
person = {
    "name": "Bob",
    "age": 20,
    "is_student": True
}
```

Keys are usually strings.

Values can be strings, numbers, Booleans, lists, or other data types.

## Accessing Values

Use the key to access a value.

```python
student = {
    "name": "Alice",
    "age": 18
}

print(student["name"])
print(student["age"])
```

Output

```text
Alice
18
```

## Using get()

Use `get()` to access a value safely.

```python
student = {
    "name": "Alice",
    "age": 18
}

print(student.get("grade"))
```

Output

```text
None
```

If the key does not exist, `get()` returns `None` instead of causing an error.

You can also provide a default value.

```python
print(student.get("grade", "No grade"))
```

Output

```text
No grade
```

## Adding Items

Add a new key-value pair by assigning a value to a new key.

```python
student = {
    "name": "Alice",
    "age": 18
}

student["grade"] = "A"

print(student)
```

Output

```text
{'name': 'Alice', 'age': 18, 'grade': 'A'}
```

## Updating Items

Use an existing key to change its value.

```python
student = {
    "name": "Alice",
    "age": 18
}

student["age"] = 19

print(student)
```

Output

```text
{'name': 'Alice', 'age': 19}
```

## Removing Items

Use `pop()` to remove an item by key.

```python
student = {
    "name": "Alice",
    "age": 18,
    "grade": "A"
}

removed_value = student.pop("grade")

print(removed_value)
print(student)
```

Output

```text
A
{'name': 'Alice', 'age': 18}
```

Use `del` to delete an item.

```python
del student["age"]

print(student)
```

Output

```text
{'name': 'Alice'}
```

## Checking if a Key Exists

Use `in` to check if a key exists.

```python
student = {
    "name": "Alice",
    "age": 18
}

if "age" in student:
    print("Age exists.")
```

Output

```text
Age exists.
```

## Dictionary Length

Use `len()` to count how many key-value pairs are in a dictionary.

```python
student = {
    "name": "Alice",
    "age": 18,
    "grade": "A"
}

print(len(student))
```

Output

```text
3
```

## Looping Through a Dictionary

Loop through keys:

```python
student = {
    "name": "Alice",
    "age": 18
}

for key in student:
    print(key)
```

Output

```text
name
age
```

Loop through values:

```python
for value in student.values():
    print(value)
```

Output

```text
Alice
18
```

Loop through keys and values:

```python
for key, value in student.items():
    print(key, value)
```

Output

```text
name Alice
age 18
```

## Dictionaries with Lists

A dictionary value can be a list.

Example:

```python
student = {
    "name": "Alice",
    "scores": [80, 90, 100]
}

print(student["scores"])
print(student["scores"][0])
```

Output

```text
[80, 90, 100]
80
```

## Nested Dictionaries

A dictionary can contain another dictionary.

This is called a **nested dictionary**.

Example:

```python
student = {
    "name": "Alice",
    "profile": {
        "age": 18,
        "country": "Thailand"
    }
}

print(student["profile"])
print(student["profile"]["age"])
```

Output

```text
{'age': 18, 'country': 'Thailand'}
18
```

Nested dictionaries are useful when data has smaller groups inside it.

For example, a student can have profile information and score information.

## A Complete Example

This program stores student information with a nested dictionary and calculates the average score.

```python
student = {
    "name": "Alice",
    "profile": {
        "age": 18,
        "country": "Thailand"
    },
    "scores": [80, 90, 100]
}

scores = student["scores"]
average = sum(scores) / len(scores)

print("Name:", student["name"])
print("Age:", student["profile"]["age"])
print("Average:", average)
```

Output

```text
Name: Alice
Age: 18
Average: 90.0
```

## Common Mistakes

### Accessing a key that does not exist

```python
student = {
    "name": "Alice"
}

print(student["age"])
```

This causes a `KeyError`.

Use `get()` or check with `in` if you are not sure.

### Forgetting quotation marks around string keys

Incorrect:

```python
student = {
    name: "Alice"
}
```

Correct:

```python
student = {
    "name": "Alice"
}
```

### Using a list as a dictionary key

Incorrect:

```python
data = {
    ["name"]: "Alice"
}
```

Dictionary keys must be immutable values, such as strings, numbers, or tuples.

### Confusing lists and dictionaries

Lists use indexes.

```python
colors = ["red", "green", "blue"]

print(colors[0])
```

Dictionaries use keys.

```python
student = {
    "name": "Alice"
}

print(student["name"])
```

## Summary

In this lesson, you learned:

- Dictionaries store key-value pairs.
- Dictionaries use curly braces (`{}`).
- How to access values using keys.
- How to add, update, and remove dictionary items.
- How to use `get()`.
- How to check if a key exists.
- How to loop through dictionaries.
- How dictionaries can store lists.
- How to use nested dictionaries.

## Exercises

### Exercise 1

Create a dictionary for a student with:

- `name`
- `age`
- `grade`

Print the dictionary.

### Exercise 2

Print the student's name from this dictionary:

```python
student = {
    "name": "Alice",
    "age": 18
}
```

### Exercise 3

Add a new key called `"country"` to this dictionary:

```python
student = {
    "name": "Alice",
    "age": 18
}
```

### Exercise 4

Update the age to `19`.

```python
student = {
    "name": "Alice",
    "age": 18
}
```

### Exercise 5

Remove `"grade"` from this dictionary:

```python
student = {
    "name": "Alice",
    "age": 18,
    "grade": "A"
}
```

### Exercise 6

Use `get()` to safely access `"email"` from this dictionary:

```python
student = {
    "name": "Alice"
}
```

### Exercise 7

Loop through this dictionary and print each key and value:

```python
student = {
    "name": "Alice",
    "age": 18,
    "grade": "A"
}
```

### Exercise 8

Create a dictionary with a name and a list of scores.

Calculate and print the average score.

### Exercise 9

Create a dictionary for a student with a nested dictionary called `"profile"`.

The `"profile"` dictionary should contain:

- `"age"`
- `"country"`

Print the student's country.
