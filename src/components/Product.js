import React from 'react';

class Product extends React.Component {
  render() {
    return (<div className="product">
      <img className="product-image"src={this.props.img} />
      <p className="product-name">{this.props.name}</p>
      <p className="product-description">{this.props.description}</p>
    </div>)
  }
}

export default Product
