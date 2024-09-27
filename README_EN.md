# Zego Effects Demo for React Native

* [API](https://zego-effects-reactnative-lmyx4ofq9-iazraels-projects.vercel.app/)


## Usage
### Download and Import Resources into the Project

Download the latest version of the Effects SDK from the SDK download site (iOS download link: https://doc-zh.zego.im/article/15898, Android download link: https://doc-zh.zego.im/article/15899). After extracting it, import the `Resources` and `Models` folders into your project.

**Note:** You only need to add the resources and models to your project; `zego-effects-reactnative` will automatically download the SDK itself.

* **iOS:** Add the `Resources` and `Models` folders to your Xcode project and choose the `Create folders` option in the `Group` settings. Assuming your project name is `example` and you place all resources in the `Assets` folder, your project directory structure should look like this after importing:


```
# ios
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

* **Android:** Add the `Resources` and `Models` folders to the `assets` directory in your Android project. Typically, the resources should be placed in the `android/app/src/main/assets` directory, so your project directory structure should look like this after importing:


```
# android/app/src/main
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

**Install Dependencies and Run**

```bash
yarn

# Run on iOS
yarn ios

# Run on Android
yarn android