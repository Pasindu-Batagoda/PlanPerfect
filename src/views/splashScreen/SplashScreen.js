import {View, Text, ToastAndroid, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Grid} from 'react-native-animated-spinkit';
import {
  getImages,
  getUsers,
  getPosts,
  getComments,
} from '../../service/apiService/EventServices';
import {useDispatch} from 'react-redux';
import {
  addPhotos,
  addUsers,
  addPosts,
  addComments,
} from '../../service/redux/actions';
import {appColors} from '../../design/appColors';

export default function SplashScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    getImagesApi();
  }, []);

  const getImagesApi = async () => {
    try {
      const response = await getImages();
      const first10Images = response.data.slice(0, 10);

      // Check for successful response
      if (response.status === 200) {
        dispatch(addPhotos(first10Images));
        getUsersApi();
      } else {
        // Handle non-200 response
        ToastAndroid.show(`Error: ${response.status}`, ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Catch Error:', error);

      // Display a generic error message
      ToastAndroid.show('Error fetching images', ToastAndroid.SHORT);
    }
  };

  const getUsersApi = async () => {
    try {
      const response = await getUsers();
      const first10Users = response.data.slice(0, 5);

      // Check for successful response
      if (response.status === 200) {
        dispatch(addUsers(first10Users));
        getPostsApi();
      } else {
        // Handle non-200 response
        ToastAndroid.show(`Error: ${response.status}`, ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Catch Error:', error);

      // Display a generic error message
      ToastAndroid.show('Error fetching images', ToastAndroid.SHORT);
    }
  };

  const getPostsApi = async () => {
    try {
      const response = await getPosts();

      // Check for successful response
      if (response.status === 200) {
        dispatch(addPosts(response.data));
        getCommentsApi();
      } else {
        // Handle non-200 response
        ToastAndroid.show(`Error: ${response.status}`, ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Catch Error:', error);

      // Display a generic error message
      ToastAndroid.show('Error fetching images', ToastAndroid.SHORT);
    }
  };

  const getCommentsApi = async () => {
    try {
      const response = await getComments();
      const first10Comments = response.data.slice(0, 10);

      // Check for successful response
      if (response.status === 200) {
        dispatch(addComments(first10Comments));
      } else {
        // Handle non-200 response
        ToastAndroid.show(`Error: ${response.status}`, ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Catch Error:', error);

      // Display a generic error message
      ToastAndroid.show('Error fetching images', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.mainText}>PLAN PERFECT</Text>

        <Text style={styles.subtext}>The Event Planner</Text>
      </View>

      <View style={{height: '50%'}}>
        <Grid
          size={60}
          color={appColors.colorLightRed}
          style={{alignSelf: 'center', marginTop: 50}}></Grid>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.colorWhite,
  },
  topView: {
    justifyContent: 'center',
    backgroundColor: appColors.colorLightRed,
    height: '50%',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },

  mainText: {
    alignSelf: 'center',
    fontSize: 25,
    color: appColors.colorWhite,
    marginTop: 50,
    fontWeight: 'bold',
  },

  subtext: {
    alignSelf: 'center',
    fontSize: 16,
    color: appColors.colorWhite,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
