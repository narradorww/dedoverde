import {StyleSheet} from 'react-native';

export default function getStyles(width: any, height: any) {
  const isPortrait = height > width;
  const containerWidth = isPortrait ? width * 0.26 : width * 0.14;
  const containerHeight = isPortrait ? height * 0.14 : height * 0.26;

  return StyleSheet.create({
    sectionContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 12,
      paddingHorizontal: 4,
      width: containerWidth,
      height: containerHeight,
      borderWidth: 4,
      borderColor: 'darkorange',
      backgroundColor: 'orange',
      borderRadius: 10,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '600',
    },
    image: {
      width: containerWidth * 0.6,
      height: containerHeight * 0.6,
      marginRight: 10,
    },
  });
}
