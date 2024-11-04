import { StyleSheet, StatusBar } from "react-native"

const pal1 = "#1F66FF"//azul
const pal2 = "#33604A"//verde
const pal3 = "#5D1FFF"//roxo
const pal4 = "#B65D84"//magenta
const pal5 = "#FF8F1F"//laranja

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ccc', 
    },
    carrosel:{
      margin:10
    }
  
  });
export {pal1, pal2, pal3, pal4, pal5, styles}