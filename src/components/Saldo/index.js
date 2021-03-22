import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { COLOR } from '../../utils/constant'
import ButtonIcon from '../ButtonIcon'
import Gap from '../Gap'

const Saldo = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.infosaldo}>
            <View style={styles.text}>
                <Text style={styles.labelsaldo}>Saldo: </Text>
                <Text style={styles.valuesaldo}>Rp 150.000</Text>
            </View>
            <View style = {styles.text}>
                <Text style={styles.labelpoint}>Point: </Text>
                <Text style= {styles.valuepoint}>100 Points</Text>
            </View>
            </View>
        <View style = {styles.buttonAction}>
            <ButtonIcon title = "Add Saldo"/>
            <Gap width={10}/>
            <ButtonIcon title = "Get Point"/>
        </View>
        </View>
    )
}

export default Saldo
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        marginHorizontal: 30,
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
    text: {
       flexDirection: 'row',
       justifyContent: 'space-between'
    },
    infosaldo:{
        width: '60%'
    },
    labelsaldo:{
        fontSize: 22,
        fontFamily: 'TitilliumWeb-Regular'
    },
    valuesaldo:{
        fontSize: 22,
        fontFamily: 'TitilliumWeb-Bold'
    },
    labelpoint:{
        fontSize: 14,
        fontFamily: 'TitilliumWeb-Regular'
    },
    valuepoint:{
        fontSize: 14,
        fontFamily: 'TitilliumWeb-Bold',
        color: COLOR
    },
    buttonAction:{
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'flex-end'
    }

})
