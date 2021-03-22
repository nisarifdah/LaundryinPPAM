import React from 'react'
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native'
import {ImageHeader, UserLogo} from '../../asset'
import { ButtonIcon, Saldo } from '../../components'
import PesananAktif from '../../components/PesananAktif'
import { COLOR_BIRU_Pesanan } from '../../utils/constant'

const Home = () => {
    return (
        <View style = {styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground 
            source = {ImageHeader} 
            style = {styles.header}>
            <View style = {styles.hello}>
                <Text style= {styles.selamat}>Selamat Datang, </Text> 
                <Text style= {styles.username}>PPAM!</Text>
            </View>
            </ImageBackground>
            <Saldo />
            <View style={styles.layanan}>
                <Text style={styles.label}>
                    Layanan Kami
                </Text>
                <View style = {styles.iconlayanan}>
                    <ButtonIcon title="Kiloan" type="layanan"/>
                    <ButtonIcon title="Satuan" type="layanan"/>
                    <ButtonIcon title="Extra Service" type="layanan"/>
                    <ButtonIcon title="Karpet" type="layanan"/>
                    <ButtonIcon title="Setrika Saja" type="layanan"/>
                    <ButtonIcon title="Ekspress" type="layanan"/>
                </View>
            </View>
            <View style ={styles.pesananAktif}>
            <Text style={styles.label}>
                    Pesanan Aktif</Text>
                    <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai"/>
                    <PesananAktif title="Pesanan No. 0002132" status="Sudah Selesai"/>
                    <PesananAktif title="Pesanan No. 0002112" status="Masih Dicuci"/>
            </View>
            </ScrollView>
            
        </View>
    )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor: 'white'
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
        backgroundColor: COLOR_BIRU_Pesanan,
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 10
    }
})
