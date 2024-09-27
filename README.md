# Zego Effects Demo for React Native

* [English](README_EN.md)
* [API](https://zego-effects-reactnative-lmyx4ofq9-iazraels-projects.vercel.app/)

## 使用说明

**下载并导入资源到项目**

从SDK下载网站下载最新版本的Effects SDK（iOS下载链接：[https://doc-zh.zego.im/article/15898](https://doc-zh.zego.im/article/15898)，Android下载链接：[https://doc-zh.zego.im/article/15899](https://doc-zh.zego.im/article/15899)）。解压后，将 `Resources` 和 `Models` 文件夹导入到你的项目中。

注意：你只需要将资源和模型添加到你的项目中；`zego-effects-reactnative`会自动下载SDK本身。

* **iOS**：将 `Resources` 和 `Models` 文件夹添加到你的Xcode项目中，并在组设置中选择创建文件夹选项。假设你的项目名为 `example` ，并且你将所有资源放在 `Assets` 文件夹中，导入后你的项目目录结构应该如下所示：

```
ios
├── example
│   ├── AppDelegate.h
│   ├── AppDelegate.mm
│   ├── Images.xcassets
├── Assets
│   ├── Models
│   │   ├── FaceDetectionModel.model
│   │   └── SegmentationModel.model
│   └── Resources
│       ├── ColorfulStyleResources
│       ├── CommonResources.bundle
│       ├── FaceWhiteningResources.bundle
│       ├── MakeupResources
│       ├── PendantResources.bundle
│       ├── RosyResources.bundle
│       └── TeethWhiteningResources.bundle
│
```

* **Android**：将 `Resources` 和 `Models` 文件夹添加到你的Android项目的 `assets` 目录中。通常，资源应该放置在 `android/app/src/main/assets` 目录中，所以导入后你的项目目录结构应该如下所示：

```
android/app/src/main
├── AndroidManifest.xml
├── assets
│   ├── Models
│   │   ├── FaceDetectionModel.model
│   │   └── SegmentationModel.model
│   └── Resources
│       ├── ColorfulStyleResources
│       ├── CommonResources.bundle
│       ├── FaceWhiteningResources.bundle
│       ├── MakeupResources
│       ├── PendantResources.bundle
│       ├── RosyResources.bundle
│       └── TeethWhiteningResources.bundle
├── java
└── res
```

**安装依赖和运行**

```bash
yarn

# 运行ios
yarn ios

# 运行android
yarn android

```

