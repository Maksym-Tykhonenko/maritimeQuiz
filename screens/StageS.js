import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Modal,
} from 'react-native';
import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

const StageS = ({navigation}) => {
  const [firstCompl, setFirstCompl] = useState(false);
  const [secondCompl, setSecondCompl] = useState(false);
  const [thirdCompl, setThirdCompl] = useState(false);
  const [fourthCompl, setFourthCompl] = useState(false);
  const [fifthCompl, setFifthCompl] = useState(false);
  const [sixthCompl, setSixthCompl] = useState(false);
  const [seventhCompl, setSeventhCompl] = useState(false);
  const [eighthCompl, setEighthCompl] = useState(false);
  const [ninethCompl, setNinthCompl] = useState(false);

  useEffect(() => {
    getDataLvls1();
  }, []);

  const getDataLvls1 = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Lvls1`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setFirstCompl(parsedData.firstCompl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  return (
    <View
      style={{
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#29516b',
        height: '100%',
      }}>
      <View style={{marginTop: 50}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={{
              width: windowWidth * 0.9,
              height: 80,
              borderWidth: 3,
              borderColor: '#ff6a02',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              marginTop: 20,
              paddingHorizontal: 10,
            }}
            onPress={() => {
              navigation.navigate('Lvls1');
            }}>
            <Text
              style={{
                color: '#ff6a02',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              History of the Port of Ostend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={firstCompl ? false : true}
            style={{
              width: windowWidth * 0.9,
              height: 80,
              borderWidth: 3,
              borderColor: firstCompl ? '#ff6a02' : 'gray',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              marginTop: 20,
              paddingHorizontal: 10,
            }}
            onPress={() => {
              navigation.navigate('Lvls2');
            }}>
            <Text
              style={{
                color: firstCompl ? '#ff6a02' : 'gray',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Famous Sailors of Ostend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={secondCompl ? false : true}
            style={{
              width: windowWidth * 0.9,
              height: 80,
              borderWidth: 3,
              borderColor: secondCompl ? '#ff6a02' : 'grey',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              marginTop: 20,
              paddingHorizontal: 10,
            }}
            onPress={() => {
              navigation.navigate('Lvls3');
            }}>
            <Text
              style={{
                color: secondCompl ? '#ff6a02' : 'grey',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Naval Battles and Skirmishes near Ostend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={thirdCompl ? false : true}
            style={{
              width: windowWidth * 0.9,
              height: 80,
              borderWidth: 3,
              borderColor: thirdCompl ? '#ff6a02' : 'grey',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              marginTop: 20,
              paddingHorizontal: 10,
            }}
            onPress={() => {
              navigation.navigate('Lvls4');
            }}>
            <Text
              style={{
                color: thirdCompl ? '#ff6a02' : 'grey',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Maritime Trade of Ostend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={fourthCompl ? false : true}
            style={{
              width: windowWidth * 0.9,
              height: 80,
              borderWidth: 3,
              borderColor: fourthCompl ? '#ff6a02' : 'grey',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              marginTop: 20,
              paddingHorizontal: 10,
            }}
            onPress={() => {
              navigation.navigate('Lvls5');
            }}>
            <Text
              style={{
                color: fourthCompl ? '#ff6a02' : 'grey',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Maritime Legends and Myths of Ostend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={fifthCompl ? false : true}
            style={{
              width: windowWidth * 0.9,
              height: 80,
              borderWidth: 3,
              borderColor: fifthCompl ? '#ff6a02' : 'grey',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              marginTop: 20,
              paddingHorizontal: 10,
            }}
            onPress={() => {
              navigation.navigate('Lvls6');
            }}>
            <Text
              style={{
                color: fifthCompl ? '#ff6a02' : 'grey',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Maritime Architecture of Ostend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={sixthCompl ? false : true}
            style={{
              width: windowWidth * 0.9,
              height: 80,
              borderWidth: 3,
              borderColor: sixthCompl ? '#ff6a02' : 'grey',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              marginTop: 20,
              paddingHorizontal: 10,
            }}
            onPress={() => {
              navigation.navigate('Lvls7');
            }}>
            <Text
              style={{
                color: sixthCompl ? '#ff6a02' : 'grey',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Fishing and Marine Trades of Ostend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={seventhCompl ? false : true}
            style={{
              width: windowWidth * 0.9,
              height: 80,
              borderWidth: 3,
              borderColor: seventhCompl ? '#ff6a02' : 'grey',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              marginTop: 20,
              paddingHorizontal: 10,
            }}
            onPress={() => {
              navigation.navigate('Lvls8');
            }}>
            <Text
              style={{
                color: seventhCompl ? '#ff6a02' : 'grey',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Maritime Infrastructure of Ostend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={eighthCompl ? false : true}
            style={{
              width: windowWidth * 0.9,
              height: 80,
              borderWidth: 3,
              borderColor: eighthCompl ? '#ff6a02' : 'grey',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              marginTop: 20,
              paddingHorizontal: 10,
            }}
            onPress={() => {
              navigation.navigate('Lvls9');
            }}>
            <Text
              style={{
                color: eighthCompl ? '#ff6a02' : 'grey',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Maritime Traditions and Festivals of Ostend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={ninethCompl ? false : true}
            style={{
              width: windowWidth * 0.9,
              height: 80,
              borderWidth: 3,
              borderColor: ninethCompl ? '#ff6a02' : 'grey',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              marginTop: 20,
              paddingHorizontal: 10,
            }}
            onPress={() => {
              navigation.navigate('Lvls10');
            }}>
            <Text
              style={{
                color: ninethCompl ? '#ff6a02' : 'grey',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Modern Maritime Activities in Ostend
            </Text>
          </TouchableOpacity>
          <View style={{height: 100}}></View>
        </ScrollView>
        {/**Btn BAck */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('StartScreen');
          }}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 60,
            height: 60,
            borderWidth: 3,
            borderColor: '#ff6a02',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <Text style={{color: '#ff6a02', fontSize: 40, fontWeight: 'bold'}}>
            {'<'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StageS;
