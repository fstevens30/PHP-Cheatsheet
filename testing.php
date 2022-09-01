<?php
function writeMsg() {
    echo "Hello World this is how you print a message!"; //echo outputs a string/strings
}

writeMsg() //This calls the function.
?>

<?php
function getRandomNum() {
    echo rand(1,10); //generates a random number between 1 and 10
}
getRandomNum() //Call the function
    
/**
 * Printing
 */
echo ""; // Print a string or type that can be made into a string(I.E int, float).
print_r($arr); // Print anything, with type hints for array's and object's
var_dump($arr); // Print anything, with type hints for any value and sizes

/**
 * Usefull string manipulation methods
 */
$string = 'Awesome cheatsheets';

str_contains($string, 'cheat'); // Find if the string contains the specified string (PHP >= 8.0)
str_replace('Awesome', 'Bonjour', $string); // Replace all occurence
strcmp($string, 'Awesome cheatsheets'); // Compare two strings
strpos($string, 'a', 0); // Get position in the string
str_split($string, 2); // Split the string
strrev($string); // Reverse a string
trim($string); // Strip whitespace from the beginning and end of a string
ucfirst($string); // Make a string's first character uppercase
lcfirst($string); // Make a string's first character lowercase
substr($string, 0, 4); // Return part of a string
?>
