import {TouchableOpacity, Text, View } from "react-native"
import styles from "./estiloBotao"
export default function Botao (props){
return(
  <>
  <TouchableOpacity onPress={props.fun}>
  <View style={styles.botao}>
  <Text style={styles.txtBotao}>
  {props.txtBotao}
  </Text>
  </View>
  </TouchableOpacity>
  
  </>
)
}