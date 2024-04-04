AOS.init();

const dataDoEvento = new Date("June 1, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
//função do JS pra trabalhar com intervalos
//configurando um intervalo

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor (distanciaAteOEvento / diasEmMs); //aqui chegamos na quantidade de dias que faltam até o evento
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horaEmMs); //aqui chegamos nas quantidade de horas que faltam
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs); 
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    
    if(distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = '0d 0h 0m 0s | Evento Encerrado';
    }

}, 1000);
