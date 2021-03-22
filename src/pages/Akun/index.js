import React from 'react'
import { Button, Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native'
import {ImageSetting, Referral, Account} from '../../asset'
import { ButtonIcon, SearchBar } from '../../components'
import Exit from '../../components/Exit'
import Syarat from '../../components/Syarat'
import { COLOR_BIRU_Pesanan, COLOR_DISABLE } from '../../utils/constant'

const Akun = () => {
    return (
        <View style = {styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground 
            source = {ImageSetting} 
            style = {styles.header}>
            
            </ImageBackground>
            
            <View>
                <Image source = {Account} style = {styles.akun}/>
            </View>

            <View style={styles.layanan}>
                <Text style={styles.label}> Aktivitas Saya </Text>
                <View style = {styles.iconlayanan}>
                    <ButtonIcon title="Order Saya" type="layanan"/>
                    <ButtonIcon title="Top Up" type="layanan"/>
                    <ButtonIcon title="Membership" type="layanan"/>
                </View>
            </View>
           
            <View style = {styles.history}>
                <Image source = {Referral}/>
            </View>

            <View style = {styles.syarat}>
                <Syarat/>
            </View>

            <View style = {styles.exit}>
                <Exit/>
            </View>

            </ScrollView>
        </View>
    )
}

export default Akun
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor: 'white'
    },
    container:{
        backgroundColor: 'white',
        padding: 14,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginTop: -windowHeight*0.1,
        flexDirection: 'row'
    },
    header:{
        width: windowWidth,
        height: windowHeight*0.0585,
        paddingHorizontal: 30,
        paddingTop: 10
    },
    akun:{
        marginTop: 15,
        marginLeft: 15
    },
    hello:{
        marginTop: windowHeight*0.075
        
    },
    selamat:{
        fontSize: 26,
        fontFamily: 'TitilliumWeb-Regular'
    },
    username:{
        fontSize: 22,
        fontFamily: 'TitilliumWeb-Bold'
    },
    layanan:{
        paddingLeft: 30,
        paddingTop: 15
    },
    label: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Bold'
    },
    iconlayanan:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        flexWrap: 'wrap'
    },
    pesananAktif:{
        paddingHorizontal: 30,
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 10
    },
    history:{
        alignItems: 'center',
        paddingTop: 35
    },
    syarat:{
        marginTop: 30,
        marginLeft: windowWidth*0.055
    },
    exit:{
        marginTop: 15,
        marginLeft: windowWidth*0.055
    }
})