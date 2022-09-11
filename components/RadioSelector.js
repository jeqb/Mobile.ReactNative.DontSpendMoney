import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const RadioSelector = ({
  data,
  onSelect,
  displayDirection,
  textColor: textColor='black',
  unSelectedBackgroundColor: unSelectedBackgroundColor='white',
  selectedBackGroundColor: selectedBackGroundColor='aqua',
  borderColor: borderColor='aqua',
  fontSize: fontSize=20,
  margin: margin=5,
  padding: padding=10,
  borderRadius: borderRadius=10,
  borderWidth: borderWidth=1,
  // this may or may not be viable
  defaultOptionId: defaultOptionId=null
}) => {

  // can consolodate
  if (displayDirection === 'horizontal') {
    flexDirection = 'row'
  }
  else if (displayDirection === 'veritcal') {
    flexDirection = 'column'
  }
  else {
    flexDirection = 'row'
  }

  const [userOption, setUserOption] = useState(defaultOptionId)

  const selectHandler =(item) => {
    onSelect(item.value);
    setUserOption(item.id);
  }

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: flexDirection
    },
    option: {
      fontSize: fontSize,
      color: textColor,
      textAlign: 'center'
    },
    unselected: {
      backgroundColor: unSelectedBackgroundColor,
      borderColor: borderColor,
      margin: margin,
      padding: padding,
      borderRadius: borderRadius,
      borderWidth: borderWidth
    },
    selected: {
      backgroundColor: selectedBackGroundColor,
      borderColor: borderColor,
      margin: margin,
      padding: padding,
      borderRadius: borderRadius,
      borderWidth: borderWidth
    }
  })

  return (
    <View style={styles.container}>
      {data.map((item) => {
        return (
          <Pressable
            style={item.id === userOption ? styles.selected : styles.unselected}
            onPress={() => selectHandler(item)}
            key={item.id}
          >
            <Text style={styles.option}>{item.value}</Text>
          </Pressable>
        )
      })}
    </View>
  );
}

export default RadioSelector;
