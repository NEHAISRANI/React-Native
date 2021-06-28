import AsyncStorage from '@react-native-async-storage/async-storage';

export default  storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('save_data', jsonValue);
    } catch (e) {
      alert(e);
    }
  };
