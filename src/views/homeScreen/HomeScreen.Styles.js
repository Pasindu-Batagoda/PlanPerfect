import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const {width} = Dimensions.get('window');
import {appColors} from '../../design/appColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.colorWhite,
  },

  topView: {
    flex: 1,
  },

  subView: {
    flex: 1,
  },

  bottomView: {
    flex: 1.5,
  },

  currentEventText: {
    color: 'black',
    margin: 10,
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 22,
  },

  organizersText: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },

  photosText: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },

  allPhotos: {
    fontSize: 16,
    color: 'red',
    alignSelf: 'center',
  },

  totalPostsText: {
    alignSelf: 'center',
    marginTop: 15,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },

  item: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'space-between',
  },

  imageListItem: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 190,
  },

  image: {
    width: 250,
    height: 120,
    marginBottom: 8,
  },

  description: {
    textAlign: 'center',
    color: 'black',
  },

  imagedesign: {
    width: 50,
    height: 50,
    marginLeft: 15,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default styles;
