# Log-Your-Library
A web page that allows you to save your book descriptions and then print them at will.

html file: 
  A simple webpage that contains a description of the site and a form to enter book information in. The save button calls a js function that logs the information into a new object.

js file: 
  Gets the input from the html form and uses it as arguments in a function save(). save() creates an object using the arguments and adds it to the library array.

Note: There is currently an error in getting the user input from the form. Logging the library array after calling the save() function just returns {OBJECT object}
