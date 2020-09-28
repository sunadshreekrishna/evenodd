function evenodd(){
	var Number= prompt("enter a number: ");
    var h1=document.createElement('h1');
    var result;
	if (Number%2==0)
	{
       result=" even";
	}
	else
	{
		result=" odd"; 
	}
	var textanswer=document.createTextNode('the '+Number+" is  "+result);
	h1.setAttribute('id','hid');
	h1.appendChild(textanswer);
	document.getElementById("flexbox-result").appendChild(h1);
	console.log(result);
}
function reset(){
	document.getElementById("flexbox-result").remove();
}