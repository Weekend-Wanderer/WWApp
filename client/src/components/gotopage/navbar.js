import React, { Component } from 'react';
import { Alert, Navbar,FormGroup,FormControl,Button, Well } from 'react-bootstrap';

class SearchZip extends Component {
    render(){
        return (
            <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            My Zipcode:
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl type="text" onChange={this.props.handleinput} placeholder="Search Zipcode" value={this.props.searchzipcode} />
                            </FormGroup>{' '}
                            <Button type="submit" onClick={(event)=>this.props.buttonhandle(event)}>Search Zipcode</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

export {SearchZip};
