function create_html_tags()
{
	cont=document.getElementById("input_text").value;
	para=document.createElement("p");
	data=document.createTextNode(cont);
	para.appendChild(data);
	my_div=document.getElementById("div_1");
	my_div.appendChild(para);

}