AOS.init();

const dataEvento = new Date("Feb 04,2024 18:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const distanciaAteEvento = timeStampEvento - timeStampAgora;

    const diasMS = 1000 * 60 * 60 * 24;
    const horasMS = 1000 * 60 * 60;
    const minutosMS = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / diasMS);
    const horasAteEvento = Math.floor((distanciaAteEvento % diasMS) / horasMS);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horasMS) / minutosMS);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutosMS) / 1000);

    document.getElementById("regressivo").innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}min ${segundosAteEvento}s`
},1000)