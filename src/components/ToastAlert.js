import Toast from 'react-native-toast-message';

export default {
  ShowToast(type, text1, text2) {
    Toast.show({
      type: type,
      text1: text1,
      text2: text2,
    });
  },
};
