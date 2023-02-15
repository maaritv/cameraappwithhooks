# cameraappwithhooks

Project uses react-native-camera with hooks

1. Dependencies need to be installed with --save -option

2. added to android/app/build.grade -file:

   `missingDimensionStrategy 'react-native-camera', 'mlkit'`

3. installed react-native-camera
4. installed react-native-camera-hooks
5. installed deprecated-react-native-prop-types
6. fixed deprecated error.
7. replace view-proptypes in:

`\node_modules\react-native-camera\src\RNCamera.js`

8. install @react-native/normalize-color

9. add permissions to:

`android\app\src\main\AndroidManifest.mf`

`<uses-permission android:name="android.permission.CAMERA" />`
`<uses-permission android:name="android.permission.FLASHLIGHT" />`
`<uses-feature android:name="android.hardware.camera" android:required="false" />`
`<uses-feature android:name="android.hardware.camera.flash" android:required="false" />`
`<uses-permission android:name="android.permission.RECORD_AUDIO"/>`


