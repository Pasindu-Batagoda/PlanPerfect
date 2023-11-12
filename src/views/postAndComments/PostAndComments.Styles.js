import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const {width} = Dimensions.get('window');
import {appColors} from '../../design/appColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: appColors.colorLightRed,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    backgroundColor: appColors.colorWhite,
    elevation: 5,
  },
  listContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: appColors.colorLightRed,
  },
  card: {
    marginVertical: 8,
    elevation: 10,
    borderWidth: 1,
    borderColor: appColors.colorLightRed,
    backgroundColor: appColors.colorWhite,
  },
});

export default styles;
