// Your JS goes here

window.onload= function(){
	setInterval(function(){
		reStart();
	},2000);

	start();
	


};



/*lashing Colors*/

function start(){
	for (var i=0; i<81; i++){
		var div = document.createElement("div");
		div.style.width="11.1%";
		div.style.paddingBottom="11.1%";
		div.style.float="left";
		document.body.appendChild(div);
	}
}
function reStart(){
	for (var i=0; i<81; i++){
		if(i%2===0){
			document.getElementsByTagName("div")[i].style.backgroundColor="#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
		}
		else{
			document.getElementsByTagName("div")[i].style.backgroundColor="#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
		}
	}
	


}








