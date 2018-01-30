var numColours = 6;
var colors= getColors(numColours)

var squares = document.querySelectorAll(".square")
var pickedColor = getColor();
var colorDisplay = document.getElementById("colorDisplay")
var message = document.getElementById("message")
var h1 = document.querySelector("h1")

var resetButton = document.querySelector("#reset")

var hardBtn = document.getElementById("hardBtn")
var easyBtn = document.getElementById("easyBtn")



fillSquares();
function fillSquares(){
		colorDisplay.textContent = pickedColor;
		for(var i=0;i<squares.length;i++){
		
		if(colors[i]){
			//init square colors
			squares[i].style.backgroundColor = colors[i];
			//add event listeners
			squares[i].addEventListener("click",function(){
				if (this.style.backgroundColor === pickedColor){
					message.textContent = "Correct!!";
					h1.style.backgroundColor = this.style.backgroundColor;
					fillColor(this.style.backgroundColor);
					resetButton.textContent = "Play Again?"
					sel = document.querySelector(".selected");
					//sel.style.backgroundColor=this.style.backgroundColor;
				}
				else{
					this.style.backgroundColor = "#232323";
					message.textContent = "Try Again"
				}
			});
			squares[i].style.display = "block"
		}

		else{
			squares[i].style.display = "none"
		}
		
		
	}
}

function getColor(){
	r = Math.floor(Math.random()*colors.length);
	return colors[r];
}

function fillColor(c){
	//console.log("in fillColor")
	for(var i=0;i<squares.length;i++){
		//console.log("in fillColor " +i)
		squares[i].style.backgroundColor = c
	}
}

function getRandomColor(){
	return "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
}

function getColors(n){
	var a = [];
	for(var i=0;i<n;i++){
		a.push(getRandomColor());
	}
	return a;
}

function reset(){
	colors= getColors(numColours);
	pickedColor = getColor();
	fillSquares();
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	message.textContent = "";
}
resetButton.addEventListener("click",function(){
	reset();
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected")
	numColours = 6;
	reset()

})

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected")
	numColours = 3;
	reset()
})