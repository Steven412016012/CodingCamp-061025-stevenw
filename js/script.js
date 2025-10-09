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

    /// Check if any field is empty and alert the user
    if (name === "" || email === "" || message === "") {
        /// If any field is empty, alert the user
        alert("Please fill in all fields.");
    } else {
        /// If all fields are filled, thank the user
        alert("Thank you for your message, " + name + "!");
    }
}