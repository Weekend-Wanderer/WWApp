import React, { Component } from 'react';
import { Alert, Navbar,FormGroup,FormControl,Button, Well } from 'react-bootstrap';

class SearchZip1 extends Component {
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
                            <Button type="submit" onClick={this.props.buttonhandle}>Search Zipcode</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

export  {SearchZip1};
