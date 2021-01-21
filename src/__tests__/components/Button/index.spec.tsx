import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../../../components/Button';
import userEvent from '@testing-library/user-event';

describe('Test button successfully', () => {
  it('Should render the button successfully', () => {
    const buttonText = 'Login';
    const { container } = render(<Button>{buttonText}</Button>);

    const button = screen.getByRole('button', {name: buttonText});

    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot(); // Snapshot Test
  });
  
  it('Should called the onClick function successfully', () => {
    const buttonText = 'Login';
    const onClick = jest.fn();

    render(<Button onClick={onClick}>{buttonText}</Button>);
    const button = screen.getByRole('button', {name: buttonText});

    userEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
})