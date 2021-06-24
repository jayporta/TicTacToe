import 'react-native';
import React from 'react';
import SetupPlayers from '../components/setup_players/SetupPlayers';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('SetupPlayers matches snapshot', () => {
  const onSaveMock = jest.fn();
  const tree = renderer
    .create(
      <SetupPlayers
        onSavePlayers={onSaveMock}
        existingPlayers={{ X: '', O: '' }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
