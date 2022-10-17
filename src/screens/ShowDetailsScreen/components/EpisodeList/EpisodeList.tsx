import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ListRenderItemInfo,
  FlatList,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {useQuery} from 'react-query';
import {CardImage} from '../../../../components/cardImage/cardImage.component';
import {ImageIcon} from '../../../../components/imageIcon/ImageIcon.component';
import {StarRating} from '../../../../components/starRating/starRating.component';
import {Episode} from '../../../../models/EpisodeModel';

import {Show} from '../../../../models/ShowModel';
import {QueryKeys} from '../../../../service/QueryKeys';
import {showService} from '../../../../service/show/showService';
import {colors} from '../../../../styles/colors';
import {SIZE} from '../../../../utils/constants';
import {SeasonModal} from '../SeasonModal/SeasonModal';
import {ShowInfo} from '../ShowInfo/ShowInfo';

const arrowDownIcon = require('../../../../assets/images/arrow-down.png');
type Props = {
  show: Show;
};
export function EpisodeList({show}: Props) {
  const [selectedSeason, setSelectedSeason] = useState('1');
  const modalizeRef = useRef<Modalize>(null);

  const {data} = useQuery([QueryKeys.EPISODE_LIST, show.id], () =>
    showService.getEpisodes(show.id),
  );

  function renderItem({item}: ListRenderItemInfo<Episode>) {
    return (
      <CardImage onPress={() => null} image={item.image} title={item.name}>
        <View style={styles.content}>
          <StarRating rating={item.rating} />
        </View>
      </CardImage>
    );
  }

  function openModal() {
    modalizeRef.current?.open();
  }

  function Header() {
    return (
      <View>
        <ShowInfo show={show} />
        <TouchableOpacity style={styles.seasonContainer} onPress={openModal}>
          <Text style={styles.seasonText}>Season: {selectedSeason}</Text>
          <ImageIcon
            style={{marginLeft: 8}}
            size={16}
            source={arrowDownIcon}
            color={'#8e8c8f'}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <FlatList
        contentContainerStyle={{paddingBottom: 16}}
        ListHeaderComponent={() => <Header />}
        data={data ? data.seasons[selectedSeason] : []}
        renderItem={renderItem}
      />
      <SeasonModal
        ref={modalizeRef}
        selectedSeason={selectedSeason}
        onSelectSeason={setSelectedSeason}
        seasons={data?.seasonNames || []}
      />
    </>
  );
}

const styles = StyleSheet.create({
  seasonContainer: {
    paddingHorizontal: SIZE.padding,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZE.margin,
  },
  seasonText: {
    fontWeight: 'bold',
    color: colors.onBackground,
    fontSize: 20,
  },
  content: {
    marginTop: SIZE.margin,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: colors.onBackground,
    fontSize: 20,
  },
});
