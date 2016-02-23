'use strict'
import React, {ToastAndroid, Platform} from 'react-native';
import Toast from 'react-native-toast';

var YYToast = {
    DEFAULT_MSG: '开小差啦...',
    show: function(msg) {
        this.showShortToast(msg);
    },
    showShortToast: function(msg) {
        let msgContent;
        if (typeof msg == 'string') {
            msgContent = msg;
        } else if (typeof msg == 'object' && msg.errorMsg) {
            msgContent = msg.errorMsg;
        } else {
            console.log("[错误提示] ==> 未识别的错误结构: ", msg);
            msgContent = this.DEFAULT_MSG;
        }
        if (Platform.OS === 'ios') {
            Toast.show(msgContent);
        } else {
            ToastAndroid.show(msgContent, ToastAndroid.SHORT);
        }
    },
    showLongToast: function(msg) {
        let msgContent;
        if (typeof msg == 'string') {
            msgContent = msg;
        } else if (typeof msg == 'object' && msg.errorMsg && typeof msg.errorMsg == 'string') {
            msgContent = msg.errorMsg;
        } else {
            console.log("[错误提示] ==> 未识别的错误结构: ", msg);
            msgContent = this.DEFAULT_MSG;
        }
        if (Platform.OS === 'ios') {
            Toast.showLongBottom(msgContent);
        } else {
            ToastAndroid.show(msgContent, ToastAndroid.LONG);
        }
    }
}

export default YYToast;
