import React, { Component } from 'react';
import '../css/App.css';

import AddProducts from './AddProducts';
import SearchProducts from './SearchProducts';
import ListProducts from './ListProducts';

import { without, findIndex } from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myProducts: [],
      formDisplay: false,
      orderBy: 'productName',
      orderDir: 'asc',
      queryText: '',
      lastIndex: 0
    };
    this.deleteProduct = this.deleteProduct.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.searchApts = this.searchApts.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  searchApts(query) {
    this.setState({
      queryText: query
    })
  }

  updateInfo(name, value, id) {
    let tempApts = this.state.myProducts;
    let aptIndex = findIndex(this.state.myProducts, {
      aptId: id
    });
    tempApts[aptIndex][name] = value;
    this.setState({
      myProducts: tempApts
    })
  }

  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir
    });
  }

  addProduct(apt) {
    let tempApts = this.state.myProducts;
    apt.aptId = this.state.lastIndex;
    tempApts.unshift(apt);
    this.setState({
      myProducts: tempApts,
      lastIndex: this.state.lastIndex + 1
    });
  }

  deleteProduct(apt) {
    let tempApts = this.state.myProducts;
    tempApts = without(tempApts, apt);

    this.setState({
      myProducts: tempApts
    });
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.aptId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return item;
        });
        this.setState({
          myProducts: apts
        });
      });
  }

  render() {
    let order;
    let filteredApts = this.state.myProducts;
    if (this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredApts = filteredApts.sort((a, b) => {
      if (
        a[this.state.orderBy].toLowerCase() <
        b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter(eachItem => {
      return (
        eachItem['productName']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        eachItem['supplierName']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        eachItem['productDesc']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase())
      )
    });

    return (
      <main className="page bg-white" id="petratings" >
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddProducts
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addProduct={this.addProduct}
                />
                <SearchProducts
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeOrder={this.changeOrder}
                  searchApts={this.searchApts}
                />
                <ListProducts
                  products={filteredApts}
                  deleteProduct={this.deleteProduct}
                  updateInfo={this.updateInfo}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;