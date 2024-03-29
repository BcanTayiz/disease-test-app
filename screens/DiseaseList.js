import { StyleSheet, Text, View,ScrollView} from 'react-native';
import React, {useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Searchbar } from 'react-native-paper';

const DiseaseList = () => {

    const [diseaseList,setDiseaseList] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    
    const onChangeSearch = query => {
        setSearchQuery(query);    
    }

    const getSearchQuery = (query) => {
        let listElement = []
        diseaseList.filter(element =>{
            if(element.substring(0,query.length).toLowerCase() == query.toLowerCase()){
                listElement.push(element)
            }
        }
        )
        return listElement
    }
    

    const getData = async () => {
        const res = await fetch("https://disease-detection.p.rapidapi.com/disease_list/", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "disease-detection.p.rapidapi.com",
                "x-rapidapi-key": "751406f370msh18e3e1f0cbcfea0p12d402jsn3eceaf3b8c47"
            }
        })

        let data = await res.json()
        setDiseaseList(data)
    }

    useEffect(() => {
        getData()
    }, []);

  return (
    <View style={styles.container}>
        <ScrollView>
      <Text style={styles.title}>List of Diseases</Text>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
      {getSearchQuery(searchQuery).map((disease) => {
          return(
              <View key={uuidv4()} style={styles.text}>
                <Text>{disease}</Text>
              </View>
          )
      })}
      </ScrollView>
    </View>
  )
}

export default DiseaseList

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