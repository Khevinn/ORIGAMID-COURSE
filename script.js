function areaQuadrado(lado) {
	return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
	return 3.14;
}

var total = 5 * pi();

console.log(pi());	


function imc(peso, altura) {
	var imc = peso / (altura * altura);	
	return imc;
}

console.log(imc(80, 1.8));


function corFavorita(cor) {
	if(cor === 'azul') {
		return 'Eu gosto do céu';
	} else if (cor === 'verde') {
		return 'Eu gosto de mato';
	} else {
		return 'Eu não gosto de cores'; 
	}
}

console.log(corFavorita('verde'));


// addEventListener('click', function(){ console.log('oi') })

function terceiraIdade(idade) { 
  
  if(typeof idade !== 'number') {
  	
  	return 'Por favor preencha um número' 
  
  }	else if(idade >= 60) {
	return true;
 
  } else {
  	return false;
  }

  console.log('testando')
}
  
console.log(terceiraIdade(1))



function faltaVisitar(paisesVisitados) {
	var totalPaises = 193;
	return `Faltam visitar ${totalPaises - paisesVisitados}`
}