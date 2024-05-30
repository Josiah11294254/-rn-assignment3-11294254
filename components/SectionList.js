import React from 'react'
import { StyleSheet, View,Text } from 'react-native'

const TaskSections = ({task}) => {
  return (
    <View style={styles.taskSection}>
        <Text style={{fontWeight:'bold', }}>{task}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    taskSection: {
        // flex: 1,
        backgroundColor: '#f3f5ff',
        alignItems: 'start',
        borderWidth:.7,
        borderColor:'#5f73aa',
        justifyContent: 'center',
        padding:10,
        paddingLeft:30,
        borderRadius:15,
        height:120,
        width:'100%',
        marginTop:20
        
    },
})
export default TaskSections