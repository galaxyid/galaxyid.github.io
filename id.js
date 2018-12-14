// DONT BE LOOKIN AT MY JAVASCRIPT
function disable(trait, btn) {
	var elements = document.getElementsByClassName(trait)
	var i;
	
	for (i = 0; i < elements.length; i++) {
		elements[i].style.textDecoration = "line-through";
	}	
}

function enable(trait, btn) {
	var elements = document.getElementsByClassName(trait)
	var i;
	
	for (i = 0; i < elements.length; i++) {
		elements[i].style.textDecoration = "none";
	}	
}

var choices = [
    ["spiral", "elliptical", "irregular"],
    ["bulge", "nobulge"],
    ["disk", "nodisk"],
    ["halo", "nohalo"],
    ["arms", "noarms"],
]

var enabled_color = "#252525";
var disabled_color = "#9b4dca";

// reg_btn(question_number)
function reg_btn(answers, q_num) {
    answer = answers[q_num];
    var button1 = document.getElementById(answer[0] + "btn");
    var button2 = document.getElementById(answer[1] + "btn");
    var button3 = document.getElementById(answer[2] + "btn");

    button1.onclick = function(){
        disable(answer[1], button1);
        disable(answer[2], button1);

        button1.style.backgroundColor = enabled_color;
        console.log(button1.disabled);
        button2.style.backgroundColor = disabled_color;

        if (button3 !=null){
            button3.style.backgroundColor = disabled_color;
        }
    }
    button2.onclick = function(){
        disable(answer[0], button2);
        disable(answer[2], button2);
        
        button2.style.backgroundColor = enabled_color;
        button1.style.backgroundColor = disabled_color;

        if (button3 !=null){
            button3.style.backgroundColor = disabled_color;
        }
    }

    if (button3 != null) {
        button3.onclick = function(){
            disable(answer[0], button3);
            disable(answer[1], button3);

            button3.style.backgroundColor = enabled_color;
            button2.style.backgroundColor = disabled_color;
            button1.style.backgroundColor = disabled_color;
            
        }
    }
}

var i;
for (i = 0; i <= 4; i++) {
    reg_btn(choices, i);
}
