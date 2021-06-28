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
import img from '/home/coditas/Desktop/Redux/source/utils/image.js';
import storeData from '/home/coditas/Desktop/Redux/source/utils/store.js';
import {NavigationEvents} from 'react-navigation';

export default class Cart extends Component {
  getData = async () => {
    await (jsonValue = AsyncStorage.getItem('save_data')
      .then(jsonValue => {
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      })
      .then(response => {
        this.setState({dataList: response});
      }));
  };

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
                <View style={styles.card}>
                  <View style={styles.img_container}>
                    <Image style={styles.img} source={{uri: item.src}} />
                  </View>
                  <View style={styles.details_container}>
                    <View style={styles.row}>
                      <Text style={styles.spec}>Title : </Text>
                      <Text style={styles.info}>{item.title}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.spec}>Genre : </Text>
                      <Text style={styles.info}>{item.genre}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.spec}>Price : </Text>
                      <Text style={styles.info}>{item.price}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.spec}>Quantity : </Text>
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
                        <Text style={styles.info}> {item.quantity} </Text>
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
                          marginTop: 7,
                          fontSize: 16,
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
          <View style={styles.total}>
            <Text style={{fontSize: 30, color: 'coral'}}>Total Cost :</Text>
            <Text style={styles.cost}> $ {this.state.totalCost} /-</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={
                (clearStorage = async () => {
                  try {
                    await AsyncStorage.clear();
                    alert('Storage successfully cleared!');
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
  card: {
    flexDirection: 'row',
  },
  outerCard: {
    width: '90%',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'skyblue',
    marginBottom: 20,
    alignSelf: 'center',
  },
  img: {
    height: 160,
    width: 120,
    borderRadius: 30,
    margin: 5,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  details_container: {
    marginTop: 20,
    marginLeft: 7,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
    width: 160,
  },
  spec: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
  },
  cost: {
    fontSize: 30,
    color: 'blue',
  },
  total: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btn: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 5,
    color: 'skyblue',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'skyblue',
    marginHorizontal: 10,
  },
  remove: {
    borderWidth: 5,
    marginBottom: 10,
  },
  qtyChanger: {
    fontSize: 20,
    borderWidth: 2,
    fontWeight: 'bold',
    borderColor: 'skyblue',
    color: 'skyblue',
  },
});
