import {ScrollView, View, Text} from "react-native"
import React from "react"
import { pal1, pal2, pal3, pal4, pal5, styles } from '../../estilo';
import CardRecentes from "../Card/CardRecentes/CardRecentes"
export default function CarroselOfertas(){
  //TODO: fazer conexão de dados para não precisar deixar tudo no codigo  
  const recentes =[
{
 "id": 1,
 "icon":"hotel",
 "titulo": "copacabana palace hotel",
 "imagem": "https://image-stock.mercuryholidays.co.uk/original/hotel/middle-east/united-arab-emirates/dubai/dubai-city/radisson-blu-hotel-dubai-waterfront/gallery/xxl-608782a_hb_p_001.jpg"
},
{
 "id": 2,
},
{
 "id": 3,
},
{
 "id": 4,
},
{
 "id": 5,
},
{
 "id": 6,
},
  ]
 const ListaRecentes = recentes
  return(
    <>
    <View  style={styles.carrosel}>
<Text style = {styles.txtCarrosel}>
Recentes
</Text>
    <ScrollView horizontal>
    {ListaRecentes.map ((c)  => 
   
   <CardRecentes key={c.id} img={c.imagem} icon={c.icon} titulo={c.titulo}/>
      )}
    </ScrollView>
    </View>
    </>
  )
}