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

// reg_btn(question_number)
function reg_btn(answers, q_num) {
    answer = answers[q_num];
    var button1 = document.getElementById(answer[0] + "btn");
    var button2 = document.getElementById(answer[1] + "btn");
    var button3 = document.getElementById(answer[2] + "btn");

    button1.onclick = function(){
        enable(answer[0], button1);
        disable(answer[1], button1);
        disable(answer[2], button1);

        button1.style.backgroundColor = "#252525";
        button2.style.backgroundColor = "#9b4dca";

        if (button3 !=null){
            button3.style.backgroundColor = "#9b4dca";
        }
    }
    button2.onclick = function(){
        disable(answer[0], button2);
        enable(answer[1], button2);
        disable(answer[2], button2);
        
        button2.style.backgroundColor = "#252525";
        button1.style.backgroundColor = "#9b4dca";

        if (button3 !=null){
            button3.style.backgroundColor = "#9b4dca";
        }
    }

    if (button3 != null) {
        button3.onclick = function(){
            disable(answer[0], button3);
            disable(answer[1], button3);
            enable(answer[2], button3);

            button3.style.backgroundColor = "#252525";
            button2.style.backgroundColor = "#9b4dca";

            button1.style.backgroundColor = "#9b4dca";
            
        }
    }
}

var i;
for (i = 0; i <= 4; i++) {
    reg_btn(choices, i);
}
