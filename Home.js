import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{
      flex:1,
      alignItems:'center'   
    }}>

<View style={{
                    width: '100%',
                    height: '8%',
                    backgroundColor: '#006A4E',
                    marginTop: '6%',
                    borderWidth: 1,
                    borderColor: "thistle",
                    borderRadius: 2,
                   

                  }}>
                     <Text style ={{
                         paddingLeft: '30%',
                         paddingTop:10,
                         fontSize: 20,
                         color: '#fff',
                          fontWeight: 'bold',
                     }} >Home Page</Text>
            </View>
      
          
      <View style={{marginTop:50,borderWidth: 1,
                    borderColor: "gray",
                    padding:10,
                    borderRadius: 2}}>
         <Text style ={{
            paddingLeft:20,
            fontSize:20,
            paddingBottom:10
         }}>Post Tittle</Text>
         <Image source={require("./images/newsimg.jpg")} style={{
            width:200,
            height:200,
            borderRadius:10,
         }}/>
         <Text style = {{
            fontSize:15,
            padding:20,
            width:200,
         }}>The image is vertically centered,
          because you added flex: 1 
          to the style property. Don't
           add flex: 1, because tha</Text>
      </View>
      <View style ={{
               width: '100%',
               height: '8%',
               backgroundColor: '#006A4E',
               marginTop: '56%',
               borderWidth: 1,
               borderColor: "thistle",
               borderRadius: 2,
               flexDirection: 'row',
               alignContent: 'space-between',
               
            }} >
               <Text style ={{
                  padding:10,
                  paddingLeft:40,
                  paddingRight:40,
                  color: '#fff',
                  fontSize: 20,
               }}>Home</Text>
               <Text style ={{
                  padding:10,
                  paddingLeft:40,
                  paddingRight:40,
                  color: '#fff',
                  fontSize: 20,
               }}>Search</Text>
               <Text style ={{
                  padding:10,
                  paddingLeft:20,
                  paddingRight:20,
                  color: '#fff',
                  fontSize: 20,
               }}>Post</Text>

            </View>

    </View>
  )
}


export default Home

const styles = StyleSheet.create({})