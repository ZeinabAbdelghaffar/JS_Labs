function calculateSumAndAverage() {
    var count = parseInt(document.getElementById('count').value);
    if (isNaN(count) || count <= 0) {
        alert("Invalid input. Please enter a valid positive number.");
        return;
    }
    var values = [];
    for (var i = 1; i <= count; i++) {
        var value = parseFloat(prompt("Enter value " + i + ":"));
        if (isNaN(value)) {
            alert("Invalid input. Please enter a valid number.");
            return;
        }
        values.push(value);
    }
    var sum = values.reduce(function (acc, val) {
        return acc + val;
    }, 0);
    var average = sum / count;
    document.getElementById('result').innerHTML = "Sum: " + sum + "<br>Average: " + average;
    document.getElementById('result').style.display = 'block';
}

var contacts = [];
function addContact() {
    var name = prompt("Enter the name of the contact:");
    var phoneNumber = prompt("Enter the phone number:");
    var contact = {
        name: name,
        phoneNumber: phoneNumber
    };
    contacts.push(contact);
    displayContacts();
}

function searchContact() {
    var searchQuery = prompt("Enter something to search for:");
    var foundContacts = contacts.filter(function (contact) {
        return contact.name.includes(searchQuery) || contact.phoneNumber.includes(searchQuery);
    });
    displaySearchResults(foundContacts);
}

function displayContacts() {
    var contactsList = document.getElementById('contactsList');
    contactsList.innerHTML = "<h3>Contacts List:</h3>";
    for (var i = 0; i < contacts.length; i++) {
        contactsList.innerHTML += "<p><strong>Name:</strong> " + contacts[i].name + "<br><strong>Phone Number:</strong> " + contacts[i].phoneNumber + "</p>";
    }
}

function displaySearchResults(foundContacts) {
    var contactsList = document.getElementById('contactsList');
    contactsList.innerHTML = "<h3>Search Results:</h3>";
    if (foundContacts.length > 0) {
        for (var i = 0; i < foundContacts.length; i++) {
            contactsList.innerHTML += "<p><strong>Name:</strong> " + foundContacts[i].name + "<br><strong>Phone Number:</strong> " + foundContacts[i].phoneNumber + "</p>";
        }
    } else {
        contactsList.innerHTML += "<p>No matching contacts found.</p>";
    }
}
