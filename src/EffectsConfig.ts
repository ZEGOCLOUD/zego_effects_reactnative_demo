import { ZegoEffectsBlusherType, ZegoEffectsSkinColorType,ZegoEffectsColoredcontactsType, ZegoEffectsEyelashesType, ZegoEffectsEyelinerType, ZegoEffectsEyeshadowType, ZegoEffectsFilterType, ZegoEffectsLipstickType, ZegoEffectsMakeupType, ZegoEffectsMosaicType } from "@zegocloud/zego-effects-reactnative";

// 美颜配置项
export interface BeautyItem {
    type: BeautyType;
    name: string;
    items?: BeautyItem[];
    params?: string | number;
    intensity?: number;
    range?: [number, number];
}

// 美颜效果类型枚举
export enum BeautyType {
    // 基础美颜组
    Type_Group = 0,
    // 美白
    Face_Whitening = 1,
    // 红润
    Rosy = 2,
    // 磨皮
    Beauty_Face = 3,
    // 锐化
    Sharpen = 4,
    // 白牙
    Teeth_Whitening = 5,
    // 亮眼
    Eye_Bright = 6,
    // 法令纹
    Naso_Fold_Erase = 7,
    // 黑眼圈
    Dark_Circle_Erase = 8,
    // 美型组
    Face_Lifting = 9,
    // 小嘴
    Facial_Small_Mouth = 10,
    // 收下巴
    Facial_Long_Chin = 11,
    // 大眼
    Big_Eyes = 12,
    // 瘦鼻
    Facial_Thin_Nose = 13,
    // 额头
    Facial_Stretch_ForeHead = 14,
    // 瘦下颌骨
    Facial_Thin_Jaw = 15,
    // 瘦颧骨
    Facial_Thin_Cheek = 16,
    // 小脸
    Facial_Small_Face = 17,
    // 长鼻
    Facial_Long_Nose = 18,
    // 风格滤镜
    Colorful_Style = 19,
    // 虚拟背景组
    Group_VirtualBackground = 20,
    // 替换背景
    Background = 21,
    // AI分割
    AI_Segment = 22,
    // 绿幕分割
    ChromaKey = 23,
    // 背景马赛克
    Background_Mosaic = 24,
    // 三角形
    Mosaic_Triangle = 25,
    // 正方形
    Mosaic_Square = 26,
    // 六边形
    Mosaic_Hexagon = 27,
    // 背景虚化
    Background_Blur = 28,
    // 草原
    Background_Grassland = 29,
    // 日落
    Background_Sunset = 30,
    // 枫叶
    Background_Mapleleaf = 31,
    // 天空
    Background_Sky = 32,
    // 小熊
    Background_Bear = 33,
    // 水屋
    Background_WaterHouse = 34,
    // 深林
    Background_Forest = 35,
    // 动森
    Background_AnimalKingdom = 36,
    // 黄昏
    Background_Dusk = 37,
    // 自然_奶油
    Filter_Natural_Creamy = 38,
    // 自然_青春
    Filter_Natural_Brighten = 39,
    // 自然_清新
    Filter_Natural_Fresh = 40,
    // 自然_秋田
    Filter_Natural_Autumn = 41,
    // 灰调_莫奈
    Filter_Gray_Monet = 42,
    // 灰调_暗夜
    Filter_Gray_Night = 43,
    // 灰调_胶片
    Filter_Gray_FilmLike = 44,
    // 梦境_落日
    Filter_Dream_Sunset = 45,
    // 梦境_琉璃
    Filter_Dream_Cozily = 46,
    // 梦境_星云
    Filter_Dream_Sweet = 47,
    // 美妆
    Beautiful_Makeup = 48,
    // 口红
    Makeup_Lipstick = 49,
    // 豆沙粉
    Lipstick_BeanPastePink = 50,
    // 珊瑚色
    Lipstick_Coral = 51,
    // 丝绒红
    Lipstick_VelvetRed = 52,
    // 甜橘色
    Lipstick_SweetOrange = 53,
    // 铁锈红
    Lipstick_RustRed = 54,
    // 腮红
    Makeup_Blusher = 55,
    // 蜜桃
    Blusher_Peach = 56,
    // 奶橘
    Blusher_MilkOrange = 57,
    // 甜橙
    Blusher_SweetOrange = 58,
    // 微醺
    Blusher_SlightlyDrunk = 59,
    // 杏粉
    Blusher_ApricotPink = 60,
    // 美瞳
    Makeup_Eyeball = 61,
    // 水光黑
    Eyeball_WaterLightBlack = 62,
    // 星空蓝
    Eyeball_StarryBlue = 63,
    // 仙棕绿
    Eyeball_MysteryBrownGreen = 64,
    // 异瞳棕
    Eyeball_PolarLightsBrown = 65,
    // 可可棕
    Eyeball_ChocolateBrown = 66,
    // 眼影
    Makeup_Eyeshadow = 67,
    // 粉雾海
    Eyeshadow_MistPink = 68,
    // 摩卡棕
    Eyeshadow_MochaBrown = 69,
    // 暖茶棕
    Eyeshadow_TeaBrown = 70,
    // 微光蜜
    Eyeshadow_ShimmerPink = 71,
    // 元气橙
    Eyeshadow_VitalityOrange = 72,
    // 眼线
    Makeup_Eyeliner = 73,
    // 俏皮
    Eyeliner_Pretty = 74,
    // 气质
    Eyeliner_Temperament = 75,
    // 心机
    Eyeliner_Scheming = 76,
    // 野猫
    Eyeliner_Wildcat = 77,
    // 自然
    Eyeliner_Natural = 78,
    // 眼睫毛
    Makeup_Eyelash = 79,
    // 卷翘
    Eyelash_Curl = 80,
    // 浓密
    Eyelash_Bushy = 81,
    // 温柔
    Eyelash_Tender = 82,
    // 纤长
    Eyelash_Slender = 83,
    // 自然
    Eyelash_Natural = 84,
    // 整装
    Makeup_Total = 85,
    // 眼睑下至妆
    Total_VulnerableAndInnocentEyes = 86,
    // 纯欲妆
    Total_PureAndSexy = 87,
    // 奶凶妆
    Total_CutieAndCool = 88,
    // 银河眼妆
    Total_MilkyEyes = 89,
    // 神颜
    Total_Flawless = 90,
    //原肤/祛痘祛斑
    Beauty_RemoveAce = 91,
    //肤色
    Skin_Color = 92,
    Skin_Color_Fenbai = 93,
    Skin_Color_Meihei = 94,
    Skin_Color_Lengbai = 95,
    Skin_Color_Nuanbai = 96,
    Skin_Color_Xiaomai = 97,
    //清晰
    Beauty_Clarity = 98

}



const config: BeautyItem[] = [
    {
        "type": BeautyType.Type_Group,
        "name": "基础美颜",
        "items": [
            {
                "type": BeautyType.Beauty_Face,
                "name": "磨皮",
                "intensity": 95,

            },
            {
                "type": BeautyType.Beauty_RemoveAce,
                "name": "原肤",
                "intensity": 95,

            },
            {
                "type": BeautyType.Beauty_Clarity,
                "name": "清晰",
                "intensity": 20,

            },
            {
                "type": BeautyType.Skin_Color,
                "name": "肤色",
                "intensity": 80,
                "items": [
                    {
                        "type": BeautyType.Skin_Color_Fenbai,
                        "name": "粉白",
                        "params": ZegoEffectsSkinColorType.Fenbai
                    },
                    {
                        "type": BeautyType.Skin_Color_Meihei,
                        "name": "美黑",
                        "params": ZegoEffectsSkinColorType.Meihei
                    },
                    {
                        "type": BeautyType.Skin_Color_Lengbai,
                        "name": "冷白",
                        "params": ZegoEffectsSkinColorType.Lengbai
                    },
                    {
                        "type": BeautyType.Skin_Color_Nuanbai,
                        "name": "暖白",
                        "params": ZegoEffectsSkinColorType.Nuanbai
                    },
                    {
                        "type": BeautyType.Skin_Color_Xiaomai,
                        "name": "小麦色",
                        "params": ZegoEffectsSkinColorType.Xiaomai
                    }
                ]
            },


            {
                "type": BeautyType.Face_Whitening,
                "name": "美白",
                "intensity": 100,

            },
            {
                "type": BeautyType.Rosy,
                "name": "红润",
                "intensity": 100,
            },
            {
                "type": BeautyType.Sharpen,
                "name": "锐化",
                "intensity": 100,

            },
            {
                "type": BeautyType.Teeth_Whitening,
                "name": "白牙",
                "intensity": 100,

            },
            {
                "type": BeautyType.Eye_Bright,
                "intensity": 100,
                "name": "亮眼"
            },
            {
                "type": BeautyType.Naso_Fold_Erase,
                "intensity": 100,
                "name": "法令纹"
            },
            {
                "type": BeautyType.Dark_Circle_Erase,
                "intensity": 100,
                "name": "黑眼圈"
            }
        ]
    },
    {
        "type": BeautyType.Type_Group,
        "name": "美型",
        "items": [
            {
                "type": BeautyType.Face_Lifting,
                "name": "瘦脸",
                "intensity": 100,
            },
            {
                "type": BeautyType.Facial_Small_Mouth,
                "name": "小嘴",
                "intensity": 100,
                "range": [
                    -100,
                    100
                ]
            },
            {
                "type": BeautyType.Facial_Long_Chin,
                "name": "收下巴",
                "intensity": 100,
                "range": [
                    -100,
                    100
                ]
            },
            {
                "type": BeautyType.Big_Eyes,
                "name": "大眼",
                "intensity": 100,
            },
            {
                "type": BeautyType.Facial_Thin_Nose,
                "name": "瘦鼻",
                "intensity": 100,
            },
            {
                "type": BeautyType.Facial_Stretch_ForeHead,
                "name": "额头",
                "intensity": 100,
                "range": [
                    -100,
                    100
                ]
            },
            {
                "type": BeautyType.Facial_Thin_Jaw,
                "name": "瘦下颌骨",
                "intensity": 100,
            },
            {
                "type": BeautyType.Facial_Thin_Cheek,
                "name": "瘦颧骨",
                "intensity": 100,
            },
            {
                "type": BeautyType.Facial_Small_Face,
                "name": "小脸",
                "intensity": 100,
            },
            {
                "type": BeautyType.Facial_Long_Nose,
                "name": "长鼻",
                "intensity": 100,
                "range": [
                    -100,
                    100
                ]
            }
        ]
    },
    {
        "type": BeautyType.Beautiful_Makeup,
        "name": "美妆",

        "items": [
            {
                "type": BeautyType.Makeup_Lipstick,
                "name": "口红",
                "intensity": 100,
                "items": [
                    {
                        "type": BeautyType.Lipstick_BeanPastePink,
                        "name": "豆沙粉",
                        "params": ZegoEffectsLipstickType.CameoPink
                    },
                    {
                        "type": BeautyType.Lipstick_Coral,
                        "name": "珊瑚色",
                        "params": ZegoEffectsLipstickType.Coral
                    },
                    {
                        "type": BeautyType.Lipstick_VelvetRed,
                        "name": "丝绒红",
                        "params": ZegoEffectsLipstickType.RedVelvet
                    },
                    {
                        "type": BeautyType.Lipstick_SweetOrange,
                        "name": "甜橘色",
                        "params": ZegoEffectsLipstickType.SweetOrange
                    },
                    {
                        "type": BeautyType.Lipstick_RustRed,
                        "name": "铁锈红",
                        "params": ZegoEffectsLipstickType.RustRed
                    }
                ]
            },
            {
                "type": BeautyType.Makeup_Blusher,
                "name": "腮红",
                "intensity": 100,
                "items": [
                    {
                        "type": BeautyType.Blusher_Peach,
                        "name": "蜜桃",
                        "params": ZegoEffectsBlusherType.Peach
                    },
                    {
                        "type": BeautyType.Blusher_MilkOrange,
                        "name": "奶橘",
                        "params": ZegoEffectsBlusherType.MilkyOrange
                    },
                    {
                        "type": BeautyType.Blusher_SweetOrange,
                        "name": "甜橙",
                        "params": ZegoEffectsBlusherType.SweetOrange
                    },
                    {
                        "type": BeautyType.Blusher_SlightlyDrunk,
                        "name": "微醺",
                        "params": ZegoEffectsBlusherType.SlightlyDrunk
                    },
                    {
                        "type": BeautyType.Blusher_ApricotPink,
                        "name": "杏粉",
                        "params": ZegoEffectsBlusherType.ApricotPink
                    }
                ]
            },
            {
                "type": BeautyType.Makeup_Eyeball,
                "name": "美瞳",
                "intensity": 100,
                "items": [
                    {
                        "type": BeautyType.Eyeball_WaterLightBlack,
                        "name": "水光黑",
                        "params": ZegoEffectsColoredcontactsType.DarknightBlack
                    },
                    {
                        "type": BeautyType.Eyeball_StarryBlue,
                        "name": "星空蓝",
                        "params": ZegoEffectsColoredcontactsType.StarryBlue
                    },
                    {
                        "type": BeautyType.Eyeball_MysteryBrownGreen,
                        "name": "仙棕绿",
                        "params": ZegoEffectsColoredcontactsType.MysteryBrownGreen
                    },
                    {
                        "type": BeautyType.Eyeball_PolarLightsBrown,
                        "name": "异瞳棕",
                        "params": ZegoEffectsColoredcontactsType.PolarLightsBrown
                    },
                    {
                        "type": BeautyType.Eyeball_ChocolateBrown,
                        "name": "可可棕",
                        "params": ZegoEffectsColoredcontactsType.ChocolateBrown
                    }
                ]
            },
            {
                "type": BeautyType.Makeup_Eyeshadow,
                "name": "眼影",
                "intensity": 100,
                "items": [
                    {
                        "type": BeautyType.Eyeshadow_MistPink,
                        "name": "粉雾海",
                        "params": ZegoEffectsEyeshadowType.PinkMist
                    },
                    {
                        "type": BeautyType.Eyeshadow_MochaBrown,
                        "name": "摩卡棕",
                        "params": ZegoEffectsEyeshadowType.MochaBrown
                    },
                    {
                        "type": BeautyType.Eyeshadow_TeaBrown,
                        "name": "暖茶棕",
                        "params": ZegoEffectsEyeshadowType.TeaBrown
                    },
                    {
                        "type": BeautyType.Eyeshadow_ShimmerPink,
                        "name": "微光蜜",
                        "params": ZegoEffectsEyeshadowType.ShimmerPink
                    },
                    {
                        "type": BeautyType.Eyeshadow_VitalityOrange,
                        "name": "元气橙",
                        "params": ZegoEffectsEyeshadowType.BrightOrange
                    }
                ]
            },
            {
                "type": BeautyType.Makeup_Eyeliner,
                "name": "眼线",
                "intensity": 100,
                "items": [
                    {
                        "type": BeautyType.Eyeliner_Pretty,
                        "name": "俏皮",
                        "params": ZegoEffectsEyelinerType.Naughty
                    },
                    {
                        "type": BeautyType.Eyeliner_Temperament,
                        "name": "气质",
                        "params": ZegoEffectsEyelinerType.Dignified
                    },
                    {
                        "type": BeautyType.Eyeliner_Scheming,
                        "name": "心机",
                        "params": ZegoEffectsEyelinerType.Innocent
                    },
                    {
                        "type": BeautyType.Eyeliner_Wildcat,
                        "name": "野猫",
                        "params": ZegoEffectsEyelinerType.CatEye
                    },
                    {
                        "type": BeautyType.Eyeliner_Natural,
                        "name": "自然",
                        "params": ZegoEffectsEyelinerType.Natural
                    }
                ]
            },
            {
                "type": BeautyType.Makeup_Eyelash,
                "name": "眼睫毛",
                "intensity": 100,
                "items": [
                    {
                        "type": BeautyType.Eyelash_Curl,
                        "name": "卷翘",
                        "params": ZegoEffectsEyelashesType.Curl
                    },
                    {
                        "type": BeautyType.Eyelash_Bushy,
                        "name": "浓密",
                        "params": ZegoEffectsEyelashesType.Thick
                    },
                    {
                        "type": BeautyType.Eyelash_Tender,
                        "name": "温柔",
                        "params": ZegoEffectsEyelashesType.Tender
                    },
                    {
                        "type": BeautyType.Eyelash_Slender,
                        "name": "纤长",
                        "params": ZegoEffectsEyelashesType.Everlong
                    },
                    {
                        "type": BeautyType.Eyelash_Natural,
                        "name": "自然",
                        "params": ZegoEffectsEyelashesType.Natural
                    }
                ]
            },
            {
                "type": BeautyType.Makeup_Total,
                "name": "整装",
                "intensity": 100,
                "items": [
                    {
                        "type": BeautyType.Total_VulnerableAndInnocentEyes,
                        "name": "眼睑下至妆",
                        "params": ZegoEffectsMakeupType.VulnerableInnocentEyes
                    },
                    {
                        "type": BeautyType.Total_PureAndSexy,
                        "name": "纯欲妆",
                        "params": ZegoEffectsMakeupType.PureSexy
                    },
                    {
                        "type": BeautyType.Total_CutieAndCool,
                        "name": "奶凶妆",
                        "params": ZegoEffectsMakeupType.CutieCool
                    }, {
                        "type": BeautyType.Total_MilkyEyes,
                        "name": "银河眼妆",
                        "params": ZegoEffectsMakeupType.MilkyEyes
                    },
                    {
                        "type": BeautyType.Total_Flawless,
                        "name": "神颜",
                        "params": ZegoEffectsMakeupType.Flawless
                    }
                ]
            }
        ]
    },
    {
        "type": BeautyType.Colorful_Style,
        "name": "风格滤镜",

        "items": [
            {
                "type": BeautyType.Filter_Natural_Creamy,
                "name": "自然_奶油",
                "intensity": 70,
                "params": ZegoEffectsFilterType.Creamy
            },
            {
                "type": BeautyType.Filter_Natural_Brighten,
                "name": "自然_青春",
                "intensity": 70,
                "params": ZegoEffectsFilterType.Brighten
            },
            {
                "type": BeautyType.Filter_Natural_Fresh,
                "name": "自然_清新",
                "intensity": 80,
                "params": ZegoEffectsFilterType.Fresh
            },
            {
                "type": BeautyType.Filter_Natural_Autumn,
                "name": "自然_秋田",
                "intensity": 60,
                "params": ZegoEffectsFilterType.Autumn
            },
            {
                "type": BeautyType.Filter_Gray_Monet,
                "name": "灰调_莫奈",
                "intensity": 80,
                "params": ZegoEffectsFilterType.Cool
            },
            {
                "type": BeautyType.Filter_Gray_Night,
                "name": "灰调_暗夜",
                "intensity": 70,
                "params": ZegoEffectsFilterType.Night
            },
            {
                "type": BeautyType.Filter_Gray_FilmLike,
                "name": "灰调_胶片",
                "intensity": 65,
                "params": ZegoEffectsFilterType.FilmLike
            },
            {
                "type": BeautyType.Filter_Dream_Sunset,
                "name": "梦境_落日",
                "intensity": 70,
                "params": ZegoEffectsFilterType.Sunset
            },
            {
                "type": BeautyType.Filter_Dream_Cozily,
                "name": "梦境_琉璃",
                "intensity": 70,
                "params": ZegoEffectsFilterType.Cozily
            },
            {
                "type": BeautyType.Filter_Dream_Sweet,
                "name": "梦境_星云",
                "intensity": 70,
                "params": ZegoEffectsFilterType.Sweet
            }
        ]
    },
    {
        "type": BeautyType.Type_Group,
        "name": "虚拟背景",
        "items": [
            {
                "type": BeautyType.ChromaKey,
                "name": "绿幕分割",

            },
            {
                "type": BeautyType.Background,
                "name": "替换背景",
                "intensity": 100,
                "items": [
                    {
                        "type": BeautyType.Background_Grassland,
                        "name": "草原",
                        "params": "Backgrounds.bundle/grassland.jpg"
                    },
                    {
                        "type": BeautyType.Background_Sunset,
                        "name": "日落",
                        "params": "Backgrounds.bundle/sunset.jpg"
                    },
                    {
                        "type": BeautyType.Background_Mapleleaf,
                        "name": "枫叶",
                        "params": "Backgrounds.bundle/mapleleaf.jpg"
                    },
                    {
                        "type": BeautyType.Background_Sky,
                        "name": "天空",
                        "params": "Backgrounds.bundle/sky.jpg"
                    },
                    {
                        "type": BeautyType.Background_Bear,
                        "name": "小熊",
                        "params": "Backgrounds.bundle/bear.jpg"
                    },
                    {
                        "type": BeautyType.Background_WaterHouse,
                        "name": "水屋",
                        "params": "Backgrounds.bundle/bg.jpg"
                    },
                    {
                        "type": BeautyType.Background_Forest,
                        "name": "深林",
                        "params": "Backgrounds.bundle/trees.jpg"
                    },
                    {
                        "type": BeautyType.Background_AnimalKingdom,
                        "name": "动森",
                        "params": "Backgrounds.bundle/animal.jpg"
                    },
                    {
                        "type": BeautyType.Background_Dusk,
                        "name": "黄昏",
                        "params": "Backgrounds.bundle/nightfall.jpg"
                    }
                ]
            },
            {
                "type": BeautyType.Background_Mosaic,
                "name": "背景马赛克",
                "intensity": 100,
                "items": [
                    {
                        "type": BeautyType.Mosaic_Triangle,
                        "name": "三角形",
                        "params": ZegoEffectsMosaicType.Triangle
                    },
                    {
                        "type": BeautyType.Mosaic_Square,
                        "name": "正方形",
                        "params": ZegoEffectsMosaicType.Square
                    },
                    {
                        "type": BeautyType.Mosaic_Hexagon,
                        "name": "六边形",
                        "params": ZegoEffectsMosaicType.Hexagon
                    }
                ]
            },
            {
                "type": BeautyType.Background_Blur,
                "name": "背景虚化",
                "intensity": 100,
            }
        ]
    },

]

export default config