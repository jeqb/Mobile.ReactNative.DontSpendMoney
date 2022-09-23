import { Flex } from '@react-native-material/core';
import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, View, TextInput } from 'react-native';

// https://redux-toolkit.js.org/usage/usage-guide
// ctrl + F "Redux Data Fetching Patterns"

const ListProductView = () => {

  const productList = [
    {
      key: 1,
      name: 'M&P Alluminium',
      cost: 999.99,
      url: 'smith-wesson.com',
      wantIntensity: 'A LOT',
      isNeeded: 'no'
    },
    {
      key: 2,
      name: 'Electric Scooter',
      cost: 800,
      url: 'electric-scooter.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 3,
      name: 'Video Card',
      cost: 600,
      url: 'amd.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 4,
      name: '126 GB Ram',
      cost: 120,
      url: 'Amazon.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 5,
      name: 'Polymer 80 Frame',
      cost: 120,
      url: 'polymer80.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 6,
      name: 'Polymer 80 jig',
      cost: 24,
      url: 'polymer80.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 7,
      name: 'M&P Alluminium',
      cost: 999.99,
      url: 'smith-wesson.com',
      wantIntensity: 'A LOT',
      isNeeded: 'no'
    },
    {
      key: 8,
      name: 'Electric Scooter',
      cost: 800,
      url: 'electric-scooter.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 9,
      name: 'Video Card',
      cost: 600,
      url: 'amd.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 10,
      name: '126 GB Ram',
      cost: 120,
      url: 'Amazon.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 11,
      name: 'Polymer 80 Frame',
      cost: 120,
      url: 'polymer80.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 12,
      name: 'Polymer 80 jig',
      cost: 24,
      url: 'polymer80.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 13,
      name: 'M&P Alluminium',
      cost: 999.99,
      url: 'smith-wesson.com',
      wantIntensity: 'A LOT',
      isNeeded: 'no'
    },
    {
      key: 14,
      name: 'Electric Scooter',
      cost: 800,
      url: 'electric-scooter.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 15,
      name: 'Video Card',
      cost: 600,
      url: 'amd.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 16,
      name: '126 GB Ram',
      cost: 120,
      url: 'Amazon.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 17,
      name: 'Polymer 80 Frame',
      cost: 120,
      url: 'polymer80.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    },
    {
      key: 18,
      name: 'Polymer 80 jig',
      cost: 24,
      url: 'polymer80.com',
      wantIntensity: 'a little',
      isNeeded: 'no'
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        renderItem={
          ({item}) => {
            return (
              <View
                style={styles.item}
                key={item.key}
              >
                <Text style={styles.text}>
                  {item.name + ': '}
                </Text>
                <Text style={styles.text}>
                  {/* TODO: make the currency configurable. */}
                  {'$' + item.cost}
                </Text>
              </View>
            )
          }
        }
      />
    </View>
  )
}

// TODO: make this configurable so colors can be set from a central place
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    textAlign: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center'
  },
  item: {
    backgroundColor: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
    borderColor: 'aqua',
    borderWidth: 1,
    borderRadius: 10,
    flexGrow: 1,
    flexDirection: 'row'
  }
});

export default ListProductView;
