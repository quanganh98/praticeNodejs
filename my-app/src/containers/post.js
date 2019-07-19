import React, { Component } from 'react'
import axios from 'axios'
import serverURL from '../rootconfig'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class post extends Component {

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

    getDataFromForm = (e) => {
        let name = e.target.name;
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    addNewGuest = (e) => {
        console.log(this.state)
        e.preventDefault();
        axios.post(serverURL + `/guest`, {
            account: this.state.account,
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
        return (
            <div className="App" >
                <h2>ADD NEW GUEST</h2>
                <form onSubmit={this.addNewGuest} className="addForm">
                    account:<br />
                    <input type="text" name="account" onChange={this.getDataFromForm} />
                    <br />
                    guestName:<br />
                    <input type="text" name="guestName" onChange={this.getDataFromForm} />
                    <br />
                    idNumber:<br />
                    <input type="number" name="idNumber" onChange={this.getDataFromForm} />
                    <br />
                    phoneNumber:<br />
                    <input type="text" name="phoneNumber" onChange={this.getDataFromForm} />
                    <br />
                    address:<br />
                    <input type="text" name="address" onChange={this.getDataFromForm} />
                    <br />
                    <input type="submit" value="Submit"/>
                    <Link to="/home">Home</Link>
                </form>
            </div>
        );
    }
}

export default post;
