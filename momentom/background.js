const images =[
    "1.jpg",
    "2.jpeg",    
    "3.jpeg",

];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src =`${chosenImage}`;
document.body.appendChild(bgImage);