import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {userProfileImg} from '../../assets';
import styles from './Profile.Styles';

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Header View */}
      <View style={styles.headerView}>
        {/* Profile Image */}
        <Image source={userProfileImg} style={styles.profileImage} />
        {/* Profile Text */}
        <View style={{flex: 0.4}} />
        <Text style={styles.profileText}>Profile</Text>
      </View>

      {/* Large Profile Image */}
      <Image source={userProfileImg} style={styles.largeProfileImage} />

      {/* Text Input Fields */}
      <View style={styles.textInputContainer}>
        {/* Dummy Data for Text Input Fields */}
        <View style={styles.inputRow}>
          <Text style={styles.labelText}>First Name</Text>
          <TextInput style={styles.textInput} placeholder="Pasindu" />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.labelText}>Last Name</Text>
          <TextInput style={styles.textInput} placeholder="Batagoda" />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.labelText}>Email</Text>
          <TextInput style={styles.textInput} placeholder="pasindu@gmail.com" />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.labelText}>Phone Number</Text>
          <TextInput style={styles.textInput} placeholder="0772345776" />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.labelText}>Mailing Address</Text>
          <TextInput
            style={styles.textInput}
            placeholder="35/2, Nawala Road, Rajagiriya"
          />
        </View>
      </View>

      {/* Edit Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}
