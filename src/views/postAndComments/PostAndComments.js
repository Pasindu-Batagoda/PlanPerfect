import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Card, Title, Paragraph, IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './PostAndComments.Styles';

export default function PostAndComments({navigation}) {
  const {posts} = useSelector(state => state.myReducers);
  const {comments} = useSelector(state => state.myReducers);

  // Function to render each item in the 'Posts' section
  const renderPostItem = ({item}) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.body}</Paragraph>
      </Card.Content>
    </Card>
  );

  // Function to render each item in the 'Comments' section
  const renderCommentItem = ({item}) => (
    <Card style={styles.card}>
      <Card.Content>
        <Paragraph>{item.body}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Posts & Comments</Text>
      </View>

      <View style={styles.listContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.sectionTitle}>Posts</Text>

          <MaterialCommunityIcons
            name={'newspaper-variant-outline'}
            style={{
              alignSelf: 'center',
              margin: 5,
              color: '#DA5E42',
            }}
            size={25}></MaterialCommunityIcons>
        </View>

        {/* Posts Flatlist */}
        <FlatList
          data={posts}
          keyExtractor={item => item.id.toString()}
          renderItem={renderPostItem}
          showsVerticalScrollIndicator={false}
        />

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.sectionTitle}>Coments</Text>

          <MaterialCommunityIcons
            name={'comment-minus-outline'}
            style={{
              alignSelf: 'center',
              margin: 5,
              color: '#DA5E42',
            }}
            size={25}></MaterialCommunityIcons>
        </View>

        {/* Comments Flatlist */}
        <FlatList
          data={comments}
          keyExtractor={item => item.id.toString()}
          renderItem={renderCommentItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
