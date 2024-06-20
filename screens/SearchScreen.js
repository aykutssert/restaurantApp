import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResults'
import ResultsList from '../components/ResultsList'


export default function SearchScreen (){

    const [searchApi,result,errorMessage] =useResult();
    const filterbyPrice = (price)=>{
      return result.filter((item)=>{
        return item.price == price
      })
    }
    return (
      <View>
       <SearchBar searchApi={searchApi}></SearchBar>
          {errorMessage ? (<Text>{errorMessage}</Text> ): (<>
            {result.length == 0 ? (<Text>Restoran Yok</Text>) : (<>
            <ResultsList title="Ucuz Restoranlar" results={(filterbyPrice('₺'))}/>
            <ResultsList title="Uygun Restoranlar" results={(filterbyPrice('₺₺'))}/>
            <ResultsList title="Pahalı Restoranlar" results={(filterbyPrice('₺₺₺'))}/>
            </>)}
          </>)
          }
      </View>
    )
  
}

const styles = StyleSheet.create({})
