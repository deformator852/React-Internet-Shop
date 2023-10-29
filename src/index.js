import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import style from './css/style.css'

class Root extends React.Component {
  render() {
    return (<div id="base">
      <div id="overlay"></div>
      <Header />
      <Main />
      <Footer />
    </div>)
  }
}

class Image extends React.Component {
  render() {
    return (<img src={this.props.src} alt={this.props.alt} width={this.props.width} height={this.props.height} className={this.props.classname} />)
  }
}

export default Image

const container = document.getElementById("root")

const app = ReactDOM.createRoot(container)
app.render(<Root />)
