import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Detail = props => (
    <tr>
        <td>{props.detail.username}</td>
        <td>{props.detail.name}</td>
        <td>{props.detail.nic}</td>
        <td>{props.detail.age}</td>
        <td>{props.detail.vtype}</td>
        <td>{props.detail.vdosage}</td>
        <td>{props.detail.pnumber}</td>
        <td>{props.detail.district}</td>
        <td>{props.detail.division}</td>
        <td>{props.detail.grama}</td>
        <td>{props.detail.nearest}</td>


        <td>
            <Link to={"/edit/"+props.detail._id}>edit</Link> | <a href="#" onClick={() => { props.deleteDetail(props.detail._id) }}>delete</a>
        </td>
    </tr>
)

export default class DetailsList extends Component {
    constructor(props) {
        super(props);

        this.deleteDetail = this.deleteDetail.bind(this)

        this.state = {details: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/details/')
            .then(response => {
                this.setState({ details: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteDetail(id) {
        axios.delete('http://localhost:5000/details/'+id)
            .then(response => { console.log(response.data)});

        this.setState({
            details: this.state.details.filter(el => el._id !== id)
        })
    }

    detailList() {
        return this.state.details.map(currentdetail => {
            return <Detail detail={currentdetail} deleteDetail={this.deleteDetail} key={currentdetail._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Details</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Full Name</th>
                        <th>NIC</th>
                        <th>Age</th>
                        <th>Vaccine Type</th>
                        <th>Vaccine Dosage</th>
                        <th>Mobile Number</th>
                        <th>District</th>
                        <th>Division</th>
                        <th>Grama Niladhari</th>
                        <th>Nearest Location</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.detailList() }
                    </tbody>
                </table>
            </div>
        )
    }
}