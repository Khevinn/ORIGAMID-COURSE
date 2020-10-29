function isTruthy(dado) {
	return !dado;
}

console.log(isTruthy())


function perimetroQuadrado(lado) {
	return lado * 4;
}

console.log(perimetroQuadrado(100))


function nomeCompleto(nome, sobrenome) {
	  return nome + ' ' + sobrenome
	  // `${nome + sobrenome}` template é coisa linda
}

console.log(nomeCompleto('Khevin','Karlos'))


function isEven(numero) {
	if (numero % 2 == 0) {
	  return 'É par'
	  
  } else  {
	  return 'Não é par'
  } 
}

console.log(isEven(5))



function type (dado) {
  	return typeof dado;
}

console.log(type())



addEventListener('scroll', function(){ 
	console.log('Khevin Karlos')
 })

