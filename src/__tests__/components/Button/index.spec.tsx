import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../../../components/Button';

describe('Test button successfully', () => {
  it('Should render the button successfully', () => {
    const buttonText = 'Login';
    const { container } = render(<Button label={buttonText} />);

    const button = screen.getByRole('button', {name: buttonText});

    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot(); // Snapshot Test
  })
})