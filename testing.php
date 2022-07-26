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
?>