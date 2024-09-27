/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  StatusBar,
  PermissionsAndroid,
  Platform
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { withNavigation } from '@react-navigation/compat';

import ZegoExpressEngine, { ZegoPublishChannel, ZegoScenario } from 'zego-express-engine-reactnative';
import KeyCenter from '../KeyCenter';
import MinimizingHelper from './minimizing_helper';

import ZegoEffects from 'zego-effects-reactnative'
import EffectsHelper from './EffectsHelper';


const granted = (Platform.OS == 'android' ? PermissionsAndroid.check(
  PermissionsAndroid.PERMISSIONS.CAMERA,
  PermissionsAndroid.RECORD_AUDIO) : undefined);

const appID = KeyCenter.appID
const appSign = KeyCenter.appSign

const userID = '70000'

class Home extends Component {
  constructor(props) {
    super(props)

    this.version = ""
  }

  static navigationOptions = {
    title: 'Home',
  };

  initMinimize() {
    MinimizingHelper.instance().initMinimize();
    MinimizingHelper.instance().registerWillMaximized('Home', () => {
      this.navigateToPreview();
    });
  }

  onClickPreview() {
    console.log('onClickPreview');
    MinimizingHelper.instance().notifyRestore();
    this.navigateToPreview();
  }

  navigateToPreview() {
    this.props.navigation.navigate('Preview', {
      userID: userID
    });
  }

  componentDidMount() {
    console.log("componentDidMount")
    let profile = { appID: appID, appSign: appSign, scenario: ZegoScenario.General }

    ZegoExpressEngine.createEngineWithProfile(profile).then((engine) => {
      // 动态获取设备权限（android）
      if (Platform.OS == 'android') {
        granted.then((data) => {
          console.log("是否已有相机、麦克风权限: " + data)
          if (!data) {
            const permissions = [
              PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
              PermissionsAndroid.PERMISSIONS.CAMERA
            ]
            //返回得是对象类型
            PermissionsAndroid.requestMultiple(permissions)
          }
        }).catch((err) => {
          console.log("check err: " + err.toString())
        })
      }

      engine.getVersion().then((ver) => {
        console.log("Express SDK Version: " + ver)
      });

      // Enable Express custom video processing for Effects
      engine.enableCustomVideoProcessing(true, {}, ZegoPublishChannel.Main)

      ZegoEffects.getVersion().then(ver => {
        console.log("Effects SDK Version: " + ver)
      })

      EffectsHelper.initEffects()

      this.initMinimize();
    });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');

    if (ZegoExpressEngine.instance()) {
      console.log('[LZP] destroyEngine')
      ZegoExpressEngine.destroyEngine();
    }
  }


  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>

          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />

            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Button onPress={this.onClickPreview.bind(this)}
                  title="Start preview and publish" />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: StyleSheet.absoluteFillObject
});

export default withNavigation(Home);
