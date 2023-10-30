import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return  (
    <div className="main">
        <div className="main-nav">
          <p><a href="#">Main </a></p>
          <p><FaAngleRight/></p>
          <p><a href="#">Catalog</a></p>
        </div>
        <h1>Catalog</h1>
        <div className="section-first">
          <Link to="products/milk-cheese-egg/"><div className="milk big-section-element"><p>Milk,cheese,egg</p></div></Link>
          <div className="bread section-element "><p>Bread</p></div>
          <div className="vegetables section-element"><p>Fruits and vegetables</p></div>
        </div>
        <div className="section-second">
          <div className="frozen-products section-element"><p>Frozen products</p></div>
          <div className="beverages section-element"><p>Beverages</p></div>
          <div className="confectionary section-element"><p>Confectionary products</p></div>
          <div className="tea section-element"><p>Tea and cofe</p></div>
        </div>
        <div className="section-third">
          <div className="balakleya section-element"><p>Balakleya</p></div>
          <div className="healthy section-element"><p>Healthy foods</p></div>
          <div className="pet big-section-element"><p>Pet products</p></div>
        </div>
        <div className="section-fourth">
          <div className="baby section-element"><p>Baby food</p></div>
          <div className="meat big-section-element"><p>Meat, poultry, sausage</p></div>
          <div className="non-food section-element"><p>Non-food products</p></div>
        </div>

    </div>) 
  }
}

export default Main
