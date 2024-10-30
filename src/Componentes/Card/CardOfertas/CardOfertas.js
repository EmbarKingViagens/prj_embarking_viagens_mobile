import React from "react"
import { Text, View, Image } from "react-native"
import styles from "./estiloCardOfertas"
export default function CardOfertas(props) {
    return (
        <>
            <View style={{
            
                backgroundColor: '#fff',
                borderBottomWidth: 10,
                borderRadius: 10,
                padding: 5,
                overflow: "hidden",
                borderBottomColor: props.color
            }}>

                <Text style={{
                    fontSize: 20,
                    color: props.color,
                    fontWeight: 'bold',
                    textAlign: "center",
                    margin: 3
                }}>{props.nomeOferta}</Text>
                    <View style={{flexDirection: "row"}}>
                        <View>

                <View style={styles.tempoOfertas}>
                    <Text style={{
                        color: props.color,
                        fontSize: 20,
                        textAlign: "center"
                    }}>{props.txtTempoOfertas}</Text>
                </View>
                <View style={{
                    width: "65%",
                    flexDirection: "row",
                    backgroundColor: props.color,
                    padding: 4,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                }}>
                    <Text style={styles.txtIncluindo}>{props.txtIncluindo1}</Text>
                    <Text style={styles.txtIncluindo}>{props.txtIncluindo2}</Text>
                    <Text style={styles.txtIncluindo}>{props.txtIncluindo3}</Text>

                </View>
                </View>
                <Image
                 style={styles.imgOferta}
                 source={{
                     uri:props.link
                    }}
                    />
                    </View>
            </View>
        </>
    )
}