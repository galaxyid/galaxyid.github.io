var spiralbtn = document.getElementById("spiralbtn");
var ellipticalbtn = document.getElementById("ellipticalbtn");
var irregularbtn = document.getElementById("irregularbtn");

var nobulgebtn = document.getElementById("nobulgebtn");
var bulgebtn = document.getElementById("bulgebtn");

var nodiskbtn = document.getElementById("nodiskbtn");
var diskbtn = document.getElementById("diskbtn");

var nohalobtn = document.getElementById("nohalobtn");
var halobtn = document.getElementById("halobtn");

var noarmsbtn = document.getElementById("noarmsbtn");
var armsbtn = document.getElementById("armsbtn");

function disable(trait) {
	var elements = document.getElementsByClassName(trait)
	var i;
	
	for (i = 0; i < elements.length; i++) {
		elements[i].style.textDecoration = "line-through";
	}	
}

// Question 1
spiralbtn.onclick = function(){
	disable("elliptical");
	disable("irregular");
}
ellipticalbtn.onclick = function(){
	disable("spiral");
	disable("irregular");
}
irregularbtn.onclick = function(){
	disable("spiral");
	disable("elliptical");
}

// Question 2
nobulgebtn.onclick = function(){
    disable("bulge");
}
bulgebtn.onclick = function(){
    disable("nobulge");
}

// Question 3
nodiskbtn.onclick = function(){
    disable("disk");
}
diskbtn.onclick = function(){
    disable("nodisk");
}

// Question 4
nohalobtn.onclick = function(){
    disable("halo");
}
halobtn.onclick = function(){
    disable("nohalo");
}

// Question 5
noarmsbtn.onclick = function(){
    disable("arms");
}
armsbtn.onclick = function(){
    disable("noarms");
}
