import { connect } from "react-redux";
import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

const ListProductView = ({ productList, currency }) => {

  currency = currency ?? '$';

  const sumCost = (productList) => {
    return productList.reduce((n, {cost}) => n + cost, 0);
  };

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'aqua'}}>
        <Text style={styles.text}>
          Total Cost of Wants: {currency + sumCost(productList)}
        </Text>
      </View>
      <FlatList
        data={productList}
        renderItem={
          ({item}) => {
            return (
              <View
                style={styles.item}
                key={item.key}
              >
                {/* Flex not working yet */}
                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <Text style={styles.text}>
                    {item.name + ': '}
                  </Text>
                  <Text style={styles.text}>
                    {currency + item.cost}
                  </Text>
                </View>
                {/* Flex not working yet */}
                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <Text style={styles.text}>
                    { item.isNeeded == 'yes' ? 'Need' : 'Want'}
                  </Text>
                </View>
              </View>
            )
          }
        }
      />
    </View>
  );
};

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

const mapStateToProps = (state) => {
  return {
    productList: state.product.value
  }
}

export default connect(mapStateToProps)(ListProductView);
