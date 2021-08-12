const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
const mesAtual = dataAtual.getMonth() + 1;
const celulasCalendar = Array(new Date(anoAtual, mesAtual, 0).getDate()).fill("");
const quantidadeDiaMes = new Date(anoAtual, mesAtual, 0).getDate();
const diaAtual = dataAtual.getDate();

var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

var dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]


window.onload = () => {

  setCelulesDate();

}

const setCelulesDate = () => {
  const pass = getAllPassWord();
  document.getElementById('cellsCalendar').innerHTML = celulasCalendar.map((index, valor) => (
    `<div class="celula ${diaAtual === valor + 1 ? 'today' : ''} ${diaAtual > valor + 1 ? 'yesterday' : ''}">

      <span>
       ${dias[valor % 7]}
      </span>

      <h1>
        ${pass[valor].dia}
      </h1>
      <span>
        ${pass[valor].senha}
      </span>
    </div>`
  )).join('');
}

const mountPassWord = (dia, mes) => {

  const key = ['Z', 'E', 'N', 'I', 'T', 'P', 'O', 'L', 'A', 'R'];
  let firstKeyIndex = 0;
  let secondKeyIndex = 0;
  const endKeyMonth = [
    [], ['Z'], ['T'], ['O'], ['A'], ['EZ'], ['EN'], ['ET'], ['EO'], ['EA'], ['NZ'], ['NN'], ['NT'],
  ]

  for (let i = 1; i <= dia; i++) {

    if (Number.isInteger(i / 10)) {
      firstKeyIndex = firstKeyIndex + 1;

      secondKeyIndex = 0;


    } else {

      secondKeyIndex = secondKeyIndex + 1
    }

    if (secondKeyIndex === 10) {
      firstKeyIndex = 0;
    }

  }

  const password = key[firstKeyIndex] + key[secondKeyIndex] + endKeyMonth[mes];
  return password;

}

const getAllPassWord = () => {

  const dataPassWord = [];

  for (let i = 1; i <= quantidadeDiaMes; i++) {
    const res = mountPassWord(i, mesAtual);

    dataPassWord.push({
      dia: i,
      senha: res
    })

  }

  return dataPassWord;

}
