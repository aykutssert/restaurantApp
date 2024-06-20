import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';


export default function RestaurantList(props){
    const navigation = useNavigation();
 
    const { title, results } = props; // Destructuring burada yapılmalıdır
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {title} </Text>
        <FlatList
            data={results}
            renderItem={( {item} ) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate("Restoran", { id: item.id })}>
                        <ResultDetail item={item}/>
                    </TouchableOpacity>
                );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        />

      </View>
    )
  }


const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:15,
        marginBottom:5,
    },
    
})
