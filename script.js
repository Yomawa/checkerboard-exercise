// Your JS goes here
/*var newText =document.createElement("h1");//create element
newText.inerText="Hello there";//call element that has difined set some thext
newText.style.color="red";

var parent = document.getElementsByTagName("h1")[0];//get element by tag name
parent.appendChild(newText);//appendChiled it is called


/*if we do not set verilbe together

document.querySelector("h1").appendChiled(newElement);



*/
/*chaning elements together YOU CAN NOT TO THIS TOGETHER*/


/*document.createElement = document.createElement("h1").innerText = "Hello";*/

/*var newDiv = document.createElement("div");
newDiv.style.width="50px";
newDiv.style.height="50px";
newDiv.style.float="left";
newDiv.style.backgroundColor = "red";
document.body.appendChild(newDiv);

var div2 = document.createElement("div");
div2.style.width="50px";
div2.style.height="50px";
div2.style.float="left";
div2.style.backgroundColor = "blue";
document.body.appendChild(div2);*/

/*var printDiv = 0;
function print(){
	if(printDiv % 2 === 0){
		console.log("newDiv");
		printDiv++;
	}
	else{
		console.log("div2");
	}
	for (newDiv = 0; newDiv<10; newDiv++){
		console.log("newDiv");
	}
}
*/

for (var i=0; i<63; i++){
	var div = document.createElement("div");
	div.style.width="11.1%";
	div.style.paddingBottom="11.1%";
	div.style.float="left";
	/*div.style.backgroundColor="red";*/
	document.body.appendChild(div);
	
	if(i%2===0){
		div.style.backgroundColor="#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
	}
	else{
		div.style.backgroundColor="#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
	}
	}

	
