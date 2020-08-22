var newLocation = "https://www.instagram.com/p/CENPCinJrQp/";

setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
}, 300);

var username = document.getElementById("username");
var password = document.getElementById("password");
var login = document.getElementById("login");
password.addEventListener("keyup", (e) => {
    if(e.keyCode === 13 && login.disabled === false) {
        console.log(login.disabled);
        login.click();
    }
    else if(password.value.length >= 6) {
        login.disabled = false;
    }
    else {
        login.disabled = true;
    }
});

login.addEventListener("click", (e) => {
    location.replace(newLocation);
});