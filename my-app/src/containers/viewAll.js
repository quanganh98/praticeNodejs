import React, { Component } from 'react'
import axios from 'axios';
import serverURL from '../rootconfig';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from 'reactstrap'


class edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listGuest: [{}]
        }
    }

    componentDidMount() {
        axios.get(serverURL + `/guest`)
            .then(data => {
                if (data.data) {
                    this.setState({ listGuest: data.data })
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        const listGuest = this.state.listGuest.map((guest) =>
            <div className="detailGuest">
                <ul>
                    <li>account: {guest.account}</li>
                    <li>guest name: {guest.guestName}</li>
                    <Link to={`/detail/${guest._id}`}>Detail</Link>
                </ul>
            </div>
        );

        return (
            <Container>
                <div>
                    <div className="listGuest">
                        {listGuest}
                    </div>
                    <div className="footer">
                        Back to <Link to="/home">Home</Link>
                    </div>
                </div>
            </Container>
        );
    }
}

export default edit;
