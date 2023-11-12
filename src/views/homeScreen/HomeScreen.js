import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './HomeScreen.Styles';
import ImageSlider from '../../components/ImageSlider.';
import {useSelector} from 'react-redux';
import {userProfileImg} from '../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({navigation}) {
  // Redux selectors to get data from the global state
  const {users} = useSelector(state => state.myReducers);
  const {photos} = useSelector(state => state.myReducers);
  const {posts} = useSelector(state => state.myReducers);

  // Function to render each item in the 'Organizers' section
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.imagedesign} source={userProfileImg} />

        <View style={{marginLeft: 10, justifyContent: 'center'}}>
          <Text style={{color: 'black'}}>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>

      <View style={{justifyContent: 'center'}}>
        <MaterialCommunityIcons
          name={'comment-minus-outline'}
          style={{
            alignSelf: 'center',
            margin: 5,
            color: 'black',
          }}
          size={28}></MaterialCommunityIcons>
      </View>
    </View>
  );

  // Function to render each item in the 'Photos' section
  const renderItemImageList = ({item}) => (
    <View style={styles.imageListItem}>
      <Image source={{uri: item.url}} style={styles.image} />
      <Text style={styles.description}>Sample Description</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top view with ImageSlider and event information */}
      <View style={styles.topView}>
        <ImageSlider />
        <Text style={styles.currentEventText}>Harmony Fest </Text>
        <Text style={{marginLeft: 10}}> Galle Face Green, Colombo</Text>
      </View>

      {/* Subview for 'Organizers' section */}
      <View style={styles.subView}>
        <Text style={styles.organizersText}>Organizers</Text>

        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      {/* Bottom view with 'Photos' section and navigation to 'PostAndComments' screen */}
      <View style={styles.bottomView}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.photosText}>Photos</Text>

          <View style={{flexDirection: 'row', marginRight: 8}}>
            <Text style={styles.allPhotos}>All Photos</Text>

            <MaterialCommunityIcons
              name={'arrow-right-thin'}
              style={{
                alignSelf: 'center',
                marginTop: 5,
                color: 'red',
              }}
              size={30}></MaterialCommunityIcons>
          </View>
        </View>

        {/* FlatList to display photos horizontally */}
        <View>
          <FlatList
            data={photos}
            renderItem={renderItemImageList}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10}}
          />
        </View>

        {/* Navigation to 'PostAndComments' screen with post count */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PostAndComments');
          }}>
          <Text style={styles.totalPostsText}>{posts.length}</Text>

          <Text style={{alignSelf: 'center'}}>Posts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
