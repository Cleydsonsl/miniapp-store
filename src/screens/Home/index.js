import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  View,
  FlatList,
} from 'react-native';

import { Product } from '../../components';
import styles from './styles';

const Home = ({ globalContext })=> {
  const { reloadUi } = globalContext

  const listProd = [
    { id: 1, name: 'Coca-Cola', detail: 'Lata - 365ml', image: 'cocalata.png', price: '10.00' },
    { id: 2, name: 'Coca-Cola', detail: 'Lata - 220ml', image: 'cocalata.png', price: '35.00' },
  ]

  const handleBuyPressCallback = () => {
    if (reloadUi)
      reloadUi('topRight')
  }

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar />
      <View style={styles.Content}>
        <FlatList
          data={listProd}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Product
              product={item}
              onBuyPressCallback={handleBuyPressCallback}
            />
          )}
        />
      </View>
    </SafeAreaView>
  )

}

export default Home