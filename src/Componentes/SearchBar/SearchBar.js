import React from "react"
import styles from "./estiloSearchBar"
import { Icon } from 'react-native-elements'
import {View }from "react-native"
import {pal3} from "../../estilo"
export default function SearchBar() {
    return (
    <View style={styles.barraBusca}>
        <Icon name='search' size={20} color={pal3} style={styles.icono}/>
    </View>
)
}