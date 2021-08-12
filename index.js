const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
const mesAtual = dataAtual.getMonth() + 1;
const celulasCalendar = Array(new Date(anoAtual, mesAtual, 0).getDate()).fill("");


window.onload = () => {

  setCelulesDate();
  console.log(celulasCalendar);

}

const setCelulesDate = () => {
  document.getElementById('cellsCalendar').innerHTML =
    celulasCalendar.map((index, dia) => (
      `<div class="celula">${dia + 1}</div>`
    )).join('');

}


