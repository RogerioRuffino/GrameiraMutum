

const preco = document.getElementById('preco');
const precofrete = document.getElementById('precofrete');


let ent = document.getElementById('input');
let result = document.getElementById('result');

let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');

let display1 = document.getElementById('div1').style.display;

let display2 = document.getElementById('div2').style.display;

const callButton = document.getElementById('call-program');
callButton.addEventListener('click', () => {
  // code to call another program
  // for example, redirect to another HTML page:
  window.location.href = '/AppAreaCalc/index.html';
});


// taking initial values
precofrete.addEventListener('keyup', myResult );
preco.addEventListener('keyup', myResult );
ent.addEventListener('keyup',myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);


option_from = inputType.value;
option_to = resultType.value;
option_to = resultapetes.value;
option_to = valor.value;
option_to = m2.value;
option_to = r$frete.value;


// ========================================================
// ========================================================

function strtonum(fl){
		
	if(fl === ""){
		fl =  0;
	}
else {
	fl = fl.replace(".","");
    fl = fl.replace(",",".");
	fl = parseFloat(fl).toFixed(2);
	 }
	return fl;
}

function numberToBr(numero) {
    var numero = numero.toFixed(2).split('.');
    numero[0] =  numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}



function numtostr(str,n) {

var elemento = document.getElementsByTagName('input')[n];
var valor = elemento.value;

valor = valor + '';
valor = parseInt(valor.replace(/[\D]+/g, ''));
valor = valor + '';
valor = valor.replace(/([0-9]{2})$/g, ",$1");

if (valor.length > 6) {
 valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");  
}

elemento.value = valor;
if(valor == 'NaN') elemento.value = '';

}
// ============== function myResult ====================

function myResult(){

    option_from = inputType.value;
    option_to = resultType.value;

// ==============   m2 para PluginArray, tap e r$ ===

    if(option_from === "m2" && option_to==="pal"){

		document.getElementById('div1').style.display = 'block';
        document.getElementById('div2').style.display = 'none';
		var precoToNum = strtonum(preco.value);
		var pfToNum = strtonum(precofrete.value);
		var entradaToNUm = strtonum(input.value);
		var tapetesToNum = ((entradaToNUm) % 50*4);
		var reaisTotalToNum = (entradaToNUm * precoToNum);

		
		result.value = numberToBr(Math.floor(Number(entradaToNUm) / 50));
		resultapetes.value = numberToBr(tapetesToNum);
		valor.value = numberToBr(reaisTotalToNum);
		r$frete.value = numberToBr(pfToNum*entradaToNUm);
	}
	
// ==============   r$ para PluginArray, tap e m2 ===

	else if(option_from === "R$" && option_to==="pal"){
		document.getElementById('div2').style.display = 'block';
    	document.getElementById('div1').style.display = 'none';

		var pToNum = strtonum(preco.value);
		var pfrToNum = strtonum(precofrete.value);
		var eToNUm = strtonum(ent.value);
		var tToNum = (((Number(eToNUm)) % ((50*pToNum))) / (pToNum)*4);
		var m2ToNum = eToNUm/pToNum;
		

		result.value = (Math.floor((eToNUm) / (50*(pToNum))));
		resultapetes.value = numberToBr(tToNum);
		m2.value = numberToBr(eToNUm/pToNum);
		r$frete.value = numberToBr(m2ToNum*pfrToNum);
		
	}}
