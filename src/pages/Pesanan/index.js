import React from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native'
import {ImageHeader, History} from '../../asset'
import { ButtonIcon, SearchBar } from '../../components'
import Promo from '../../components/Promo'
import { COLOR_BIRU_Pesanan, COLOR_DISABLE } from '../../utils/constant'

const Pesanan = () => {
    return (
        <View style = {styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground 
            source = {ImageHeader} 
            style = {styles.header}>
            <View style = {styles.hello}>
                <Text style= {styles.selamat}>Jelajahi </Text> 
                <Text style= {styles.username}>Laundry.In</Text>
            </View>
            </ImageBackground>
            <SearchBar />
            <View style={styles.layanan}>
                <View style = {styles.iconlayanan}>
                    <ButtonIcon title="Terdekat" type="layanan"/>
                    <ButtonIcon title="Jasa Layanan" type="layanan"/>
                    <ButtonIcon title="Diskon" type="layanan"/>
                </View>
            </View>
           
            <View style = {styles.history}>
                <Image source = {History}/>
            </View>

            <View style = {styles.promo}>
            <Text style={styles.label}>
                    Promo</Text>
                    <Promo title="Promo 1" status="Up to 20% Discount" desc="Kode: LaundryHemat"/>
                    <Promo title="Promo 2" status = "Kaos kaki 10% Discount" desc="Kode: LaundryHemat"/>
                    
            </View>
            </ScrollView>
        </View>
    )
}

export default Pesanan

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
        height: windowHeight*0.3275,
        paddingHorizontal: 30,
        paddingTop: 10
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
        alignItems: 'center'
    },
    promo:{
        paddingHorizontal: 30,
        marginTop: windowHeight*0.03,
        backgroundColor: COLOR_BIRU_Pesanan,
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 20
    }
})
