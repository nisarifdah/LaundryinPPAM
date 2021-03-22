import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { IconSyarat } from '../../asset'

const Syarat = () => {
    return (
        <TouchableOpacity style={styles.containter}>
            <IconSyarat/>
        </TouchableOpacity>
    )
}

export default Syarat

const styles = StyleSheet.create({
    container:{
        marginTop: 15
    }
})
