import { StyleSheet, Text, View , TextInput,Button} from 'react-native'
import React,{useEffect,useState,useRef} from 'react'


const Description = () => {

  const [description,setDescription] = useState('')
  const [disease,setDisease] = useState('')

  const getData = async (DiseaseText) => {
    const res = await fetch(`https://disease-detection.p.rapidapi.com/disease_description/${DiseaseText}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "disease-detection.p.rapidapi.com",
        "x-rapidapi-key": "751406f370msh18e3e1f0cbcfea0p12d402jsn3eceaf3b8c47"
      }
    })

    let data = await res.json()
    console.log(JSON.stringify(data))
    setDescription(data)
    
  } 


  const handleEnter = async (disease) => {
      let data = await getData(disease)
      console.log(data)
  }




  return (
    <View>
      <TextInput style={styles.textInput}
      placeholder={disease}
      onChangeText  = {(text) => setDisease(text)}
      />
      <Button onPress={() => handleEnter(disease)} title="Enter Disease"/>
      <View>
        <Text>{}</Text>
      </View>
      
    </View>
  )
}

export default Description

const styles = StyleSheet.create({
  textInput:{
    backgroundColor:'grey',
    height:30,
    marginTop:40,
    marginBottom:20,
    color:'red',
  }
})