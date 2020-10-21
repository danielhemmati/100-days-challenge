// (function () {
//     const buttons = document.querySelectorAll(".counterBtn");
//     let count = 0;

//     //Add event listeners and functionailty to each button
//     buttons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             if (button.classList.contains("prevBtn")) {
//                 count--;
//             } else if (button.classList.contains("nextBtn")) {
//                 count++;
//             }

//             //Select the counter text
//             const counter = document.querySelector("#counter");
//             counter.textContent = count;

//             if (count < 0) {
//                 counter.style.color = "red";
//             } else if (count > 0) {
//                 counter.style.color = "green";
//             } else {
//                 counter.style.color = "#333333";
//             }
//         });
//     });
// })();

// i don't know why but between number -1 -2 and 1 2 the add and lower button
// act really weird. basically when you are on -1 and you push add button
// you will get the -2... let's implement this with iife again
// window.onload = function () {
//     // this one is way better than for loop
//     const counterBtn = document.querySelectorAll(".counterBtn");
//     const counterElement = document.querySelector("#counter");
//     var counter = 0;

//     counterBtn.forEach(function (button) {
//         button.addEventListener("click", function () {

//             var nextButton = button.classList.contains("nextBtn");
//             var prevBtn = button.classList.contains("prevBtn");

//             if (nextButton) {
//                 // counterElement.textContent = counter++;
//                 counterElement.innerHTML = counter++;
//                 console.log(counterElement.textContent);
//             } else if (prevBtn) {
//                 counterElement.textContent = counter--;
//                 console.log(counterElement.textContent);
//             }

//             if (counter < 0) {
//                 counterElement.style.color = "red";
//             } else if (counter > 0) {
//                 counterElement.style.color = "green";
//             } else if (counter === 0) {
//                 counterElement.style.color = "#333333";
//             }
//         });
//     });
// };

// my vm is faster than my window LOL :|
(function () {
    var counterBtn = document.querySelectorAll(".counterBtn");
    var counter = 0;

    counterBtn.forEach(function (button) {
        button.addEventListener("click", function () {
            if (button.classList.contains("nextBtn")) {
                counter++;
            } else if (button.classList.contains('prevBtn')) {
                counter--;
            }

            // if this two line don't be here, the program won't work
            var counterElement = document.querySelector("#counter");
            counterElement.textContent = counter;

            if (counter < 0) {
                counterElement.style.color = 'red'
            } else if (counter > 0) {
                counterElement.style.color = 'green'
            } else {
                counterElement.style.color = '#333333'
            }
        });
    });
})();
