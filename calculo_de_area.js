function areaTriangulo(base,altura) {
	let area = (base * altura) / 2
	console.log(`El area del triangulo de base ${base} y altura ${altura} es de ${area.toFixed(2)}`)
}

function areaCirculo(radio) {
	let area = Math.PI * radio**2
	console.log(`El area de una circunferencia de radio ${radio} es ${area.toFixed(2)}`)
}

areaTriangulo(4,2)
areaCirculo(1)
