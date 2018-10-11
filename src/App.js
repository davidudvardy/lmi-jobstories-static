import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import JobStoryList from './components/JobStoryList';
import SideBar from './components/SideBar';
import './App.css';
import jobStoriesData from './jobstories.json';
import productData from './products.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredJobStories: jobStoriesData,
    }
  }

  componentDidMount() {
//    if(document.URL.indexOf("/product/") !== -1) {
//      let list = this.state.filteredJobStories.filter(job => job.products.findIndex(product => product == document.URL.match(/([^/]+)$/g)[0]) !== -1 );
//      this.setState({
//        productFilter: list,
//      })
//    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">Job Stories</Link>
          <input className="form-control form-control-dark w-100" id="filter" type="text" placeholder="Search job stories..." />
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link">Sign out</a>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <SideBar data={productData} />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <h2>Job Stories</h2>
              <JobStoryList data={this.state.filteredJobStories} />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
