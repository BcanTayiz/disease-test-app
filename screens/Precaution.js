import { StyleSheet, Text, View , TextInput,Button} from 'react-native'
import React,{useEffect,useState,useRef} from 'react'
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';





const Precaution = () => {

  const [precautionList,setPrecautionList] = useState([])
  const [disease,setDisease] = useState('')



 const handleEnter = async () => {
  setPrecautionList([])
  setDisease('')
  const options = {
    method: 'GET',
    url: `https://disease-detection.p.rapidapi.com/disease_precaution/${disease}`,
    headers: {
      'x-rapidapi-host': 'disease-detection.p.rapidapi.com',
      'x-rapidapi-key': '751406f370msh18e3e1f0cbcfea0p12d402jsn3eceaf3b8c47'
    }
  };
  
  axios.request(options).then(function (response) {
    setPrecautionList([])
    setDisease('')
    setPrecautionList(list => [...list,...response.data])
  }).catch(function (error) {
    alert('Not Found')
  });
 }

 





  return (
    <View style={styles.container}> 
      <TextInput style={styles.textInput}
      placeholder={disease}
      onChangeText = {(text) => setDisease(text)}
      value={disease}
      />
      <Button onPress={() => handleEnter()} title="Enter Disease" style={styles.button}/>
      <View style={styles.itemContainer}>
        {
          console.log(precautionList)
        }
          {
          precautionList.map(item => {
            return(
              <View style={styles.itemEl} key={item}>
                <Text>{item}</Text>
              </View>
            )
          })}
        
      </View>
      
    </View>
  )
}

export default Precaution

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
  itemEl:{
    height:30,
    width:'100%',
    backgroundColor:'azure',
    margin:5,
    borderRadius:10,
    borderWidth:2,
    borderColor: 'black',
  }
})