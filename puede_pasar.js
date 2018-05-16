const pelicula = 'The Avengers: Infinty War';
const edadMinima = 12;

function puedePasar(nombre,edad,conAdulto) {
	if (edad > edadMinima) {
		console.log(`Bienvenido ${nombre} puedes pasar a ver ${pelicula}`)} 
		else {
			if (conAdulto) {
				console.log(`Bienvenidos ${nombre} y acompañante pueden pasar a ver ${pelicula}`)} 
			else {
				console.log(`No puedes pasar ${nombre} porque no eres mayor de ${edadMinima} ni estas acompañado de un adulto`)}}
}

puedePasar('Carlos',26,true)
puedePasar('Fiorella',3,false)
puedePasar('Fiorella',3,true)