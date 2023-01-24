import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import { Size } from 'react-native-ui-lib/src/components/skeletonView'

const App = () => {
   return (
     
         <View style={{backgroundColor: 'white',width: '100%',
         height: '100%'}}>
            <View style={{
                    width: '100%',
                    height: '8%',
                    backgroundColor: '#b89558',
                    marginTop: '6%',
                    borderWidth: 1,
                    borderColor: "thistle",
                    borderRadius: 2,

                  }}>
                     <Text style ={{
                         paddingLeft: '30%',
                         paddingTop:10,
                         fontSize: 20,
                          fontWeight: 'bold',
                     }} >Home Page</Text>
              </View>

              <View style={{
                    width: '90%',
                    height: '40%',
                    backgroundColor: '#b89558',
                    marginTop: '30%',
                    marginLeft: '5%',
                    borderWidth: 1,
                    borderColor: "thistle",
                    borderRadius: 2,

                  }}>
                     <Text style ={{
                         paddingLeft: '30%',
                         paddingTop:10,
                         fontSize: 20,
                          fontWeight: 'bold',
                     }} >Home Page</Text>
              </View>



            
            {/* <View style={{flex: 2, backgroundColor: 'skyblue'}} />
            <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            <View style={{flex: 4, backgroundColor: 'skyblue'}} />
            <View style={{flex: 5, backgroundColor: 'steelblue'}} /> */}
          </View>
    
   )
}
export default App


const styles = StyleSheet.create ({
  container: {
     alignItems: 'center',
    
  },
  text: {
     borderWidth: 1,
     padding: 25,
     borderColor: 'black',
     backgroundColor: 'yellow',
    
  }
})