userInput = prompt("Write any word").toLowerCase();
inputReverse = "";

function palindromeChecker () {
    for (let i = userInput.length - 1; i>=0;i--) {
        inputReverse = inputReverse + userInput[i];
    }
    alert(`Reverse : ${inputReverse}`);
    if (inputReverse == userInput) {
        Swal.fire("The Given Word is a Palindrome");
    }
    else {
        Swal.fire("The Given Word is not a Palindrome");
    }
}

palindromeChecker ();