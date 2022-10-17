import React, {createRef} from 'react';
import {render, act, fireEvent} from '@testing-library/react-native';
import {SeasonModal} from '../SeasonModal';
import {Modalize} from 'react-native-modalize';

describe('SeasonModal', () => {
  it('should render the list of the modal', () => {
    const modalizeRef = createRef<Modalize>();

    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={() => console.log('s')}
        seasons={['1', '2', '3']}
        selectedSeason={'1'}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    expect(getAllByText('season', {exact: false}).length).toEqual(3);
  });
  it('call onSelectSeason with the correct season when season option was pressed', () => {
    const modalizeRef = createRef<Modalize>();

    const onSelectSeasonMock = jest.fn();

    const {getByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={onSelectSeasonMock}
        seasons={['1', '2', '3']}
        selectedSeason={'1'}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    const elementSeason2 = getByText('Season 2');

    fireEvent.press(elementSeason2);

    expect(onSelectSeasonMock).toBeCalledWith('2');
  });
});
