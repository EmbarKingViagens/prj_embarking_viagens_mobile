import { StyleSheet } from "react-native"
import {
    pal1,
    pal2,
    pal3,
    pal4,
    pal5,

} from "../../../estilo"

export default StyleSheet.create({
    cardOfertas: {
        width: 150,
        height: 100,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },
    tempoOfertas:{
        width:"40%",
        height:"30%",
        backgroundColor: pal5,
        padding: 4,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        

    },
    txtTempoOfertas:{
        color:pal3,
    }
   

});
