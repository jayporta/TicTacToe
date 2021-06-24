/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import { fireEvent, render } from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => 'TouchableOpacity'
);

it('renders correctly', () => {
  renderer.create(<App />);
});

it('renders Game when onSavePlayers is called', () => {
  const { getByText, getByA11yHint } = render(<App />);
  const playerX = getByA11yHint('Enter name for Player X');
  const playerO = getByA11yHint('Enter name for Player O');
  const button = getByA11yHint('Tap to play');
  fireEvent.changeText(playerX, 'Jay');
  fireEvent.changeText(playerO, 'Kyla');
  fireEvent.press(button);
  expect(getByText("Jay's turn (X)")).toBeTruthy();
});

it('goes back to player setup screen when tapping play again', () => {
  const { getByTestId, getByText, getByA11yHint } = render(<App />);
  const playerX = getByA11yHint('Enter name for Player X');
  const playerO = getByA11yHint('Enter name for Player O');
  const button = getByA11yHint('Tap to play');
  fireEvent.changeText(playerX, 'Jay');
  fireEvent.changeText(playerO, 'Kyla');
  fireEvent.press(button);
  fireEvent.press(getByTestId('square0')); // X
  fireEvent.press(getByTestId('square3')); // O
  fireEvent.press(getByTestId('square1')); // X
  fireEvent.press(getByTestId('square6')); // O
  fireEvent.press(getByTestId('square2')); // X
  expect(getByText('Jay has won!')).toBeTruthy();
  fireEvent.press(getByText('Play Again'));
  const playerXReset = getByA11yHint('Enter name for Player X');
  const playerOReset = getByA11yHint('Enter name for Player O');
  expect(playerXReset).toBeTruthy();
  expect(playerOReset).toBeTruthy();
});
