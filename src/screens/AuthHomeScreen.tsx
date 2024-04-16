import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {authNaviagtions} from '../constants';
import { AuthStackParamList } from '../navigation/stack/AuthStackNavigator';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNaviagtions.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인화면으로 이동"
          onPress={() => navigation.navigate(authNaviagtions.LOGIN)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
