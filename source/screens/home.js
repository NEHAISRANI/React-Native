import React, {Suspense} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  _Text,
} from 'react-native';
import img from '../images';
const HomeData = React.lazy(() => import('../utils/homeData'))

function Home({navigation}) {

  return (
    <ImageBackground source={img.bg} style={{width: '100%', height: '100%'}}>
      <View>
        <Text style={styles.HeadingContainer}>Graphic Artwork</Text>
        <View style={styles.Container}>
         <Suspense fallback={<Text style={{fontSize:50,fontWeight:'bold',alignSelf:'center'}}>Loading</Text>}>
         <HomeData
          nextPg = 'ArtworkDetails'
          nav = {navigation}          
          />
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

export default Home;