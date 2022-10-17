import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ShowList, SearchComponent} from '../../components';
import styles from './styles';
import {useQuery} from 'react-query';
import {useDebounce} from '../../hooks/useDebounce';
import {useInfiniteList} from '../../hooks/useInfiniteList';
import {QueryKeys} from '../../service/queryKeys';
import {showService} from '../../service/show/showService';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const debouncedValue = useDebounce(searchText, 600);
  const [isSearch, setIsSearch] = useState(false);

  const listQuery = useInfiniteList([QueryKeys.SHOW_LIST], showService.list);

  const searchQuery = useQuery(
    [QueryKeys.SHOW_SEARCH, debouncedValue],
    () => showService.searchByName(debouncedValue),
    {
      enabled: debouncedValue.length > 0,
    },
  );

  function onEndReached() {
    if (listQuery.hasNextPage) {
      listQuery.fetchNextPage({cancelRefetch: true});
    }
  }

  useEffect(() => {
    setIsSearch(debouncedValue.length > 0);
  }, [debouncedValue]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchComponent
        placeholder="Search show by name"
        value={searchText}
        onChangeText={setSearchText}
      />
      <ShowList
        isFetchingNextPage={isSearch ? false : listQuery.isFetchingNextPage}
        onEndReached={isSearch ? undefined : onEndReached}
        onEndReachedThreshold={0.1}
        data={isSearch ? searchQuery.data : listQuery.list}
      />
    </SafeAreaView>
  );
}
