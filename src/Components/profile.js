import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import SideBar from './sidebar';
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      employeeID: '',
      phonenumber: '',
      age: '',
      gender: '',
      houseno: '',
      streetno: '',
      area: '',
      city: '',
      role: '',
      cnic: '',
      status: '',
      lists:[],
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
      employeeID: decoded.identity.employeeID,
      phonenumber: decoded.identity.phonenumber,
      age: decoded.identity.age,
      gender: decoded.identity.gender,
      houseno: decoded.identity.address.houseno,
      streetno: decoded.identity.address.streetno,
      area: decoded.identity.address.area,
      city: decoded.identity.city,
      cnic: decoded.identity.cnic,
      hiring_date: decoded.identity.hiring_date,
      status: decoded.identity.status
    })
  }
   /* getProfile()
    .then(data => {this.setState({lists: data}) }
    )}*/

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }  
  onSubmit(e){
    e.preventDefault()
    this.props.history.push(`/update`)
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
     
              <form noValidate onSubmit={this.onSubmit}>
                <table  style={tbl}>
                  <tbody>
                    <tr>
                      <td style={{width:120}}>First Name</td>
                      <td><input
                        id="1"
                        type="text"
                        className="form-control"
                        name="first_name"
                        value={this.state.first_name}
                        readOnly="true"
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
                        readOnly="true"
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{this.state.email}</td>
                    </tr>
                    <tr>
                      <td>Employee ID</td>
                      <td><input
                        id="3"
                        type="text"
                        className="form-control"
                        name="employee ID"
                        value={this.state.employeeID}
                        readOnly="true"
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>Phone Number</td>
                      <td><input
                        id="4"
                        type="text"
                        className="form-control"
                        name="phonenumber"
                        value={this.state.phonenumber}
                        readOnly="true"
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>Age</td>
                      <td><input
                        id="5"
                        type="text"
                        className="form-control"
                        name="age"
                        value={this.state.age}
                        readOnly="true"
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td><input id="6"
                        type="text"
                        className="form-control"
                        name="gender"
                        value={this.state.gender}
                        readOnly="true"
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>House #</td>
                      <td><input id="7"
                        type="text"
                        className="form-control"
                        name="houseno"
                        value={this.state.houseno}
                        readOnly="true"
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>Street #</td>
                      <td><input
                        id="8"
                        type="text"
                        className="form-control"
                        name="streetno"
                        value={this.state.streetno}
                        readOnly="true"
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td><input
                        id="9"
                        type="text"
                        className="form-control"
                        name="area"
                        value={this.state.area}
                        readOnly="true"
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td><input id="10"
                        type="text"
                        className="form-control"
                        name="city"
                        value={this.state.city}
                        readOnly="true"
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>CNIC</td>
                      <td><input
                        id="11"
                        type="text"
                        className="form-control"
                        name="cnic"
                        value={this.state.cnic}
                        readOnly="true"
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td><input
                        id="12"
                        type="text"
                        className="form-control"
                        name="status"
                        value={this.state.status}
                        readOnly="true"
                        onChange={this.onChange}
                      /></td>
                    </tr>
                    <br/>

                    <tr>
                    <button
                    type='submit'
                    className="button button2" 
                    style={n}> Update
                </button>
                    </tr>
                    <br/>
                    
                  </tbody>
                </table>
                <br/>
                    
                
              
              </form>
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

  const n ={
    backgroundColor:  'rgb(31, 126, 204)',
    width:100,
    height:50,
    fontSize: 20,
    color: '#FFFFFF',
    border: 'rgb(31, 126, 204)',
    marginLeft: 210
  }

  const tbl = {
    color: 'white',
    outline:'solid',
    marginTop:50,
    width: 600
  }

  const fff = {height:1200}

export default Profile
