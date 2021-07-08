import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('save_data', jsonValue);
  } catch (e) {
    alert(e);
  }
};


const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    alert('Storage has been Cleared');
  } catch (e) {
    alert('Failed to clear the async storage.');
  }
};

const logOut = async () => {
  try {
    // await AsyncStorage.removeItem('token') //want to remove one item
    alert('done'); //whole data will be clear

    await AsyncStorage.clear();
    console.log('done'); //whole data will be clear
  } catch (err) {
    console.log(err);
  }
};


const getItem = async () => {
  try {
    // getItem
    const value = await AsyncStorage.getItem('save_data');
    const jsonValue = value != null ? JSON.parse(value) : null;
    console.log(jsonValue);
    arr = jsonValue;
  } catch (e) {
    console.log('error', e);
  }
  console.log('data', arr, jsonValue);
};

export  {storeData,clearStorage,logOut,getItem}
