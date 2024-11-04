import {Text, View, Image} from "react-native"
import styles from "./EstiloLogo"
export default function Logo(props){
  //TODO: criar uma logo para o aplicativo e colocar o link da imagem
  return(
    <>
    <View style={styles.logo}>
    
      <Image style={styles.imgPerfil} source={{ uri: props.avatar }} />
      <Image style={styles.imgLogo} source={{ uri: "https://th.bing.com/th/id/R.ec41fc356afffcad45ed2b35755f42fb?rik=lB1c3%2byspk0L%2fQ&pid=ImgRaw&r=0&sres=1&sresct=1" }}
      //imagem temporaria
      />
      <Text style={styles.txtLogo}>Olá, {props.nome}
      </Text>
    </View>

    </>
  )
}