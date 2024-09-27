import React, { useState, ChangeEvent } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";
import Slider from "@react-native-community/slider";
import EffectsConfig, { BeautyItem } from "./EffectsConfig";

const BeautyPanel: React.FC<{
  onSelected: (groupItem: BeautyItem, beautyItem: BeautyItem) => void;
  onSliderEnd: (
    groupItem: BeautyItem,
    beautyItem: BeautyItem,
    currentIntensity: number
  ) => void;
}> = ({ onSelected, onSliderEnd }) => {
  const [firstLevel, setFirstLevel] = useState<string>("");
  const [secondLevel, setSecondLevel] = useState<string>("");
  const [thirdLevel, setThirdLevel] = useState<string>("");
  const [sliderValue, setSliderValue] = useState(0);

  const [selectedFirstItem, setSelectedFirstItem] = useState<BeautyItem>();
  const [selectedSecondItem, setSelectedSecondItem] = useState<BeautyItem>();
  const [selectedThirdItem, setSelectedThirdItem] = useState<BeautyItem>();

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={selectedSecondItem?.range?.[0] ?? 0}
          maximumValue={selectedSecondItem?.range?.[1] ?? 100}
          renderStepNumber={true}
          step={25}
          value={sliderValue}
          onValueChange={(value) => {
            setSliderValue(value);
            // 更新内部值
            if (selectedSecondItem) {
              selectedSecondItem.intensity = value;
            }
            if (selectedThirdItem) {
              selectedThirdItem.intensity = value;
            }
          }}
          onSlidingComplete={() => {
            if (selectedThirdItem && selectedSecondItem) {
              // 二,三级
              onSliderEnd(selectedSecondItem, selectedThirdItem, sliderValue);
            } else if (selectedFirstItem && selectedSecondItem) {
              // 一,二级
              onSliderEnd(selectedFirstItem, selectedSecondItem, sliderValue);
            }
          }}
        />
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={firstLevel}
          style={styles.picker}
          onValueChange={(itemIndex) => {
            setSelectedFirstItem(EffectsConfig[itemIndex as number]);
            setFirstLevel(itemIndex as string);
            setSecondLevel("");
            setThirdLevel("");

            setSelectedSecondItem(undefined);
            setSelectedThirdItem(undefined);
          }}
        >
          <Picker.Item label="请选择" value="" />
          {EffectsConfig.map((item, index) => (
            <Picker.Item key={item.name} label={item.name} value={index} />
          ))}
        </Picker>
        <Picker
          selectedValue={secondLevel}
          style={styles.picker}
          enabled={firstLevel !== ""}
          onValueChange={(itemIndex) => {
            setSecondLevel(itemIndex as string);
            setThirdLevel('')
            const item = selectedFirstItem?.items?.[itemIndex as number];
            setSelectedSecondItem(item);
            setSelectedThirdItem(undefined);
            setSliderValue(item?.intensity ?? 0);
            if (selectedFirstItem && item) {
              // 1, 2 级
              onSelected(selectedFirstItem, item);
            }
          }}
        >
          <Picker.Item label="请选择" value="" />
          {selectedFirstItem?.items?.map((item, index) => (
            <Picker.Item key={item.type} label={item.name} value={index} />
          ))}
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        {selectedSecondItem && selectedSecondItem.items && (
          <Picker
            selectedValue={thirdLevel}
            mode="dialog"
            style={styles.picker}
            enabled={secondLevel !== "" && !!selectedSecondItem?.items}
            onValueChange={(itemIndex) => {
              setThirdLevel(itemIndex as string);
              const item = selectedSecondItem?.items?.[itemIndex as number];
              setSelectedThirdItem(item);
              setSliderValue(
                item?.intensity ?? selectedSecondItem.intensity ?? 0
              );
              if (selectedSecondItem && item) {
                // 2, 3级
                onSelected(selectedSecondItem, item);
              }
            }}
          >
            <Picker.Item label="请选择" value="" />
            {selectedSecondItem?.items?.map((item, index) => (
              <Picker.Item key={item.type} label={item.name} value={index} />
            ))}
          </Picker>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "column",
  },
  pickerContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  picker: {
    // padding: 2,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#336699",
    borderRadius: 5,
    fontSize: 12,
    color: "#333999",
    flex: 1, // 如果是并排显示，这可以帮助分配宽度
    margin: 3, // 添加一点间隔
  },
  sliderContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  slider: {
    flex: 1,
    height: 40,
    color: "#333999",
    backgroundColor: "#eee",
    margin: 3, // 添加一点间隔
  },
});

export default BeautyPanel;
