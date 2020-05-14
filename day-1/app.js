var push = document.getElementById('pushMe'); 

function generateRandmoColor() {
    var letter = "0123456789abcdef"
    var hex = "#"
    for (var i = 0; i < 6; i++) {
        hex += letter[Math.floor(Math.random() * 16)]
    }
    return hex;
}

push.addEventListener('click', function(e){
    e.preventDefault()
    var res = generateRandmoColor();
    document.body.style.backgroundColor = res;
})

