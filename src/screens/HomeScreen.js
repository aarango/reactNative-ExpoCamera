import {StatusBar} from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'

export default function HomeScreen({ navigation }) {
  return (
  <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('Camera')}
          style={{
            width: 130,
            borderRadius: 4,
            backgroundColor: '#14274e',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            Capturar
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})