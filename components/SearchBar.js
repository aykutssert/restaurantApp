import React from 'react'
import { Text, StyleSheet, View ,TextInput,TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';


export default function SearchBar({searchApi}){
    const [text, setText] = useState('');
    const searchBtn=()=>{
        if (searchApi) {
            searchApi(text);
          }
    }
    const handleSearch = () => {
    if (searchApi) {
      searchApi(text); // searchApi fonksiyonunu çağırırken text değerini parametre olarak geçiyoruz
    }
  };
    return (
      <View style={styles.searchContainerStyle}>
      <TouchableOpacity onPress={searchBtn}>
        <AntDesign style={styles.iconStyle} name="search1" size={30} color="black" />
      </TouchableOpacity>
        <TextInput style={styles.searchInputStyle} placeholder='Ara' autoCorrect={false} autoCapitalize='none'
        onSubmitEditing={handleSearch}
        value={text}
        onChangeText={setText}></TextInput>
      </View>
    )
  
}

const styles = StyleSheet.create({
    searchContainerStyle:{
        backgroundColor:"lightgray",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"flex-start",
        margin:10,
        height:50,
        padding:10,
        borderRadius:15
    },
    iconStyle:{
        marginRight:15
    },
    searchInputStyle:{
        flex:1 , //icondan geriye kalan yeri kaplar.
        fontSize:18
    },



})
