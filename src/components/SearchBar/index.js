import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { COLOR, COLOR_DISABLE, COLOR_SEKUNDER } from '../../utils/constant'
import ButtonIcon from '../ButtonIcon'
import Gap from '../Gap'
import {IconSearch} from '../../asset'

const SearchBar = () => {
    return (
        <View style= {styles.container}>
            <IconSearch/>
            <Text style= {styles.text}>Cari layanan di sekitar anda</Text> 
        </View>
        

    )
}

export default SearchBar

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
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
    text: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       color: COLOR_DISABLE
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
