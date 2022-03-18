import { StyleSheet, Text, View , TextInput,Button} from 'react-native'
import React,{useEffect,useState,useRef} from 'react'
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';





const Symptoms = () => {

  const [diseases,setDiseases] = useState([])
  const [symptoms,setSymptoms] = useState('')


  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  

 const handleEnter = async () => {
  setDiseases([])
  setSymptoms('')
  console.log(symptoms,'disease string')
  const options = {
    method: 'GET',
    url: `https://disease-detection.p.rapidapi.com/get_disease/${symptoms}`,
    headers: {
      'x-rapidapi-host': 'disease-detection.p.rapidapi.com',
      'x-rapidapi-key': '751406f370msh18e3e1f0cbcfea0p12d402jsn3eceaf3b8c47'
    }
  };
  
  axios.request(options).then(function (response) {
    setDiseases([])
    setSymptoms('')
    console.log(response.data);
    let List = response.data.map(a => {
      return a.Disease
    })
    var unique = List.filter(onlyUnique);
    setDiseases(unique)
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
         <FlatList style={styles.itemContainer}
          data={diseases}
          renderItem={({ item }) => <Text style={styles.listStyle}>{item}</Text>}
        />
      </View>
      
    </View>
  )
}

export default Symptoms

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