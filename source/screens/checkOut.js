import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



export default function Checkout() {
    return (
        <View>
            <Text style={styles.heading}>Checkout</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 20
    }

})

