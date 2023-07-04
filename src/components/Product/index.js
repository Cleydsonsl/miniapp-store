import React from 'react';
import { Load } from '../../components';
import { 
  View, 
  Image, 
  Text, 
} from 'react-native';

import importModule from '../../../importModule';
const ButtonBuy = importModule('checkout', 'ButtonBuy');

import styles from './styles';

const Product = ({ product, onBuyPressCallback, onBuyPressBeforeCallback }) => {
  
  const handleBeforeCallback = (props) => {
    if (onBuyPressBeforeCallback)
      onBuyPressBeforeCallback(props)
  }

  const handleCallback = (props) => {
    if (onBuyPressCallback)
      onBuyPressCallback(props)
  }

  return (
    <View style={styles.CardContent}>
      <View style={styles.ImageContent}>
        <Image style={styles.Image} source={require(`@assets/${product.image}`)} />
      </View>

      <View style={{display: 'flex'}}>
        <View style={styles.ContentWhithTrashBtn}>
          <View style={styles.ProductContent}>
            <Text style={styles.ProductName}>{product.name}</Text>
            <View>
              <Text style={styles.ProductDetail}>{product.detail}</Text>
              <Text style={styles.TextValue}>R$ {product.price}</Text>
            </View>
          </View>
          <View style={styles.aside}>
            <React.Suspense fallback={<Load show={true} />}>
              <ButtonBuy 
                title="Comprar"
                product={product}
                beforeCallback={handleBeforeCallback}
                callback={handleCallback}
              />
            </React.Suspense>  
          </View>
        </View>
      </View>  
    </View>
  );
};

export default Product;
