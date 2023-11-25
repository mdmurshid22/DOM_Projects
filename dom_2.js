function changeColor()
{
	date=new Date();
	hour=date.getHours();
	minute=date.getMinutes();
	second=date.getSeconds();
	fulldate=date.toLocaleTimeString()
	x=document.getElementById("cur_dd_tt");
	x.innerHTML=fulldate;
	if(second%2 == 0)
	{
		x.style.color="green";
	}
	else
	{
		x.style.color="blue";
	}
}
function start()
{
clear=setInterval(changeColor,1000);
}
function stop()
{
clearInterval(clear);
}