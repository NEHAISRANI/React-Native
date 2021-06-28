import React, {useState, useEffect} from 'react';
import {FlatList, Image, TouchableOpacity,StyleSheet} from 'react-native';
import axios from 'axios';
import imgArray from './data'
import toast from '/home/coditas/Desktop/Redux/source/utils/toast.js';

function HomeData(props) {
  const [dataArray, setDataArray] = useState(null);

  useEffect(() => {
    axios
      .get(`https://artwork-gallery-app.herokuapp.com/artworks/get`)
      .then(res => {
        const arts = res.data;
        setDataArray(arts);
      });
    toast('Swipe Left');
  }, []);

  return (
    <FlatList
      horizontal={true}
      data={imgArray}
      keyExtractor={(item, index) => item._imageUrl}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            props.nav.navigate(props.nextPg, item);
          }}>
          <Image
            style={styles.img}
            source={{uri: item.imageUrl}}
          />
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 50,
    borderRadius: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    marginHorizontal: 20,
  },
  container: {
    marginTop: 15,
  },
  heading: {
    fontSize: 30,
    marginVertical: 5,
    alignSelf: 'center',
  },
});

export default HomeData