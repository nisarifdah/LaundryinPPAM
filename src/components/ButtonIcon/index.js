import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { 
    IconAddSaldo, 
    IconGetPoint, 
    IconKiloan, 
    IconKarpet, 
    IconBaju, 
    IconEkspress, 
    IconExtraService, 
    IconSetrika,
    IconSearch,
    IconLaundryTerdekat,
    IconJasaLayanan,
    IconDiskon,
    IconPesananSaya,
    IconTopUp,
    IconMember,
    IconExit } from '../../asset'
import { COLOR_SEKUNDER } from '../../utils/constant'

const ButtonIcon = ({ title, type }) => {

    const Icon = () => {
        if (title === "Add Saldo") return <IconAddSaldo />
        if (title === "Get Point") return <IconGetPoint />

        if (title === "Kiloan") return <IconKiloan />
        if (title === "Satuan") return <IconBaju />
        if (title === "Extra Service") return <IconExtraService />
        if (title === "Karpet") return <IconKarpet />
        if (title === "Setrika Saja") return <IconSetrika />
        if (title === "Ekspress") return <IconEkspress />
        
        if (title === "Search") return <IconSearch />

        if (title === "Terdekat") return <IconLaundryTerdekat />
        if (title === "Jasa Layanan") return <IconJasaLayanan />
        if (title === "Diskon") return <IconDiskon />

        if (title === "Order Saya") return <IconPesananSaya/>
        if (title === "Top Up") return <IconTopUp/>
        if (title === "Membership") return <IconMember/>

        if (title === "Exit") return <IconExit/>
        return <IconAddSaldo />
    }

    return (
        <TouchableOpacity style = {styles.container(type)}>
            <View style={styles.button(type)}>
                <Icon />
            </View>
            <Text style={styles.text(type)}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    button: (type) => ({
        backgroundColor: COLOR_SEKUNDER,
        padding: type === "layanan" ? 12 : type === "layanan2" ? 10 : 9,
        borderRadius: 10
    }),
    text: (type) => ({
        fontFamily: type === "layanan" ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
        fontSize: type === "layanan" ? 14 : 10,
        textAlign: 'center'
    }),
    container: (type) => ({
        marginBottom: type === "layanan" ? 12: 0,
        marginRight : type === "layanan" ? 30: 0
    })

})
