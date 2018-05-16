function promedio(){

const nombre = 'Fabian'
const dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
let totalKms = 0

	function correr() {
		const min = 5
		const max = 15
		return Math.round(Math.random() * (max-min) + min)
	}

	for (let i = 0; i < dias.length; i++){
		const kms = correr()
		totalKms += kms
		console.log(`El dia ${dias[i]} ${nombre} corrio ${kms}kms`)
	}

const promedio = totalKms/dias.length
console.log(`En promedio ${nombre} corrio ${promedio.toFixed(2)}kms`)
}