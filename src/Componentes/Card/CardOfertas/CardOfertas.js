import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './estiloCardOfertas';
import { Icon } from 'react-native-elements';
export default function CardOfertas(props) {
  return (
    <>
      <View
        style={{
          width: "80%",
          backgroundColor: '#fff',
          borderBottomWidth: 10,
          borderRadius: 10,
          padding: 5,
          overflow: 'hidden',
          borderBottomColor: props.color,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: props.color,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 3,
          }}>
          {props.nomeOferta}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <View style={styles.tempoOfertas}>
              <Text
                style={{
                  color: props.color,
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                {props.txtTempoOfertas}
              </Text>
            </View>
            <View
              style={{
                width: '65%',
               
                backgroundColor: props.color,
                padding: 4,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}>
              <View style={styles.icons}>
                <Icon name="hotel" style={styles.icon} type="font-awesome-5" color="#fff" />
                <Icon style={styles.icon}  name="mug-hot" type="font-awesome-5" color="#fff" />
                <Icon style={styles.icon}  name="lock" type="font-awesome-5" color="#fff" />
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
