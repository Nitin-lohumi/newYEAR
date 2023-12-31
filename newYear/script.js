let count1=document.getElementById("count");
let emoji1=document.getElementById("emoji1");
let heading1=document.getElementById("heading1");
let heading2=document.getElementById("heading2");
let emoji2= document.getElementById("emoji2");
let new_year=document.getElementById("new");
let welcome=document.getElementById("welcome");
let emoji3=document.getElementById("emoji3");
let a=5;

function countdown() {
    a--;
	document.getElementById("count").innerHTML = a +"...";
	if (a>=0) {
		setTimeout(countdown, 1000);
	}
    if(a==0){
        heading1.style="display:none;";
        heading2.style="display:block;";
    }
};

