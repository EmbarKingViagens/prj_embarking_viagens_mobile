import { Text, SafeAreaView } from 'react-native';
import {pal1, pal2, pal3, pal4, pal5, styles} from "./src/estilo.js"

import CardOfertas from './src/Componentes/Card/CardOfertas/CardOfertas';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    
    <CardOfertas nomeOferta={"Rio de janeiro"} color={pal4} txtTempoOfertas={"7 dias"}/>
    </SafeAreaView>
  );
}


