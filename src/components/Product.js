import React from 'react';

class Product extends React.Component {
  render() {
    return (<div className="product">
      <img className="product-image"src={this.props.img} />
      <p className="product-price">{this.props.price}$</p>
      <p className="product-name">{this.props.name}</p>
      <button className="product-bucket">In bucket</button>
    </div>)
  }
}

export default Product
