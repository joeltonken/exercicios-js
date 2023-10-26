import api from '../services/api.js';

function limpar() {        
  document.getElementById('rua').value=("");
  document.getElementById('bairro').value=("");
  document.getElementById('cidade').value=("");
  document.getElementById('estado').value=("");
}

function preencher(conteudo){
  document.getElementById('rua').value=(conteudo.logradouro);
  document.getElementById('bairro').value=(conteudo.bairro);
  document.getElementById('cidade').value=(conteudo.localidade);
  document.getElementById('estado').value=(conteudo.uf);
}

async function buscar(){
  limpar();
  
  let cep = document.getElementById('cep').value;

  let validacep = /^[0-9]{5}-?[0-9]{3}$/;

  if(!validacep.test(cep)) {
    console.log("erro")
    return
  } 

  let conteudo = await api(cep);
  preencher(conteudo);

}

let cep = document.getElementById('cep');

cep.addEventListener("keyup", buscar)