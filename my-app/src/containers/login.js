import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";
import FormItem from 'antd/lib/form/FormItem';
import { Container } from 'reactstrap'
import serverURL from '../rootconfig'




class login extends Component {


    getDataFromForm = (e) => {
        let name = e.target.name;
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    handelLogin = (e) => {
        e.preventDefault();
        axios.post(serverURL + `/auth/login`, {
            username: this.state.username,
            password: this.state.password
        }, {
                validateStatus: (status) => {
                    return status >= 200 && status < 500
                }
            }
        )
            .then(response => {
                this.setState({ data: response.data })
                //console.log(this.state)
                if (response.data.success === 1) {
                    this.props.history.push("/home")
                }
                else {
                    alert("SAI TAI KHOAN")
                }
            })
            .catch(err => console.error(err))
    }


    render() {
        return (
            <div className="login">
                <Container>
                    <Form onSubmit={this.handelLogin}>
                        <h2>LOGIN PAGE</h2>
                        <FormItem>
                            Account <Input name="username" autoFocus type="text" onChange={this.getDataFromForm} />
                        </FormItem>
                        <FormItem>
                            Password <Input name="password" autoFocus type="Password" onChange={this.getDataFromForm} />
                        </FormItem>
                        <FormItem>
                            <Button type="primary" className="myButton" htmlType="submit">
                                Login
                            </Button>
                        </FormItem>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default login;