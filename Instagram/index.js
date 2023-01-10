function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var login = document.getElementById("login");

    if (username == "" && password != "") {
        alert("input username")
    } else if (username != "" && password == "") {
        alert("input password")
    } else if (username == "" && password == "") {
        alert("input username and password")
    } else {
        alert("Check your email or phone for verification")
    }
}