import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Filter extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      min: 50,
      max: 250,
    }
    this.onSliderChange = this.onSliderChange.bind(this)
    this.clearPrice = this.clearPrice.bind(this)
  }

  onSliderChange = (value) => {
    this.setState({
      min: value[0],
      max: value[1],
    });
  }

  clearPrice = () => {
    this.setState({
      min:1,
      max:300
    });
  }

  render () {
    return (<div className="aside-filter">
              <div className="price-wrapper">
                <div className="price">Price</div>
                <div onClick = {this.clearPrice} className="price-clear"><p>Clear</p></div>
              </div>
            <div className="filter">
             <p>Filter</p> 
            </div>
            <div className="choose-price">
              <div className="filtered-price">
                <div className=""><p>{this.state.min}</p></div>
                <span className="line">—</span>
                <div className=""><p>{this.state.max}</p></div>
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
                    width:272px;
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
          </div>)
  }
}

export default Filter
