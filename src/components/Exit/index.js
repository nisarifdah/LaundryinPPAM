import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { IconExit } from '../../asset'

const Exit = () => {
    return (
        <TouchableOpacity style={styles.containter}>
            <IconExit/>
        </TouchableOpacity>
    )
}

export default Exit

const styles = StyleSheet.create({
    container:{
        marginTop: 15
    }
})
