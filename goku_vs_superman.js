let vidaGoku = 100;
let vidaSuperman = 100;
let round = 0;

const minAtaq = 5;
const maxAtaq = 10;

function pelea() {
	while (vidaSuperman > 0 && vidaGoku > 0){
		round++
		console.log(`Round ${round}`)
		const gokuGolpe = Math.round(Math.random() * (maxAtaq - minAtaq) + minAtaq)
		const supermanGolpe = Math.round(Math.random() * (maxAtaq - minAtaq) + minAtaq)
		if (gokuGolpe > supermanGolpe) {
			vidaSuperman -= gokuGolpe
			console.log(`Goku ataca a superman con un golpe de ${gokuGolpe}`)
			console.log(`Superman queda en ${vidaSuperman} puntos de vida`)
		} else {
			vidaGoku -= supermanGolpe
			console.log(`Superman ataca a Goku con un golpe de ${supermanGolpe}`)
			console.log(`Goku queda en ${vidaGoku} puntos de vida`)
		}
	}

	if (vidaGoku > 0) {
		console.log(`Goku gano la batalla y su vida es de: ${vidaGoku}`)
	} else {
		console.log(`Superman gano la batalla y su vida es de: ${vidaSuperman}`)
	}
}
pelea()