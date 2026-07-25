---
title: Loops
description: Learn how to repeat tasks efficiently using loops in Python.
---

# Loops

Programs often need to repeat the same task multiple times.

For example:

- Print numbers from 1 to 10.
- Display every character in a word.
- Repeat an action until a condition becomes false.

Instead of writing the same code repeatedly, Python provides **loops**.

## Learning Objectives

After completing this lesson, you will be able to:

- Explain what a loop is.
- Use the `while` loop.
- Use the `for` loop.
- Use the `range()` function.
- Loop through strings.
- Write nested loops.

## What is a Loop?

A **loop** is used to execute a block of code repeatedly.

Without loops:

```python
print("Hello")
print("Hello")
print("Hello")
print("Hello")
print("Hello")
```

With a loop:

```python
for _ in range(5):
    print("Hello")
```

Output

```text
Hello
Hello
Hello
Hello
Hello
```

Loops make programs shorter, cleaner, and easier to maintain.


## The while Loop

A `while` loop repeats as long as its condition is `True`.

Syntax:

```python
while condition:
    # code
```

Example:

```python
count = 1

while count <= 5:
    print(count)
    count += 1
```

Output

```text
1
2
3
4
5
```

The loop stops when the condition becomes `False`.

## The for Loop

A `for` loop repeats over a sequence of values.

Syntax:

```python
for item in sequence:
    # code
```

Example:

```python
for number in [1, 2, 3]:
    print(number)
```

Output

```text
1
2
3
```


## The range() Function

The `range()` function generates a sequence of numbers.

### range(stop)

```python
for number in range(5):
    print(number)
```

Output

```text
0
1
2
3
4
```

### range(start, stop)

```python
for number in range(1, 6):
    print(number)
```

Output

```text
1
2
3
4
5
```

### range(start, stop, step)

```python
for number in range(0, 11, 2):
    print(number)
```

Output

```text
0
2
4
6
8
10
```

## Looping Through Strings

A string is a sequence of characters.

You can loop through each character.

```python
word = "Python"

for letter in word:
    print(letter)
```

Output

```text
P
y
t
h
o
n
```

## Nested Loops

A loop can contain another loop.

Example:

```python
for row in range(3):
    for column in range(3):
        print(row, column)
```

Output

```text
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
```

Nested loops are useful for working with tables, grids, and game boards.

## Choosing Between `for` and `while`

Use a **for loop** when you know how many times to repeat.

```python
for i in range(10):
    print(i)
```

Use a **while loop** when you repeat until a condition changes.

```python
count = 1

while count <= 10:
    print(count)
    count += 1
```

## Common Mistakes

### Infinite Loop

```python
count = 1

while count <= 5:
    print(count)
```

The condition never changes, so the loop never ends.

Correct:

```python
count = 1

while count <= 5:
    print(count)
    count += 1
```

### Incorrect Indentation

Incorrect:

```python
for i in range(3):
print(i)
```

Correct:

```python
for i in range(3):
    print(i)
```

---

### Forgetting the Colon

Incorrect:

```python
for i in range(5)
```

Correct:

```python
for i in range(5):
```

## Summary

In this lesson, you learned:

- What loops are.
- How to use the `while` loop.
- How to use the `for` loop.
- How to use `range()`.
- How to loop through strings.
- How to write nested loops.
- Common mistakes when writing loops.

## Exercises

### Exercise 1

Write a program that prints the numbers from **1 to 10**.


### Exercise 2

Write a program that prints all even numbers from **2 to 20**.

Expected output

```text
2
4
6
8
10
12
14
16
18
20
```

### Exercise 3

Write a program that prints each character in the word:

```text
Programming
```


### Exercise 4

Write a multiplication table for the number **5**.

Expected output

```text
5 × 1 = 5
5 × 2 = 10
5 × 3 = 15
...
5 × 10 = 50
```

### Exercise 5

Write a program that prints the following pattern.

```text
*
**
***
****
*****
```

### Exercise 6

What is the output?

```python
for i in range(2, 8, 2):
    print(i)
```

### Exercise 7

Find and fix the errors.

```python
count = 1

while count <= 5
    print(count)
    count += 1
```