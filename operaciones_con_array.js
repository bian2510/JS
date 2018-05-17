function suma(...argument) {
	return argument.reduce(function (acum, numero){
		acum += numero
		return acum
	},0)
}

const dobles = (...argument) => argument.map(numero => numero * 2)

const pares = (...argument) => argument.filter(numero => numero%2 == 0)

suma(2,3,4,5)
dobles(2,4,6)
pares(2,3,5,6)