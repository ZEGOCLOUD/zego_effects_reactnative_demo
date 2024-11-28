import React, { useEffect, useRef } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  findNodeHandle,
  Image,
  Text,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import ZegoExpressEngine, {
  ZegoPublishChannel,
  ZegoTextureView,
  ZegoVideoConfig,
  ZegoVideoConfigPreset
} from "zego-express-engine-reactnative";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import BeautyPanel from "./BeautyPanel";
import EffectsHelper from "./EffectsHelper";

const Preview: React.FC = () => {
  const navigation = useNavigation();

  const { params } = useRoute();
  const { userID } = params;

  const previewRef = useRef();

  const roomID = "9999";

  useEffect(() => {
    console.log(`loginRoom, room:${roomID}, userID:${userID}`);
    ZegoExpressEngine.instance().loginRoom(
      roomID,
      { userID: userID, userName: "zego" },
      undefined
    );
    let videoConfig =  new ZegoVideoConfig();
    videoConfig.captureWidth = 720;
    videoConfig.captureHeight = 1280;
    videoConfig.encodeWidth = 720;
    videoConfig.encodeHeight = 1280;
    ZegoExpressEngine.instance().setVideoConfig(videoConfig,ZegoPublishChannel.Main);

    ZegoExpressEngine.instance().startPreview(
      {
        reactTag: findNodeHandle(previewRef.current),
        viewMode: 0,
        backgroundColor: 0,
      },
      ZegoPublishChannel.Main
    );
    ZegoExpressEngine.instance().startPublishingStream(
      userID,
      ZegoPublishChannel.Main,
      undefined
    );

    return () => {};
  }, []);
  let isCooldown = false;
  const onClickBack = () => {
    if (isCooldown) {
      return;
    }
    isCooldown = true;
    ZegoExpressEngine.instance().stopPublishingStream(ZegoPublishChannel.Main);
    ZegoExpressEngine.instance().stopPreview(ZegoPublishChannel.Main);
    ZegoExpressEngine.instance().logoutRoom(roomID);
    console.log(`logoutRoom, room:${roomID}`);

    navigation.goBack();
    setTimeout(() => {
      isCooldown = false; // 恢复冷却状态
    }, 2000);
  };


  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ZegoTextureView ref={previewRef} style={styles.fullscreenView} />

      <View style={[styles.top_btn_container, { top: insets.top }]}>
        <TouchableOpacity style={styles.backBtnPos} onPress={onClickBack}>
          <Text
            style={styles.backBtnImage}
          > &lt; </Text>
        </TouchableOpacity>

      </View>
      <View style={styles.bottomBar}>
        <BeautyPanel
          onSelected={(groupItem, beautyItem) => {
            EffectsHelper.updateEffects(
              groupItem,
              beautyItem,
              beautyItem.intensity ?? groupItem.intensity ?? 0
            );
          }}
          onSliderEnd={(groupItem, beautyItem, currentIntensity) => {
            EffectsHelper.updateEffects(
              groupItem,
              beautyItem,
              currentIntensity
            );
          }}
        ></BeautyPanel>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullscreenView: {
    flex: 1,
  },
  top_btn_container: {
    flexDirection: "row",
    position: "absolute",
    left: 15,
  },
  backBtnPos: {},
  bottomBar: {
    position: "absolute",
    left: 0,
    bottom: 40,
    backgroundColor: "rgba(45,145,245,0.8)", // 背景颜色
    borderRadius: 10, // 圆角
    padding: 5, // 内边距
    // marginBottom: 20, // 外边距
    width: "100%", // 宽度
    alignItems: "center", // 水平居中
    justifyContent: "center", // 垂直居中
  },
  backBtnImage: {
    width: 40,
    height: 40,
    fontSize: 40,
    color: "white",
  },
  minimizeBtnPos: {
    marginLeft: 50,
  },
  minimizeBtnImage: {
    width: 20,
    height: 20,
  },
});

export default Preview;
