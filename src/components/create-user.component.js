import React, { Component } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';

toast.configure()

const notify = ()=>{

    // Calling toast method by passing string
    toast('New User Added ! ')
}

export default class CreateUsers extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            errorMessage: 'User is already existing'
        }
    }


    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data)).catch(err => console.log(err.data));

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Create New User</Card.Title>
                        </Card.Header>
                        <Card.Body>
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input  type="text"
                                placeholder="Enter your nic number"
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input  onClick={notify} type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                    {/*{ this.state.errorMessage &&*/}
                    {/*<h5 className="error"> { this.state.errorMessage } </h5> }*/}
                    <br></br>
                </form>
            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        )
    }
}