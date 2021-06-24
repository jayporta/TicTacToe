import React from 'react';
import 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
import Game from '../components/game/Game';
import renderer from 'react-test-renderer';

it('Game matches snapshot', () => {
  const resetMock = jest.fn();
  const tree = renderer
    .create(<Game players={{ X: '', O: '' }} resetGame={resetMock} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('displays winner by tic tac toe rules', () => {
  const { getByTestId, getByText } = render(
    <Game players={{ X: 'Jay', O: 'Kyla' }} resetGame={jest.fn} />
  );
  fireEvent.press(getByTestId('square0')); // X
  fireEvent.press(getByTestId('square3')); // O
  fireEvent.press(getByTestId('square1')); // X
  fireEvent.press(getByTestId('square6')); // O
  fireEvent.press(getByTestId('square2')); // X
  expect(getByText('Jay has won!')).toBeTruthy();
});
