import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {Button, Menu, MenuItem, Icon, Avatar} from '@ui-kitten/components';
import commonStyles from '../../styles/commonStyles';

const ProfileHomeScreen = ({navigation}) => {
  //Note
  const meetFunc = () => {
    navigation.navigate('Note');
  };

  return (
    <SafeAreaView>
      <View>
        <Menu
          style={[
            commonStyles.appContainer,
            commonStyles.mt15,
            commonStyles.mb15,
          ]}>
          <MenuItem
            title="Avatar"
            style={[commonStyles.menuItem, {height: 60}]}
            accessoryRight={
              <View>
                <Avatar
                  source={{
                    uri: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    position: 'relative',
                    bottom: 15,
                    right: 20,
                  }}
                />
              </View>
            }
          />
        </Menu>
        <Menu style={[commonStyles.appContainer]}>
          <MenuItem
            title="Note"
            style={commonStyles.menuItem}
            onPress={meetFunc}
            accessoryRight={<Icon name="arrow-ios-forward" />}
          />
        </Menu>
      </View>
    </SafeAreaView>
  );
};

export default ProfileHomeScreen;

const styles = StyleSheet.create({});
