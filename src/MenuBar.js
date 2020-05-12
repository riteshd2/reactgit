import React, {Component} from "react";
import { Container,Header,Button,Grid,Label,Icon,Placeholder,Segment, Card, Image,Form, Table, Flag,Menu } from 'semantic-ui-react';
import axios from "axios";

import {
    Link,

  } from "react-router-dom";
  

class MenuBar extends Component{
    constructor(props){
        super(props);
        
    }
    state = {
        menu : [
            {menu:'cocktail',label:'Cocktail'},
            {menu:'quotes',label:'Quotes'},
            {menu:'covid',label:'Covid19'},
            
        ],
        activeItem:'',
    }
    
    handleItemClick = (e, { name }) => {this.setState({ activeItem: name });};
    render(){
        const { activeItem } = this.state
        return (
            <Container>
                <Menu>
                {this.state.menu.map((menu) => (
                
                    <Menu.Item
                    name={menu.menu}
                    active={activeItem === menu.menu}
                    onClick={<Link to="/">Home</Link>}
                    
                    >
                    {menu.label}
                    </Menu.Item>

                
                ))}
                </Menu>
                
            </Container>
        )
    }
}

export default MenuBar;