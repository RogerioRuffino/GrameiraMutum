const preco = document.getElementById('preco');
let valor =  document.getElementById('valor');

let input = document.getElementById('input');

let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');


// now addEventListener
preco.addEventListener('keyup', myResult);
preco.addEventListener('keyup', myResult);
input.addEventListener('keyup',myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);
// console.log(input);
// taking initial values
option_from = inputType.value;
option_to = resultType.value;
option_to = resultapetes.value;
option_to = valor.value;




function myResult(){
    option_from = inputType.value;
    option_to = resultType.value;
	

  
    if(option_from === "m2" && option_to==="pal"){
		result.value = (Math.floor(Number(input.value) / 50));
		resultapetes.value = (Number(input.value) % 50*4);
		valor.value = input.value * Number(preco.value);
	} 

	//===================================================

    if(option_from === "R$" && option_to==="pal"){
		result.value = (Math.floor((Number(input.value)) / (50*Number(preco.value))));
		resultapetes.value = (Math.floor((Number(input.value)) % (50*Number(preco.value))))/ Number(preco.value)*4;
		valor.value = Number(input.value);
	}else if(option_from === "R$" && option_to==="tapetes"){

		//this is m2 to R$ formula 
		result.value = Number(input.value)/(50*Number(preco.value));

	}else if(option_from === "R$" && option_to==="R$"){
		//this is m2 to m2 formula 
		result.value =  Number(input.value);
	}else if(option_from === "R$" && option_to==="pal"){
		//this is m2 to m2 formula 
		result.value = Number(input.value)/600;
	}

	// //===================================================

    // if(option_from === "tapetes" && option_to==="m2"){
	// 	//this is tapetes to tapetes formula 
	// 	result.value = Number(input.value)/4;
	// }else if(option_from === "tapetes" && option_to==="tapetes"){

	// 	//this is m2 to R$ formula 
	// 	result.value = Number(input.value);

	// }else if(option_from === "tapetes" && option_to==="R$"){
	// 	//this is m2 to m2 formula 
	// 	result.value = input.value * 3;
	// }else if(option_from === "tapetes" && option_to==="pal"){
	// 	//this is m2 to m2 formula 
	// 	result.value = Number(input.value) / 200;
	// }

	// //===================================================

    // if(option_from === "pal" && option_to==="m2"){
	// 	//this is tapetes to tapetes formula 
	// 	result.value = Number(input.value)*50;
	// }else if(option_from === "pal" && option_to==="tapetes"){

	// 	//this is m2 to R$ formula 
	// 	result.value = Number(input.value)*200;

	// }else if(option_from === "pal" && option_to==="R$"){
	// 	//this is m2 to m2 formula 
	// 	result.value =  Number(input.value)*50*12;
	// }else if(option_from === "pal" && option_to==="pal"){
	// 	//this is m2 to m2 formula 
	// 	result.value = (Number(input.value));
	// }



}
