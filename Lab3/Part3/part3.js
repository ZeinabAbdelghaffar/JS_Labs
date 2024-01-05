//Task 1
// Creating an object
let person = {
    firstName: "Zeinab",
    lastName: "Abdo",
    age: 22,
    email: "Zeinanabdo88@gmail.com",
    hobbies: ["reading", "coding", "traveling"],
    address: {
      city: "Alexandria",
      Street: "Mustafa Ismail",
      country: "Egypt" ,
    },
};
// 1. Object.keys() - Returns an array of object keys
let keys = Object.keys(person);
console.log("Object Keys:", keys);
// 2. Object.values() - Returns an array of object values
let values = Object.values(person);
console.log("Object Values:", values);
// 3. Object.entries() - Returns an array of key-value pairs as arrays
let entries = Object.entries(person);
console.log("Object Entries:", entries);
// 4. Object.hasOwnProperty() - Checks if an object has a specified property
let hasAgeProperty = person.hasOwnProperty("age");
console.log("Has 'age' property:", hasAgeProperty);
// 5. Object.assign() - Copies the values of all enumerable properties from one or more source objects to a target object
let clonePerson = Object.assign({}, person);
console.log("Cloned Person:", clonePerson);
// 6. Object.freeze() - preventing new properties from being added from being removed or modified
// person.newProperty = "This will not work";
Object.freeze(person);
console.log("Frozen Person:", person);
// 7. Object.seal() - preventing new properties from being added from being removed
Object.seal(person);
console.log("Sealed Person:", person);
// 8. Object.getOwnPropertyNames() - Returns an array of all properties (enumerable or not) found directly upon a given object
let propertyNames = Object.getOwnPropertyNames(person);
console.log("Property Names:", propertyNames);
// 9. Object.getPrototypeOf() - Returns the prototype of the specified object
let prototypeOfPerson = Object.getPrototypeOf(person);
console.log("Prototype of Person:", prototypeOfPerson);
// 10. Object.is() - Compares two values for equality. Returns true if they are equal, false otherwise
let isEqual = Object.is(5, "5");
console.log("Are 5 and '5' equal?", isEqual);

//Task2
// Creating an array
let numbers = [5, 2, 8, 10, 1, 7, 3, 6, 4, 9];
// 1. Array.length - Returns the number of elements in the array
let length = numbers.length;
console.log("Array Length:", length);
// 2. Array.concat() - Joins two or more arrays, and returns a new array
let moreNumbers = [11, 12, 13];
let concatenatedArray = numbers.concat(moreNumbers);
console.log("Concatenated Array:", concatenatedArray);
// 3. Array.push() - Adds one or more elements to the end of array and returns the new length
let newLength = numbers.push(14);
console.log("Array after Push:", numbers, "New Length:", newLength);
// 4. Array.pop() - Removes the last element from an array and returns that element
let removedElement = numbers.pop();
console.log("Array after Pop:", numbers, "Removed Element:", removedElement);
// 5. Array.shift() - Removes the first element from an array and returns that element
let shiftedElement = numbers.shift();
console.log("Array after Shift:", numbers, "Shifted Element:", shiftedElement);
// 6. Array.unshift() - Adds one or more elements to the beginning of an array and returns the new length
let newLengthAfterUnshift = numbers.unshift(0, 1);
console.log("Array after Unshift:", numbers, "New Length:", newLengthAfterUnshift);
// 7. Array.slice() - Returns a shallow copy of a portion of an array into a new array object
let slicedArray = numbers.slice(2, 6);
console.log("Sliced Array:", slicedArray);
// 8. Array.splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements
let splicedArray = numbers.splice(2, 3, 20, 21, 22);
console.log("Array after Splice:", numbers, "Removed Elements:", splicedArray);
// 9. Array.indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present
let indexOfSeven = numbers.indexOf(7);
console.log("Index of 7:", indexOfSeven);
// 10. Array.includes() - Determines whether an array includes a certain element, returning true or false
let includesTen = numbers.includes(10);
console.log("Includes 10:", includesTen);


//Task 3
function outerFunction(outerParam) {
    let outerVariable = "I am from outer function";
    function innerFunction(innerParam) {
      let innerVariable = "I am from inner function";
      console.log("Outer Param:", outerParam);
      console.log("Outer Variable:", outerVariable);
      console.log("Inner Param:", innerParam);
      console.log("Inner Variable:", innerVariable);
    }
    return innerFunction;
}
let closure = outerFunction("Outer Param Value"); 
closure("Inner Param Value");    
