import React from 'react';
import Image from '../index.js'
import logo from '../img/logo.svg'
import favorites from '../img/favorites.svg'
import orders from '../img/orders.svg'
import bucket from '../img/bucket.svg'
import account_symb from '../img/account-symb.svg'
import Account from './Account.js'
import Catalog from './Catalog.js'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAccountVisible: false,
      isCatalogVisible:false,
    }
    this.clickAccount = this.clickAccount.bind(this)
  }

  showCatalog = () => {
    this.setState({ isCatalogVisible: true });
  }

  hideCatalog = () => {
    this.setState({ isCatalogVisible: false });
  }

  render() {
    return <header>
      <div className="nav">
        <ul>
          <li className="nav-item logo">
            <Image src={logo} width="32px" />
          </li>
          <li className="nav-item logo-name">
            deformator shop
          </li>
          <li className="nav-item">
            <div onMouseEnter={this.showCatalog} className="button-catalog">
              <div className="button-lines">
                <div className="button-catalog-line"></div>
                <div className="button-catalog-line"></div>
                <div className="button-catalog-line"></div>
              </div>
              <p>Catalog</p>
            </div>
          </li>
          {this.state.isCatalogVisible && (
            <Catalog />
          )}
          <li className="nav-item">
            <form className="search-form">
              <input placeholder="Find the product" className="search" />
            </form>
          </li>
          <li className="nav-item">
            <div className="nav-img-container">
              <Image src={favorites} alt="" classname="nav-favorites-img" />
              <figcaption>favorites</figcaption>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-img-container">
              <Image src={orders} alt="" classname="nav-orders-img" />
              <figcaption>orders</figcaption>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-img-container">
              <Image src={bucket} alt="" classname="nav-bucket-img" />
              <figcaption>bucket</figcaption>
            </div>
          </li>
          <li className="nav-item account">
            <div onClick={this.clickAccount}>
              account
              <Image classname="account-symb" src={account_symb} />
            </div>
            {this.state.isAccountVisible && (
              <Account />
            )}
          </li>
        </ul>
      </div>
    </header>
  }
  clickAccount() {
    this.setState({ isAccountVisible: true })
  }
}

export default Header
