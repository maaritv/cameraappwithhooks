'use strict';
import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, RefreshControlBase } from 'react-native';
import { RNCamera } from 'react-native-camera';

export class CameraComponent extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      imageObject: null,
      newPath: null,   //path to final destination 
    }
  }

  render() {

    if (this.state.imageObject !== null && this.state.newPath !==null) {
      return (<View style={styles.container}>
        <Image style={{width: this.state.imageObject.width, height: this.state.imageObject.height}} source={{uri: this.state.newPath}}/>
      </View>)
    }

    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const imageObject = await this.camera.takePictureAsync(options);
      console.log("image data from camera was "+JSON.stringify(imageObject))
      //const newPath = await writeTextFile(xxxx, yyyy)
      this.setState({ imageObject: imageObject })
      //Change this to new, permanent destination instead of cache-folder.
      this.setState({newPath: imageObject.uri})
      console.log(this.state.newPath);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

AppRegistry.registerComponent('App', () => ExampleApp);