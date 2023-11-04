import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import Filter from './Filter.js'
import Product from './Product.js'
import MainNavigation from '../components/MainNavigation.js'
import combain from '../img/combine.png'
import milk from '../img/milk.png'
import condensed from '../img/condensed milk.png'
import butter from '../img/butter.png'
import yog_1 from '../img/yog-1.png'
import yog_2 from '../img/yog-2.png'

class ProductsMilk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 50,
      max: 250,
    }
    this.onSliderChange = this.onSliderChange.bind(this)
  }

  onSliderChange = (value) => {
    this.setState({
      min: value[0],
      max: value[1],
    });
  }

  render() {
    return (
      <div className="main">
        <div className="products">
          <MainNavigation productsName="milk,cheese,egg"/>
          <h1>Milk,cheese,egg</h1>
            <div className="content">
              <div className="products-row">
                <Product price="5.0" img={combain} name='Combine KZS-1218 "DESNA-POLESIE GS12"' />
                <Product price="4.5" img={milk} name='PROSTOKVASHINO drinking milk ' />
                <Product price="5.2" img={condensed} name='Condensed milk ' />
              </div>
              <div className="products-row">
                <Product price="3.0" img={butter} name='PROSTOKVASHINO butter' />
                <Product price="2.0" img={yog_1} name='yogurt' />
                <Product price="2.0" img={yog_2} name='yogurt' />
              </div>
          </div>
          <Filter />
          </div>
      </div>
    )
  }
}

export default ProductsMilk
