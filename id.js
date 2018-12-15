// DONT BE LOOKIN AT MY JAVASCRIPT
function disable(trait, btn) {
	let elements = document.getElementsByClassName(trait)
	
	for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("cancel");
	}	
}

function enable(trait, btn) {
	let elements = document.getElementsByClassName(trait)
	
	for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("cancel");
	}	
}

let choices = [
    ["spiral", "elliptical", "irregular"],
    ["bulge", "nobulge"],
    ["disk", "nodisk"],
    ["halo", "nohalo"],
    ["arms", "noarms"],
]

function reg_btn(answers, q_num) {
    answer = answers[q_num];
    let button1 = document.getElementById(answer[0] + "btn");
    let button2 = document.getElementById(answer[1] + "btn");
    let button3 = document.getElementById(answer[2] + "btn");

    button1.onclick = function(){
        disable(answer[1], button1);
        disable(answer[2], button1);
        button1.classList.add("enabledbtn");

        button2.disabled = true;

        if (button3 !=null){
            button3.disabled = true;
        }
    }
    button2.onclick = function(){
        disable(answer[0], button2);
        disable(answer[2], button2);
        button2.classList.add("enabledbtn");
        
        button1.disabled = true;

        if (button3 !=null){
            button3.disabled = true;
        }
    }

    if (button3 != null) {
        button3.onclick = function(){
            disable(answer[0], button3);
            disable(answer[1], button3);
            button3.classList.add("enabledbtn");

            button1.disabled = true;
            button2.disabled = true;
        }
    }
}

for (let i = 0; i <= 4; i++) {
    reg_btn(choices, i);
}
