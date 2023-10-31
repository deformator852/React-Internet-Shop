import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

class MainNavigation extends React.Component {
  render() {
    return (<div className="main-nav">
            <p><a href="#">Main </a></p>
            <p><FaAngleRight/></p>
            <p><a href="#">Catalog</a></p>
            <p><FaAngleRight/></p>
            <p><a style={{color:"#8F8F8F"}} href="#">{this.props.productsName}</a></p>
          </div>)
  }
}

export default MainNavigation
