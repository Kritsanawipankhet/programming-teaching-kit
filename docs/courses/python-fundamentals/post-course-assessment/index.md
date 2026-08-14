---
title: Post-course Practice Problems
description: Practice Python fundamentals with integrated coding problems and sample solutions.
---

# Post-course Practice Problems

These practice problems help you review the main topics from the Python Programming Fundamentals course.

Each problem combines multiple skills, such as variables, input and output, operators, conditionals, loops, exceptions, functions, type casting, lists, tuples, sets, and dictionaries.

## Instructions

- Try to solve each problem before reading the sample solution.
- Create one `.py` file for each problem.
- Test your program with different inputs.
- Your solution does not need to match the sample exactly if the output and logic are correct.

## Problem 1: Student Grade Report

Create a program that stores a student's name and three scores.

The program should:

- Ask for the student's name.
- Ask for three scores.
- Convert the scores to numbers.
- Calculate the average score.
- Display the grade:
  - `A` for average `80` or higher
  - `B` for average `70` to `79`
  - `C` for average `60` to `69`
  - `D` for average `50` to `59`
  - `F` for average below `50`
- Handle invalid number input using `try` and `except`.

### Topics Covered

- Input and output
- Variables
- Type casting
- Operators
- Conditionals
- Exceptions

### Sample Solution

```python
try:
    name = input("Student name: ")
    score1 = float(input("Score 1: "))
    score2 = float(input("Score 2: "))
    score3 = float(input("Score 3: "))

    average = (score1 + score2 + score3) / 3

    if average >= 80:
        grade = "A"
    elif average >= 70:
        grade = "B"
    elif average >= 60:
        grade = "C"
    elif average >= 50:
        grade = "D"
    else:
        grade = "F"

    print("Name:", name)
    print("Average:", round(average, 2))
    print("Grade:", grade)
except ValueError:
    print("Please enter valid numbers for scores.")
```

## Problem 2: Shopping Cart Total

Create a program that calculates the total price of items in a shopping cart.

The program should:

- Store item names and prices in a dictionary.
- Ask the user to choose items until they type `done`.
- Store selected items in a list.
- Ignore items that are not in the dictionary.
- Calculate the total price.
- Apply a 10 percent discount if the total is at least `1000`.
- Print the selected items and final total.

### Topics Covered

- Dictionaries
- Lists
- Loops
- Conditionals
- Operators
- String input

### Sample Solution

```python
menu = {
    "pen": 10,
    "notebook": 35,
    "bag": 450,
    "keyboard": 890,
    "mouse": 390
}

cart = []

while True:
    item = input("Enter item name or done: ").lower()

    if item == "done":
        break

    if item in menu:
        cart.append(item)
        print(item, "added.")
    else:
        print("Item not found.")

total = 0

for item in cart:
    total = total + menu[item]

if total >= 1000:
    discount = total * 0.10
else:
    discount = 0

final_total = total - discount

print("Items:", cart)
print("Total:", total)
print("Discount:", discount)
print("Final total:", final_total)
```

## Problem 3: Number Analyzer

Create a program that analyzes a list of numbers.

The program should:

- Ask the user how many numbers they want to enter.
- Use a loop to collect the numbers.
- Store the numbers in a list.
- Display the largest number.
- Display the smallest number.
- Display the sum.
- Display the average.
- Count how many numbers are even and odd.

### Topics Covered

- Input
- Type casting
- Lists
- Loops
- Operators
- Built-in functions
- Conditionals

### Sample Solution

```python
numbers = []

count = int(input("How many numbers? "))

for index in range(count):
    number = int(input("Enter number: "))
    numbers.append(number)

even_count = 0
odd_count = 0

for number in numbers:
    if number % 2 == 0:
        even_count = even_count + 1
    else:
        odd_count = odd_count + 1

average = sum(numbers) / len(numbers)

print("Numbers:", numbers)
print("Largest:", max(numbers))
print("Smallest:", min(numbers))
print("Sum:", sum(numbers))
print("Average:", round(average, 2))
print("Even numbers:", even_count)
print("Odd numbers:", odd_count)
```

## Problem 4: Username Registration Checker

Create a simple username registration program.

The program should:

- Store existing usernames in a set.
- Ask the user to enter a new username.
- Remove extra spaces from the username.
- Convert the username to lowercase.
- Check if the username already exists.
- Check if the username has at least 5 characters.
- Add the username to the set if it is valid.
- Print all registered usernames.

### Topics Covered

- Sets
- Strings
- Input
- Conditionals
- Built-in functions

### Sample Solution

```python
usernames = {"alice", "bob", "minta"}

new_username = input("Enter username: ")
new_username = new_username.strip().lower()

if len(new_username) < 5:
    print("Username must have at least 5 characters.")
elif new_username in usernames:
    print("Username already exists.")
else:
    usernames.add(new_username)
    print("Username registered.")

print("All usernames:", usernames)
```

## Problem 5: Contact Book

Create a contact book program.

The program should:

- Store contacts in a dictionary.
- Each contact should have a name as the key.
- Each value should be another dictionary with `phone` and `email`.
- Let the user add three contacts.
- Let the user search for a contact by name.
- Use `get()` to safely access contact data.

### Topics Covered

- Nested dictionaries
- Loops
- Input and output
- Conditionals
- Dictionary methods

### Sample Solution

```python
contacts = {}

for count in range(3):
    name = input("Name: ")
    phone = input("Phone: ")
    email = input("Email: ")

    contacts[name] = {
        "phone": phone,
        "email": email
    }

search_name = input("Search name: ")
contact = contacts.get(search_name)

if contact is None:
    print("Contact not found.")
else:
    print("Name:", search_name)
    print("Phone:", contact["phone"])
    print("Email:", contact["email"])
```

## Problem 6: Password Strength Checker

Create a password strength checker.

The program should:

- Ask the user to enter a password.
- Check if the password has at least 8 characters.
- Check if it contains at least one number.
- Check if it contains at least one uppercase letter.
- Check if it contains at least one lowercase letter.
- Print `Strong password` if all conditions are true.
- Otherwise, print what is missing.

### Topics Covered

- Strings
- Loops
- Booleans
- Conditionals
- Built-in string methods

### Sample Solution

```python
password = input("Enter password: ")

has_number = False
has_uppercase = False
has_lowercase = False

for character in password:
    if character.isdigit():
        has_number = True
    if character.isupper():
        has_uppercase = True
    if character.islower():
        has_lowercase = True

if len(password) >= 8 and has_number and has_uppercase and has_lowercase:
    print("Strong password")
else:
    print("Weak password")

    if len(password) < 8:
        print("- Use at least 8 characters.")
    if not has_number:
        print("- Add at least one number.")
    if not has_uppercase:
        print("- Add at least one uppercase letter.")
    if not has_lowercase:
        print("- Add at least one lowercase letter.")
```

## Problem 7: Function-based Calculator

Create a calculator using functions.

The program should:

- Create functions for add, subtract, multiply, and divide.
- Ask the user for two numbers.
- Ask the user for an operator.
- Call the correct function.
- Handle division by zero.
- Handle invalid number input.

### Topics Covered

- Functions
- Parameters
- Return values
- Input
- Type casting
- Conditionals
- Exceptions

### Sample Solution

```python
def add(a, b):
    return a + b


def subtract(a, b):
    return a - b


def multiply(a, b):
    return a * b


def divide(a, b):
    if b == 0:
        return None
    return a / b


try:
    number1 = float(input("Number 1: "))
    number2 = float(input("Number 2: "))
    operator = input("Operator (+, -, *, /): ")

    if operator == "+":
        result = add(number1, number2)
    elif operator == "-":
        result = subtract(number1, number2)
    elif operator == "*":
        result = multiply(number1, number2)
    elif operator == "/":
        result = divide(number1, number2)
    else:
        result = "Invalid operator"

    if result is None:
        print("Cannot divide by zero.")
    else:
        print("Result:", result)
except ValueError:
    print("Please enter valid numbers.")
```

## Problem 8: Student Score Manager

Create a program that stores and manages student scores.

The program should:

- Store students in a dictionary.
- Each student's value should be a list of scores.
- Create a function to calculate an average score.
- Print each student's name and average.
- Print the student with the highest average.

### Topics Covered

- Dictionaries
- Lists
- Functions
- Loops
- Built-in functions
- Variables

### Sample Solution

```python
def calculate_average(scores):
    return sum(scores) / len(scores)


students = {
    "Alice": [80, 90, 85],
    "Bob": [70, 75, 80],
    "Mina": [95, 90, 100]
}

highest_name = ""
highest_average = 0

for name, scores in students.items():
    average = calculate_average(scores)
    print(name, "average:", round(average, 2))

    if average > highest_average:
        highest_average = average
        highest_name = name

print("Highest average:", highest_name, round(highest_average, 2))
```

## Problem 9: Unique Word Counter

Create a program that counts unique words in a sentence.

The program should:

- Ask the user to enter a sentence.
- Convert the sentence to lowercase.
- Split the sentence into words.
- Store unique words in a set.
- Store word counts in a dictionary.
- Print the number of unique words.
- Print each word and how many times it appears.

### Topics Covered

- Strings
- Lists
- Sets
- Dictionaries
- Loops
- Built-in functions

### Sample Solution

```python
sentence = input("Enter a sentence: ").lower()
words = sentence.split()

unique_words = set(words)
word_counts = {}

for word in words:
    if word in word_counts:
        word_counts[word] = word_counts[word] + 1
    else:
        word_counts[word] = 1

print("Unique word count:", len(unique_words))

for word, count in word_counts.items():
    print(word, ":", count)
```

## Problem 10: Mini Library System

Create a mini library system.

The program should:

- Store books in a list of dictionaries.
- Each book should have `title`, `author`, and `is_borrowed`.
- Create a function to show all available books.
- Create a function to borrow a book by title.
- Use a loop to let the user choose actions:
  - `show`
  - `borrow`
  - `exit`
- Show a message if the book does not exist or is already borrowed.

### Topics Covered

- Lists
- Dictionaries
- Functions
- Loops
- Conditionals
- Booleans
- String input

### Sample Solution

```python
books = [
    {"title": "Python Basics", "author": "A. Smith", "is_borrowed": False},
    {"title": "Learn Coding", "author": "B. Jones", "is_borrowed": False},
    {"title": "Data 101", "author": "C. Lee", "is_borrowed": True}
]


def show_available_books():
    print("Available books:")

    for book in books:
        if not book["is_borrowed"]:
            print("-", book["title"], "by", book["author"])


def borrow_book(title):
    for book in books:
        if book["title"].lower() == title.lower():
            if book["is_borrowed"]:
                print("This book is already borrowed.")
            else:
                book["is_borrowed"] = True
                print("You borrowed:", book["title"])
            return

    print("Book not found.")


while True:
    action = input("Choose action (show, borrow, exit): ").lower()

    if action == "show":
        show_available_books()
    elif action == "borrow":
        title = input("Book title: ")
        borrow_book(title)
    elif action == "exit":
        print("Goodbye.")
        break
    else:
        print("Invalid action.")
```

## Review Checklist

After completing these problems, you should be able to:

- Read user input and convert data types.
- Use conditionals to make decisions.
- Use loops to repeat tasks.
- Handle basic input errors.
- Write reusable functions.
- Work with lists, tuples, sets, and dictionaries.
- Combine multiple Python fundamentals in one program.
