import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import { IconPesananMesinCuci } from '../../asset'
import { COLOR_DISABLE, COLOR, COLOR_CUCI } from '../../utils/constant'

const PesananAktif = ({title,status}) => {
    return (
        <TouchableOpacity style={styles.containter}>
            <IconPesananMesinCuci/>
            <View style={styles.text}>
            <Text style={styles.title}>{title}</Text>
            <Text style = {styles.status(status)}>{status}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PesananAktif
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containter:{
        padding: 17,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginVertical: windowHeight*0.02,
        alignItems: 'center'
    },
    text:{
        marginLeft: windowWidth*0.02
    },
    title:{
        fontFamily: 'TitilliumWeb-SemiBold',
        fontSize: 18
    },
    status: (status) => ({
        fontSize: 14,
        fontFamily: 'TitilliumWeb-Light',
        color: status === 'Sudah Selesai' ? 'black' : status ===  'Masih Dicuci' ? COLOR_CUCI : COLOR_DISABLE
    })
})
