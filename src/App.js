import React, { Component } from 'react';
import Card from './Card/Card'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Job Stories</a>
          <input className="form-control form-control-dark w-100" type="text" placeholder="Search" />
        </nav>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">Product</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Category</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Category</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Category</a>
                  </li>
                </ul>
              </div>
            </nav>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <h2>Job Stories</h2>
              <Card/>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
