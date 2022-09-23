import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createProduct } from '../state/product/productSlice';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import RadioSelector from '../components/RadioSelector';
import { Button } from "@react-native-material/core";

// TODO: Add "What will you do with it?" or something like that to the prompt
const AddProductView = () => {

  const wantIntensity = [
    { value: 'a little', id: 0 },
    { value: 'moderately', id: 1 },
    { value: 'A LOT', id: 2 },
  ];

  const defaultWantIntensity = 1;


  const needItOptions = [
    { value: 'no', id: 0 },
    { value: 'yes', id: 1 },
  ];

  const defaultNeedItOptions = 0;


  const product = useSelector((state) => state.product.value);
  const dispatch = useDispatch();

  const [ productName, setProductName ] = useState(null);
  const [ productCost, setProductCost ] = useState(null);
  const [ productUrl, setProductUrl ] = useState(null);
  const [ productWant, setProductWant ] = useState(defaultWantIntensity);
  const [ productNeeded, setProductNeeded ] = useState(defaultNeedItOptions);


  const wantClickEvent = (value) => {
    console.log('wantClickEvent clicked with value: ', value);

    setProductWant(value)
  };

  const needClickEvent = (value) => {
    console.log('needClickEvent clicked with value: ', value);

    setProductNeeded(value)
  };

  const remindMeButtonClick = (value) => {

    console.log('Remind Me Button clicked')

      dispatch(createProduct({
        name: productName,
        cost: productCost,
        url: productUrl,
        wantIntensity: productWant,
        isNeeded: productNeeded,
      }))
  };


  // TODO: consider adding the ability to take a picture of what you want and have it show up.
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Product Name'
        keyboardType='default'
        onChangeText={(value) => setProductName(value)}
      />
      {/* TODO: make this only accept numbers then maybe a currency symbol or something. */}
      <TextInput
        style={styles.textInput}
        placeholder='cost'
        keyboardType='number-pad'
        onChangeText={(value) => setProductCost(value)}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Url (if any)'
        keyboardType='default'
        onChangeText={(value) => setProductUrl(value)}
      />
      <Text style={styles.text}>How much do you want it?</Text>
      <RadioSelector
        data={wantIntensity}
        onSelect={wantClickEvent}
        defaultOptionId={defaultWantIntensity}
      />
      <Text style={styles.text}>
        Do you REALLY need it?
      </Text>
      <RadioSelector
        data={needItOptions}
        onSelect={needClickEvent}
        defaultOptionId={defaultNeedItOptions}
      />
      <Button
        title='Remind me later!'
        color={styles.button.color}
        onTouchEnd={ () => remindMeButtonClick() }
      />
    </View>
  );
};

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

export default AddProductView;
