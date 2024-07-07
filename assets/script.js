const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let currentslideindex = 0;
let arraydot = [];

/** **/
let left = document.querySelector("#banner #left");
let right = document.querySelector("#banner #right");
/** **/
let slidepic =document.querySelector("#banner .banner-img");
let textdescrip = document.querySelector("#banner p");
/**Def des variable init **/
slidepic.src = `/assets/images/slideshow/${slides[currentslideindex].image}`;
textdescrip.innerHTML = slides[currentslideindex].tagLine;
/**variable pour crée un tableau du nb de dot**/


/**On ajoute un element p avec la class dot pour chaque élément de notre tableau **/
slides.forEach(slides => {
	let adddots = document.createElement("p");
 	adddots.classList.add("dot");
	document.querySelector("#banner .dots").append(adddots);
	arraydot.push(adddots);	
	arraydot[currentslideindex].classList.add("dot_selected");

});




document.querySelectorAll("#right, #left").forEach(arrow => arrow.addEventListener("click", function() {
	if (arrow.id === "right") {
	  currentslideindex=(currentslideindex+1) % slides.length;
	} else if (arrow.id === "left") {
	  currentslideindex=(currentslideindex-1 + slides.length ) % slides.length;
	}
	arraydot.forEach(dot => dot.classList.remove("dot_selected"));
	arraydot[currentslideindex].classList.add("dot_selected");
	slidepic.src = '.'+`/assets/images/slideshow/${slides[currentslideindex].image}`;
	textdescrip.innerHTML = slides[currentslideindex].tagLine;
	console.log(currentslideindex)
  }));