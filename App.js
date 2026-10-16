import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable , Alert,  FlatList} from 'react-native';

export default function App() {
  const [title, setTitle] = useState("")
  const [list, setList] = useState([])

  const addTask =()=>{
     const cleanTitle = title.trim()

     if(!cleanTitle){
      Alert.alert("Error ", "please check your textinput")
      return
     }
   
      const newTask = {
        id: String(Date.now()),
        title: title,
      }

      setList(currentTask => [newTask, ...currentTask])
      setTitle("")

  }

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>TaskFlow</Text>
      <Text style={styles.title}> Your day, organised</Text>
      <Text style={styles.description}>Manage your task in one place</Text>
      <TextInput value={title} onChangeText={setTitle}  style={styles.input}  placeholder='Enter your details'/>
      <Pressable onPress={addTask} style={styles.button}>
        <Text style={styles.inputText}>Add Tags</Text>
      </Pressable>
      <FlatList
         data={list}
         keyExtractor={item => item.id}
         renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
          </View>
         )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:24,
    paddingTop:70,
    backgroundColor:'#F8f8fc',


  },
 brand:{
  fontSize:14,
  fontWeight:'700',
  color:'#4f46e5',
  letterSpacing:2
 },
title:{
  fontSize:28,
  fontWeight:'700',
  marginTop:16
},
description:{
fontSize:16,
color:'#64748b',
marginTop:8
},
input:{
  borderWidth:1,
  borderColor:'#Cbd5e1',
  padding:12,
  borderRadius:12,
  marginTop:10
},
button:{
  backgroundColor:'#4f46e5',
  padding:14,
  marginTop: 20,
  borderRadius:10,
  alignItems:'center'
},
inputText:{
  color:'white',
  fontWeight:'700'
}
});