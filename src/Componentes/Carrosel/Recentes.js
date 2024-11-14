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
 "imagem": ""
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
    {ListaRecentes.map ((c,key)  => 
   
   <CardRecentes key={key} imagem={c.imagem} icon={c.icon} />
      )}
    </ScrollView>
    </View>
    </>
  )
}