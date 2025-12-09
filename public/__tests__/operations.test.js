const fs = require('fs');
const path = require('path');
require('@testing-library/jest-dom');

describe('Operações da calculadora (script.js)', () => {
  beforeAll(() => {
    const htmlPath = path.resolve(__dirname, '..', 'index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');
    document.documentElement.innerHTML = html;
    // garantir que o script encontre o formulário pelo id esperado
    const form = document.querySelector('form');
    form.id = 'formulario';
    // carregar o script que adiciona o listener de submit
    require(path.resolve(__dirname, '..', 'javascripts', 'script.js'));
  });

  function submitForm(num1, num2, operacion) {
    const input1 = document.querySelector('input[name="num1"]');
    const input2 = document.querySelector('input[name="num2"]');
    const select = document.querySelector('select[name="operacion"]');
    input1.value = String(num1);
    input2.value = String(num2);
    select.value = operacion;
    const form = document.querySelector('#formulario');
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    return document.querySelector('#resultado').textContent;
  }

  it('sumar: 2 + 3 = 5', () => {
    expect(submitForm(2, 3, 'sumar')).toBe('Resultado: 5');
  });

  it('restar: 5 - 2 = 3', () => {
    expect(submitForm(5, 2, 'restar')).toBe('Resultado: 3');
  });

  it('multiplicar: 3 * 4 = 12', () => {
    expect(submitForm(3, 4, 'multiplicar')).toBe('Resultado: 12');
  });

  it('dividir: 10 / 2 = 5', () => {
    expect(submitForm(10, 2, 'dividir')).toBe('Resultado: 5');
  });

  it('dividir por zero mostra erro', () => {
    expect(submitForm(10, 0, 'dividir')).toBe('Error: División por cero');
  });

  it('potencia: 2 ^ 3 = 8', () => {
    expect(submitForm(2, 3, 'potencia')).toBe('Resultado: 8');
  });

  it('raiz: raiz(9,2) = 3', () => {
    expect(submitForm(9, 2, 'raiz')).toBe('Resultado: 3');
  });

  it('raiz de número negativo mostra erro', () => {
    expect(submitForm(-4, 2, 'raiz')).toBe('Error: Raíz cuadrada de número negativo');
  });
});
