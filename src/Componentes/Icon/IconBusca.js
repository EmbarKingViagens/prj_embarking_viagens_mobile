import {View} from 'react-native';
import { Icon } from 'react-native-elements'
import {pal3} from "../../estilo"
export default function IconBusca(props) {
  return (
    <View >
<Icon
  reverse
  name={props.nome}
  type='font-awesome-5'
  color={pal3}
  onPress={() => console.log('hello')
  /*
  TODO: cada icone leva a uma pagina diferente, fazer essa função e colocar uma props para o nome da pagina
   */
  } />
    </View>
  );
}