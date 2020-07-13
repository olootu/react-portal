import React, { Component } from 'react';
import Books from './components/books';
import Pagination from "./pagination";
import Search from './components/search';
import axios from 'axios';
import './App.scss';

class App extends Component {
  state = {
    books: [],
    search: 'ita',
    count: null,
    itemsPerPage: 20,
    page: 1,
    showing: false
  }

  render() {

    return (
      <div className="item-holder">

        <center><h1 className="title">Book List</h1>
          <Search handleInputChanged={this.handleInputChanged} handleSubmit={this.handleSubmit} />
          {this.state.showing
            ? <div className="message">Oops... no item found!</div>
            : null
          }
        </center>
        <div className="books">
          <Books books={this.state.books} />
        </div>
        <div className="pagination">
          <Pagination count={this.state.count} itemsPerPage={this.state.itemsPerPage}
            page={this.state.page}
            paginateRequestCall={this.makeApiRequestCall} />
        </div>
      </div >
    );
  }

  componentDidMount() {
    this.makeApiRequestCall(this.state.page);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted!!! form');
    console.log('Submitted!!! ');
    this.makeApiRequestCall(this.state.page);
  }

  handleInputChanged = (e) => {
    e.preventDefault();
    this.setState({
      search: e.target.value
    });
  }

  makeApiRequestCall = pageNumber => {
    const url = 'http://nyx.vima.ekt.gr:3000/api/books';
    axios.post(url, {
      itemsPerPage: this.state.itemsPerPage,
      page: pageNumber,
      filters: [{ type: 'all', values: [this.state.search] }]
    })
      .then((response) => {
        if (response !== null) {
          this.setState({
            books: response.data.books,
            count: response.data.count,
            page: pageNumber,
            showing: false
          });
        }
        if (response.data.count === 0) {
          this.setState({ showing: true })
        }



      })
  }
}

export default App;

