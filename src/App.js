import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import JobStoryList from './components/JobStoryList';
import SideBar from './components/SideBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);

    this.state = {
      originalJobStoryList: [],
      filteredJobStoryList: [],
      renderedJobStoryList: [],
      productData: [],
      isLoaded: false,
      error: null,
    }
  }

  componentDidMount() {
    // Load job stories and update lists right after it
    fetch("https://api.myjson.com/bins/y9284")
      .then(r => r.json())
      .then(
        (jobStoriesData) => {
          this.setState({
            originalJobStoryList: jobStoriesData.jobs,
            isLoaded: true,
          });
          this.props.history.listen(() => {
            this.handleURLChange();
          });
          this.handleURLChange();
        },
        (error) => {
          this.setState({
            error: error,
            isLoaded: true,
          });
        },
      );
    // Load product and usertype categories
    fetch("https://api.myjson.com/bins/km8h0")
      .then(r => r.json())
      .then(
        (productData) => {
          this.setState({
            productData: productData.products,
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            error: error,
            isLoaded: true,
          });
        },
      );
  }
  
  handleURLChange() {
    let type = new URL(document.URL).pathname.split('/')[1] || "home";
    let jobs = this.state.originalJobStoryList;
    let key = new URL(document.URL).pathname.split('/')[2] || "home";

    // Reset search field on URL change
    document.getElementById("filter").value = "";

    switch (type) {
      case 'product':
        jobs = jobs.filter(function (job) {
          return job.products.findIndex(function (p) {
            return p != key;
          });
        });
        break;
      case 'usertype':
        jobs = jobs.filter(function (job) {
          return job.userTypes.findIndex(function (u) {
            return u != key;
          });
        });
        break;
    }
    
    this.setState({
      filteredJobStoryList: jobs,
      renderedJobStoryList: jobs,
    });
  }

  getState() {
    return this.state;
  }

  render() {
    console.log(this.state.error);
    if(this.state.error) {
      return (<h4>Error loading JSON data: {this.state.error.message}</h4>);
    } else if (!this.state.isLoaded) {
      return (<h4>Loading data...</h4>);
    } else {
      return (
        <div>
          <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <Link id="home" className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">Job Stories</Link>
            <input className="form-control form-control-dark w-100" id="filter" type="text" placeholder="Search job stories..." />
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link">Sign out</a>
              </li>
            </ul>
          </nav>
          <div className="container-fluid">
            <div className="row">
              <SideBar data={this.state.productData} />
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <h2>Job Stories</h2>
                <JobStoryList data={this.state.renderedJobStoryList} setParentState={this.setState} getParentState={this.getState} />
              </main>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(App);
