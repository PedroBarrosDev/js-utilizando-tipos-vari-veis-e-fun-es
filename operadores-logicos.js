const notaFinal = 6;
const faltas = 5;
const advertencias = 0;


if (notaFinal < 7 && faltas > 4) {
    console.log('reprovado, boas festas');
} else {
    console.log('não foi reprovado por falta');
}

if(faltas >= 2 && !advertencias) {
    console.log('recebeu bonus');
} else {
    console.log('não recebeu bonus')
}

const chuva = false;

if (!chuva) {
    console.log("Não está chovendo. Pode sair de casa.");
} else {
    console.log("Está chovendo. Melhor ficar em casa.");
}

// if (true)
// if ({})
// if ([])
// if (42)
// if ("foo")
// if (new Date())
// if (-42)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)