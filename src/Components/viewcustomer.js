import React, { Component } from 'react'
import { customer_list } from './UserFunctions'
import SideBar from './sidebar';
import './dashboard.css';
import './viewcustomer.css';
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

class ViewCustomer extends Component {
    constructor(props){
        super(props);

        this.state = {
          lists:[],
          errors: {},
          selected: {}
        }

    }

   componentDidMount() {
      customer_list()
      .then(data => {this.setState({lists: data}) 
    },
    )}

    dashboard = () => {this.props.history.push("/dashboard");}
    
    logout = () => {
      localStorage.removeItem('jwtToken');
      logout().then().catch()
      this.props.history.push("/login");
    }
    
  render() {

    const { lists } = this.state;
    
    return (
        <div>
            <nav /*style={nav}*/>
              <SideBar/>
                  <div style={jumbo}>
                    <center> 
                        <h1 style={hv}>Smart ShopWiz </h1>
                        <h3>List of Customers!!!</h3>
                    </center>
                    <button className="button button2" style={bb} 
                        onClick={this.dashboard}>Dashboard
                    </button><br/>
                    <button className="button button2" style={b} 
                            onClick={this.logout}>Logout
                    </button>
                  </div>
            </nav>
            
            <div class="view">
              <img src={l} class="img-fluid" alt="placeholder" width="1518" style={mm}/>
              <div class="mask flex-center rgba-blue-light">
                <table width="95%" style={tbl}>
                  <tr>
                    <div class="table-header-class">
                        <table width="100%" align="center">
                          <thead>
                              <tr>
                                <th height="50px" style={{width:110}}>First Name</th>
                                <th style={{width:110}}>Last Name</th>
                                <th style={{width:130}}>Phone Number</th>
                                <th style={{width:50}}>House No</th>
                                <th style={{width:50}}>Street No</th>
                                <th style={{width:110}}>Area</th>
                                <th style={{width:130}}>City</th>
                                <th style={{width:50}}>Age</th>
                                <th style={{width:100}}>Gender</th>
                                <th>Username</th>
                                <th>Email Address</th>
                              </tr>
                          </thead>
                        </table>
                    </div></tr>

                  <tr>
                  <div class="table-content-class">
                    <table width="100%" align="center">
                        <tbody>
          
                            {lists.map(list =>
                            
                            <tr muID={list.Id} selected={this.state.selected[list.Id]} >
                                <td style={{width:109}}> {list.first_name} </td>
                                <td style={{width:111}}> {list.last_name} </td>
                                <td style={{width:130}}> {list.phonenumber} </td>
                                <td style={{width:74}}> {list.address.houseno} </td>
                                <td style={{width:50}}> {list.address.streetno} </td>
                                <td style={{width:110}}> {list.address.area} </td>
                                <td style={{width:130}}> {list.address.city} </td>
                                <td style={{width:56}}> {list.age} </td>
                                <td style={{width:100}}> {list.gender} </td>
                                <td style={{width:244}}> {list.username} </td>
                                <td> {list.email} </td>
                            </tr> 
                            )}
                        </tbody> 
                    </table>
                  </div></tr>
                </table>

               {/*} <table class="readtab" align="center" border="1" width="95%" style={tbl}>
                  <thead>
                    <tr>
                      <th height="50px">First Name</th>
                      <th>Last Name</th>
                      <th>Phone Number</th>
                      <th>House No</th>
                      <th>Street No</th>
                      <th>Area</th>
                      <th>City</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Username</th>
                      <th>Email Address</th>
                    </tr>
                  </thead>
                
                  <tbody>
          
                      {lists.map(list =>
                      
                      <tr muID={list.Id} selected={this.state.selected[list.Id]} >
                          <td> {list.first_name} </td>
                          <td> {list.last_name} </td>
                          <td> {list.phonenumber} </td>
                          <td> {list.address.houseno} </td>
                          <td> {list.address.streetno} </td>
                          <td> {list.address.area} </td>
                          <td> {list.address.city} </td>
                          <td> {list.age} </td>
                          <td> {list.gender} </td>
                          <td> {list.username} </td>
                          <td> {list.email} </td>
                      </tr> 
                      )}
                  </tbody> 
                      </table>*/}
              </div>
          </div>
        </div>
    );
  }
}


const jumbo = {
    paddingBottom: 20,
    paddingTop: 20,
    /*backgroundColor: '#4ABAE2',*/
    color: '#FFFFFF'
}

/*const nav = {
  backgroundColor: '#4ABAE2',
  borderColor: '#4ABAE2',
  height: 200
}*/

const hv = {
  fontSize: 40
}

const b = {
  backgroundColor:  'rgb(31, 126, 204)',
  width:100,
  height:50,
  fontSize: 20,
  color: '#FFFFFF',
  float:'right',
  marginRight: 80,
  marginTop: -90,
  border: 'rgb(31, 126, 204)'
}

const bb = {
  backgroundColor:  'rgb(109, 191, 209)',
  width:110,
  height:50,
  fontSize: 20,
  color: '#FFFFFF',
  float:'left',
  marginLeft: 200,
  marginTop: -65,
  border: 'rgb(31, 126, 204)'
}

const tbl = {
  outline:'solid',
  marginTop: -550
}

const mm = {height:1500}

export default ViewCustomer
