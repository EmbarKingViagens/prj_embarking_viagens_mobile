import { Text, SafeAreaView } from 'react-native';
import { pal1, pal2, pal3, pal4, pal5, styles } from "./src/estilo.js"

import CardOfertas from './src/Componentes/Card/CardOfertas/CardOfertas';
import CardRecentes from "./src/Componentes/Card/CardRecentes/CardRecentes"
import IconBusca from "./src/Componentes/Icon/IconBusca"
import IconBarraBusca from "./src/Componentes/Icon/IconBarraBusca"
import Botao from "./src/Componentes/Botao/Botao"
import CardPacotes from "./src/Componentes/Card/CardPacotes/CardPacotes.js"
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
{/*
 <CardOfertas 
      nomeOferta={"Rio de janeiro"} 
      color={pal3}
       txtTempoOfertas={"7 dias incluindo"} 
       txtIncluindo1={"hotel incluso"}
       txtIncluindo2={"café da manha"}
       txtIncluindo3={"seguro"}
       link={"https://www.mappingmegan.com/wp-content/uploads/2014/12/shutterstock_134907293-002.jpg"}
        />
        <CardRecentes/>
        <IconBusca nome={"hotel"}/>
        <IconBarraBusca nome={"hotel"}/>
 */}
   
    <CardPacotes
    local={"Pequim (China)"}
    precoOriginal={"R$: 400"}
    precoPromocional={"200"}
    img={"https://th.bing.com/th/id/R.e1f4dcb4d7201414e8b56f20b834cd73?rik=OxKo7zDYxZLk5A&riu=http%3a%2f%2fwww.joaoleitao.com%2fviagens%2fwp-content%2fuploads%2f2015%2f11%2fVisitar-Pequim.jpg&ehk=Na1H3WMvwXV%2fSbG%2b%2fruk5kr4sb57%2ba510bvPU1Gx8FM%3d&risl=&pid=ImgRaw&r=0"}
    />
    </SafeAreaView>
  );
}


