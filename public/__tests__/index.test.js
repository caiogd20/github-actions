const fs = require('fs');
const path = require('path');
const { getByText } = require('@testing-library/dom');
require('@testing-library/jest-dom');

describe('public/index.html', () => {
  let container;

  beforeAll(() => {
    const htmlPath = path.resolve(__dirname, '..', 'index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');
    document.documentElement.innerHTML = html;
    container = document.body;
  });

    it('deve exibir o título "calculadora"', () => {
      expect(getByText(container, 'calculadora')).toBeInTheDocument();
    });

    it('deve conter um formulário com dois inputs numéricos', () => {
      const inputs = container.querySelectorAll('input[type="number"]');
      expect(inputs.length).toBe(2);
      expect(inputs[0].name).toBe('num1');
      expect(inputs[1].name).toBe('num2');
    });

    it('deve conter um select com operações', () => {
      const select = container.querySelector('select[name="operacion"]');
      expect(select).toBeInTheDocument();
      const options = Array.from(select.options).map(opt => opt.value);
      expect(options).toEqual([
        'sumar',
        'restar',
        'multiplicar',
        'dividir',
        'potencia',
        'raiz'
      ]);
    });

    it('deve conter um botão de calcular', () => {
      const button = container.querySelector('button[type="submit"]');
      expect(button).toBeInTheDocument();
      expect(button.textContent).toBe('Calcular');
    });

    it('deve conter um div para resultado', () => {
      const resultadoDiv = container.querySelector('#resultado');
      expect(resultadoDiv).toBeInTheDocument();
    });
  
});
