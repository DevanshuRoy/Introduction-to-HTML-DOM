// Javascript File

function validate(e) {

    e.preventDefault(); // Prevent form submission
    const email=document.getElementById("email").value;
    const pass=document.getElementById("password").value;
    const age=document.getElementById("age").value;
    const msgBox=document.getElementById("message");

    let msg="";

    if (email=="") {
        msg="Please enter a valid email.";
        msgBox.style.color="red";
    }

    else if (pass=="") {
        msg="Password must be at least 8 characters.";
        msgBox.style.color="red";
    }

    else if (age=="") {
        msg="Age must be between 12 and 50.";
        msgBox.style.color="red";
    }

    else {
        msg="Login successful!";
        msgBox.style.color="green";
    }

    msgBox.innerText=msg; // .innerHTML can also be used

}