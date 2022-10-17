import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../routes';
import {EpisodeList} from './components/EpisodeList/EpisodeList';
import styles from './styles';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ShowDetails'>;

export default function ShowDetails({route}: ScreenProps) {
  const {show} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <EpisodeList show={show} />
    </SafeAreaView>
  );
}
