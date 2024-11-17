import { Text, View, Image } from "react-native"
import Botao from '../../Botao/Botao';
import { Icon } from "react-native-elements"
import styles from "./estiloCardPontosTuristicos"
import { pal5 } from "../../../estilo"
export default function CardPontosTuristicos(props) {
  return (
    <>
      <View style={styles.cardPontosTuristicos}>
        <Image source={{ uri: props.img }} style={[styles.imagem, { backgroundColor: props.color }]} />
        <Text style={styles.titulo}>{props.titulo}
        </Text>
        <View style={styles.stars}>
          <Text style={styles.texto}>
            <Icon
              name="star"
              type="font-awesome-5"
              color={pal5}
              solid={props.solid1}
            />
            <Icon
              name="star"
              type="font-awesome-5"
              color={pal5}
              solid={props.solid2}
            />
            <Icon
              name="star"
              type="font-awesome-5"
              color={pal5}
              solid={props.solid3}
            />
            <Icon
              name="star"
              type="font-awesome-5"
              color={pal5}
              solid={props.solid4}
            />
            <Icon
              name="star"
              type="font-awesome-5"
              color={pal5}
              solid={props.solid5}
            />
            ({props.qtdAvaliacoes})
          </Text>
          <Text style={styles.texto}>{props.tipoPontoTuristico}
          </Text>
          <Text style={styles.texto}>{props.descricao}
          </Text>
          <Text style={styles.texto}>{props.tipoEntrada}
          </Text>
        </View>

        <Text>
        </Text>
        <Botao txtBotao={"adcionar ao pacote"} />
      </View>
    </>
  )
}