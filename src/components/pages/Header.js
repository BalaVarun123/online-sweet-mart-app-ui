import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div class="ui horizontal divider">
                <div class="list-group-item list-group-item-success">
                    <h1 class="ui teal tag label" > <i class="handshake outline icon"></i>
                        {this.props.title}</h1>
                </div>
            </div>
        )
    }
}

export default Header
