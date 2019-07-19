import React, { Component } from 'react'
import axios from 'axios';
import serverURL from '../rootconfig'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'antd';


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
                console.log(response);
                if (response.status === 200) {
                    this.props.history.push(`/detail/${this.state.guest._id}`)
                }
                else{
                    alert("Invalid data")
                }
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div className="App" >
                <h2>Update Guest have account {this.state.guest.account}</h2>
                <form onSubmit={this.updateGuest} className="addForm">
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
                    <input type="submit" value="Submit" /><br />
                    <Link to="/home">Home</Link>
                </form>
            </div>
        );
    }
}

export default edit;
