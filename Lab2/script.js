function checkAge() {
    while (true) {
        // Get user input for age
        var ageInput = prompt("Enter your age or press 'cancel' to exit:");

        // Check if the user wants to exit
        if (ageInput === null) {
            alert("Exiting program. Goodbye!");
            break;
        }

        // Validate the input as a positive number
        try {
            var age = parseInt(ageInput);
            if (isNaN(age) || age < 0) {
                throw new Error("Please enter a positive number.");
            }
        } catch (error) {
            alert("Error: " + error.message);
            continue;
        }

        // Determine the user's status based on age
        var status;
        if (1 <= age && age <= 10) {
            status = "Child";
        } else if (11 <= age && age <= 18) {
            status = "Teenager";
        } else if (19 <= age && age <= 50) {
            status = "Grown up";
        } else {
            status = "Old";
        }

        // Display the user's status
        alert("You are a " + status + ".");
    }
}

function countVowels() {
    // Get user input for string
    var userInput = document.getElementById('stringInput').value;

    // Count the number of vowels
    var vowelCount = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < userInput.length; i++) {
        var char = userInput[i].toLowerCase();
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    // Display the result
    document.getElementById('vowelResult').innerText = `The string "${userInput}" has ${vowelCount} vowels.`;
}

function convertTo12Hour() {
    // Get user input for hour
    var hourInput = document.getElementById('hourInput').value;

    // Validate the input
    var hour = parseInt(hourInput);
    if (isNaN(hour) || hour < 0 || hour > 23) {
        alert("Please enter a valid hour (0-23).");
        return;
    }

    // Convert to 12-hour format
    var period = (hour < 12) ? 'AM' : 'PM';
    var hour12 = (hour % 12 === 0) ? 12 : hour % 12;

    // Display the result
    document.getElementById('hourResult').innerText = `Converted: ${hour12} ${period}`;
}