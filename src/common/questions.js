const questions = [
  {
    text: "What's the output?",
    codeText: `function sayHi() {
      console.log(name);
      console.log(age);
      var name = "Lydia";
      let age = 21;
    }
    
    sayHi();`,
    options: [
      {
        text: `Lydia and undefined`,
        id: "1",
      },
      {
        text: `Lydia and ReferenceError`,
        id: "2",
      },
      {
        text: `ReferenceError and 21`,
        id: "3",
      },
      {
        text: `undefined and ReferenceError`,
        id: "4",
      },
    ],
    answer: "4",
    answerDescription: `Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.\n
          \nVariables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.`,
  },
  {
    text: "What's the output?",
    codeText: `for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
    }
    
    for (let i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
    }`,
    options: [
      {
        text: `0 1 2 and 0 1 2`,
        id: "1",
      },
      {
        text: `0 1 2 and 3 3 3`,
        id: "2",
      },
      {
        text: `3 3 3 and 0 1 2`,
        id: "3",
      },
    ],
    answer: "3",
    answerDescription: `Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.\n
          \nIn the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.`,
  },
  {
    text: "What's the output?",
    codeText: `const shape = {
      radius: 10,
      diameter() {
        return this.radius * 2;
      },
      perimeter: () => 2 * Math.PI * this.radius
    };
    
    console.log(shape.diameter());
    console.log(shape.perimeter());`,
    options: [
      {
        text: `20 and 62.83185307179586`,
        id: "1",
      },
      {
        text: `20 and NaN`,
        id: "2",
      },
      {
        text: `20 and 63`,
        id: "3",
      },
      {
        text: `NaN and 63`,
        id: "4",
      },
    ],
    answer: "2",
    answerDescription: `Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function.\n
    \nWith arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).\n
    \nThere is no value radius on that object, which returns undefined.`,
  },
  {
    text: "What's the output?",
    codeText: `+true;
    !"Lydia";`,
    options: [
      {
        text: `1 and false`,
        id: "1",
      },
      {
        text: `false and NaN`,
        id: "2",
      },
      {
        text: `false and false`,
        id: "3",
      },
    ],
    answer: "1",
    answerDescription: `The unary plus tries to convert an operand to a number. true is 1, and false is 0.\n
    \nThe string 'Lydia' is a truthy value. What we're actually asking, is "is this truthy value falsy?".\n
    \nThis returns false.`,
  },
  {
    text: "Which one is true?",
    codeText: `const bird = {
      size: "small"
    };
    
    const mouse = {
      name: "Mickey",
      small: true
    };`,
    options: [
      {
        text: `mouse.bird.size is not valid`,
        id: "1",
      },
      {
        text: `mouse[bird.size] is not valid`,
        id: "2",
      },
      {
        text: `mouse[bird["size"]] is not valid`,
        id: "3",
      },
      {
        text: `All of them are valid`,
        id: "4",
      },
    ],
    answer: "1",
    answerDescription: `In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood.\n
    JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement.\n
    mouse[bird.size]: First it evaluates bird.size, which is "small". mouse["small"] returns true\n
    \nHowever, with dot notation, this doesn't happen. mouse does not have a key called bird, which means that mouse.bird is undefined. Then, we ask for the size using dot notation: mouse.bird.size. Since mouse.bird is undefined, we're actually asking undefined.size. This isn't valid, and will throw an error similar to Cannot read property "size" of undefined.`,
  },
  {
    text: "What's the output?",
    codeText: `let c = { greeting: "Hey!" };
    let d;
    
    d = c;
    c.greeting = "Hello";
    console.log(d.greeting);`,
    options: [
      {
        text: `Hello`,
        id: "1",
      },
      {
        text: `Hey!`,
        id: "2",
      },
      {
        text: `ReferenceError`,
        id: "3",
      },
      {
        text: `undefined`,
        id: "4",
      },
      {
        text: `TypeError`,
        id: "5",
      },
    ],
    answer: "1",
    answerDescription: `In JavaScript, all objects interact by reference when setting them equal to each other.\n
    \nFirst, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object.\n
    \nWhen you change one object, you change all of them.`,
  },
  {
    text: "What's the output?",
    codeText: `let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);`,
    options: [
      {
        text: `true false true`,
        id: "1",
      },
      {
        text: `false false true`,
        id: "2",
      },
      {
        text: `true false false`,
        id: "3",
      },
      {
        text: `false true true`,
        id: "4",
      },
    ],
    answer: "3",
    answerDescription: `new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.\n
    \nWhen we use the == operator, it only checks whether it has the same value. They both have the value of 3, so it returns true.\n
    \nHowever, when we use the === operator, both value and type should be the same. It's not: new Number() is not a number, it's an object. Both return false.`,
  },
  {
    text: "What's the output?",
    codeText: `class Chameleon {
      static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
      }
    
      constructor({ newColor = "green" } = {}) {
        this.newColor = newColor;
      }
    }
    
    const freddie = new Chameleon({ newColor: "purple" });
    console.log(freddie.colorChange("orange"));`,
    options: [
      {
        text: `orange`,
        id: "1",
      },
      {
        text: `purple`,
        id: "2",
      },
      {
        text: `green`,
        id: "3",
      },
      {
        text: `TypeError`,
        id: "4",
      },
    ],
    answer: "4",
    answerDescription: `The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children. Since freddie is a child, the function is not passed down, and not available on the freddie instance: a TypeError is thrown.`,
  },
  {
    text: "What's the output?",
    codeText: `let greeting;
    greetign = {}; // Typo!
    console.log(greetign);`,
    options: [
      {
        text: `{}`,
        id: "1",
      },
      {
        text: `ReferenceError: greetign is not defined`,
        id: "2",
      },
      {
        text: `undefined`,
        id: "3",
      },
    ],
    answer: "1",
    answerDescription: `It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, the JS interpreter actually saw this as global.greetign = {} (or window.greetign = {} in a browser).\n
    \nIn order to avoid this, we can use "use strict". This makes sure that you have declared a variable before setting it equal to anything.`,
  },
  {
    text: "What happens when we do this?",
    codeText: `function bark() {
      console.log("Woof!");
    }
    
    bark.animal = "dog";`,
    options: [
      {
        text: `Nothing, this is totally fine!`,
        id: "1",
      },
      {
        text: `SyntaxError. You cannot add properties to a function this way.`,
        id: "2",
      },
      {
        text: `"Woof" gets logged.`,
        id: "3",
      },
      {
        text: `"ReferenceError.`,
        id: "4",
      },
    ],
    answer: "1",
    answerDescription: `This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)\n
    \nA function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.`,
  },
  {
    text: "What's the output?",
    codeText: `function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    const member = new Person("Lydia", "Hallie");
    Person.getFullName = function() {
      return \${this.firstName} \${this.lastName};
    };
    
    console.log(member.getFullName());`,
    options: [
      {
        text: `TypeError`,
        id: "1",
      },
      {
        text: `SyntaxError`,
        id: "2",
      },
      {
        text: `Lydia Hallie`,
        id: "3",
      },
      {
        text: `undefined undefined`,
        id: "4",
      },
    ],
    answer: "1",
    answerDescription: `You can't add properties to a constructor like you can with regular objects. If you want to add a feature to all objects at once, you have to use the prototype instead. So in this case,\n
    \nPerson.prototype.getFullName = function() {\n
      \n\treturn \${this.firstName} \${this.lastName};\n
    \n};\n
    \nwould have made member.getFullName() work. Why is this beneficial? Say that we added this method to the constructor itself. Maybe not every Person instance needed this method. This would waste a lot of memory space, since they would still have that property, which takes of memory space for each instance. Instead, if we only add it to the prototype, we just have it at one spot in memory, yet they all have access to it!`,
  },
  {
    text: "What's the output?",
    codeText: `function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    const lydia = new Person("Lydia", "Hallie");
    const sarah = Person("Sarah", "Smith");
    
    console.log(lydia);
    console.log(sarah);`,
    options: [
      {
        text: `Person {firstName: "Lydia", lastName: "Hallie"} and undefined`,
        id: "1",
      },
      {
        text: `Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}`,
        id: "2",
      },
      {
        text: `Person {firstName: "Lydia", lastName: "Hallie"} and {}`,
        id: "3",
      },
      {
        text: `Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError`,
        id: "4",
      },
    ],
    answer: "1",
    answerDescription: `For sarah, we didn't use the new keyword. When using new, it refers to the new empty object we create. However, if you don't add new it refers to the global object!\n
    \nWe said that this.firstName equals "Sarah" and this.lastName equals "Smith". What we actually did, is defining global.firstName = 'Sarah' and global.lastName = 'Smith'. sarah itself is left undefined, since we don't return a value from the Person function.`,
  },
  {
    text: "What are the three phases of event propagation?",
    codeText: ``,
    options: [
      {
        text: `Target > Capturing > Bubbling`,
        id: "1",
      },
      {
        text: `Bubbling > Target > Capturing`,
        id: "2",
      },
      {
        text: `Target > Bubbling > Capturing`,
        id: "3",
      },
      {
        text: `Capturing > Target > Bubbling`,
        id: "4",
      },
    ],
    answer: "4",
    answerDescription: `During the capturing phase, the event goes through the ancestor elements down to the target element. It then reaches the target element, and bubbling begins.`,
  },
  {
    text: "All object have prototypes?",
    codeText: ``,
    options: [
      {
        text: `true`,
        id: "1",
      },
      {
        text: `false`,
        id: "2",
      },
    ],
    answer: "2",
    answerDescription: `All objects have prototypes, except for the base object. The base object is the object created by the user, or an object that is created using the new keyword. The base object has access to some methods and properties, such as .toString. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.`,
  },
  {
    text: "What's the output?",
    codeText: `function sum(a, b) {
      return a + b;
    }
    
    sum(1, "2");`,
    options: [
      {
        text: `NaN`,
        id: "1",
      },
      {
        text: `TypeError`,
        id: "2",
      },
      {
        text: `"12"`,
        id: "3",
      },
      {
        text: `3`,
        id: "4",
      },
    ],
    answer: "3",
    answerDescription: `JavaScript is a dynamically typed language: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called implicit type coercion. Coercion is converting from one type into another.\n
    \nIn this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. During the addition of a numeric type (1) and a string type ('2'), the number is treated as a string. We can concatenate strings like "Hello" + "World", so what's happening here is "1" + "2" which returns "12".`,
  },
  {
    text: "What's the output?",
    codeText: `let number = 0;
    console.log(number++);
    console.log(++number);
    console.log(number);`,
    options: [
      {
        text: `1 1 2`,
        id: "1",
      },
      {
        text: `1 2 2`,
        id: "2",
      },
      {
        text: `0 2 2`,
        id: "3",
      },
      {
        text: `0 1 2`,
        id: "4",
      },
    ],
    answer: "3",
    answerDescription: `The postfix unary operator ++:\n
    \nReturns the value (this returns 0)\n
    \nIncrements the value (number is now 1)\n\n
    \nThe prefix unary operator ++:\n
    \nIncrements the value (number is now 2)\n
    \nReturns the value (this returns 2)\n
    \nThis returns 0 2 2.`,
  },
  {
    text: "What's the output?",
    codeText: `function getPersonInfo(one, two, three) {
      console.log(one);
      console.log(two);
      console.log(three);
    }
    
    const person = "Lydia";
    const age = 21;
    
    getPersonInfo\${person} is \${age} years old;`,
    options: [
      {
        text: `"Lydia" 21 ["", " is ", " years old"]`,
        id: "1",
      },
      {
        text: `["", " is ", " years old"] "Lydia" 21`,
        id: "2",
      },
      {
        text: `"Lydia" ["", " is ", " years old"] 21`,
        id: "3",
      },
    ],
    answer: "2",
    answerDescription: `If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!`,
  },
  {
    text: "What's the output?",
    codeText: `function checkAge(data) {
      if (data === { age: 18 }) {
        console.log("You are an adult!");
      } else if (data == { age: 18 }) {
        console.log("You are still an adult.");
      } else {
        console.log("Hmm.. You don't have an age I guess");
      }
    }
    
    checkAge({ age: 18 });`,
    options: [
      {
        text: `You are an adult!`,
        id: "1",
      },
      {
        text: `You are still an adult.`,
        id: "2",
      },
      {
        text: `Hmm.. You don't have an age I guess`,
        id: "3",
      },
    ],
    answer: "3",
    answerDescription: `When testing equality, primitives are compared by their value, while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory.\n
    \nThe two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.\n
    \nThis is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false.`,
  },
  {
    text: "What's the output?",
    codeText: `function getAge(...args) {
      console.log(typeof args);
    }
    
    getAge(21);`,
    options: [
      {
        text: `"number"`,
        id: "1",
      },
      {
        text: `"array"`,
        id: "2",
      },
      {
        text: `"object"`,
        id: "3",
      },
      {
        text: `"NaN"`,
        id: "4",
      },
    ],
    answer: "3",
    answerDescription: `The rest parameter (...args.) lets us "collect" all remaining arguments into an array. An array is an object, so typeof args returns "object"`,
  },
  {
    text: "What's the output?",
    codeText: `function getAge() {
      "use strict";
      age = 21;
      console.log(age);
    }
    
    getAge();`,
    options: [
      {
        text: `21`,
        id: "1",
      },
      {
        text: `undefined`,
        id: "2",
      },
      {
        text: `ReferenceError`,
        id: "3",
      },
      {
        text: `TypeError`,
        id: "4",
      },
    ],
    answer: "3",
    answerDescription: `With "use strict", you can make sure that you don't accidentally declare global variables. We never declared the variable age, and since we use "use strict", it will throw a reference error. If we didn't use "use strict", it would have worked, since the property age would have gotten added to the global object.`,
  },
  {
    text: "What's value of sum?",
    codeText: `const sum = eval("10*10+5");`,
    options: [
      {
        text: `105`,
        id: "1",
      },
      {
        text: `"105"`,
        id: "2",
      },
      {
        text: `TypeError`,
        id: "3",
      },
      {
        text: `"10*10+5"`,
        id: "4",
      },
    ],
    answer: "1",
    answerDescription: `eval evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is 10 * 10 + 5. This returns the number 105.`,
  },
  {
    text: "How long is cool_secret accessible?",
    codeText: `sessionStorage.setItem("cool_secret", 123);`,
    options: [
      {
        text: `Forever, the data doesn't get lost`,
        id: "1",
      },
      {
        text: `When the user closes the tab.`,
        id: "2",
      },
      {
        text: `When the user closes the entire browser, not only the tab`,
        id: "3",
      },
      {
        text: `When the user shuts off their computer`,
        id: "4",
      },
    ],
    answer: "2",
    answerDescription: `The data stored in sessionStorage is removed after closing the tab.\n
    /nIf you used localStorage, the data would've been there forever, unless for example localStorage.clear() is invoked.`,
  },
  {
    text: "What's the output?",
    codeText: `var num = 8;
    var num = 10;
    
    console.log(num);`,
    options: [
      {
        text: `8`,
        id: "1",
      },
      {
        text: `10`,
        id: "2",
      },
      {
        text: `SyntaxError`,
        id: "3",
      },
      {
        text: `ReferenceError`,
        id: "4",
      },
    ],
    answer: "2",
    answerDescription: `With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.\n
    \nYou cannot do this with let or const since they're block-scoped.`,
  },
  {
    text: "What's the output?",
    codeText: `const obj = { 1: "a", 2: "b", 3: "c" };
    const set = new Set([1, 2, 3, 4, 5]);
    
    obj.hasOwnProperty("1");
    obj.hasOwnProperty(1);
    set.has("1");
    set.has(1);`,
    options: [
      {
        text: `false true false true`,
        id: "1",
      },
      {
        text: `false true true true`,
        id: "2",
      },
      {
        text: `true true true true`,
        id: "4",
      },
    ],
    answer: "3",
    answerDescription: `All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true.\n
    \nIt doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true.`,
  },
  {
    text: "What's the output?",
    codeText: `const obj = { a: "one", b: "two", a: "three" };
    console.log(obj);`,
    options: [
      {
        text: `{ a: "one", b: "two" }`,
        id: "1",
      },
      {
        text: `{ b: "two", a: "three" }`,
        id: "2",
      },
      {
        text: `{ a: "three", b: "two" }`,
        id: "3",
      },
      {
        text: `SyntaxError`,
        id: "4",
      },
    ],
    answer: "3",
    answerDescription: `If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.`,
  },
  {
    text: `The JavaScript global execution context creates two things for you: the global object, and the "this" keyword?`,
    codeText: ``,
    options: [
      {
        text: `true`,
        id: "1",
      },
      {
        text: `false`,
        id: "2",
      },
      {
        text: `it depends`,
        id: "3",
      },
    ],
    answer: "1",
    answerDescription: `The base execution context is the global execution context: it's what's accessible everywhere in your code.`,
  },
  {
    text: "What's the output?",
    codeText: `for (let i = 1; i < 5; i++) {
      if (i === 3) continue;
      console.log(i);
    }`,
    options: [
      {
        text: `1 2`,
        id: "1",
      },
      {
        text: `1 2 3`,
        id: "2",
      },
      {
        text: `1 2 4`,
        id: "3",
      },
      {
        text: `1 3 4`,
        id: "4",
      },
    ],
    answer: "3",
    answerDescription: `The continue statement skips an iteration if a certain condition returns true.`,
  },
  {
    text: "What's the output?",
    codeText: `String.prototype.giveLydiaPizza = () => {
      return "Just give Lydia pizza already!";
    };
    
    const name = "Lydia";
    
    name.giveLydiaPizza();`,
    options: [
      {
        text: `"Just give Lydia pizza already!"`,
        id: "1",
      },
      {
        text: `TypeError: not a function`,
        id: "2",
      },
      {
        text: `SyntaxError`,
        id: "3",
      },
      {
        text: `undefined`,
        id: "4",
      },
    ],
    answer: "1",
    answerDescription: `String is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!`,
  },
  {
    text: "What's the output?",
    codeText: `const a = {};
    const b = { key: "b" };
    const c = { key: "c" };
    
    a[b] = 123;
    a[c] = 456;
    
    console.log(a[b]);`,
    options: [
      {
        text: `123`,
        id: "1",
      },
      {
        text: `456`,
        id: "2",
      },
      {
        text: `undefined`,
        id: "3",
      },
      {
        text: `ReferenceError`,
        id: "4",
      },
    ],
    answer: "2",
    answerDescription: `Object keys are automatically converted into strings. We are trying to set an object as a key to object a, with the value of 123.\n
    However, when we stringify an object, it becomes "[object Object]". So what we are saying here, is that a["object Object"] = 123. Then, we can try to do the same again. c is another object that we are implicitly stringifying. So then, a["object Object"] = 456.\n
    \nThen, we log a[b], which is actually a["object Object"]. We just set that to 456, so it returns 456.`,
  },
  {
    text: "What's the output?",
    codeText: `const foo = () => console.log("First");
    const bar = () => setTimeout(() => console.log("Second"));
    const baz = () => console.log("Third");
    
    bar();
    foo();
    baz();`,
    options: [
      {
        text: `First Second Third`,
        id: "1",
      },
      {
        text: `First Third Second`,
        id: "2",
      },
      {
        text: `Second First Third`,
        id: "3",
      },
      {
        text: `Second Third First`,
        id: "4",
      },
    ],
    answer: "1",
    answerDescription: `We have a setTimeout function and invoked it first. Yet, it was logged last.\n
    \nThis is because in browsers, we don't just have the runtime engine, we also have something called a WebAPI. The WebAPI gives us the setTimeout function to start with, and for example the DOM.\n
    \nAfter the callback is pushed to the WebAPI, the setTimeout function itself (but not the callback!) is popped off the stack.\n
    \nNow, foo gets invoked, and "First" is being logged.\n
    \nfoo is popped off the stack, and baz gets invoked. "Third" gets logged.\n
    \nThe WebAPI can't just add stuff to the stack whenever it's ready. Instead, it pushes the callback function to something called the queue.\n
    \nThis is where an event loop starts to work. An event loop looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.\n
    \nbar gets invoked, "Second" gets logged, and it's popped off the stack.`,
  },
  {
    text: "What is the event.target when clicking the button?",
    codeText: `<div onclick="console.log('first div')">
    <div onclick="console.log('second div')">
      <button onclick="console.log('button')">
        Click!
      </button>
    </div>
  </div>`,
    options: [
      {
        text: `Outer div`,
        id: "1",
      },
      {
        text: `Inner div`,
        id: "2",
      },
      {
        text: `button`,
        id: "3",
      },
      {
        text: `An array of all nested elements`,
        id: "4",
      },
    ],
    answer: "3",
    answerDescription: `The deepest nested element that caused the event is the target of the event. You can stop bubbling by event.stopPropagation.`,
  },
  {
    text: "When you click the paragraph, what's the logged output?",
    codeText: `<div onclick="console.log('div')">
    <p onclick="console.log('p')">
      Click here!
    </p>
  </div>`,
    options: [
      {
        text: `p div`,
        id: "1",
      },
      {
        text: `div p`,
        id: "2",
      },
      {
        text: `p`,
        id: "3",
      },
      {
        text: `div`,
        id: "4",
      },
    ],
    answer: "1",
    answerDescription: `If we click p, we see two logs: p and div. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set useCapture to true). It goes from the deepest nested element outwards.`,
  },
  {
    text: "What's the output?",
    codeText: `const person = { name: "Lydia" };

    function sayHi(age) {
      return \`\${this.name} is \${age}\`;
    }
    
    console.log(sayHi.call(person, 21));
    console.log(sayHi.bind(person, 21));`,
    options: [
      {
        text: `undefined is 21 Lydia is 21`,
        id: "1",
      },
      {
        text: `function function`,
        id: "2",
      },
      {
        text: `Lydia is 21 Lydia is 21`,
        id: "3",
      },
      {
        text: `Lydia is 21 function`,
        id: "4",
      },
    ],
    answer: "4",
    answerDescription: `With both, we can pass the object to which we want the this keyword to refer to. However, .call is also executed immediately!\n\n
    \n.bind. returns a copy of the function, but with a bound context! It is not executed immediately.`,
  },
  {
    text: "What's the output?",
    codeText: `function sayHi() {
      return (() => 0)();
    }
    
    console.log(typeof sayHi());`,
    options: [
      {
        text: `"object"`,
        id: "1",
      },
      {
        text: `"number"`,
        id: "2",
      },
      {
        text: `"function"`,
        id: "3",
      },
      {
        text: `"undefined"`,
        id: "4",
      },
    ],
    answer: "2",
    answerDescription: `The sayHi function returns the returned value of the immediately invoked function (IIFE). This function returned 0, which is type "number".\n\n
    \nFYI: there are only 7 built-in types: \nnull, undefined, boolean, number, string, object, and symbol.\n "function" is not a type, since functions are objects, it's of type "object".`,
  },
  {
    text: "Which of these values are falsy?",
    codeText: `0;
    new Number(0);
    ("");
    (" ");
    new Boolean(false);
    undefined;`,
    options: [
      {
        text: `0, '', undefined`,
        id: "1",
      },
      {
        text: `0, new Number(0), '', new Boolean(false), undefined`,
        id: "2",
      },
      {
        text: `0, '', new Boolean(false), undefined`,
        id: "3",
      },
      {
        text: `All of them are falsy`,
        id: "4",
      },
    ],
    answer: "1",
    answerDescription: `There are only six falsy values:\n\n
    undefined\n
    null\n
    NaN\n
    0\n
    '' (empty string)\n
    false\n
    Function constructors, like new Number and new Boolean are truthy.`,
  },
  {
    text: "What's the output?",
    codeText: `console.log(typeof typeof 1);`,
    options: [
      {
        text: `"number"`,
        id: "1",
      },
      {
        text: `"string"`,
        id: "2",
      },
      {
        text: `"object"`,
        id: "3",
      },
      {
        text: `"undefined"`,
        id: "4",
      },
    ],
    answer: "2",
    answerDescription: `typeof 1 returns "number". typeof "number" returns "string".`,
  },
  {
    text: "What's the output?",
    codeText: `const numbers = [1, 2, 3];
    numbers[10] = 11;
    console.log(numbers);`,
    options: [
      {
        text: `[1, 2, 3, 7 x null, 11]`,
        id: "1",
      },
      {
        text: `[1, 2, 3, 11]`,
        id: "2",
      },
      {
        text: `[1, 2, 3, 7 x empty, 11]`,
        id: "3",
      },
      {
        text: `SyntaxError`,
        id: "4",
      },
    ],
    answer: "3",
    answerDescription: `When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of undefined, but you will see something like:\n\n
    [1, 2, 3, 7 x empty, 11]\n
    \ndepending on where you run it (it's different for every browser, node, etc.)`,
  },
  {
    text: "What's the output?",
    codeText: `(() => {
      let x, y;
      try {
        throw new Error();
      } catch (x) {
        (x = 1), (y = 2);
        console.log(x);
      }
      console.log(x);
      console.log(y);
    })();`,
    options: [
      {
        text: `1 undefined 2`,
        id: "1",
      },
      {
        text: `undefined undefined undefined`,
        id: "2",
      },
      {
        text: `1 1 2`,
        id: "3",
      },
      {
        text: `1 undefined undefined`,
        id: "4",
      },
    ],
    answer: "1",
    answerDescription: `The catch block receives the argument x. This is not the same x as the variable when we pass arguments. This variable x is block-scoped.\n
    \nLater, we set this block-scoped variable equal to 1, and set the value of the variable y. Now, we log the block-scoped variable x, which is equal to 1.\n
    \nOutside of the catch block, x is still undefined, and y is 2. When we want to console.log(x) outside of the catch block, it returns undefined, and y returns 2.`,
  },
  {
    text: "Everything in JavaScript is either a...",
    codeText: ``,
    options: [
      {
        text: `primitive or object`,
        id: "1",
      },
      {
        text: `function or object`,
        id: "2",
      },
      {
        text: `trick question! only objects`,
        id: "3",
      },
      {
        text: `number or object`,
        id: "4",
      },
    ],
    answer: "1",
    answerDescription: `JavaScript only has primitive types and objects.\n
    \nPrimitive types are boolean, null, undefined, bigint, number, string, and symbol.\n
    \nWhat differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that 'foo'.toUpperCase() evaluates to 'FOO' and does not result in a TypeError. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the object using one of the wrapper classes, i.e. String, and then immediately discard the wrapper after the expression evaluates. All primitives except for null and undefined exhibit this behaviour.`,
  },
  {
    text: "What's the output?",
    codeText: `[[0, 1], [2, 3]].reduce(
      (acc, cur) => {
        return acc.concat(cur);
      },
      [1, 2]
    );`,
    options: [
      {
        text: `[0, 1, 2, 3, 1, 2]`,
        id: "1",
      },
      {
        text: `[6, 1, 2]`,
        id: "2",
      },
      {
        text: `[1, 2, 0, 1, 2, 3]`,
        id: "3",
      },
      {
        text: `[1, 2, 6]`,
        id: "4",
      },
    ],
    answer: "3",
    answerDescription: `[1, 2] is our initial value. This is the value we start with, and the value of the very first acc. During the first round, acc is [1,2], and cur is [0, 1]. We concatenate them, which results in [1, 2, 0, 1].\n
    \nThen, [1, 2, 0, 1] is acc and [2, 3] is cur. We concatenate them, and get [1, 2, 0, 1, 2, 3]`,
  },
  {
    text: "What's the output?",
    codeText: `!!null;
    !!"";
    !!1;`,
    options: [
      {
        text: `false true false`,
        id: "1",
      },
      {
        text: `false false true`,
        id: "2",
      },
      {
        text: `false true true`,
        id: "3",
      },
      {
        text: `true true false`,
        id: "4",
      },
    ],
    answer: "2",
    answerDescription: `null is falsy. !null returns true. !true returns false.\n
    \n"" is falsy. !"" returns true. !true returns false.\n
    \n1 is truthy. !1 returns false. !false returns true.`,
  },
  {
    text: "What does the setInterval method return in the browser?",
    codeText: `setInterval(() => console.log("Hi"), 1000);`,
    options: [
      {
        text: `the amount of milliseconds specified`,
        id: "2",
      },
      {
        text: `the passed function`,
        id: "3",
      },
      {
        text: `a unique id`,
        id: "1",
      },
      {
        text: `undefined`,
        id: "4",
      },
    ],
    answer: "1",
    answerDescription: `It returns a unique id. This id can be used to clear that interval with the clearInterval() function.`,
  },
  {
    text: "What does this return?",
    codeText: `[..."Lydia"];`,
    options: [
      {
        text: `["Lydia"]`,
        id: "1",
      },
      {
        text: `[[], "Lydia"]`,
        id: "2",
      },
      {
        text: `[["L", "y", "d", "i", "a"]]`,
        id: "3",
      },
      {
        text: `["L", "y", "d", "i", "a"]`,
        id: "4",
      },
    ],
    answer: "4",
    answerDescription: `A string is an iterable. The spread operator maps every character of an iterable to one element.`,
  },
  {
    text: "What's the output?",
    codeText: `function* generator(i) {
      yield i;
      yield i * 2;
    }
    
    const gen = generator(10);
    
    console.log(gen.next().value);
    console.log(gen.next().value);`,
    options: [
      {
        text: `[0, 10], [10, 20]`,
        id: "1",
      },
      {
        text: `20 20`,
        id: "2",
      },
      {
        text: `20 10`,
        id: "3",
      },
      {
        text: `0, 10 and 10, 20`,
        id: "4",
      },
    ],
    answer: "3",
    answerDescription: `Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, and later continue from where it stopped. Every time a generator function encounters a yield keyword, the function yields the value specified after it. Note that the generator function in that case doesn't return the value, it yields the value.\n
    \nFirst, we initialize the generator function with i equal to 10. We invoke the generator function using the next() method. The first time we invoke the generator function, i is equal to 10. It encounters the first yield keyword: it yields the value of i. The generator is now "paused", and 10 gets logged.\n
    \nThen, we invoke the function again with the next() method. It starts to continue where it stopped previously, still with i equal to 10. Now, it encounters the next yield keyword, and yields i * 2. i is equal to 10, so it returns 10 * 2, which is 20. This results in 10, 20.`,
  },
  {
    text: "What does this return?",
    codeText: `const firstPromise = new Promise((res, rej) => {
      setTimeout(res, 500, "one");
    });
    
    const secondPromise = new Promise((res, rej) => {
      setTimeout(res, 100, "two");
    });
    
    Promise.race([firstPromise, secondPromise]).then(res => console.log(res));`,
    options: [
      {
        text: `"one"`,
        id: "1",
      },
      {
        text: `"two"`,
        id: "2",
      },
      {
        text: `"two" "one"`,
        id: "3",
      },
      {
        text: `"one" "two"`,
        id: "4",
      },
    ],
    answer: "2",
    answerDescription: `When we pass multiple promises to the Promise.race method, it resolves/rejects the first promise that resolves/rejects. To the setTimeout method, we pass a timer: 500ms for the first promise (firstPromise), and 100ms for the second promise (secondPromise). This means that the secondPromise resolves first with the value of 'two'. res now holds the value of 'two', which gets logged.`,
  },
  {
    text: "What's the output?",
    codeText: `let person = { name: "Lydia" };
    const members = [person];
    person = null;
    
    console.log(members);`,
    options: [
      {
        text: `null`,
        id: "1",
      },
      {
        text: `[null]`,
        id: "2",
      },
      {
        text: `[{}]`,
        id: "3",
      },
      {
        text: `[{ name: "Lydia" }]`,
        id: "4",
      },
    ],
    answer: "4",
    answerDescription: `First, we declare a variable person with the value of an object that has a name property.\n\n
    \nThen, we declare a variable called members. We set the first element of that array equal to the value of the person variable. Objects interact by reference when setting them equal to each other. When you assign a reference from one variable to another, you make a copy of that reference. (note that they don't have the same reference!)\n\n
    \nThen, we set the variable person equal to null.\n
    \nWe are only modifying the value of the person variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in members still holds its reference to the original object. When we log the members array, the first element still holds the value of the object, which gets logged.`,
  },
  {
    text: "What's the output?",
    codeText: `const person = {
      name: "Lydia",
      age: 21
    };
    
    for (const item in person) {
      console.log(item);
    }`,
    options: [
      {
        text: `{ name: "Lydia" }, { age: 21 }`,
        id: "1",
      },
      {
        text: `"name", "age"`,
        id: "2",
      },
      {
        text: `"Lydia", 21`,
        id: "3",
      },
      {
        text: `["name", "Lydia"], ["age", 21]`,
        id: "4",
      },
    ],
    answer: "2",
    answerDescription: `With a for-in loop, we can iterate through object keys, in this case name and age. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of item equal to the current key it’s iterating over. First, item is equal to name, and gets logged. Then, item is equal to age, which gets logged.`,
  },
  {
    text: "What's the output?",
    codeText: `console.log(3 + 4 + "5");`,
    options: [
      {
        text: `"345"`,
        id: "1",
      },
      {
        text: `"75"`,
        id: "2",
      },
      {
        text: `"12"`,
        id: "3",
      },
      {
        text: `12`,
        id: "4",
      },
    ],
    answer: "2",
    answerDescription: `Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the same precedence. We only have one type of operator: +. For addition, the associativity is left-to-right.\n
    3 + 4 gets evaluated first. This results in the number 7.\n\n
    \n7 + '5' results in "75" because of coercion. JavaScript converts the number 7 into a string, see question 15. We can concatenate two strings using the +operator. "7" + "5" results in "75".`,
  },
  {
    text: "What's the value of num?",
    codeText: `const num = parseInt("7*6", 10);`,
    options: [
      {
        text: `42`,
        id: "1",
      },
      {
        text: `"42"`,
        id: "2",
      },
      {
        text: `7`,
        id: "3",
      },
      {
        text: `NaN`,
        id: "4",
      },
    ],
    answer: "3",
    answerDescription: `Only the first numbers in the string is returned. Based on the radix (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the parseInt checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.\n
    \n* is not a valid number. It only parses "7" into the decimal 7. num now holds the value of 7.`,
  },
  {
    text: "What's the output?",
    codeText: `[1, 2, 3].map(num => {
      if (typeof num === "number") return;
      return num * 2;
    });`,
    options: [
      {
        text: `[]`,
        id: "1",
      },
      {
        text: `[null, null, null]`,
        id: "2",
      },
      {
        text: `[undefined, undefined, undefined]`,
        id: "3",
      },
      {
        text: `[ 3 x empty ]`,
        id: "4",
      },
    ],
    answer: "3",
    answerDescription: `When mapping over the array, the value of num is equal to the element it's currently looping over. In this case, the elements are numbers, so the condition of the if statement typeof num === "number" returns true. The map function creates a new array and inserts the values returned from the function.\n\n
    \nHowever, we don't return a value. When we don't return a value from the function, the function returns undefined. For every element in the array, the function block gets called, so for each element we return undefined.`,
  },
];

export const fullQuestionsLength = questions.length;

export const getQuestions = (len) => {
  let questionArr = [...questions];
  questionArr = shuffleArray(questionArr);
  let data = [];
  for (let i = 0; i < len; i++) {
    data.push(questionArr[i]);
  }
  return data;
};

const shuffleArray = (arr) => {
  var m = arr.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
};
