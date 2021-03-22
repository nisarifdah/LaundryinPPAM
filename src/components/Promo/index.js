import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import { IconPromo1, IconPromo2 } from '../../asset'
import { COLOR_DISABLE, COLOR, COLOR_CUCI } from '../../utils/constant'

const Promo = ({title,status,desc}) => {

    const Icon = () => {
        if (title === "Promo 1") return <IconPromo1/>
        if (title === "Promo 2") return <IconPromo2/>
        return <IconPromo1/>
    }
    return (
        <TouchableOpacity style={styles.containter}>
            <Icon/>
            <View style={styles.text}>
            <Text style = {styles.status}>{status}</Text>
            <Text style = {styles.desc(desc)}>{desc}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Promo
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
    desc: (status) => ({
        fontSize: 14,
        fontFamily: 'TitilliumWeb-Light',
        color: status === 'Sudah Selesai' ? 'black' : status ===  'Masih Dicuci' ? COLOR_CUCI : COLOR_DISABLE
    })
})
