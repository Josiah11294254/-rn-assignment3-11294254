import React from 'react'
import { StyleSheet, View,Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
const TaskSections = ({task,icon}) => {
  return (
    <View style={styles.taskSection}>
        <Text style={{fontWeight:'bold', }}>{task}</Text>
        <Icon name={`${icon}`} color='#cf3a3b' size={30} />
    </View>
  )
}

const styles = StyleSheet.create({
    taskSection: {
        display:'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap:6,
        flexDirection:'row',
        backgroundColor: '#f8e7e7',
        borderWidth:.3,
        borderColor:'#cf3a3b',
        padding:10,
        paddingLeft:30,
        borderRadius:10,
        height:120,
        width:'100%',
        marginTop:20
        
    },
})
export default TaskSections