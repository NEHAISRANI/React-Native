import React from 'react';
import { View, Image, StyleSheet, FlatList, Text,  TouchableOpacity } from 'react-native'

import artwork_1 from '../images/artwork_1.jpg'
import artwork_2 from '../images/artwork_2.jpg'
import artwork_3 from '../images/artwork_3.jpg'
import artwork_4 from '../images/artwork_4.jpg'
import artwork_5 from '../images/artwork_5.jpg'
import artwork_6 from '../images/artwork_6.jpg'
import artwork_7 from '../images/artwork_7.jpg'
import artwork_8 from '../images/artwork_8.jpg'
import artwork_9 from '../images/artwork_9.jpg'
import artwork_10 from '../images/artwork_10.jpg'

export default function Home({ navigation }) {
    const images = [
        { src: artwork_1, key: 1, title: 'Title', description: 'It will be convenient to take one supreme composer as the artist who has dealt so consistently with the essentials of the new style that he may be conveniently regarded as its creator', genre: 'science fiction', Price: 10 },
        { src: artwork_2, key: 2, title: 'Title', description: 'It will be convenient to take one supreme composer as the artist who has dealt so consistently with the essentials of the new style that he may be conveniently regarded as its creator', genre: 'science fiction', Price: 20 },
        { src: artwork_3, key: 3, title: 'Title', description: 'It will be convenient to take one supreme composer as the artist who has dealt so consistently with the essentials of the new style that he may be conveniently regarded as its creaor', genre: 'science fiction', Price: 30 },
        { src: artwork_4, key: 4, title: 'Title', description: 'It will be convenient to take one supreme composer as the artist who has dealt so consistently with the essentials of the new style that he may be conveniently regarded as its creator', genre: 'science fiction', Price: 40 },
        { src: artwork_5, key: 5, title: 'Title', description: 'It will be convenient to take one supreme composer as the artist who has dealt so consistently with the essentials of the new style that he may be conveniently regarded as its creator', genre: 'science fiction', Price: 50 },
        { src: artwork_6, key: 6, title: 'Title', description: 'It will be convenient to take one supreme composer as the artist who has dealt so consistently with the essentials of the new style that he may be conveniently regarded as its creator', genre: 'science fiction', Price: 60 },
        { src: artwork_7, key: 7, title: 'Title', description: 'It will be convenient to take one supreme composer as the artist who has dealt so consistently with the essentials of the new style that he may be conveniently regarded as its creator', genre: 'science fiction', Price: 70 },
        { src: artwork_8, key: 8, title: 'Title', description: 'It will be convenient to take one supreme composer as the artist who has dealt so consistently with the essentials of the new style that he may be conveniently regarded as its creator', genre: 'science fiction', Price: 80 },
        { src: artwork_9, key: 9, title: 'Title', description: 'It will be convenient to take one supreme composer as the artist who has dealt so consistently with the essentials of the new style that he may be conveniently regarded as its creator', genre: 'science fiction', Price: 90 },
        { src: artwork_10, key:10, title: 'Title', description: 'It will be convenient to take one supreme composer as the artist who has dealt so consistently with the essentials of the new style that he may be conveniently regarded as its creator', genre: 'science fiction', Price: 100 },
    ]

    return (

        <View>
            <Text style={styles.heading}>Graphic Artwork</Text>
            <View style={styles.container}>
                <FlatList
                    data={images}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { navigation.navigate('ArtworkDetails', item) }} >
                            <Image style={styles.imgage} source={item.src} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imgage: {
        height: 310,
        width: 320,
        alignSelf: 'center',
        marginBottom: 20,
    },
    container: {
      marginTop: 15
    },
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      marginVertical: 10,
      alignSelf: 'center'
    }
})


