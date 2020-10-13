
(function() {
    const form = document.querySelector('#message-form');

    form.addEventListener('submit', function (e) {
        // prevent from default submission
        e.preventDefault();

        var message = document.querySelector('#message')
        var messageContent = document.querySelector('.message-content');

        messageContent.innerHTML = message.value;
    });
   
})()// i waste 5 min of life for you 

// here is another method 
// window.onload = function () {
//     const form = document.querySelector("#message-form");

//     form.addEventListener("submit", function (e) {
//         e.preventDefault()
//         const message = document.querySelector("#message");
//         console.log(message);
//     });
// };
