import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './estiloExtra';
import {pal3} from "../../estilo"
export default function extra(props) {
  return (
    <>
      <View style={styles.extra}>
        <Icon
          name={props.icone}
          type="font-awesome-5"
          color={pal3}
          
        />
        <Text style={styles.txtExtra}>{props.txtExtra}</Text>
      </View>
    </>
  );
}
