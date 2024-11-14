import {Text, View, Image} from "react-native"
import styles from "./EstiloLogo"
export default function Logo(props){
  //TODO: criar uma logo para o aplicativo e colocar o link da imagem
  return(
    <>
    <View style={styles.logo}>
    
      <Image style={styles.imgPerfil} source={{ uri: props.avatar }} />
      <Image style={styles.imgLogo} source={require("../../../assets/logo.svg")}
      //imagem temporaria
      />
      <Text style={styles.txtLogo}>Olá, {props.nome}
      </Text>
    </View>

    </>
  )
}