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

  test('exibe heading com texto "Express"', () => {
    expect(getByText(container, 'Express')).toBeInTheDocument();
  });

  test('exibe parágrafo de boas-vindas', () => {
    expect(getByText(container, 'Welcome to Express')).toBeInTheDocument();
  });
});
