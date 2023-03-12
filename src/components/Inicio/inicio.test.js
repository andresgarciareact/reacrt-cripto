import InicioApp from "./inicio";
import { render, screen } from '@testing-library/react';


test('render content', () => {
    const inicio = {
        content: 'CRIPTO BLOG WILLIAN ANDRES GARCIA',
        important: true,
    }
    const component =  render(<InicioApp inicio={inicio} />);
    component.getByText('CRIPTO BLOG WILLIAN ANDRES GARCIA')
  });

  test('render div', () => {
    render(<InicioApp />);
    const divEl = screen.getByTestId("div");
    expect(divEl).toBeInTheDocument();
  });