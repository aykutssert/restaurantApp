import React, { Component, useEffect, useState } from 'react'
import { Text, StyleSheet, View, FlatList,Image } from 'react-native'
import businessApi from '../api/yelp';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function RestoranEkrani ({route}){
  const id = route.params.id;
  const [restoran,setRestoran] = useState(null);
  
  const getResult=async(id)=>{
    const response = await businessApi.get(`/${id}`);
    setRestoran(response.data);
    
    
  }
  useEffect(()=>{
    getResult(id)
  },[]);
 
    return (
      <View>
  {restoran ? (
    <>
      <Text style={styles.title}> {restoran.name} </Text>
      <Text style={styles.phone}> {restoran.phone} </Text>
      <Text style={styles.status}>{restoran.isclosed ? <AntDesign name="closesquareo" size={40} color="black" /> : 
      <MaterialIcons name="delivery-dining" size={40} color="black" />
        }</Text>
      <FlatList data={restoran.photos} renderItem={({item})=>
          <Image style={styles.image} source={{uri:item}}></Image>
        }></FlatList>
    </>
      ) : (
      <Text>Restoran yükleniyor...</Text>
      )}
    </View>

    )
  
}

const styles = StyleSheet.create({
  image:{
    height:180,
    margin:10,
    borderRadius:20
  },
  title:{
    alignSelf:'center',
    fontSize:25,
    fontWeight:"bold",
    marginVertical:10
  },
  phone:{
    alignSelf:'center',
    fontSize:20,
  },
  status:{
    alignSelf:'center',
    marginVertical:5
  }



})
