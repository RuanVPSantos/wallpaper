const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const dia_do_mes = document.getElementById("dia_do_mes");
const dia_da_semana = document.getElementById("dia_da_semana");
const mes = document.getElementById("mes");

dias_da_semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
meses = ['janeiro', "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

const definirHorario = () => {
    let dataAtual = new Date();
    hora.innerHTML = dataAtual.getHours() > 9 ? dataAtual.getHours() : "0" + dataAtual.getHours();
    minuto.innerHTML = dataAtual.getMinutes() > 9 ? dataAtual.getMinutes() : "0" + dataAtual.getMinutes();
    dia_da_semana.innerHTML = `${dias_da_semana[dataAtual.getDay()]},&nbsp;`;
    dia_do_mes.innerHTML = `${dataAtual.getDate()} de&nbsp`;
    mes.innerHTML = `${meses[dataAtual.getMonth()]}`;
}

setTimeout(definirHorario, 100);