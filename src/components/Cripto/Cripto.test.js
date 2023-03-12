
import { render } from '@testing-library/react';
import CriptoApp from './Cripto';

test('render content', () => {
    const component =  render(<CriptoApp />);
    component.findAllByText('Que son las criptomonedas')
  });

