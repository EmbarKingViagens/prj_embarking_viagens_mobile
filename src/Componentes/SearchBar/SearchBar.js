import React from "react"
import styles from "./estiloSearchBar"
import { Icon } from 'react-native-elements'
import { View } from "react-native"
import { pal3 } from "../../estilo"
export default function SearchBar() {
    return (
        <View style={styles.barraBusca}>
            <Icon name='user' size={50} color={pal3} type="font-awesome-5" style={styles.icone} solid />
            <Icon name='suitcase' size={50} color={pal3} type="font-awesome-5" style={styles.icone} />
            <Icon name='plane' size={50} color={pal3} type="font-awesome-5" style={styles.icone} />
            <Icon name='search' size={50} color={pal3} type="font-awesome-5" style={styles.icone} />
        </View>
    )
}