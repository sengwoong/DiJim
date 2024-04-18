import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Image, SafeAreaView, StyleSheet, Dimensions, View, Text } from 'react-native';
import { authNaviagtions } from '../../constants/navigations';
import CustomButton from '../../components/CustomButton';
import { AuthStackParamList } from '../../navigation/stack/AuthStackNavigator';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNaviagtions.AUTH_HOME
>;

function AuthHomeScreen({ navigation }: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.info}>
        <Text style={[styles.infoTitle, styles.Textblack]}>나의 다이어트 플랜</Text>
        <Text style={[styles.infoContent, styles.Textblack]}>주변 맛집 칼로리 검색</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/logo.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="로그인하기"
          onPress={() => navigation.navigate(authNaviagtions.LOGIN)}
        />
        <CustomButton
          label="회원가입하기"
          variant="outlined"
          onPress={() => navigation.navigate(authNaviagtions.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 30,
  },
  info: {
    alignItems: 'center',
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContent: {
    fontSize: 16,
  },
  Textblack: {
    color: 'black',
  },
  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    gap: 10,
  },
});

export default AuthHomeScreen;
