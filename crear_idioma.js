// 1) Si la palabra termina con "ar", se le quitan esas dos letras
// 2) Si la palabra inicia con "z" se le añade "pe" al final
// 3) Si la palabra traducida tiene 10 letras o mas, se debe partir en 2 por la mitad y unir con un guion medio "-"

function Platzom(str) {

	let translation = str

	const length = translation.length

	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0,-2)
	}

	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe'
	}

	if (length >= 10) {
		const firstHalf = translation.slice(0, Math.round(length/2))
		const secondHalf = translation.slice(Math.round(length/2))
		translation = `${firstHalf}-${secondHalf}`
	}

	return translation
}


console.log(Platzom('Zarpar'))
console.log(Platzom('PROGRAMAR'))
console.log(Platzom('Zorro'))
console.log(Platzom('abecedario'))