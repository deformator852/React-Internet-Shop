import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import style from './css/style.css'
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import ProductsMilk from "./components/ProductsMilk"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="base">
        <div id="overlay"></div>
        <Header/>
          <Routes>
            <Route path="/products/milk-cheese-egg" element={<ProductsMilk />} />
            <Route path="/" element={<Root />} />
          </Routes>
        <Footer/>
        </div>
      </Router>
    );
  }
}

class Root extends React.Component {
  render() {
    return (
        <Main />
    )
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
app.render(<App />)
