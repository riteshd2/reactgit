import React, {Component} from "react";
import { Container,Header,Button,Grid,Rating,Icon,Placeholder,Segment, Card, Image,Form, Table, Flag,Menu } from 'semantic-ui-react';
import axios from "axios";


class Cocktail extends Component{
    constructor(props){
        super(props);
        
    }
    state = {
        data:[], 
        loader:[1,2,3,4,5,6,7], 
        ribbon:['red','orange','yellow','olive','green','teal','blue','violet','purple','pink','brown','grey','black'],
        activeItem:'Ordinary Drink',
        categories:[]
    };
    
    componentDidMount() {
        let self = this;
        this.category();
        this.loadData(self.state.activeItem);
        
        
      }
  handleChange = (e, { value }) => this.setState({ value });
  handleItemClick = (e, { name }) => {this.setState({ activeItem: name }); this.loadData(name)};
  loadData = ((category)=>{
      let self = this;
    axios({
        "method":"GET",
        "url":"https://the-cocktail-db.p.rapidapi.com/filter.php",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key":"713cd8f77bmsh9a5002439da72bbp1d520fjsnd2b28b8cfaab",
        "useQueryString":true
        },"params":{
        "c":category
        }
        })
        .then((response)=>{
            self.setState({
                data:response.data.drinks
            })
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
  })
  category = (() => {
      let self =this;
    axios({
        "method":"GET",
        "url":"https://the-cocktail-db.p.rapidapi.com/list.php",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key":"713cd8f77bmsh9a5002439da72bbp1d520fjsnd2b28b8cfaab",
        "useQueryString":true
        },"params":{
        "c":"list"
        }
        })
        .then((response)=>{
            self.setState(
                {categories: response.data.drinks}
            )
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
  });
    render(){
        const { activeItem } = this.state
        return (
            <Container>
                <Header as='h2' color="yellow" icon='plug' content='Cocktails' />
                <Menu text color="yellow">
                {this.state.categories.map((category) => (
                
                    <Menu.Item
                    color="red"
                    name={category.strCategory}
                    active={activeItem === category.strCategory}
                    onClick={this.handleItemClick}
                    style={{color:'#fff', padding:"0 10px", fontSize:"15px"}}
                    >
                    {category.strCategory}
                    </Menu.Item>

                
                ))}
                </Menu>
                <Card.Group>
                    
                {this.state.data.map((quote) => (
                <Card>
                    <Image src={quote.strDrinkThumb} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{quote.strDrink}</Card.Header>
                    {/* <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                        Matthew is a musician living in Nashville.
                    </Card.Description> */}
                    </Card.Content>
                    <Card.Content extra>
                    <Rating icon="heart" defaultRating={Math.floor(Math.random()* (5-1) + 1)} maxRating={5}  />
                    </Card.Content>
                </Card>
                ))                    
            }
                    {(this.state.data.length==0)?this.state.loader.map((load)=>(
                            <Card fluid>
                                <Card.Description>
                                    <Segment raised>
                                        <Placeholder>
                                        <Placeholder.Header image>
                                            <Placeholder.Line />
                                            <Placeholder.Line />
                                        </Placeholder.Header>          
                                        </Placeholder>
                                    </Segment>
                                    </Card.Description>
                                </Card>
                        )):''
                    }

                  


                   
                </Card.Group>
                
            
            </Container>
        )
    }
}

export default Cocktail;