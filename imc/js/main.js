const calcImcBtnField = document.querySelector('#calc-imc-btn')
const alturaField = document.querySelector('input[name=altura]')
const pesoField = document.querySelector('input[name=peso]')
const warningField = document.querySelector('#warning')
const imcField = document.querySelector('#imc')
const transitionTime = 300

function bmiResult(peso, altura) {
  const imc = peso / altura ** 2

  if (imc < 18.6)
    return 'Abaixo do Normal'
  else if (imc < 25)
    return 'Peso Normal'
  else if (imc < 30)
    return 'Sobrepeso'
  else if (imc < 35)
    return 'Obesidade Grau I'
  else if (imc < 40)
    return 'Obesidade Grau II'
  else
    return 'Obesidade Grau III'

}

function validValues(altura, peso) {
  return !(isNaN(altura) || altura == 0 || isNaN(peso) || peso == 0)
}

function calculadoraDeIMC() {
  let altura = alturaField.value.replace(',', '.')
  let peso = pesoField.value.replace(',', '.')
  let sexo = document.querySelector('input[name=sexo]:checked').value
  let resultado = ''

  if (validValues(altura, peso)) {
    resultado = bmiResult(peso, altura, sexo)
    hideWarningMessage()
    showBorder(resultado)
  } else {
    showWarningMessage()
    hideBorder()
  }

  imcField.value = resultado
}

// borda
const border = {
  'Abaixo do Normal': 'border border-warning bg-warning text-white',
  'Peso Normal': 'border border-sucess bg-success text-white',
  'Sobrepeso': 'border border-warning bg-warning text-white',
  'Obesidade Grau I': 'border border-warning bg-warning text-white',
  'Obesidade Grau II': 'border border-danger bg-danger text-white',
  'Obesidade Grau III': 'border border-danger bg-danger text-white'
}

function showBorder(resultado) {
  setTimeout(function () {
    imcField.className = `form-control form-control-lg ${border[resultado]}`
  }, transitionTime)
}

function hideBorder() {
  setTimeout(function () {
    imcField.className = 'form-control form-control-lg'
  }, transitionTime)
}

// warning
const warningMessage =
  `<div class="alert alert-warning" role="alert">
      <strong>Informe o peso e a altura corretamente.</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`

function showWarningMessage() {
  warningField.innerHTML = warningMessage
}

function hideWarningMessage() {
  warningField.innerHTML = ''
  imcField.className = 'form-control form-control-lg text-black'
}

// eventos
calcImcBtnField.addEventListener('click', function (event) {
  event.preventDefault()
  calculadoraDeIMC()
})

document.body.addEventListener('keydown', function (event) {
  if (event.key == "Enter") {
    event.preventDefault()
    calculadoraDeIMC()
  }
})