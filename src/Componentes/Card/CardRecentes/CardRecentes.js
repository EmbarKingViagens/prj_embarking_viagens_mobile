import { Text, View, Image, Pressable } from 'react-native';
import styles from './estiloCardRecentes';
import { Icon } from 'react-native-elements';
import { pal3 } from '../../../estilo';
export default function cardRecentes(props) {
  return (
    <>
      <Pressable onPress={props.onPress}>
        <View style={styles.cardRecentes}>
          <Text>{props.titulo}</Text>
          <Image source={{ uri: props.img }} style={styles.imagem} />
          <Icon name={props.icon} style={styles.icon} reverse type="font-awesome-5" size={15} color={pal3} />
          {/*TODO: fazer a estilização do card recentes no figma e passar para codigo aqui, fazer até sexta feira */}
        </View>
      </Pressable>
    </>
  );
}
