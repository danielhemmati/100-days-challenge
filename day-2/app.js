window.onload = function () {
    var generate = document.getElementById("generate-btn");
    var quoteOnThePage = document.getElementById("quote");
    var author = document.querySelector(".author");
    var remove = document.getElementById("remove");
    const quotes = [
        {
            quote:
                "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
            author: " Life",
        },
        {
            quote:
                "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
            author: "John Kenneth Galbraith",
        },
        {
            quote:
                "God save me from my friends. I can protect myself from my enemies.",
            author: "Claude Louis Hector de Villars ",
        },
        {
            quote:
                "The price of anything is the amount of life you exchange for it.",
            author: "David Thoreau",
        },
        {
            quote:
                "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
            author: "Charles Lindbergh",
        },
        {
            quote:
                "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
            author: " Tyne Daly",
        },
    ];

    function randomQuote() {
        return Math.floor(Math.random() * 6);
    }

    // if you call the function in anytime you will get a new number.
    // because of that, we will call it one time and we will hold info
    // in one variable. then we passed that to qutoe and author so then
    // we are sure that quote have a right author
    generate.addEventListener("click", function () {
        var holdOneNumber = randomQuote();
        quoteOnThePage.innerHTML = quotes[holdOneNumber]["quote"];
        author.innerHTML = quotes[holdOneNumber]["author"];
        // it's not really necessary, but hey let's be there
        remove.innerHTML = "";
    });

};
