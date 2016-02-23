# react-native-yytoast
toast for react-native, support ios and android

## Install (iOS)
* Drag `node_modules/react-native-yytoast/node_modules/react-native-toast/ios/RCTToast.xcodeproj` to your project on Xcode.
* Click on your main project file (the one that represents the .xcodeproj) select Build Phases and drag libRCTToast.a from the Products folder inside the RCTToast.xcodeproj.
* Select `RCTToast.xcodeproj`, look for Header Search Paths and make sure it contains $(SRCROOT)/../../../../react-native/React as recursive.

## Install (Android)
Just import `react-native-yytoast` in js and use it.

## Usage
    
    import Toast from 'react-native-yytoast';
    
    ...
    Toast.show("This is a short time toast."); // short time toast.
    Toast.showLongToast("This is a long time toast.");
    
    ...
    Toast.show({errorMsg: 'Something wrong!'}); // must have field errorMsg, will show 'Something wrong!';
    
    Toast.DEFAULT_MSG = 'Oops!';
    Toast.show({aa: 'blahblah'}); // doesnt have field errorMsg, will show DEFAULT_MSG: 'Oops!';
