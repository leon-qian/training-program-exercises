console.log("Exercise 2");

const main = document.querySelector("#display-box");

const texts = Array(3)
    .fill(1)
    .map((x, i) => x + i)
    .map(n => document.getElementById(`text${n}`));

const changeToText = (n => {
    main.innerHTML = texts[n - 1].innerHTML;
});
