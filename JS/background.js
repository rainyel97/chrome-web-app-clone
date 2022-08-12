const images = ["back1.png", "back2.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `Img/${chosenImage}`;
bgImage.classList.add("back");
document.body.appendChild(bgImage);
