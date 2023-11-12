import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const {width} = Dimensions.get('window');
import {appColors} from '../../design/appColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: appColors.colorWhite,
  },
  headerView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  largeProfileImage: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  inputRow: {
    marginBottom: 15,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textInput: {
    elevation: 10,

    borderRadius: 5,
    padding: 10,
    backgroundColor: '#EAE8E8',
  },
  editButton: {
    backgroundColor: appColors.colorLightRed,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
