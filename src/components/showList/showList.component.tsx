import React from 'react';
import {FlatList, FlatListProps, ListRenderItemInfo} from 'react-native';
import {Show} from '../../models/ShowModel';
import {LoadingIndicator} from '../loadingIndicator/loadingIndicator.component';
import {ShowListItem} from './components/showListItem.component';

interface ShowListProps {
  data?: Show[];

  onEndReached?: FlatListProps<Show>['onEndReached'];
  onEndReachedThreshold?: FlatListProps<Show>['onEndReachedThreshold'];
  isFetchingNextPage?: boolean;
}
export function ShowList({
  data,
  onEndReached,
  onEndReachedThreshold,
  isFetchingNextPage = false,
}: ShowListProps) {
  function renderItem({item}: ListRenderItemInfo<Show>) {
    return <ShowListItem {...item} />;
  }

  return (
    <FlatList
      ListFooterComponent={<LoadingIndicator isLoading={isFetchingNextPage} />}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{paddingVertical: 16}}
      keyExtractor={item => item.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      data={data || []}
      renderItem={renderItem}
    />
  );
}
