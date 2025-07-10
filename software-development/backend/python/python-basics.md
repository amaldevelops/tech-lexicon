# Python Basics

# Python

## What is Python?

Python is a high-level, general-purpose programming language known for its clear, readable syntax and versatility. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python is widely used for web development, automation, data analysis, artificial intelligence, scientific computing, scripting, and more.

## Key Features

- **Easy to Learn and Use:** Python’s syntax is simple and intuitive, making it accessible for beginners and efficient for experienced developers.
- **Readable Syntax:** Code readability is a core philosophy, enforced by significant indentation instead of braces or semicolons.
- **Dynamically Typed:** Variable types are determined at runtime, allowing for flexible and concise code.
- **Interpreted Language:** Python code is executed line by line, which simplifies debugging and accelerates development.
- **Object-Oriented:** Supports classes, inheritance, encapsulation, and polymorphism, promoting modular and reusable code.
- **Multi-Paradigm:** Allows procedural, object-oriented, and functional programming styles.
- **Extensive Standard Library:** Includes modules for file I/O, math, networking, web services, and more, reducing the need for external dependencies.
- **Cross-Platform:** Python code runs on Windows, macOS, Linux, and more without modification.
- **Free and Open Source:** Available for anyone to use, modify, and distribute, with a large, active community.
- **GUI Programming Support:** Libraries like Tkinter, PyQt, and Kivy enable building desktop applications with graphical interfaces.
- **Automatic Memory Management:** Handles memory allocation and garbage collection automatically.
- **Strong and Dynamic Typing:** Enforces type safety while allowing type flexibility at runtime.

## Example: Basic Python Code

- Python Indentation: Indentation refers to the spaces at the beginning of a code line. Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important. Python uses indentation to indicate a block of code.
- `#`: Add in front of the code for commenting out single line of code
  `"""` : Use triple quotes for multiline comments
- `print("Hello World")`: Print a message onto the screen
- Variable: Variables store data types into the memory of your computer, Variable names are case-sensitive. allowing Python to automatically populate them into your code when you reference them later. "Name=Value" On the left side of the variable we give name for the variable = On the right side we assign a value A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume).
  - Rules for Python variables:
  - A variable name must start with a letter or the underscore character
  - A variable name cannot start with a number
  - A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and \_ )
  - Variable names are case-sensitive (age, Age and AGE are three different variables)
  - Pascal Case: Each word starts with a capital letter: MyVariableName = "John"
  - Snake Case: Each word is separated by an underscore character: my_variable_name = "John"
- Primitive Data Types: Data types that are single objects and are immutable (cannot be changed without being redefined). These are:
  - Numbers: Numbers (with an optional + or - prefix).
  - Integers: are whole numbers with an optional positive + or negative - prefix. For example, 3, 82, 38218, +3, -71 are all integers.
  - Floats: Any number containing a decimal point is interpreted as a float (e.g., 0.32, .32, 83.7823, 1.00).
  - Strings: Sequences of characters, always enclosed in quotation marks.
  - Booleans: Also called flags; these can only be True or False.
  - None: Represents a null value, or the absence of data.
  - Numerical Operators: programmers perform equations with data by using numerical operators, which include +, -, \*, /, //, and %.
- Converting Data Types: we use built-in functions like float(), int(), str() to convert a data type. For instance, say our data set stores the number “1” as a string. To convert it to an integer, we would write int('1')
  Casting : If you want to specify the data type of a variable, this can be done with casting.
  - x = str(3) # x will be '3'
  - y = int(3) # y will be 3
  - z = float(3) # z will be 3.0
  - Get the Type : You can get the data type of a variable with the type() function i.e.
  - x = 5
  - y = "John"
  - print(type(x))
  - print(type(y)
- Complex Data Types: A data type that can hold more than one object as Lists, Tuples, Set and Dictionaries
  Lists: Enclosed by square brackets ([]). Mutable (changeable) collections of objects with specific orders. The objects in a list can be any combination of data types and do not have to be unique (elements can be repeated).
  - len() - tells us thg length of our list.
  - append() - adds an item to the end of a list.
  - pop() - removes an element from a list.
  - index() - asks python to return the value in a given position. Indexing in Python starts from 0 not 1.
  - Tuples: Enclosed by parentheses (()). Immutable versions of lists. Unlike lists, their elements cannot be removed, added to, or changed.
  - Set: Enclosed by curly braces ({}). A collection of unordered, unique elements.
  - Dictionaries: Also enclosed by curly braces, but elements are pairs joined by a colon ({:}). These are sets of key-value pairs. Every element has a key (of any immutable data type), which must be unique, and a value (which can be of any data type and does not need to be unique — multiple keys can have the same value). Dictionaries, like sets, are unordered — their index is the keys, not a list of numbers.
- For help type ‘help’ i.e. for definition of ‘print’ function type: help(print) ?print
  - Getting help from Jupyter and Python to remember what stuff does: shift+tab in the brackets of a function or argument will bring up the docstring, or short instructions on how to use it
  - help(function_or_method) will print out the same docstring
  - dir(variable) will remind you what methods are available (for a variable, depending on its type or data structure)
  - tab whilst typing will try to autocomplete things
  - command+click or alt+click will enable multi-line editing - which is so amazingly cool and a must have feature for a text editor once you know it exists.
- %pip install : Install Python modules
  i.e %pip install geocode
- import: For importing external python modules
  i.e: import csv

## Control Flow

- Comparison Operators has the ability to compare values and return a boolean result of "True" or "False"
- `>` : Greater than
- `>=` : Greater than or equal to
- `<` : Less than
- `<=` : Less than or equal to
- `==` : Equality
- `!=` : Inequality
- Logic operators allows to combine multiple operators together. For complex conditionals you can put several conditions in parentheses to evaluate as single expression.
  and : Evaluates to True if all combined values are True
  or : Evaluates to True if any of the combined values are True
  not : Reverses the boolean result of whatever follows it

- Functions : A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. A function can return data as a result. Python Functions.
- Classes/Objects : Python is an object oriented programming language. Almost everything in Python is an object, with its properties and methods. A Class is like an object constructor, or a "blueprint" for creating objects. Python classes Create a Class To create a class, use the keyword class: Example Create a class named MyClass, with a property named x:
  class MyClass:
  x = 5

## Collections (Arrays)

- There are four collection data types in the Python programming language: List is a collection which is ordered and changeable. Allows duplicate members. Lists are used to store multiple items in a single variable. Create a List: thislist = ["apple", "banana", "cherry"] print(thislist)
  - List items are ordered, changeable, and allow duplicate values.
  - List items are indexed, the first item has index [0], the second item has index [1] etc.
  - Ordered: When we say that lists are ordered, it means that the items have a defined order, and that order will not change.
  - If you add new items to a list, the new items will be placed at the end of the list.
  - Note: There are some list methods that will change the order, but in general: the order of the items will not change.
  - Changeable: The list is changeable, meaning that we can change, add, and remove items in a list after it has been created.
  - Allow Duplicates: Since lists are indexed, lists can have items with the same values

## Tuples

- Tuple is a collection which is ordered and unchangeable. Allows duplicate members. Tuples are used to store multiple items in a single variable. A tuple is a collection which is ordered and unchangeable. Tuples are written with round brackets. Create a Tuple: thistuple = ("apple", "banana", "cherry") print(thistuple) tuple Items

  - Tuple items are ordered, unchangeable, and allow duplicate values.
  - Tuple items are indexed, the first item has index [0], the second item has index [1] etc.
  - Ordered: When we say that tuples are ordered, it means that the items have a defined order, and that order will not change.
  - Unchangeable: Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.
  - Allow Duplicates: Since tuples are indexed, they can have items with the same value.

## Set

- Set is a collection which is unordered, unchangeable*, and unindexed. No duplicate members. Sets are used to store multiple items in a single variable. A set is a collection which is unordered, unchangeable*, and unindexed. \* Note: Set items are unchangeable, but you can remove items and add new items. Sets are written with curly brackets. Example Create a Set: thisset = {"apple", "banana", "cherry"} print(thisset)
- Set Items: Set items are unordered, unchangeable, and do not allow duplicate values.
- Unordered: Unordered means that the items in a set do not have a defined order.
- Set items can appear in a different order every time you use them, and cannot be referred to by index or key.
- Unchangeable: Set items are unchangeable, meaning that we cannot change the items after the set has been created.
- Once a set is created, you cannot change its items, but you can remove items and add new items.
- Duplicates Not Allowed: Sets cannot have two items with the same value. No duplicate members.

## Dictionary

- Dictionary is a collection which is ordered\*_ and changeable. Dictionaries are used to store data values in key:value pairs. A dictionary is a collection which is ordered_, changeable and do not allow duplicates. Dictionaries are written with curly brackets, and have keys and values: Example Create and print a dictionary: thisdict = { "brand": "Ford", "model": "Mustang", "year": 1964 } print(thisdict)
- Dictionary Items: Dictionary items are ordered, changeable, and does not allow duplicates. Dictionary items are presented in key:value pairs, and can be referred to by using the key name. v
- Ordered or Unordered? :As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered. When we say that dictionaries are ordered, it means that the items have a defined order, and that order will not change. Unordered means that the items does not have a defined order, you cannot refer to an item by using an index.
- Changeable: Dictionaries are changeable, meaning that we can change, add or remove items after the dictionary has been created.
- Duplicates Not Allowed: Dictionaries cannot have two items with the same key:

## Jupyter Notebook

1. Start Jupyter Notebook in any folder, jupyter notebook --notebook-dir=”LOCATION of the folder to start Jupyter Notebook i.e. D:/Documents”
2. Jupyter Notebook and JupyterLab 3.0 For old Jupyter Notebook interface installed with notebook package and run as jupyter notebook (see the next section for the identical interface installed with nbclassic and run with jupyter nbclassic, and for JupyterLab):
3. Open cmd (or Anaconda Prompt) and run jupyter notebook --generate-config.
   This writes a file to C:\Users\username\.jupyter\jupyter_notebook_config.py. C:\Users\[Windows user directory]\.jupyter
4. Browse to the file location and open it in an Editor
5. Search for the following line in the file: #c.NotebookApp.notebook_dir = ''
6. Replace by c.NotebookApp.notebook_dir = '/the/path/to/home/folder/' Make sure you use forward slashes in your path and use /home/user/ instead of ~/ for your home directory, backslashes could be used if placed in double quotes even if folder name contains spaces as such : "D:\yourUserName\Any Folder\More Folders\"
7. Remove the # at the beginning of the line to allow the line to execute JupyterLab >= 3, Jupyter Notebook Classic, and RetroLab For recent nbclassic and JupyterLab >= 3 use c.ServerApp.root_dir instead of c.NotebookApp.notebook_dir (and jupyter server --generate-config instead of jupyter notebook --generate-config).
