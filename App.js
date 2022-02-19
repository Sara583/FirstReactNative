import { StatusBar } from 'expo-status-bar';
import { Button, Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const[name,setName]=useState('No Clicks happened')
  const[number,setNumber]=useState(0)
  

  const click=()=>{

    setName("Your Counter =")
    setNumber(number+5)

      
  }
  return (
    
    <View style={styles.container}>
    
    <Text style={styles.textOne}>Count by 5</Text>
      
      <Text style={styles.textTwo}>{name} {number}</Text>
      <Button   title='ADD 5' onPress={click}></Button>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    width:'auto',
    height:'auto',
    flex: 1,
    backgroundColor: '#FFF1CE',
    alignItems: 'center',
    justifyContent: 'center',
  borderBottomColor:"green",
  },
  textOne:{
    
    color:"grey",
    fontSize:70
  },
  textTwo:{
    margin:20,
    color:"black"
  },
  

});
