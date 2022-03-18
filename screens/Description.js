import { StyleSheet, Text, View , TextInput,Button} from 'react-native'
import React,{useEffect,useState,useRef} from 'react'
import axios from 'axios';





const Description = () => {

  const [description,setDescription] = useState('')
  const [disease,setDisease] = useState('')



 const handleEnter = async () => {
  setDescription('')
  setDisease('')
  const options = {
    method: 'GET',
    url: `https://disease-detection.p.rapidapi.com/disease_description/${disease}`,
    headers: {
      'x-rapidapi-host': 'disease-detection.p.rapidapi.com',
      'x-rapidapi-key': '751406f370msh18e3e1f0cbcfea0p12d402jsn3eceaf3b8c47'
    }
  };
  
  axios.request(options).then(function (response) {
    setDescription('')
    setDisease('')
    setDescription(response.data)
  }).catch(function (error) {
    alert('Not Found')
  });
 }

 





  return (
    <View>
      <TextInput style={styles.textInput}
      placeholder={disease}
      onChangeText = {(text) => setDisease(text)}
      value={disease}
      />
      <Button onPress={() => handleEnter()} title="Enter Disease"/>
      <View>
        <Text style={styles.text}>{description === 404 ? 'not correct disease name' : description}</Text>
      </View>
      
    </View>
  )
}

export default Description

const styles = StyleSheet.create({
  textInput:{
    backgroundColor:'azure',
    height:50,
    marginTop:40,
    marginBottom:20,
    color:'grey',
    borderWidth:2,
    borderColor:'coral',
    textAlign:'center'
  },
  text:{
    marginVertical:20,
    marginHorizontal:20,
    textAlign:'center',
  }
})