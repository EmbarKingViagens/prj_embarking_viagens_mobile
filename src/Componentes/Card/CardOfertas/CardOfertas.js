import React from "react"
import { Text, View, Image } from "react-native"
import styles from "./estiloCardOfertas"
export default function CardOfertas(props) {
    return (
        <>
            <View style={styles.cardOfertas}>
                <Text style={{
        fontSize: 20,
        color: props.color,
        fontWeight: 'bold',
    }}>{props.nomeOferta}</Text>

            </View>
        </>
    )
}