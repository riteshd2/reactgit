import React, {Component} from "react";
import { Container,Header,Button,Grid,Label,Placeholder,Segment, Card, Image,Form, Table, Flag } from 'semantic-ui-react';
import axios from "axios";


class Quotes extends Component{
    constructor(props){
        super(props);
        
    }
    state = {
        data:[], 
        loader:[1,2,3,4,5,6,7], 
        ribbon:['red','orange','yellow','olive','green','teal','blue','violet','purple','pink','brown','grey','black']
    };
    
    componentDidMount() {
        let self = this;
        axios({
            "method":"GET",
            "url":"https://type.fit/api/quotes",
            
            })
            .then((response)=>{
                self.setState(
                    {data : response.data}
                );
              console.log(response)
            })
            .catch((error)=>{
              console.log(error)
            })
      }
  handleChange = (e, { value }) => this.setState({ value }) 
    render(){
        return (
            <Container>
                <Header as='h2' color="yellow" icon='plug' content='Popular Quotes' />
                <Card.Group>
                    
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

                    {this.state.data.map((quote) => (
                    <Card fluid>
                        <Segment>
                        <Label as='a' color={this.state.ribbon[Math.floor(Math.random() * this.state.ribbon.length)]} ribbon='left'>
                        {(quote.author)?quote.author:'Unknown'}
                        </Label>
                    <Card.Content>
                    <Card.Header style={{padding:'15px', fontSize:'20px'}}>{quote.text}</Card.Header>
{/*                         
                        <Card.Description>
                        </Card.Description>
                    <Card.Meta>{quote.author}</Card.Meta> */}
                    </Card.Content>
                    </Segment>
                    </Card>
                    ))                    
                    }


                   
                </Card.Group>
                
            
            </Container>
        )
    }
}

export default Quotes;