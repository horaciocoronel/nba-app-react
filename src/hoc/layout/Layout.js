import React, { Component } from 'react'
import './layout.css';

import Header from '../../components/header/Header';

class Layout extends Component {
    state = {

    }
    render(){
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )    
    }
}

export default Layout;