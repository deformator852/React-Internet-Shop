import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class ProductsMilk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 1,
      max: 300,
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
          <div className="main-nav">
            <p><a href="#">Main </a></p>
            <p><FaAngleRight/></p>
            <p><a href="#">Catalog</a></p>
            <p><FaAngleRight/></p>
            <p><a href="#">Milk,cheese,egg</a></p>
          </div>
          <h1>Milk,cheese,egg</h1>
          <div className="aside-filter">
            <div className="filter">
             <p>Filter</p> 
            </div>
            <div className="choose-price">
              <div className="filtered-price">
                <div className="">{this.state.min}</div>
                <div className="">{this.state.max}</div>
              </div>
              <Slider
                range
                min={1}
                max={300}
                value={[this.state.min, this.state.max]}
                onChange={this.onSliderChange}
              />
              <style>
                {
                  `
                  .rc-slider-track {
                    height:4px;
                    background-color:#70C05B;
                  }
                  .rc-slider-horizontal {
                    width:172px;
                  }
                  .rc-slider-handle {
                    width:24px;
                    height:24px;
                    background-color:#70C05B;
                    border:1px solid #FFFFFF;
                    margin-top:-10px;
                    opacity:1;
                  }
                  .rc-slider-handle:hover {
                    border:1px solid #FFFFFF;
                  }
                  .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
                    border:1px solid #FFFFFF;
                    box-shadow: none;
                  }
                  `
                }
              </style>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductsMilk
