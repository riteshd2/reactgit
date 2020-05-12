import React, {Component} from "react";
import { Container,Header,Button, Card, Image,Form, Checkbox } from 'semantic-ui-react';

class Exam extends Component{
    state = {}
  handleChange = (e, { value }) => this.setState({ value }) 
    render(){
        return (
            <Container>
                <Header as='h2' icon='plug' content='Exam' />
                <Form>
                <Card.Group>
                    <Card fluid>
                    <Card.Content>
                        <Card.Header>What is the capital of India?</Card.Header>
                        {/* <Card.Meta>Friends of Elliot</Card.Meta> */}
                        <Card.Description>
                        <Form.Field>
                            <Checkbox
                                radio
                                label='Choose this'
                                name='checkboxRadioGroup'
                                value='this'
                                checked={this.state.value === 'this'}
                                onChange={this.handleChange}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Checkbox
                                radio
                                label='Or that'
                                name='checkboxRadioGroup'
                                value='that'
                                checked={this.state.value === 'that'}
                                onChange={this.handleChange}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Checkbox
                                radio
                                label='Or that'
                                name='checkboxRadioGroup'
                                value='that'
                                checked={this.state.value === 'that'}
                                onChange={this.handleChange}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Checkbox
                                radio
                                label='Or that'
                                name='checkboxRadioGroup'
                                value='that'
                                checked={this.state.value === 'that'}
                                onChange={this.handleChange}
                            />
                            </Form.Field> 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color="blue">
                            Previous
                        </Button>
                        
                        <Button basic color="blue">
                            Next
                        </Button>
                        </div>
                    </Card.Content>
                    </Card>
                </Card.Group>
                </Form>
            
            </Container>
        )
    }
}

export default Exam;