import { StyleSheet, Text, View,ScrollView} from 'react-native';
import React, {useState,useEffect} from 'react'

const SymptomList = () => {

    const [symptomList,setSymptomList] = useState([])

    const getData = async () => {
        const res = await fetch("https://disease-detection.p.rapidapi.com/symptom_list/", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "disease-detection.p.rapidapi.com",
                "x-rapidapi-key": "751406f370msh18e3e1f0cbcfea0p12d402jsn3eceaf3b8c47"
            }
        })

        let data = await res.json()
        setSymptomList(data)
        console.log(data)
    }

    useEffect(() => {
        getData()
    }, []);

  return (
    <View style={styles.container}>
        <ScrollView>
      <Text style={styles.title}>List of Symptoms</Text>
      {symptomList.map((symptom) => {
          return(
              <View style={styles.text}>
                <Text>{symptom}</Text>
              </View>
          )
      })}
      </ScrollView>
    </View>
  )
}

export default SymptomList

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 100,
        marginLeft: 30,
        marginRight: 30,
        textAlign:'center',
        justifyContent:'center',
        marginBottom: 100

    },
    title:{
        fontSize:30,
        backgroundColor:'coral',
        marginBottom:20,
    },
    text:{
        backgroundColor: '#6495ED',
        fontSize:15,
        width:300,
        height:30,
        shadowColor:'black',
        shadowRadius:2,
        marginTop:2,
        marginBottom:2,
    }
})