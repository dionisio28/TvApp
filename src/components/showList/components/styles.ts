import {StyleSheet} from 'react-native';
import {colors} from '../../../styles/colors';

export default StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical: 8,
    width: '100%',
  },
  typeText: {
    fontSize: 16,
    color: colors.onBackground,
    marginBottom: 4,
  },
  statusText: {
    fontSize: 14,
    color: colors.light,
  },
});
