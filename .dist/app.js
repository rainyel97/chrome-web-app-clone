const title = document.querySelector("div.hello:first-child h1");
//console.log(title);
function clickListener() {
    alert("title was clicked!");
}

function mouseent() {
    title.style.color = "blue";
    title.innerText = "mouse is here!";
}

function mouseleav() {
    title.style.color = "red";
    title.innerText = "mouse is out!";
}

function handleWinodwResize() {
    document.body.style.backgroundColor = "orange";
}


title.onclick = clickListener;
title.onmouseenter = mouseent;
title.onmouseleave = mouseleav;

window.addEventListener("resize", handleWinodwResize);
window.addEventListener("copy", () => {
    alert("you can't copy");
});