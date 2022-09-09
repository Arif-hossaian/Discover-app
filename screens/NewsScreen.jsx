import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { NewsContext } from '../context/Context';
import Carousel from 'react-native-snap-carousel';
import SingleNews from '../components/SingleNews';

export default function NewsScreen() {
  const {
    news: { articles },
  } = useContext(NewsContext);
  const [activeIndex, setActiveIndex] = useState();
  if (!articles)
    return (
      <>
        <Text>Loading....</Text>
      </>
    );
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          firstItem={articles.slice(0, 10).length - 1}
          layout={'stack'}
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: 'black',
  },
});
