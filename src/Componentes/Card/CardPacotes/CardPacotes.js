import { Text, View, Image, ScrollView } from 'react-native';
import styles from './estiloCardPacotes';
import Botao from '../../Botao/Botao';
import { pal5 } from '../../../estilo';
import { Icon } from 'react-native-elements';
export default function CardPacotes(props) {
  return (
    <>
      <View style={styles.cardPacotes}>
        <Image source={{ uri: props.img }} style={styles.imagem} />
        {props.children ? (
          //TODO: fazer um carrosel para rolar os extras
          <View style={{ flexDirection: 'row' }}>{props.children}</View>
        ) : (
          false
        )}

        <View style={styles.tempoViagem}>
          <Text style={styles.txtTempoViagem}>{props.tempoViagem}</Text>
        </View>
        <Text style={styles.titulo}>Pacote de viagem para {props.local}</Text>
        <View style={styles.cardTop}>
          <View style={styles.row}>
            <Icon name="plane" type="font-awesome-5" color="#fff" />
            <Text style={styles.texto}>De {props.localPartida}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="calendar" type="font-awesome-5" color="#fff" />
            <Text style={styles.texto}>{props.data}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="hotel" type="font-awesome-5" color="#fff" />
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
          </View>
        </View>
        <View style={styles.cardBottom}>
          <Text style={styles.txtPrecoPessoa}>Preço por pessoa</Text>
          <Text style={styles.precoOriginal}>{props.precoOriginal}</Text>
          <Text style={styles.precoPromocional}>
            R$ {props.precoPromocional}
          </Text>
          <Text style={styles.txtAviso}>Taxas e impostos não inclusos</Text>
        </View>
        <View style={styles.pacoteBtn}>
          <Botao txtBotao={'Comprar pacote'} />
        </View>
      </View>
    </>
  );
}
