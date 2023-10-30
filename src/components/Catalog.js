import React from 'react';

class Catalog extends React.Component{
  render() {
     return (<div className="catalog" onMouseLeave={this.props.hideCat}>
      <div className="categories">
        <div className="cat-block">
          <p><a className="cat" href="#">Milk, cheese, egg</a></p>
          <p><a className="cat" href="#">Bread</a></p>
          <p><a className="cat" href="#">Fruits and Vegetables</a></p>
          <p><a className="cat" href="#">Frozen food</a></p>
        </div>
        <div className="cat-block">
          <p><a className="cat" href="#">Beverages</a></p>
          <p><a className="cat" href="#">Confectionery</a></p>
          <p><a className="cat" href="#">Tea and cofe</a></p>
        </div>
        <div className="cat-block">
          <p><a className="cat" href="#">Balakleya</a></p>
          <p><a className="cat" href="#">Healthy eating</a></p>
          <p><a className="cat" href="#">Pet products</a></p>
        </div>
        <div className="cat-block">
          <p><a className="cat" href="#">Non-food items</a></p>
          <p><a className="cat" href="#">Children's food</a></p>
          <p><a className="cat" href="#">Meat, poultry, sausage</a></p>
        </div>

     </div>
    </div>)
  }
}

export default Catalog
