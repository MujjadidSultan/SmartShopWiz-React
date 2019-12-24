import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { update } from './UserFunctions';
import SideBar from './sidebar';
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

class Update extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phonenumber: '',
      age: '',
      gender: '',
      houseno: '',
      streetno: '',
      area: '',
      city: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.identity.first_name,
      last_name: decoded.identity.last_name,
      email: decoded.identity.email,
      phonenumber: decoded.identity.phonenumber,
      age: decoded.identity.age,
      gender: decoded.identity.gender,
      houseno: decoded.identity.address.houseno,
      streetno: decoded.identity.address.streetno,
      area: decoded.identity.address.area,
      city: decoded.identity.address.city,
      cnic: decoded.identity.cnic
    })
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }  
  
  onSubmit(e){
    e.preventDefault()
    const updateUser = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phonenumber: this.state.phonenumber,
        age: this.state.age,
        gender: this.state.gender,
        houseno: this.state.houseno,
        streetno: this.state.streetno,
        area: this.state.area,
        city: this.state.city,
        cnic: this.state.cnic
      }
  
      update(updateUser).then(res => {
        this.props.history.push(`/profile`)
      })
       
  }

  dashboard = () => {this.props.history.push("/dashboard");}

  logout = () => {
    localStorage.removeItem('jwtToken');
    logout().then().catch()
    this.props.history.push("/login");
  }

  render() {
    return (
        <div>
          <nav /*style={nav}*/>
          <SideBar/>
              <div style={jumbo}>
                <center> 
                    <h1 style={hv}>Smart ShopWiz </h1>
                    <h3>Your Profile!!!</h3> 
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
            <img src={l} class="img-fluid" alt="placeholder" width="1518" style={fff}/>
            <div class="mask flex-center rgba-blue-light">

              <form noValidate onSubmit={this.onSubmit} align="center">
                <table style={tbl}>
                  <tbody>
                    <tr>
                      <td>First Name</td>
                      <td><input
                        id="1"
                        type="text"
                        className="form-control"
                        name="first_name"
                        value={this.state.first_name}
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>Last Name</td>
                      <td><input
                        id="2"
                        type="text"
                        className="form-control"
                        name="last_name"
                        value={this.state.last_name}
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{this.state.email}</td>
                    </tr>
                    <tr>
                      <td>Phone Number</td>
                      <td><input
                        id="3"
                        type="text"
                        className="form-control"
                        name="phonenumber"
                        value={this.state.phonenumber}
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>Age</td>
                      <td><input
                        id="4"
                        type="text"
                        className="form-control"
                        name="age"
                        value={this.state.age}
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td><input id="5"
                        type="text"
                        className="form-control"
                        name="gender"
                        value={this.state.gender}
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>House #</td>
                      <td><input id="6"
                        type="text"
                        className="form-control"
                        name="houseno"
                        value={this.state.houseno}
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>Street #</td>
                      <td><input
                        id="1"
                        type="text"
                        className="form-control"
                        name="streetno"
                        value={this.state.streetno}
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td><input
                        id="1"
                        type="text"
                        className="form-control"
                        name="area"
                        value={this.state.area}
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td><input id="7"
                        type="text"
                        className="form-control"
                        name="city"
                        value={this.state.city}
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <br/>
                  </tbody>
                </table>
                <br/>
            
                <button
                  type='submit'
                  className="button button2"
                  style={n}> Update
                </button>
              
              </form>
              </div>
          </div>
        </div>
    
    )
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
    
  const n ={
    backgroundColor:  'rgb(31, 126, 204)',
    width:100,
    height:50,
    fontSize: 20,
    color: '#FFFFFF',
    border: 'rgb(31, 126, 204)'
  }

  const fff = {height:1200}

  const tbl = {
    color: 'white',
    outline:'solid',
    marginTop:-200,
    width: 600
  }

export default Update
