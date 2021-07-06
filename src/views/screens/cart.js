import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import img from '../utils/images';
import storeData from '../services/store';
import {NavigationEvents} from 'react-navigation';

export default class Cart extends Component {
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('save_data');
      const jsonValue = value != null ? JSON.parse(value) : null;

      console.log('data', jsonValue);
      if (jsonValue !== null) {
        this.setState({dataList: jsonValue});
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  // getData = async () => {
  //   await (jsonValue = AsyncStorage.getItem('save_data')
  //     .then(jsonValue => {
  //       return jsonValue != null ? JSON.parse(jsonValue) : null;
  //     })
  //     .then(response => {
  //       this.setState({dataList: response}); 
  //     }));
  // };

  updation = async () => {
    await this.getData();
    this.setState({
      totalCost: this.state.dataList.reduce((acc, element) => {
        return (acc += element.price * element.quantity);
      }, 0),
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      dataList: null,
      totalCost: 0,
    };
  }

  componentDidMount() {
    this.updation();
  }

  render() {
    let {navigation} = this.props;

    return (
      <ImageBackground source={img.bg} style={{width: '100%', height: '100%'}}>
        <NavigationEvents
          onDidFocus={() => {
            this.updation();
          }}
        />
        <View>
          <FlatList
            data={this.state.dataList}
            renderItem={({item, index}) => (
              <View style={styles.outerCard}>
                <View style={{flexDirection: 'row'}}>
                  <Image style={styles.img} source={{uri: item.src}} />
                  <View style={styles.detailsContainer}>
                    <View style={styles.row}>
                      <Text
                        style={styles.Details}>{`title : ${item.title}`}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text
                        style={styles.Details}>{`genre : ${item.genre}`}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text
                        style={styles.Details}>{`price :${item.price}`}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.Details}>{'quantity :  '}</Text>
                      <View style={{flexDirection: 'row', maxHeight: 25}}>
                        <TouchableOpacity
                          onPress={() => {
                            item.quantity++;
                            this.setState({dataList: this.state.dataList});

                            this.setState({
                              totalCost: this.state.dataList.reduce(
                                (acc, element) => {
                                  return (acc +=
                                    element.price * element.quantity);
                                },
                                0, 
                              ),
                            });

                            storeData(this.state.dataList);
                          }}>
                          <Text style={styles.qtyChanger}> + </Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 15}}> {item.quantity} </Text>
                        <TouchableOpacity
                          onPress={() => {
                            if (item.quantity > 1) {
                              item.quantity--;
                              this.setState({dataList: this.state.dataList});

                              this.setState({
                                totalCost: this.state.dataList.reduce(
                                  (acc, element) => {
                                    return (acc +=
                                      element.price * element.quantity);
                                  },
                                  0,
                                ),
                              });

                              storeData(this.state.dataList);
                            }
                          }}>
                          <Text style={styles.qtyChanger}> - </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <TouchableOpacity
                      style={styles.row}
                      onPress={async () => {
                        this.setState({
                          dataList: await this.state.dataList.filter(
                            (listItem, listIndex) => listIndex !== index,
                          ),
                        });
                        this.setState({
                          totalCost: this.state.dataList.reduce(
                            (acc, element) => {
                              return (acc += element.price * element.quantity);
                            },
                            0,
                          ),
                        });

                        await storeData(this.state.dataList);
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 16,
                          marginTop: 6,
                          color: 'white',
                        }}>
                        Remove
                      </Text>
                      <Image
                        style={{height: 30, width: 30, marginTop: 5}}
                        source={img.delImage}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{fontSize: 28, color: 'white'}}>Total Cost :</Text>
            <Text style={{fontSize: 28, color: 'white'}}>
              {' '}
              $ {this.state.totalCost} /-
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={
                (clearStorage = async () => {
                  try {
                    await AsyncStorage.clear();
                    alert('Storage has been cleared');
                  } catch (e) {
                    alert('Failed to clear the async storage.');
                  }
                })
              }>
              <Text style={styles.btn}>Clear Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Checkout');
              }}>
              <Text style={styles.btn}>CheckOut</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  outerCard: {
    width: '93%',
    borderRadius: 11,
    borderColor: 'white',
    marginBottom: 17,
    borderWidth: 2,
    alignSelf: 'center',
  },
  img: {
    height: 160,
    borderRadius: 32,
    width: 120,

    borderColor: 'black',
    borderWidth: 1,
    margin: 6,
},
  detailsContainer: {
    marginLeft: 8,

    marginTop: 22,
  },
  row: {
    flexDirection: 'row',
    width: 158,

    marginBottom: 4,
  },
  qtyChanger: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'white',
    color: 'white',
    fontWeight: 'bold',
  },
  Details: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  btn: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    paddingVertical: 4,
    color: 'white',
    fontSize: 21,
    borderColor: 'white',
    marginHorizontal: 11,
    paddingHorizontal: 4,
    borderRadius: 21,
  },
});

