const preco = document.getElementById('preco');

let input = document.getElementById('input');
let result = document.getElementById('result');

let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');

let display1 = document.getElementById('div1').style.display;

let display2 = document.getElementById('div2').style.display;


// now addEventListener
preco.addEventListener('keyup', myResult);
input.addEventListener('keyup',myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);

// taking initial values
option_from = inputType.value;
option_to = resultType.value;
option_to = resultapetes.value;
option_to = valor.value;
option_to = m2.value;

 	



function myResult(){
    option_from = inputType.value;
    option_to = resultType.value;

    if(option_from === "m2" && option_to==="pal"){

		document.getElementById('div1').style.display = 'block';
       		document.getElementById('div2').style.display = 'none';

		result.value = (Math.floor(Number(input.value) / 50));

		resultapetes.value = (Number(input.value) % 50*4);

		valor.value = input.value * Number(preco.value);
		
		m2.value = Number(input.value);
		
	} 

	//===================================================

	if(option_from === "R$" && option_to==="pal"){
		document.getElementById('div2').style.display = 'block';
    		document.getElementById('div1').style.display = 'none';

		result.value = (Math.floor((Number(input.value)) / (50*Number(preco.value))));
		resultapetes.value = (Math.floor((Number(input.value)) % (50*Number(preco.value))))/ Number(preco.value)*4;
		valor.value = Number(input.value);
		m2.value = Number(input.value)/12;
		


	}
	//else if(option_from === "R$" && option_to==="tapetes"){
	// 	result.value = Number(input.value)/(50*Number(preco.value));
	// }else if(option_from === "R$" && option_to==="R$"){
	// 	result.value =  Number(input.value);
	// }else if(option_from === "R$" && option_to==="pal"){
	// 	result.value = Number(input.value)/600;
	// }


}
