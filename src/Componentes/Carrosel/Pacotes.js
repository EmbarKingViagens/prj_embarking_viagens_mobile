import {ScrollView, View, Text} from "react-native"
import React from "react"
import { pal1, pal2, pal3, pal4, pal5, styles } from '../../estilo';
import CardPacotes from "../Card/CardPacotes/CardPacotes"
import Extra from "../Sticker/extra"
export default function CarroselOfertas(){
  //TODO: fazer conexão de dados para não precisar deixar tudo no codigo  
  const pacotes =[
{
  "nome":"pacote1",
"local":'Pequim (China)',
"precoOriginal":'R$: 400',
"tempoViagem":'3 dias / 2 noites',
"precoPromocional":"200",
"data":'10-12 dec.',
"img":'https://th.bing.com/th/id/R.e1f4dcb4d7201414e8b56f20b834cd73?rik=OxKo7zDYxZLk5A&riu=http%3a%2f%2fwww.joaoleitao.com%2fviagens%2fwp-content%2fuploads%2f2015%2f11%2fVisitar-Pequim.jpg&ehk=Na1H3WMvwXV%2fSbG%2b%2fruk5kr4sb57%2ba510bvPU1Gx8FM%3d&risl=&pid=ImgRaw&r=0',
"qtdAvaliações":"5",
"solid1":true,
"solid2":true,
"solid3":true,
"solid4":false,
"solid5":false,
"icone1": 'mug-hot',
"icone2": 'mug-hot'
},
{
  "nome":"pacote2",
"local":'Pequim (China)',
"precoOriginal":'R$: 400',
"tempoViagem":'3 dias / 2 noites',
"precoPromocional":"200",
"data":'10-12 dec.',
"img":'https://th.bing.com/th/id/R.e1f4dcb4d7201414e8b56f20b834cd73?rik=OxKo7zDYxZLk5A&riu=http%3a%2f%2fwww.joaoleitao.com%2fviagens%2fwp-content%2fuploads%2f2015%2f11%2fVisitar-Pequim.jpg&ehk=Na1H3WMvwXV%2fSbG%2b%2fruk5kr4sb57%2ba510bvPU1Gx8FM%3d&risl=&pid=ImgRaw&r=0',
"qtdAvaliações":"5",
"solid1":true,
"solid2":true,
"solid3":true,
"solid4":false,
"solid5":false,
"icone1": 'mug-hot',
"icone2": 'mug-hot'
},
  ]
 const ListaPacotes = pacotes
  return(
    <>
    <View  style={styles.carrosel}>
<Text style = {styles.txtCarrosel}>
Pacotes
</Text>
    <ScrollView horizontal>
    {ListaPacotes.map ((c,key)  => 
   
    
        <CardPacotes
          local={c.local}
          precoOriginal={c.precoOriginal}
          tempoViagem={c.tempoViagem}
          precoPromocional={c.precoPromocional}
          data={c.data}
          img={
            c.img
          }
          qtdAvaliacoes={c.qtdAvaliações}
       
          solid1={c.solid1}
          solid2={c.solid2}
          solid3 = {c.solid3}>
          <Extra icone={c.icone1} txtExtra={'café da manha gratis'} />
          <Extra icone={c.icone2} txtExtra={'café da manha gratis'} />
        </CardPacotes>
      )}
    </ScrollView>
    </View>
    </>
  )
}