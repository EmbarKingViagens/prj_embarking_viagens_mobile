import { Text, SafeAreaView } from 'react-native';
import { pal1, pal2, pal3, pal4, pal5, styles } from "./src/estilo.js"

import CardOfertas from './src/Componentes/Card/CardOfertas/CardOfertas';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <CardOfertas 
      nomeOferta={"Rio de janeiro"} 
      color={pal3}
       txtTempoOfertas={"7 dias incluindo"} 
       txtIncluindo1={"hotel incluso"}
       txtIncluindo2={"café da manha"}
       txtIncluindo3={"seguro"}
       link={"https://www.mappingmegan.com/wp-content/uploads/2014/12/shutterstock_134907293-002.jpg"}
        />
    </SafeAreaView>
  );
}


