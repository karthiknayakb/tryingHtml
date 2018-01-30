
function checkMax(){
	max = parseInt(document.querySelector("#maxs").innerHTML);
	p1 = parseInt(document.querySelector("#p1s").innerHTML);
	p2 = parseInt(document.querySelector("#p2s").innerHTML);
	return max>p1 & max>p2
}

function updateMax(){
	document.querySelector("#maxs").innerHTML = document.querySelector("#playto").value
}

function resets(){
	document.querySelector("#p1s").innerHTML = 0;
	document.querySelector("#p2s").innerHTML = 0;
	document.querySelector("#p1s").classList.remove("winner");
	document.querySelector("#p2s").classList.remove("winner");
}

function updateP1(){
	if(checkMax()){
		document.querySelector("#p1s").innerHTML = parseInt(document.querySelector("#p1s").innerHTML) + 1;
		if(!checkMax()){
			document.querySelector("#p1s").classList.toggle("winner");
		}
	}
	
}

function updateP2(){
	if(checkMax()){
		document.querySelector("#p2s").innerHTML = parseInt(document.querySelector("#p2s").innerHTML) + 1;
		if(!checkMax()){
			document.querySelector("#p2s").classList.toggle("winner");
		}
	}

}