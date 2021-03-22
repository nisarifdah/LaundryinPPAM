import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import { IconProfil, IconPromo2 } from '../../asset'
import { COLOR_DISABLE, COLOR, COLOR_CUCI } from '../../utils/constant'

const Profil = ({title,desc}) => {


    return (
        <TouchableOpacity style={styles.containter}>
            <View style={styles.text}>
            <Text style = {styles.title}>{title}</Text>
            <Text style = {styles.desc(desc)}>{desc}</Text>
            </View>
            <IconProfil style = {styles.profil}/>
            
        </TouchableOpacity>
    )
}

export default Profil
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
        width: windowWidth*0.92,
        height: windowHeight*0.185,
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginVertical: windowHeight*0.02,
        marginLeft: windowWidth*0.042,
        alignItems: 'center'
    },
    profil:{
        marginLeft: windowWidth*0.635,
        marginVertical: windowHeight*0.90,
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
