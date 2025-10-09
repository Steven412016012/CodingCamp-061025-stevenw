function greetUser() {
    let userName  = prompt("Please enter your name:");
    document.getElementById("welcome-speech").innerHTML = userName;
}

function validateForm() {
    /// Initialize variables to store form data
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let message = document.getElementById("message-input").value;

    // check if any field is empty
    if (name === "" || email === "" || message === "") {
        /// if any field is empty, show an alert
        alert("All fields must be filled out")
    } else {
        /// if all fields are filled, show a thank you message
        alert("Thank you for your message, " + name + "!");
    }
}