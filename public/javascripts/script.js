const formularoio = document.querySelector('#formulario');
const resultadoDiv = document.querySelector('#resultado');
formularoio.addEventListener('submit', function(event) {
  event.preventDefault();
  const num1 = parseFloat(document.querySelector('input[name="num1"]').value);
  const num2 = parseFloat(document.querySelector('input[name="num2"]').value);
  const operacion = document.querySelector('select[name="operacion"]').value;
  switch (operacion) {
    case 'sumar':
      resultadoDiv.textContent = `Resultado: ${num1 + num2}`;
        break;
    case 'restar':
      resultadoDiv.textContent = `Resultado: ${num1 - num2}`;
      break;
    case 'multiplicar':
      resultadoDiv.textContent = `Resultado: ${num1 * num2}`;
        break;
    case 'dividir':
      if (num2 !== 0) {
        resultadoDiv.textContent = `Resultado: ${num1 / num2}`;
      } else {
        resultadoDiv.textContent = 'Error: División por cero';
      }
        break;
    case 'potencia':
      resultadoDiv.textContent = `Resultado: ${Math.pow(num1, num2)}`;
        break;  
    case 'raiz':
      if (num1 >= 0) {
        resultadoDiv.textContent = `Resultado: ${Math.pow(num1, 1 / num2)}`;
      } else {
        resultadoDiv.textContent = 'Error: Raíz cuadrada de número negativo';
      }
        break;
    default:
      resultadoDiv.textContent = 'Operación no válida';
    }
  });