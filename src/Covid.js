import React, {Component} from "react";
import { Container,Header,Button, Card, Placeholder,Segment,Image,Form, Table, Flag } from 'semantic-ui-react';
import axios from "axios";

const flagRenderer = (item) => <Flag name={item} />;
class Covid extends Component{
    constructor(props){
        super(props);
        this.state = {data:[],loader:[1,2,3,4,5,6,7], }
    }
    
    componentDidMount() {
        axios({
        "method":"GET",
        "url":"https://coronavirus-tracker-india-covid-19.p.rapidapi.com/api/getStatewiseSorted",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"coronavirus-tracker-india-covid-19.p.rapidapi.com",
        "x-rapidapi-key":"713cd8f77bmsh9a5002439da72bbp1d520fjsnd2b28b8cfaab",
        "useQueryString":true
        }
        })
        .then((response)=>{
            
            this.setState({data:response.data});
        })
        .catch((error)=>{
            console.log(error)
        })
    }
   
  handleChange = (e, { value }) => this.setState({ value }) 
    render(){
        return (
            <Container>
                <Header as='h2' color="yellow" icon='plug' content='COVID 19' />
                
                <Card.Group>
                    <Card fluid>
                    <Card.Content>
                        <Card.Header>Covid-19 Stats by States</Card.Header>
                        {/* <Card.Meta>Friends of Elliot</Card.Meta> */}
                        <Card.Description>
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
                        { (this.state.data.length>0)?
                        <Table striped color="olive"  celled selectable>
                            <Table.Header>
                            <Table.Row>
                                {/* <Table.HeaderCell>Flag</Table.HeaderCell> */}
                                
                                <Table.HeaderCell>State</Table.HeaderCell>
                                <Table.HeaderCell><Header as='h4' color='orange'>Confirmed</Header></Table.HeaderCell>
                                
                                <Table.HeaderCell><Header as='h4' color='green'>Recovered</Header></Table.HeaderCell>
                                <Table.HeaderCell><Header as='h4' color='red'>Deaths</Header></Table.HeaderCell>
                            </Table.Row>
                            </Table.Header>
                            <Table.Body>
                            
                            {this.state.data.map((res) => (
                                <Table.Row key={res.name}>
                                
                                <Table.Cell><Header as='h4'>{res.name}</Header></Table.Cell>
                                <Table.Cell><Header as='h4' color="orange">{res.cases}</Header></Table.Cell>
                                
                                <Table.Cell><Header as='h4' color="green">{res.recovered}</Header></Table.Cell>
                                <Table.Cell><Header as='h4' color="red">{res.deaths}</Header></Table.Cell>
                                </Table.Row>
                            ))}
                            </Table.Body>
                        </Table>
                        : '' }
                        </Card.Description>
                    </Card.Content>
                   
                    </Card>
                </Card.Group>
                
            
            </Container>
        )
    }
}

export default Covid;