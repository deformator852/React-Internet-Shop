import React,{useState} from 'react';
import Slider,{Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import Switch from 'react-switch';

class Filter extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      min: 50,
      max: 250,
      checked:true,
    }
    this.onSliderChange = this.onSliderChange.bind(this)
    this.clearPrice = this.clearPrice.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onSliderChange (value){
    this.setState({
      min: value[0],
      max: value[1],
    });
  }

  clearPrice(){
    this.setState({
      min:1,
      max:300
    });
  }

  handleChange (isChecked){
    this.setState({checked:isChecked });
  };

  render () {
    return (<div className="aside-filter">
              <div className="filter">
                <p>Filter</p> 
              </div>
              <div className="price-wrapper">
                <div className="price">Price</div>
                <div onClick = {this.clearPrice} className="price-clear"><p>Clear</p></div>
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
                <label>
                <Switch onChange={this.handleChange} checked={this.state.checked}/>
                  <span>{this.state.checked ? 'available' : 'not available'}</span>
                </label>
            </div>
          </div>)
  }
}

export default Filter
