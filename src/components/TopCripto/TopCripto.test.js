import { render } from '@testing-library/react';
import TopCripto from './TopCripto';

test('render content', () => {
    const component =  render(<TopCripto />);
    component.findByAltText('10 principales criptomonedas')
  });