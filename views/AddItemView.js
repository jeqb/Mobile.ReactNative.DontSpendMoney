import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import RadioSelector from '../components/RadioSelector';
import { Button } from "@react-native-material/core";

const AddItemView = () => {

  // make this configurable so colors can be set from a central place
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: 'black',
      fontSize: 18,
      margin: 12
    },
    textInput: {
      height: 40,
      margin: 12,
      width: '80%',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'aqua',
      padding: 10,
    },
    button: {
      color: 'aqua',
      tintColor: 'aqua'
    },
    radioButton: {
      buttonColor: 'aqua',
      labelColor: 'aqua'
    }
  });

  const wantIntensity = [
    { value: 'a little', id: 0 },
    { value: 'moderately', id: 1 },
    { value: 'A LOT', id: 2 },
  ];

  const needItOptions = [
    { value: 'no', id: 0 },
    { value: 'yes', id: 1 },
  ];

  const wantClickEvent = (value) => {
    console.log('wantClickEvent clicked with value: ', value);
  };

  const needClickEvent = (value) => {
    console.log('needClickEvent clicked with value: ', value);
  };

  // TODO: consider adding the ability to take a picture of what you want and have it show up.
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Product Name'
        keyboardType='default'
      />
      {/* TODO: make this only accept numbers then maybe a currency symbol or something. */}
      <TextInput
        style={styles.textInput}
        placeholder='cost'
        keyboardType='number-pad'
      />
      <TextInput
        style={styles.textInput}
        placeholder='Url (if any)'
        keyboardType='default'
      />
      <Text style={styles.text}>How much do you want it?</Text>
      <RadioSelector
        data={wantIntensity}
        onSelect={wantClickEvent}
        defaultOptionId={1}
      />
      <Text style={styles.text}>
        Do you REALLY need it?
      </Text>
      <RadioSelector
        data={needItOptions}
        onSelect={needClickEvent}
        defaultOptionId={0}
      />
      <Button title='Remind me later!' color={styles.button.color}/>
    </View>
  );
};

export default AddItemView;
