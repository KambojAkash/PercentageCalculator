let text = document.getElementById("text");
let btn = document.getElementById("btn");
let reset = document.getElementById("reset");


btn.addEventListener("click", () => {
    if (text.value == "") {
        alert("Enter number for calculation");
        text.value = NULL;
    }
    let ans = eval(text.value);
    text.value = ans;
})
reset.addEventListener("click", () => {
    text.value = "";
})