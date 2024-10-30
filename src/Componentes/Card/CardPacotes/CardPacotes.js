import {Text, View, Image} from "react-native"
import styles from "./estiloCardPacotes"
import Botao  from "../../Botao/Botao"
import { Icon } from "react-native-elements"
export default function CardPacotes(props){
  return(
    <>
    <View style={styles.cardPacotes}>
    {/*TODO: pegar o estilo já feito de pacotes que está no figma */}
    <Image 
        source={{ uri: props.img }} 
        style={styles.imagem} 
      />

      <Text style={styles.titulo}>Pacote de viagem para {props.local}</Text>
      <View style={styles.row}>

      <Icon style={styles.icon}  name="plane" type="font-awesome-5" color="#fff" />
      <Text style={styles.texto}>De {props.localPartida}</Text>
      </View>
      

      <View style={styles.cardBottom}>
      
      <Text style={styles.txtPrecoPessoa}>Preço por pessoa</Text>
      <Text style={styles.precoOriginal}>{props.precoOriginal}</Text>
      
      <Text style={styles.precoPromocional}>R$ {props.precoPromocional}</Text>
      <Text style={styles.txtAviso}>Taxas e impostos não inclusos</Text>
      
      </View>
      <View style={styles.pacoteBtn}>

  <Botao txtBotao={"Comprar pacote"}/>
      </View>
    </View>
    </>
  )
}