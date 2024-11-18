import React from "react"
import { View, Text, ScrollView } from "react-native"
import CarroselPontosTuristicos from "../Componentes/Carrosel/PontosTuristicos"
export default function PontosTuristicos() {
    const TipoPontoTuristicos = [
        {
            num: 1,
            tipo: "ecoturismo",

        },
        {
            num: 2,
            tipo: "turismo social",

        },
        {
            num: 3,
            tipo: "ecoturismo",

        },
        {
            num: 4,
            tipo: "Turismo de Estudos e intercambio",

        },
        {
            num: 5,
            tipo: "Turismo de aventura",

        },
        {
            num: 6,
            tipo: "Turismo Nautico",

        },
    ]
    const ListaTipoPontoTuristicos = TipoPontoTuristicos
    return (
        <>
            <ScrollView>
                {
                    ListaTipoPontoTuristicos.map((c) => (
                        <CarroselPontosTuristicos key={c.num} tipoPontoTuristico = {c.tipo}/>
                    ))
                }
            </ScrollView>
        </>
    )
}