/** @format */

const content = [
  {
    title: "introduction to javascript",
    tags: "<b>JavaScript</b> is a lightweight, <b>cross-platform</b>, single-threaded, and <b>interpreted compiled programming language</b>.",
    description: `<p><b>JavaScript</b> is a lightweight, cross-platform, single-threaded, and <b>interpreted compiled programming language</b>. It is also known as the scripting language for webpages. It is well-known for the development of web pages, and many non-browser environments also use it.</p>
      <p>JavaScript is a weakly typed language (dynamically typed). JavaScript can be used for Client-side developments as well as Server-side developments. JavaScript is both an imperative and declarative type of language. JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements.</p>
      `,
    content: [
      {
        subTitle: "js versions",
        subDescription:
          "JavaScript was invented by Brendan Eich, and in 1997 it became an ECMA standard. ECMAScript is the official language name. ECMAScript versions include <b>ES1</b>, <b>ES2</b>, <b>ES3</b>, <b>ES5</b>, and <b>ES6</b>.",
        snippet: ``,
      },
      {
        subTitle: "internaljs",
        subDescription:
          "We can add JavaScript directly to our HTML file by writing the code inside the script tag. The script tag can either be placed inside the <head> or the <body> tag according to the requirement.",
        snippet: `
    <script>
      //Javascript code
    </script>`,
      },
      {
        subTitle: "externaljs",
        subDescription:
          "we can wrtie javascript code in another files having an extension.js and then link this file inside the head tag of the HTML filein which we want to add this code. .",
        snippet: `
    <script type="application/javascript" src="path/to/script.js">
      //Javascript code
    </script>`,
      },
    ],
  },

  {
    title: "variable",
    tags: "A variable is a container for a value . <b>var</b> , <b>let</b> and <b>const</b>.",
    description: `Most of the time, a JavaScript application needs to work with information. To store and represent this information in the JavaScript codebase, we use variables.`,
    content: [
      {
        subTitle: "variable declarations",
        subDescription:
          "To use variables in JavaScript, we first need to create it i.e. declare a variable. To declare variables, we use one of the var, let, or const keywords.",
        snippet: `
        var a = 32; // Used before ES6.
        let name = "james";
        const PI = 3.14; // Cannot be changed -> Immutable.
        `,
      },
      {
        subTitle: "variable naming",
        subDescription:
          "A variable name should accurately identify your variable. When you create good variable names, your JavaScript code becomes easier to understand and easier to work with.",
        snippet: `
    const KEY = "UTF_8"; // Constant should be named uppercase.
    let firstName = "james"; // always use camelCase to name your variables.
     `,
      },
    ],
  },
  {
    title: "hoisting",
    tags: "JavaScript moves declaration of function ,variables and classes to top of their scope.",
    description: `JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, or classes to the top of their scope, prior to execution of the code.`,
    content: [
      // {
      //   subTitle: "",
      //   subDescription: "",
      //   snippet: ``,
      // },
    ],
  },
  {
    title: "scope",
    tags: "Scope refers to the visibility of a variable or how it can be used after it is declared.",
    description: `<p>In JavaScript, scope refers to the visibility of a variable or how it can be used after it is declared. The scope of a variable depends on the keyword that was used to declare it.</p><p>The three types of Scope are Global Scope, Function Scope, and Block Scope. Before ES6 (2015), JavaScript had only Global Scope and Function Scope with the var keyword. ES6 introduced let and const which allow Block Scope in JavaScript.</p>`,
    content: [
      {
        subTitle: "global scope",
        subDescription:
          "Variables declared outside any function or curly braces ’{}’ have Global Scope, and can be accessed from anywhere within the same Javascript code. var, let and const all provide this Scope.",
        snippet: `
      var name ="james"; // Global scope.

      function greet(){
        console.log(name); // Global Scope accessd here.
      }
      console.log(name);
      greet() ;
     `,
      },
      {
        subTitle: "function scope",
        subDescription:
          "Variables declared within a function can only be used within that same function. Outside that function, they are undefined. var, let and const all provide this Scope.",
        snippet: `
      function greet(){
        // The variables declared with var , let ,
        // PI can be accessed only inside the function.
        //They cann't be accessed outside the function.
        var model = 2017;
        let name = "maruti";
        const PI = 3.14;
      }
 `,
      },
      {
        subTitle: "block scope",
        subDescription:
          "A block is any part of JavaScript code bounded by ’{}‘. Variables declared within a block can not be accessed outside that block. This Scope is only provided by the let and const keywords. If you declare a variable within a block using the var keyword, it will NOT have Block Scope.",
        snippet: `
        {
          let x = 2;
          var name = "james" ;
        }

       console.log(x); //X cannot be used here.not defined error.
       // variable declared with var doesn't have block scope.
       console.log(name); // Output :  james
     `,
      },
    ],
  },
  {
    title: "data types",
    tags: "Data type refers to the type of data that a JavaScript variable can hold.(<b>String</b> ,<b>Number</b> , <b>Bigint</b> ,<b>Boolean</b> , <b>null</b> ,<b>undefined</b> ,<b>Symbol</b>,<b>typeOf</b>)",
    description: `In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are 7 primitive data types:`,
    content: [
      {
        subTitle: "example",
        subDescription: "",
        snippet: `

        let name = "James"; // String
        let age = 32; // Number
        let bigInt =  BigInt(324); //BigInt
        let status = true; // Boolean
        let response =false; // Boolean
        let ssn = undefined; // Undefined
        let x = null; // object
        let symbol = Symbol(); // Symbol
       `,
      },
      {
        subTitle: "string",
        subDescription: `A string is a sequence of characters, such as "hello world". Strings can be single-quoted, double-quoted, or back-tick quoted. Strings can be <b>concatenated, or combined, with the + operator</b>.`,
        snippet: `
      // Concatenating strings
      let str1 = 'Hello';
      let str2 = 'World';
      let str3 = str1 + ' ' + str2;

      console.log(str3); // 'Hello World'
      console.log(str1.length); // length : 5
      console.log(str1[1]); // e
      console.log(str1.toUpperCase()); // HELLO
      console.log(str1.toLowerCase()); //hello
      `,
      },
      {
        subTitle: "symbol",
        subDescription:
          "JavaScript Symbols are a new type of primitive data type introduced in the ES6 version of the language. They are used to represent unique values that can be used as identifiers or <b> keys in objects</b>. They are also used to create private properties and methods in classes.",
        snippet: `

      let symbol = Symbol();
      let obj = {
        [symbol]: "James",
      };

      console.log(obj); //{Symbol(): 'James'}
      console.log(obj[symbol]); //James

      let const_1 = Symbol("foo");
      let const_2 = Symbol("foo");
      console.log(const_1 === const_2); // false
       `,
      },
      {
        subTitle: "typeOf",
        subDescription:
          "The typeof operator returns a string indicating the type of the operand's value.",
        snippet: `

        console.log(typeof 42);
        // Expected output: "number"

        console.log(typeof 'blubber');
        // Expected output: "string"

        console.log(typeof true);
        // Expected output: "boolean"

        console.log(typeof undeclaredVariable);
        // Expected output: "undefined"
       `,
      },
    ],
  },
  {
    title: "objects",
    tags: "JavaScript object is a data structure that allows us to have key-value pairs.",
    description: `<p>JavaScript object is a data structure that allows us to have key-value pairs; so we can have distinct keys and each key is mapped to a value that can be of any JavaScript data type. Comparing it to a real-world object, a pen is an object with several properties such as color, design, the material it is made of, etc. In the same way, JavaScript objects can have properties that define their characteristics.</p><p>Built-in objects, or “global objects”, are those built into the language specification itself. There are numerous built-in objects with the JavaScript language, all of which are accessible at the global scope. Some examples are: <b>Number</b>, <b>Math</b>, <b>Date</b>, <b>String</b> ... etc</p>`,
    content: [
      {
        subTitle: "creating objects using object literal syntax",
        subDescription: "",
        snippet: `

      //Person Object
      let person = {
        firstName: "james",
        lastname: "Cameron",
        age: 55,
      };

      //accessing object value with square brackets.
      console.log(person["age"]); //Output : 55
      //accessing object value with "." operator.
      console.log(person.firstName); // Output : james
       `,
      },
      {
        subTitle: "creating objects using the `new` keyword",
        subDescription: "using object constructor to create an object.",
        snippet: `

      let car = new Object();
      car.name = "maruti";
      car.color = "gray";

      console.log(car); //{name: 'maruti', color: 'gray'}
       `,
      },
      {
        subTitle: "using Object.create() to create new objects",
        subDescription: "",
        snippet: `

     const orgObject = { company: 'ABC Corp' };
     const employee = Object.create(orgObject, { name: { value: 'EmployeeOne' } });

     console.log(employee); // { company: "ABC Corp" }
     console.log(employee.name); // "EmployeeOne"

     `,
      },
    ],
  },
  {
    title: "type casting",
    tags: "The transfer of data from one data type to another",
    description: `<p>JavaScript object is a data structure that allows us to have key-value pairs; so we can have distinct keys and each key is mapped to a value that can be of any JavaScript data type. Comparing it to a real-world object, a pen is an object with several properties such as color, design, the material it is made of, etc. In the same way, JavaScript objects can have properties that define their characteristics.</p><p>Built-in objects, or “global objects”, are those built into the language specification itself. There are numerous built-in objects with the JavaScript language, all of which are accessible at the global scope. Some examples are: <b>Number</b>, <b>Math</b>, <b>Date</b>, <b>String</b> ... etc</p>`,
    content: [
      {
        subTitle: "explicit type conversions",
        subDescription: `In explicit conversion to convert one type of value into another type. explicit type conversion is done by programmers using JavaScript functions. The JavaScript programmer can explicitly convert the data type. we can see the function using an explicit type conversion using <b>Number()</b>, <b>Boolean()</b> ,<b>ParseInt()</b> ,<b>ParseFloat()</b> ,<b>String()</b>,<b>toString()</b>.`,
        snippet: `

      let value = "30";
      let newValue = "";
      let stringValue = "hello";
      console.log(typeof value); // String
      console.log(typeof Number(value)); // Number
      console.log(typeof Boolean(value), Boolean(value)); // Boolean true
      console.log(typeof Boolean(newValue), Boolean(newValue)); // Boolean false
      console.log(typeof Number(stringValue), Number(stringValue)); // Number NaN
 `,
      },
      {
        subTitle: "implicit type conversions",
        subDescription:
          "Converting one type of data value to another type is called typecasting. If required JavaScript engine automatically converts one type of value into another type. It will try to convert it to the right type.",
        snippet: `

      let sum = 4 + 4.5; //8.5
      console.log(typeof sum); // number

      let result = 4 + "5"; //45
      console.log(typeof result); //string 45

      let multiply = "4" * "5"; //20
      console.log(typeof multiply); //number
       `,
      },
      {
        subTitle: "type conversion vs coercion",
        subDescription:
          "Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they convert values from one data type to another with one key difference — type coercion is implicit. In contrast, type conversion can be either implicit or explicit.",
        snippet: ``,
      },
    ],
  },
  {
    title: "data structures",
    tags: `A Data structure is a format to organize, manage and store data in a way that allows efficient access and modification.`,
    description: `<p>A Data structure is a format to organize, manage and store data in a way that allows efficient access and modification. JavaScript has primitive (built-in) and non-primitive (not built-in) data structures. Primitive data structures come by default with the programming language and you can implement them out of the box (like arrays and objects). Non-primitive data structures don’t come by default and you have to code them up if you want to use them.</p>`,
    content: [
      {
        subTitle: "arrays",
        subDescription: `Arrays are objects that store a collection of items and can be assigned to a variable. They have their methods that can perform operations on the array.`,
        snippet: `
      //Syntax - 1 to create array.
      let arr = new Array();
      //Syntax - 2 to create array.
      let arr2 = [];

      let array = [1, 2, 3, 4, 5];
      console.log("length", array.length); // length 5
      console.log("Element at pos2", array[1]); //Element at pos2 2

      //Looping through array.
      array.map((item, index) => {
        /**
         * 1
         * 2
         * 3
         * 4
         * 5
         */
        console.log(item);
       });

      array.push(22); // adds element
      console.log(array); //[1, 2, 3, 4, 5, 22]
      array.pop(); // removes element from last
      console.log(array); // [1, 2, 3, 4, 5]
 `,
      },
      {
        subTitle: "set",
        subDescription: `The Set object lets you store unique values of any type, whether primitive values or object references. A value in the Set may only occur once; it is unique in the Set’s collection.`,
        snippet: `

      let numArray = [1, 3, 3, 4, 5];
      const set = new Set(numArray);
      console.log(set); //Set(4) {1, 3, 4, 5}

      //Looping through set
      set.forEach((element, index) => {
        console.log(index, element);
      });

      set.add(54); //adds item.
      console.log(set); // Set(5) {1, 3, 4, 5, 54}

      console.log(set.has(23)); // checks item exits.

      set.delete(3); // deletes item.
      console.log(set);// Set(4) {1, 4, 5, 54}

       `,
      },
      {
        subTitle: "JSON",
        subDescription:
          "JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).You can include the same basic data types inside JSON as you can in a standard JavaScript object — strings, numbers, arrays, booleans, and other object literals. This allows you to construct a data hierarchy.",
        snippet: `
        {
          "squadName": "Super hero squad",
          "homeTown": "Metro City",
          "formed": 2016,
          "secretBase": "Super tower",
          "active": true,
          "members": [
            {
              "name": "Molecule Man",
              "age": 29,
              "secretIdentity": "Dan Jukes",
              "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
            },
            {
              "name": "Madame Uppercut",
              "age": 39,
              "secretIdentity": "Jane Wilson",
              "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
              ]
            },
            {
              "name": "Eternal Flame",
              "age": 1000000,
              "secretIdentity": "Unknown",
              "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
              ]
            }
          ]
        }
`,
      },
    ],
  },
  {
    title: "equality comparisons",
    tags: `<b>==</b> , <b>===</b> ,<b>Object.is</b>`,
    description: `<p>Comparison operators are used in logical statements to determine equality or difference between variables or values. Comparison operators can be used in conditional statements to compare values and take action depending on the result.</p>`,
    content: [
      {
        subTitle: "== (isLooselyEqual)",
        subDescription: `In javascript, the == operator does the type conversion of the operands before comparison.The == operator applies various coercions to both sides (if they are not the same type) before testing for equality (resulting in such behavior as "" == false being true).`,
        snippet: `
      let value1 = 2;
      let value2 = "2";

      console.log(value1 == value2) // true
 `,
      },
      {
        subTitle: "=== (isStrictlyEqual)",
        subDescription: `In javascript, the === operator compares the values and the data types of the operands`,
        snippet: `

      let value1 = 2;
      let value2 = "2";

      console.log(value1 === value2) // false

       `,
      },
      {
        subTitle: "object.is()",
        subDescription:
          "The Object.is() static method determines whether two values are the same value.",
        snippet: `
      // Case 1: Evaluation result is the same as using ===
      Object.is(25, 25); // true
      Object.is("foo", "foo"); // true
      Object.is("foo", "bar"); // false
      Object.is(null, null); // true
      Object.is(undefined, undefined); // true
      Object.is(window, window); // true
      Object.is([], []); // false
      const foo = { a: 1 };
      const bar = { a: 1 };
      const sameFoo = foo;
      Object.is(foo, foo); // true
      Object.is(foo, bar); // false
      Object.is(foo, sameFoo); // true

      // Case 2: Signed zero
      Object.is(0, -0); // false
      Object.is(+0, -0); // false
      Object.is(-0, -0); // true

      // Case 3: NaN
      Object.is(NaN, 0 / 0); // true
      Object.is(NaN, Number.NaN); // true
`,
      },
    ],
  },
  {
    title: "loops and iterations",
    tags: `Loops offer a quick and easy way to do something repeatedly.`,
    description: `<p>we have different kinds of loop in javascript</p>`,
    content: [
      {
        subTitle: "for loop",
        subDescription: `In javascript, the == operator does the type conversion of the operands before comparison.The == operator applies various coercions to both sides (if they are not the same type) before testing for equality (resulting in such behavior as "" == false being true).`,
        snippet: `
        //Syntax
       for(initialization; condition; afterthought){
        statement;
       }



 `,
      },
      {
        subTitle: "=== (isStrictlyEqual)",
        subDescription: `In javascript, the === operator compares the values and the data types of the operands`,
        snippet: `

      let value1 = 2;
      let value2 = "2";

      console.log(value1 === value2) // false

       `,
      },
      {
        subTitle: "object.is()",
        subDescription:
          "The Object.is() static method determines whether two values are the same value.",
        snippet: `
      // Case 1: Evaluation result is the same as using ===
      Object.is(25, 25); // true
      Object.is("foo", "foo"); // true
      Object.is("foo", "bar"); // false
      Object.is(null, null); // true
      Object.is(undefined, undefined); // true
      Object.is(window, window); // true
      Object.is([], []); // false
      const foo = { a: 1 };
      const bar = { a: 1 };
      const sameFoo = foo;
      Object.is(foo, foo); // true
      Object.is(foo, bar); // false
      Object.is(foo, sameFoo); // true

      // Case 2: Signed zero
      Object.is(0, -0); // false
      Object.is(+0, -0); // false
      Object.is(-0, -0); // true

      // Case 3: NaN
      Object.is(NaN, 0 / 0); // true
      Object.is(NaN, Number.NaN); // true
`,
      },
    ],
  },
];

export default content;
