import { render } from "@testing-library/react"
import React from "react"

export default class NavBarComponentNotLoggedIn extends React.Component{
    render(){
        return (<div>
            <div class="ui pointing menu">
            <div class="header item">
            Online Sweet Mart App
             </div>
              <a class="active item">
                  Home
                </a>
                <a class="item">
                 Messages
                 </a>
                <a class="item">
                Friends
                </a>
                <div class="right menu">
                <div class="item">
                <div class="ui transparent icon input">
                    <input type="text" placeholder="Search..."/>
                    <i class="search link icon"></i>
                        </div>
                    </div>
                    </div>
                    </div>
            </div>
        );
    }
}