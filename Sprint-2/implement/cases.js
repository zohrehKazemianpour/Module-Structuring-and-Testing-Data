// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_CAMEL_CASE, so "HELLO_THERE"

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// You will need to come up with an appropriate name for the function
// Use the string documentation to help you find a solution

const convertToUpperCamelCase = input => {
    return input.split( ' ' ).map( str => str.toUpperCase() ).join( '_' );
}

// .split( ' ' ) splits the string at each space and adds each element to an array
// "lord of the rings" will therefore become [ "lord", "of", "the", "rings" ]

// .map() will loop over each element in the array, and return the result of str.toUpperCase() to a new array.
// [ "lord", "of", "the", "rings" ] will therefore become [ "LORD", "OF", "THE", "RINGS" ]

// .join( '_' ) will convert the values in an array to a string, joining each element in the array with the value provided, in this case an underscore
// [ "LORD", "OF", "THE", "RINGS" ] will therefore become "LORD_OF_THE_RINGS"

console.log( convertToUpperCamelCase( "lord of the rings" ) )
