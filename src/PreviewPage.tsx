import React, { useEffect, useRef, useState } from "react";
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

interface RouteParams {
  userID: string;
}

const Preview: React.FC = () => {
  const navigation = useNavigation();
  const [isPreviewReady, setIsPreviewReady] = useState(false);

  const { params } = useRoute();
  const { userID } = params as RouteParams;

  // 使用正确的类型定义
  const previewRef = useRef<ZegoTextureView>(null);

  const roomID = "999";

  useEffect(() => {
    const setupStream = async () => {
      try {
        console.log(`[ZEGO Express] Logging into room: ${roomID}, userID: ${userID}`);
        
        // Login to room
        await ZegoExpressEngine.instance().loginRoom(
          roomID,
          { userID: userID, userName: "zego" },
          undefined
        );
        
        // Configure video settings
        let videoConfig = new ZegoVideoConfig();
        videoConfig.captureWidth = 720;
        videoConfig.captureHeight = 1280;
        videoConfig.encodeWidth = 720;
        videoConfig.encodeHeight = 1280;
        videoConfig.fps = 24; //default 15
        await ZegoExpressEngine.instance().setVideoConfig(videoConfig, ZegoPublishChannel.Main);

        // Wait for the preview ref to be ready
        if (!isPreviewReady) {
          console.log("[ZEGO Express] Waiting for preview view to be ready...");
          // If preview not ready yet, try again later
          return;
        }

        const reactTag = findNodeHandle(previewRef.current);
        if (!reactTag) {
          console.error("[ZEGO Express] Failed to get valid reactTag for preview view");
          return;
        }
        
        // Start preview
        console.log("[ZEGO Express] Starting preview...");
        await ZegoExpressEngine.instance().startPreview(
          {
            reactTag: reactTag,
            viewMode: 0,
            backgroundColor: 0,
          },
          ZegoPublishChannel.Main
        );
        console.log("[ZEGO Express] Preview started successfully");
        
        // Start publishing stream asynchronously
        console.log(`[ZEGO Express] Starting to publish stream for user: ${userID}`);
        await ZegoExpressEngine.instance().startPublishingStream(
          userID,
          ZegoPublishChannel.Main,
          undefined
        );
        console.log(`[ZEGO Express] Stream publishing started successfully`);
      } catch (error) {
        console.error(`[ZEGO Express] Error setting up stream: ${error}`);
      }
    };

    // If the view is ready, set up the stream
    if (isPreviewReady) {
      setupStream();
    }

    return () => {
      // Cleanup function remains unchanged
    };
  }, [isPreviewReady]); // Add isPreviewReady as a dependency

  // Effect to handle when the preview ref is ready
  useEffect(() => {
    // Check if ref exists and set the state
    if (previewRef.current) {
      setIsPreviewReady(true);
    }
  }, [previewRef.current]);
  
  let isCooldown = false;
  const onClickBack = async () => {
    if (isCooldown) {
      return;
    }
    isCooldown = true;
    
    try {
      console.log(`[ZEGO Express] Stopping publishing stream`);
      await ZegoExpressEngine.instance().stopPublishingStream(ZegoPublishChannel.Main);
      
      console.log(`[ZEGO Express] Stopping preview`);
      await ZegoExpressEngine.instance().stopPreview(ZegoPublishChannel.Main);
      
      console.log(`[ZEGO Express] Logging out of room: ${roomID}`);
      await ZegoExpressEngine.instance().logoutRoom(roomID);
      
      navigation.goBack();
    } catch (error) {
      console.error(`[ZEGO Express] Error during cleanup: ${error}`);
    } finally {
      setTimeout(() => {
        isCooldown = false; // 恢复冷却状态
      }, 2000);
    }
  };


  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ZegoTextureView 
        ref={previewRef} 
        style={styles.fullscreenView} 
        onLayout={() => setIsPreviewReady(true)}
      />

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
