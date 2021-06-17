import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import {BarCodeScanner, BarCodeScannerResult} from 'expo-barcode-scanner';
import barCode from '../services/sendBarCode'

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    console.log('data', data)
    await barCode(data)
    // alert(`Code ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
      <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
         <View style={styles.guide} />
          <View style={styles.cameraButtonContainer}>
           {scanned &&
           <TouchableOpacity onPress={() => setScanned(false)}>
             <View style={styles.cameraButton}>
               <Text style={styles.icon}>📷</Text>
             </View>
           </TouchableOpacity>
           }
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
   button: {
    marginBottom: 10,
    width: '48%',
  },
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  cameraButton: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    marginBottom: 20,
    width: 80,
  },
  cameraButtonContainer: {
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
  },
  cameraScreen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  flex1: { flex: 1 },
  guide: {
    alignSelf: 'center',
    aspectRatio: 8 / 5,
    borderColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 'auto',
    width: '90%',
  },
  icon: {
    fontSize: 24,
    lineHeight: 24,
  },
  imageBackground: {
    height: '100%',
    justifyContent: 'flex-end',
    width: '100%',
  },
});
