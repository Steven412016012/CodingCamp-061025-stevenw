greetUser();


/// Function to greet the user by name
function greetUser() {
    /// Prompt the user to enter their name
    let userName = prompt("Enter your name:");

    /// Display a welcome message with the user's name
    document.getElementById("welcome-speech").innerHTML = userName;
}


/// Function to validate the contact form
function validateForm() {
    /// Initialize variables to store form input values
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let message = document.getElementById("message-input").value;
    
    //radio buttons
    var radios = document.getElementsByName("gender");
    var i = '';

    /// Check if any field is empty and alert the user
    if (name === "" || email === "" || message === "" || (!radios[0].checked && !radios[1].checked)) {

        /// If any field is empty, alert the user
        alert("Please fill in all fields.");
    } else {
        /// If all fields are filled, thank the user
        for (i = 0; i < radios.length; i++) {
            if (radios[i].checked === "true")
            gender = radios[i].value;
        }
        alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message + "\nThank you for contacting us, " + name + "!");
    }

    //radio buttons validation
    /*while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) alert("Must check some option!");

    return formValid;*/
}