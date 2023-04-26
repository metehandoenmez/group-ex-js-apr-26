JS Basic exercise:

let data = [8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90, 23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77];

Make a class called Process, and static methods, called: toJSON, fromJSON, that will take an argument, and either returns JSON.parse or JSON.stringify.

Create a function that converts our data to a JSON string using this class method, and calls a callback, giving the string as a parameter.
The callback will parse this string, and console.log it

Create another callback that will parse this string, double all the numbers, and console.log the result.

Create another callback that will parse this string, extract only the even numbers, and console.log them.

Call the first function, with one of these callbacks. Do this, for each callback.

Create a function that converts our data to a JSON string using this class method, and calls a callback, but calls the callback after 2 seconds.




