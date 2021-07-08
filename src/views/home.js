import React, {Suspense} from 'react';
import {View, StyleSheet, Text, ImageBackground, _Text} from 'react-native';
import image from '../utils/images';
const HomeData = React.lazy(() => import('./homeData'));

export default function Home({navigation}) {
  return (
    <ImageBackground source={image.bg} style={{width: '100%', height: '100%'}}>
      <View>
        <Text style={styles.HeadingContainer}>Artworks</Text>
        <View style={styles.Container}>
          <Suspense 
            fallback={ 
              <Text
                style={{fontSize: 70, alignSelf: 'center', fontWeight: 'bold'}}>
                Loading...
              </Text> 
            }>
            <HomeData nextPg="ArtworkDetails" nav={navigation} />
          </Suspense>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 15,
  },
  HeadingContainer: {
    fontSize: 30,
    marginVertical: 5,
    alignSelf: 'center',
  },
});
