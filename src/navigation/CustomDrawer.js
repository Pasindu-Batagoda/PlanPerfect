// CustomDrawerContent.js

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {userProfileImg} from '../assets';
import {useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomDrawerContent({navigation}) {
  const {users} = useSelector(state => state.myReducers);

  return (
    <View style={{flex: 1}}>
      {/* Profile Image Section */}
      <View style={styles.profileView}>
        <Image style={styles.imagedesign} source={userProfileImg} />
        <View>
          {/* Display name and email of first user from  the users array */}
          <Text style={{marginLeft: 10}}>{users[0].name}</Text>
          <Text style={{marginLeft: 10}}>{users[0].email}</Text>
        </View>
      </View>

      <View style={styles.logoutView}>
        <MaterialCommunityIcons
          name={'logout'}
          style={{
            alignSelf: 'center',
            margin: 10,
            color: 'red',
          }}
          size={25}></MaterialCommunityIcons>

        <Text style={{alignSelf: 'center', color: 'red'}}>Logout</Text>
      </View>

      <Text
        style={{
          alignSelf: 'center',
          bottom: 20,
          position: 'absolute',
        }}>
        Version 0.0.1
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutView: {
    marginTop: 10,
    flexDirection: 'row',
  },

  profileView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },

  imagedesign: {
    width: 60,
    height: 60,
    marginLeft: 15,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default CustomDrawerContent;
