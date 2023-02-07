import { SafeAreaView, StyleSheet, View } from "react-native/";
import React from "react";

function App(){

  return(<SafeAreaView style={styles.container}>

    <View style={styles.box_1} />
    <View style={styles.box_2} />
    <View style = {styles.box_3} />
    <View style = {styles.box_4} />





  </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container:{
    backgroundColor:'black',
    flexDirection:'row',
    //flexDirection:'column-reverse',// ters boxların sıralamasını ters çevirdi ve sol üstten sol alta taşıdı
    justifyContent:'space-between', //justifyContent dikey eksende hizaladı
    //merkezde ortaladı 
    //flex-end dersek aşağıda gösterir
    //space-between: aralarını açabildiği kadar açar
    //space-around: etrafından eşit mesafeler bırakıyor. Mesela ilk boşluk 5 birimse sonra 2 sinin arası 10 oluyor
    //space-evenly: dışarıdan bıraktığı boşluk ne kadarsa o kadar boşluk bırakır
    alignItems: 'center', //alignItems ise yatay eksende hizalamaları yapar
    //flex-start en başa çeker
    //flex-end: en sona götürür
   flex:1,

  },
  box_1:{
    width: 100,
    height: 100,

    backgroundColor:'red'
  },
  box_2:{
    width:100,
    height:100,
    backgroundColor:'blue'
  },

  box_3:{
    width: 100,
    height:100,
    backgroundColor:'orange'
  },

  box_4:{
    width: 100,
    height: 100,

    backgroundColor:'green'
  }

  
})

export default App;