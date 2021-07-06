import React, {useState, useEffect} from 'react';
import {FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';
import imgArray from '../../constants/data';

import toast from '../../utils/toast';

export default function HomeData(props) { 
  const [dataArray, setDataArray] = useState(null); 

  useEffect(() => { 
    axios
    .get(`https://artwork-gallery-app.herokuapp.com/artworks/get`)
    .then(res => {
        const artw = res.data;
        setDataArray(artw);
      }); 
    toast('Swipe down');
  }, []);

  return ( 
    <FlatList
      data={imgArray}
      keyExtractor={item => item._id}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => {
            props.nav.navigate(props.nextPg, item);
          }}>
          <Image style={styles.img} source={{uri: item.imageUrl}} />
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
    borderWidth: 0.6,
    borderColor: 'black',
    marginHorizontal: 20,
  },
});
