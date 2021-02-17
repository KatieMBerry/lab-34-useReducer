import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {

  it('changes the input color and handles the record action', () => {
    const { asFragment } = render(<App />);

    const recordInput = screen.getByTestId('COLOR_CHANGE');

    fireEvent.change(recordInput, {
      target: {
        value: '#1100ff'
      }
    })
    expect(recordInput.value).toEqual('#1100ff');
  });

  it('changes the input color to the previous color and handles the undo action', () => {
    const { asFragment } = render(<App />);

    const undoInput = screen.getByTestId('COLOR_CHANGE');

    fireEvent.change(undoInput, {
      target: {
        value: '#3700ff'
      }
    })
    expect(undoInput.value).toEqual('#3700ff');
  });

  it('changes the input color to the next color and handles the redo action', () => {
    const { asFragment } = render(<App />);

    const redoInput = screen.getByTestId('COLOR_CHANGE');

    fireEvent.change(redoInput, {
      target: {
        value: '#ff00c8'
      }
    })
    expect(redoInput.value).toEqual('#ff00c8');
  });
});
