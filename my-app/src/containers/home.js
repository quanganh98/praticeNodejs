import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Container } from 'reactstrap';


class home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Container>
                    Add new guest <Link to="/post">here</Link><br />
                    View all guest <Link to="/viewAll">here</Link><br />
                </Container>
            </div>
        );
    }
}

export default home;
