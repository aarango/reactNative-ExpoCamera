import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import {BarCodeScanner, BarCodeScannerResult} from 'expo-barcode-scanner';

// let number = 0
// const finderWidth = 280;
// const finderHeight =  230;
// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
// const viewMinX = (width - finderWidth) / 2;
// const viewMinY = (height - finderHeight) / 2;

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // const [type, setType] = useState>(BarCodeScanner.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log('data', data)

    alert(`Code ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    //   <View style={styles.flex1}>
    //    <BarCodeScanner
    //     style={styles.cameraScreen}
    //     defaultOnFocusComponent
    //     onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
    //    > 
    //     <View style={styles.guide} />
    //     <View style={styles.cameraButtonContainer}>
    //       {scanned &&
    //       <TouchableOpacity onPress={() => setScanned(false)}>
    //         <View style={styles.cameraButton}>
    //           <Text style={styles.icon}>📷</Text>
    //         </View>
    //       </TouchableOpacity>
    //       }
    //     </View>
    //   </BarCodeScanner>
    // </View>
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
