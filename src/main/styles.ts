import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';

export default StyleSheet.create<{
  container: ViewStyle;
  scrollView: ViewStyle;
  scrollViewContent: ViewStyle;
  bottom: ViewStyle;
  snapshot: ImageStyle;
  title: TextStyle;
}>({
  container: {
    flex: 1,
  },
  scrollViewContent: {paddingBottom: 40},
  scrollView: {
    backgroundColor: '#AF3ABC43',
    padding: 40,
  },
  title: {paddingVertical: 20},
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-around',
  },
  snapshot: {
    height: 300,
    width: '100%',
  },
});
