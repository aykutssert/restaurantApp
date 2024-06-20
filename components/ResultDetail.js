import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'

export default class ResultDetail extends Component {
  render() {
    const {item} = this.props
    return (
        <View style={styles.itemContainer}>
        <Image style={styles.itemImageStyle} source={ item.image_url ? { uri: item.image_url } : null} />
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.rating} Yıldızlı Restoran,{item.review_count} Değerlendirme</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    itemContainer:{
        marginLeft:15,
    },
    itemImageStyle:{
        width:250,
        height:120,
        borderRadius:8,
        marginBottom:5,


    },
    name:{
        fontWeight:"bold"
    }
})
