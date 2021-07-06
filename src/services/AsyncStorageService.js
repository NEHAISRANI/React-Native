import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('save_data', jsonValue);
  } catch (e) {
    alert(e);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    alert('Storage Successfully Clear!');
  } catch (e) {
    alert('Failed to clear the async storage.');
  }
};

export const logOut = async () => {
  try {
    // await AsyncStorage.removeItem('token') //want to remove one item
    await AsyncStorage.clear();
    console.log('done'); //whole dat6i a will be clear
  } catch (err) {
    console.log(err);
  }
};

// export const getItem = async () => {
//   const value = await AsyncStorage.getItem('save_data');
//   const jsonValue = value != null ? JSON.parse(value) : null;
// };
