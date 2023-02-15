/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Dimensions } from 'react-native'
import { CameraComponent } from './cameracomponent'


function App(): JSX.Element {

  const myCameraOptions = {
    flash: 'on',
    zoom: 0,
    autoFocus: 'off',
    focusDepth: 0,
    type: 'back',
    whiteBalance: 'auto',
    ratio: '16:9',

    isRecording: false,
    canDetectFaces: false,
    canDetectText: false,
    canDetectBarcode: false,
    captureAudio: false,
    faces: [],
    textBlocks: [],
    barcodes: [],
  }

  return (
      <CameraComponent/>
  );
}


export default App;
