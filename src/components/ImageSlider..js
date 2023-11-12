import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import {useSelector} from 'react-redux';

const ImageSlider = () => {
  const {photos} = useSelector(state => state.myReducers);

  const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{color: 'grey'}}>
          <Text>{index + 1}</Text>/{total}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={true}
        renderPagination={renderPagination}>
        {photos.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image style={styles.image} source={{uri: image.url}} />
            {/* You can add additional components or information here */}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageText: {
    marginTop: 10,
    color: 'white',
    fontSize: 16,
  },

  paginationStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 50,
    height: 30,
    bottom: 30,
    right: 15,
    backgroundColor: 'white',
  },
});

export default ImageSlider;
