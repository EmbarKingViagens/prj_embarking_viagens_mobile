import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './estiloCardOfertas';
import { Icon } from 'react-native-elements';
export default function CardOfertas(props) {
  return (
    <>
      <View style={[styles.cardOfertas, { borderBottomColor: props.color }]}>
        <Text style={[styles.titulo, { color: props.color }]}>
          {props.nomeOferta}
        </Text>
        <View style={styles.divisor}>
          <View>
            <View style={styles.tempoOfertas}>
        <Text style={[styles.subtitulo, { color: props.color }]}>
      
                {props.txtTempoOfertas}
              </Text>
            </View>
             <View style={[styles.incluindo, { backgroundColor: props.color }]}>
              <View style={styles.icons}>
                <Icon
                  name="hotel"
                  style={styles.icon}
                  type="font-awesome-5"
                  color="#fff"
                />
                <Icon
                  style={styles.icon}
                  name="mug-hot"
                  type="font-awesome-5"
                  color="#fff"
                />
                <Icon
                  style={styles.icon}
                  name="lock"
                  type="font-awesome-5"
                  color="#fff"
                />
              </View>
              <View style={styles.txtIcons}>
                <Text style={styles.txtIncluindo}>{props.txtIncluindo1}</Text>
                <Text style={styles.txtIncluindo}>{props.txtIncluindo2}</Text>
                <Text style={styles.txtIncluindo}>{props.txtIncluindo3}</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.imgOferta}
            source={{
              uri: props.link,
            }}
          />
        </View>
      </View>
    </>
  );
}
