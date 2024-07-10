# Data Types

***[08/07/2024] - bpastega***

In JavaScript, every value is either an **object** or a **primitive value**. 

Object:

```let me = { name = 'Jonas'};``` 

Primitive:

```let firstName = 'Jonas'```

```let age = 30;```

<h2>The 7 Primitive Data Types</h2>
  <dl> <!---(https://www.markdownguide.org/extended-syntax/#definition-lists) -->
    <dt>Number</dt>
    <dd>In JavaScript, Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754). In other programming languages different numeric types exist; for example, Integers, Floats, Doubles, or Bignums. https://developer.mozilla.org/en-US/docs/Glossary/Number</dd>
    <dt>String</dt>
    <dd>Sequence of characters.</dd>
    <dt>Boolean</dt>
    <dd>Logical type that can only be true or false.</dd>
    <dt>Undefined</dt>
    <dd>Value taken by a variable that has yet to be defined.</dd>
    <dt>Null</dt>
    <dd>Empty value.</dd>
    <dt>Symbol(ES2015)</dt>
    <dd>Value that is unique and cannot be changed.</dd>
    <dt>Bigint(ES2020)</dt>
    <dd>Larger integers than the Number type can hold.</dd>
  </dl>

---

JavaScript has **dynamic typing**, where it automatically determines the datatype of a value when it's stored within a variable. In JS, the value has a type and NOT the variable. Variables simply store values that have types. 
Therefore, we can successfully store a new value with a different data type of the one previously stored in a single variable without any problems.

Commenting a snippet of code is very useful when we want to ommit certain parts of an operation without deleting it. 
To comment a single line in JS, we can use  ```//``` or  ```CTRL+/```

To create a multi line comment, we can use ```/**/```

It is very important to consider that JavaScript is executed from top to bottom, therefore the declaration of a variable needs to precede the usage of it within an operation, for example. 

typeof operator
```console.log(y)```

When we use the typeof operator and execute the following ```console.log(typeof null)``` it will return the type as an object. This is an error, and should be considered when building JavaScript programs
