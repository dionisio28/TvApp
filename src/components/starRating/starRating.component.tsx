import React from 'react';

import {Text, View} from 'react-native';
import {Rating} from '../../models/CommonModels';
import {colors} from '../../styles/colors';
import {ImageIcon} from '../imageIcon/ImageIcon.component';
import styles from './styles';

const starIcon = require('../../assets/images/star.png');

interface Props {
  rating?: Rating;
}
export function StarRating({rating}: Props) {
  if (!rating?.average) {
    return null;
  }

  return (
    <View style={styles.content}>
      <ImageIcon testID="starIcon" color={colors.gold} source={starIcon} />
      <Text style={styles.ratingText}> {rating.average}</Text>
    </View>
  );
}
