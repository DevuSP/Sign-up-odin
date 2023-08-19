function displayDetails() {
    // Recieving Data 
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let phoneNumber = document.getElementById("phoneNumber").value

    // Sending Data
    let fname = document.getElementById("fname")
    let lname = document.getElementById("lname")
    let cemail = document.getElementById("cor-email")
    let cphoneNumber = document.getElementById("cor-phoneNumber")
    if(firstName != ""){lname.innerHTML = lastName} else {lname.innerHTML = "NULL"}
    fname.innerHTML = firstName
    cemail.innerHTML = email
    if(phoneNumber != ""){cphoneNumber.innerHTML = phoneNumber} else {cphoneNumber.innerHTML = "NULL"}
}


function checkPassword() {
    // Recieving Data 
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirmPassword").value
    // if password correct show this 
    let correctPassword = document.getElementById("correctPassword")
    // if password wrong stay in same page 
    let container = document.getElementById("container")
    let wrongPassword = document.getElementById("wrongPassword")
    if (password === confirmPassword) {
        container.classList.toggle("displayNone")
        correctPassword.classList.toggle("displayFlex")
        displayDetails()
    }
    else {
        wrongPassword.innerHTML = "Password did not match. Please try again."
    }
}