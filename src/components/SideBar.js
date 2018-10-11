import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class SideBar extends Component {
    render () {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        {this.props.data.products.map(product => (
                            <li className="nav-item">
                                <NavLink to={'/product/' + product.key} activeClassName="selected">{product.title}</NavLink>
                                <ul>
                                    {product.usertypes.map(usertype => (
                                        <li className="nav-item">
                                            <NavLink to={'/usertype/' + usertype.key} activeClassName="selected">{usertype.title}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default SideBar;