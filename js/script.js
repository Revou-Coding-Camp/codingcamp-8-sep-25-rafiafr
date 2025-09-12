welcomeMessage();

//Welcome message function

function welcomeMessage() {
    let username = prompt("Please enter your name:");
    if (username) {
        document.getElementById("username").innerText = username;
    }
    
}

// Message Us Form Submission

function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // validation
    if (name === "" || email === "" || message === "") {

        alert("All fields must be filled out");

    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address");
    } else if (name.includes("<") || name.includes(">")) {
        alert("That symbol is not allowed in the name field");
    }
    
    else {
        alert("Form submitted successfully! Arigatou, " + name + "!");

        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
        document.getElementById('pilih').value = "lainnya"; // Reset select ke "Lainnya"
    }
}   
