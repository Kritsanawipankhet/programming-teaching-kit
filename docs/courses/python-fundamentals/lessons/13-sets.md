---
title: Sets
description: Learn how to store unique values and work with Python sets.
---

# Sets

A **set** is a collection of unique values.

Sets are useful when you do not want duplicate items.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what a set is.
- Create sets in Python.
- Understand that sets do not allow duplicates.
- Add and remove set items.
- Check if an item exists in a set.
- Loop through a set.
- Use basic set operations.
- Avoid common mistakes when using sets.

## What is a Set?

A **set** stores multiple unique values in one variable.

Sets are written with curly braces (`{}`).

Example:

```python
fruits = {"apple", "banana", "orange"}

print(fruits)
```

Output

```text
{'apple', 'banana', 'orange'}
```

The order of set items may be different when you print them.

## Sets Do Not Allow Duplicates

If you add duplicate values to a set, Python keeps only one copy.

```python
fruits = {"apple", "banana", "apple", "orange"}

print(fruits)
```

Example output

```text
{'apple', 'banana', 'orange'}
```

This makes sets useful for removing duplicates.

## Creating an Empty Set

Use `set()` to create an empty set.

```python
fruits = set()

print(fruits)
```

Output

```text
set()
```

Do not use `{}` for an empty set.

```python
empty = {}

print(type(empty))
```

Output

```text
<class 'dict'>
```

`{}` creates an empty dictionary, not an empty set.

## Adding Items

Use `add()` to add one item to a set.

```python
fruits = {"apple", "banana"}

fruits.add("orange")

print(fruits)
```

Example output

```text
{'apple', 'banana', 'orange'}
```

## Removing Items

Use `remove()` to remove an item.

```python
fruits = {"apple", "banana", "orange"}

fruits.remove("banana")

print(fruits)
```

Example output

```text
{'apple', 'orange'}
```

If the item does not exist, `remove()` causes a `KeyError`.

Use `discard()` if you do not want an error.

```python
fruits = {"apple", "banana"}

fruits.discard("orange")

print(fruits)
```

Example output

```text
{'apple', 'banana'}
```

## Checking if an Item Exists

Use `in` to check if an item is in a set.

```python
fruits = {"apple", "banana", "orange"}

if "banana" in fruits:
    print("Banana is in the set.")
```

Output

```text
Banana is in the set.
```

## Looping Through a Set

Use a `for` loop to go through a set.

```python
fruits = {"apple", "banana", "orange"}

for fruit in fruits:
    print(fruit)
```

Example output

```text
apple
banana
orange
```

The order may be different each time.

## Set Operations

Sets are useful for comparing groups of values.

### Union

Union combines values from both sets.

```python
a = {"apple", "banana"}
b = {"banana", "orange"}

print(a | b)
```

Example output

```text
{'apple', 'banana', 'orange'}
```

### Intersection

Intersection finds values that are in both sets.

```python
a = {"apple", "banana"}
b = {"banana", "orange"}

print(a & b)
```

Output

```text
{'banana'}
```

### Difference

Difference finds values that are in the first set but not the second set.

```python
a = {"apple", "banana"}
b = {"banana", "orange"}

print(a - b)
```

Output

```text
{'apple'}
```

## Lists vs Sets

| Feature | List | Set |
|---------|------|-----|
| Brackets | `[]` | `{}` |
| Ordered | Yes | No |
| Changeable | Yes | Yes |
| Allows duplicates | Yes | No |
| Uses indexes | Yes | No |

## A Complete Example

This program removes duplicate names.

```python
names = ["Alice", "Bob", "Alice", "Charlie", "Bob"]

unique_names = set(names)

print(unique_names)
```

Example output

```text
{'Alice', 'Bob', 'Charlie'}
```

## Common Mistakes

### Expecting sets to keep order

Sets do not keep items in a fixed order.

Do not use a set when the order matters.

### Using an index with a set

Incorrect:

```python
fruits = {"apple", "banana"}

print(fruits[0])
```

Sets do not use indexes.

### Creating an empty set with {}

Incorrect:

```python
items = {}
```

Correct:

```python
items = set()
```

### Removing a missing item with remove()

```python
fruits = {"apple", "banana"}

fruits.remove("orange")
```

This causes a `KeyError`.

Use `discard()` if the item might not exist.

## Summary

In this lesson, you learned:

- Sets store unique values.
- Sets use curly braces (`{}`).
- Sets do not allow duplicates.
- Sets are unordered.
- Sets do not use indexes.
- How to add and remove set items.
- How to use union, intersection, and difference.

## Exercises

### Exercise 1

Create a set of three favorite fruits and print it.

### Exercise 2

What is the output?

```python
numbers = {1, 2, 2, 3}

print(numbers)
```

### Exercise 3

Create an empty set and add three colors to it.

### Exercise 4

Remove `"banana"` from this set:

```python
fruits = {"apple", "banana", "orange"}
```

### Exercise 5

Check if `"Python"` is in this set:

```python
languages = {"Python", "JavaScript", "HTML"}
```

### Exercise 6

Find the values that appear in both sets.

```python
a = {1, 2, 3}
b = {3, 4, 5}
```

### Exercise 7

Use a set to remove duplicate values from this list:

```python
names = ["Alice", "Bob", "Alice", "Charlie"]
```
