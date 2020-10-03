var push = document.getElementById("pushMe");
var hex = document.getElementById('hex');

function generateRandmoColor() {
    var letter = "0123456789abcdef";

    var hex = "#";
    for (var i = 0; i < 6; i++) {
        hex += letter[Math.floor(Math.random() * 16)];
    }
    return hex;
}

// daniel was here from window
push.addEventListener("click", function (e) {
    e.preventDefault();
    var res = generateRandmoColor();
    hex.innerHTML = 'The hex is: ' + res;
    document.body.style.backgroundColor = res;
});


