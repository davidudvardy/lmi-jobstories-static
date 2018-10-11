import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null,
            products: this.props.data.products
        }
    }

    render () {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        {this.state.products.map(product => (
                            <li className="nav-item">
                                <Link to={'/product/' + product.key}>{product.title}</Link>
                                <ul>
                                    {product.usertypes.map(usertype => (
                                        <li className="nav-item">
                                            <Link to={'/usertype/' + usertype.key}>{usertype.title}</Link>
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