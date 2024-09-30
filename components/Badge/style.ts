import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    justifyContent: 'center', //flexdirection is column so use justifycontet to center the text vertically
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(10),
    fontWeight: '600',
    lineHeight: scaleFontSize(12),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default style;
