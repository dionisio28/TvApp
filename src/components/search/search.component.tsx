import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import styles from './styles';

export function SearchComponent(props: TextInputProps) {
  return (
    <TextInput
      autoCapitalize="none"
      placeholderTextColor="#727272"
      style={styles.input}
      {...props}
    />
  );
}
