import React, { Component } from 'react'
import axios from 'axios';
import serverURL from '../rootconfig'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guest: {}
        }
    }
    componentDidMount() {
        axios.get(serverURL + `/guest/${this.props.match.params.id}`)
            .then(data => {
                if (data.data) {
                    this.setState({ guest: data.data })
                }
            })
            .catch(err => console.log(err))
    }

    getDataFromForm = (e) => {
        let name = e.target.name;
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    updateGuest = (e) => {
        e.preventDefault();
        axios.put(serverURL + `/guest/${this.props.match.params.id}`, {
            guestName: this.state.guestName,
            idNumber: this.state.idNumber,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address
        }, {
                validateStatus: (status) => {
                    return status >= 200 && status < 500
                }
            }
        )
            .then(response => {
                this.setState({ data: response.data })
            })
            .catch(err => console.error(err))
    }

    render() {
        console.log(this.state)
        return (
            <div className="App" >
                <h2>Detail Guest</h2>
                <ul>
                    <li>account: {this.state.guest.account}</li>
                    <li>guest name: {this.state.guest.guestName}</li>
                    <li>id: {this.state.guest.idNumber}</li>
                    <li>phone: {this.state.guest.phoneNumber}</li>
                    <li>address: {this.state.guest.address}</li>
                </ul>
                <Link to ={`/edit/${this.state.guest._id}`}>Update</Link><br/>
                <Link to="/home">Home</Link>
            </div>
        );
    }
}

export default edit;
