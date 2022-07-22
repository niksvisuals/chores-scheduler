let option = document.getElementsByTagName('h4')[0];


console.log(option);


function mouseClick(id){
	let category = id.value;
	console.log(category);
	option.innerHTML = 'We have handpicked tags and customisations for '+category;
	option.style.color = 'blue';
}