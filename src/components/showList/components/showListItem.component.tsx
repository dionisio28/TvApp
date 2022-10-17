import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

import {Show} from '../../../models/ShowModel';

import {CardImage} from '../../cardImage/cardImage.component';
import {StarRating} from '../../starRating/starRating.component';
import styles from './styles';

export function ShowListItem(show: Show) {
  const navigation = useNavigation();

  function navigateToShowDetails() {
    navigation.navigate('ShowDetails', {show});
  }

  return (
    <CardImage
      onPress={navigateToShowDetails}
      image={show.image}
      title={show.name}>
      <View style={styles.content}>
        <StarRating rating={show.rating} />
        <Text style={styles.typeText}>Type: {show.type}</Text>
        <Text style={styles.statusText}>
          <Text>Status: {show.status}</Text>
          {show.ended && <Text> ({show.ended})</Text>}
        </Text>
      </View>
    </CardImage>
  );
}
