import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {

  it('changes the input color and handles the record action', () => {
    const { asFragment } = render(<App />);

    const colorInput = screen.getByTestId('COLOR_CHANGE');

    fireEvent.change(colorInput, {
      target: {
        value: '#1100ff'
      }
    })
    expect(colorInput.value).toEqual('#1100ff');
  });

  it('changes the input color to the previous color and handles the undo action', () => {
    const { asFragment } = render(<App />);

    const colorInput = screen.getByTestId('COLOR_CHANGE');

    fireEvent.change(colorInput, {
      target: {
        value: '#3700ff'
      }
    })
    expect(colorInput.value).toEqual('#3700ff');
  });

  it('changes the input color to the next color and handles the redo action', () => {
    const { asFragment } = render(<App />);

    const colorInput = screen.getByTestId('COLOR_CHANGE');

    fireEvent.change(colorInput, {
      target: {
        value: '#ff00c8'
      }
    })
    expect(colorInput.value).toEqual('#ff00c8');
  });
});
