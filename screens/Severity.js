import { StyleSheet, Text, View , TextInput,Button} from 'react-native'
import React,{useEffect,useState,useRef} from 'react'
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';





const Severity = () => {

  const [severity,setSeverity] = useState({})
  const [symptoms,setSymptoms] = useState('')



 const handleEnter = async () => {
  setSeverity({})
  setSymptoms('')
  const options = {
    method: 'GET',
    url: `https://disease-detection.p.rapidapi.com/symptoms_severity/${symptoms}`,
    headers: {
      'x-rapidapi-host': 'disease-detection.p.rapidapi.com',
      'x-rapidapi-key': '751406f370msh18e3e1f0cbcfea0p12d402jsn3eceaf3b8c47'
    }
  };
  
  axios.request(options).then(function (response) {
    setSeverity({})
    setSymptoms('')
    setSeverity(response.data)
  }).catch(function (error) {
    alert('Not Found')
  });
 }

 





  return (
    <View style={styles.container}> 
      <TextInput style={styles.textInput}
      placeholder={'symptom1,symptom2,symtom3,...'}
      onChangeText = {(text) => setSymptoms(text)}
      value={symptoms}
      />
      <Button onPress={() => handleEnter()} title="Enter Symptoms" style={styles.button}/>
      <View style={styles.itemContainer}>
        {
          console.log(severity)
        }
         <FlatList style={styles.itemContainer}
          data={Object.keys(severity)}
          renderItem={({ item }) => <Text style={styles.listStyle}>{item} :: {severity[item]/5*100}%</Text>}
        />
      </View>
      
    </View>
  )
}

export default Severity

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
    textAlign:'center',
    justifyContent:'center',
    marginBottom: 2
},
  textInput:{
    height:50,
    marginTop:10,
    marginBottom:10,
    color:'grey',
    borderWidth:2,
    borderColor:'coral',
    textAlign:'center'
  },
  button:{
    marginVertical:10,
    marginHorizontal:10,
    marginTop:12,
  },
  text:{
    marginVertical:10,
    marginHorizontal:19,
    textAlign:'center',
  },
  itemContainer:{
    flex:2,
    marginTop:20,
    width:'100%',
  },
  listStyle:{
    height:30,
    width:'100%',
    backgroundColor:'azure',
    margin:5,
    borderRadius:10,
    borderWidth:2,
    borderColor: 'black',
  }
})