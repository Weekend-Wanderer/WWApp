import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';

class Wrapper extends React.Component {
render(){
  return (
    <Grid className="container-fluid">
        <Row className="container-fluid">
            <Col xs={12} md={12}>
                {this.props.children}
            </Col>
        </Row>
    </Grid>
    );
}
}

export {Wrapper};