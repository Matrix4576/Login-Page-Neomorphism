function alertBox() {
    var password = document.getElementById('password').value;
    var lenght = password.length;
    var email = document.getElementById('email').value;
    if (lenght < 8 || password == "") {
        alert("Enter a Password that is at least 8 characters long");
    }

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    if (validateEmail(email) == false || email == "") {
        alert("Please enter a valid email address");
    } 
}
