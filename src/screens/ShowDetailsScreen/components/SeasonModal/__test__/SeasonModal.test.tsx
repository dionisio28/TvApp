/* eslint-disable react/react-in-jsx-scope */
import React, {createRef} from 'react';
import {Modalize} from 'react-native-modalize';
import {render, act, fireEvent} from '@testing-library/react-native';
import {SeasonModal} from '../SeasonModal';

describe('SeasonModal', () => {
  test('show all season options', () => {
    const modalizeRef = createRef<Modalize>();

    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={() => console.log('test')}
        selectedSeason={'1'}
        seasons={['1', '2', '3']}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    expect(getAllByText('season', {exact: false}).length).toEqual(3);
  });

  test('call onSelectSeason with the correct season when season option was pressed', () => {
    const modalizeRef = createRef<Modalize>();

    const onSelectSeasonMock = jest.fn();

    const {getByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={onSelectSeasonMock}
        selectedSeason={'1'}
        seasons={['1', '2', '3']}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    const season2Element = getByText('Season 2');

    fireEvent.press(season2Element);

    expect(onSelectSeasonMock).toBeCalledWith('2');
  });
});
