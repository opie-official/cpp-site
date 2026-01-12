# C++ Lesson: Built-in Data Types and Common Standard Types

# 1. Introduction

In this lesson, we will explore **data types in C++**.  
Data types define **what kind of data** a variable can store and **how much memory** it occupies.

We will focus on:
- Built-in (primitive) data types
- Common standard library types such as `std::size_t` and `std::string`

---

# 2. Why Data Types Matter

Data types are important because they:
- Control memory usage
- Affect performance
- Define valid operations on data
- Help the compiler detect errors

Example:
```cpp
int age = 20;
double price = 19.99;
```
# 3. Integer Types

> Integer types store whole numbers.

## 3.1 int

The most commonly used integer type.
```
int x = 10;
```

Typically 4 bytes

```cpp
int a = 0;
cout<< sizeof(a) // 4 bytes
```

Can store negative and positive numbers

## 3.2 short, long, long long

These types differ in size and range.
```cpp
short s = 100;
long l = 1000000;
long long ll = 10000000000;
```

Typical sizes (may vary by system):

| Type	| Size         |
|---|:-------------|
|short	| 2 bytes      |
|int	| 4 bytes      |     
|long	| 4 or 8 bytes |
|long long | 	8 bytes     |    

## 3.3 Signed and Unsigned Integers

By default, integers are signed (can be negative).
```cpp
unsigned int count = 42;
```

Unsigned types store only non-negative values, and they have a larger positive range.

# 4. Floating-Point Types

> Floating-point types store real numbers (numbers with decimals).

## 4.1 float
```cpp
float pi = 3.14f;
```
size - 4 bytes

Lower precision

## 4.2 double
```cpp
double price = 19.99;
```

size - 8 bytes

Higher precision (recommended by default)

## 4.3 long double

```cpp
long double value = 3.141592653589793L;
```

Even higher precision (size depends on system)

# 5. Character Type
## 5.1 char

> Stores a single character.
```cpp
char letter = 'A';
```

size - 1 byte

Actually stores a numeric ASCII value

## 5.2 wchar_t, char16_t, char32_t

> Used for wide and Unicode characters.
```cpp
wchar_t w = L'A';
```

# 6. Boolean Type
## 6.1 bool

> Stores logical values.
```cpp
bool isReady = true;
```

Possible values:
- true
- false

# 7. The void Type

void means no type.

Commonly used:

- As a function return type  
- For generic pointers  

```cpp
void doSomething() {
    // no return value
}
```
# 8. std::size_t

> std::size_t is an unsigned integer type used for sizes and indexes.
```cpp
#include <cstddef>

std::size_t length = 10;
```

Important facts:

- Guaranteed to be able to store the size of any object in memory  
- Commonly used with containers and arrays  
- Returned by sizeof  

Example:
```cpp
int arr[10];
std::size_t size = sizeof(arr) / sizeof(arr[0]);
```
# 9. std::string

> std::string represents a dynamic string of characters.
```cpp
#include <string>

std::string name = "Alice";
```

Advantages over char[]:

- Automatically manages memory  
- Supports many useful operations  
- Safe and easy to use  

Example operations:
```cpp
std::string text = "Hello";
text += " World";
std::size_t len = text.length();
```
# 10. Summary Table
| Category                                  | 	Type Examples                  |
|-------------------------------------------|---------------------------------|
| Integers                                  | 	int, short, long, unsigned int |
| Floating-point	| float, double, long double      |
 | Character	| char, wchar_t                   |
 | Boolean	| bool                            |
 | Size type| 	std::size_t                    |
 | Strings	| std::string                     |
# 11. Conclusion

> In this lesson, you learned:

- The main built-in data types in C++  
- How integer and floating-point types differ  
- What std::size_t is used for  
- Why std::string is preferred over raw character arrays  
