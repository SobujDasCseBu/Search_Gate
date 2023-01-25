// import React, { useState } from "react";
// import { Size } from 'react-native-ui-lib/src/components/skeletonView'
// import { StatusBar } from "expo-status-bar";
// const users = [
//    {
//       name: 'brynn',
//       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
//    },
//   ]
  
//   import { View, Text, Image } from 'react-native'
//   import { Card, ListItem, Button, Icon } from 'react-native-elements'

// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from "react-native";

// const Home = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//    return (
     
//          <View style={{backgroundColor: 'white',width: '100%',
//          height: '100%'}}>
//             <View style={{
//                     width: '100%',
//                     height: '8%',
//                     backgroundColor: '#006A4E',
//                     marginTop: '6%',
//                     borderWidth: 1,
//                     borderColor: "thistle",
//                     borderRadius: 2,
                   

//                   }}>
//                      <Text style ={{
//                          paddingLeft: '30%',
//                          paddingTop:10,
//                          fontSize: 20,
//                          color: '#fff',
//                           fontWeight: 'bold',
//                      }} >Home Page</Text>
//             </View>

//             <View style={{
//                     width: '90%',
//                     height: '50%',
//                     backgroundColor: '#006A4E',
//                     marginTop: '20%',
//                     marginLeft: '5%',
//                     borderWidth: 1,
//                     borderColor: "thistle",
//                     borderRadius: 2,

//                   }}>
//                      <Text style ={{
//                          paddingLeft: '40%',
//                          paddingTop:10,
//                          paddingBottom:10,
//                          fontSize: 20,
//                           fontWeight: 'bold',
//                           color: '#fff',
//                      }} >Post</Text>

//                      <Card
//                      title='HELLO WORLD'
//                      image={require('../images/pic2.jpg')}>
//                      <Text style={{marginBottom: 10}}>
//                         The idea with React Native Elements is more about component structure than actual design.
//                      </Text>
//                      <Button
//                         icon={<Icon name='code' color='#ffffff' />}
//                         buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
//                         title='VIEW NOW' />
//                      </Card>
//             </View>

//             <View style ={{
//                width: '100%',
//                height: '8%',
//                backgroundColor: '#006A4E',
//                marginTop: '31%',
//                borderWidth: 1,
//                borderColor: "thistle",
//                borderRadius: 2,
//                flexDirection: 'row',
//                alignContent: 'space-between',
               
//             }} >
//                <Text style ={{
//                   padding:10,
//                   paddingLeft:40,
//                   paddingRight:40,
//                   color: '#fff',
//                   fontSize: 20,
//                }}>Home</Text>
//                <Text style ={{
//                   padding:10,
//                   paddingLeft:40,
//                   paddingRight:40,
//                   color: '#fff',
//                   fontSize: 20,
//                }}>Search</Text>
//                <Text style ={{
//                   padding:10,
//                   paddingLeft:20,
//                   paddingRight:20,
//                   color: '#fff',
//                   fontSize: 20,
//                }}>Post</Text>

//             </View>

            
//           </View>
    
//    )
// }
// export default Home


// const styles = StyleSheet.create ({
//   container: {
//      alignItems: 'center',
    
//   },
//   text: {
//      borderWidth: 1,
//      padding: 25,
//      borderColor: 'black',
//      backgroundColor: 'red',
    
//   },
//   loginContainer: {
//    flex: 1,
//    backgroundColor: "#fff",
//    alignItems: "center",
//    justifyContent: "center",
//  },
//  inputView: {
//    backgroundColor: "#fff",
//    borderBottomColor: 'gray',
//    borderBottomWidth: 2,
//    marginBottom: 30,
//    width: "70%",
//    height: 45,
//    marginBottom: 20,
   
//  },
//  TextInput: {
//    height: 50,
//    flex: 1,
//    padding: 10,
//    marginLeft: 20,
//  },
//  forgot_button: {
//    height: 30,
//    marginBottom: 10,
//  },
//  loginBtn: {
//    width: "60%",
//    borderRadius: 25,
//    height: 50,
//    alignItems: "center",
//    justifyContent: "center",
//    marginTop: 10,
//    backgroundColor: "#4287f5",
//  },
 
// })