import React from 'react'
import { StyleSheet, View } from 'react-native'


const Background = ({children}) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        padding:10,
        paddingTop:30
        
    },
})

export default Background