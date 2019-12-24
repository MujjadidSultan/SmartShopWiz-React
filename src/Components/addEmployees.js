import React, { Component } from 'react'
import { addemployee } from './UserFunctions'
import SideBar from './sidebar';
import { MDBInput, MDBAlert } from "mdbreact";
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

class addEmployees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      employeeID: '',
      password: '',
      confirmpassword: '',
      phonenumber: '',
      age: '',
      gender: '',
      houseno: '',
      streetno: '',
      area: '',
      city: '',
      role: 'employee',
      cnic: '',
      status: 'active'
    }
   
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      employeeID: this.state.employeeID,
      password: this.state.password,
      confirmpassword: this.state.confirmpassword,
      phonenumber: this.state.phonenumber,
      age: this.state.age,
      gender: this.state.gender,
      houseno: this.state.houseno,
      streetno: this.state.streetno,
      area: this.state.area,
      city: this.state.city,
      role: this.state.role,
      cnic: this.state.cnic,
      status: this.state.status,
      message:''
    }

    addemployee(newUser).then(data => {
      if(data === "Already Registed!"){
        this.setState({ message:data });
      }
      else{
      //alert('Record Added Successfully')
      window.location.reload();
      }
    })
  }
  
  dashboard = () => {this.props.history.push("/dashboard");}

  logout = () => {
    localStorage.removeItem('jwtToken');
    logout().then().catch()
    this.props.history.push("/login");
  }

  render() {
    const {message} = this.state;
    return (
      <div>
        <nav /*style={nav}*/>
          <SideBar/>
              <div style={jumbo}>
                <center> 
                    <h1 style={hv}>Smart ShopWiz </h1>
                    <h3>Add an Employee!!!</h3>
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
            <img src={l} class="img-fluid" alt="placeholder" width="1518" style={{height:1200}}/>
            <div class="mask flex-center rgba-blue-light">
    
        <div className="col-md-6 mt-5 mx-auto" align="center">
          <form noValidate onSubmit={this.onSubmit}>
            <div className="form-group" style={ff}>
  
              <MDBInput label="First Name" type="text"
                  className="form-control"
                  style={{backgroundColor: 'white'}}
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.onChange} outline />

              <MDBInput label="Last Name" type="text"
                  className="form-control"
                  style={{backgroundColor: 'white'}}
                  name="last_name"
                  value={this.state.last_name}
                  onChange={this.onChange} outline />
              
              <MDBInput label="Email Address" type="text"
                  className="form-control"
                  style={{backgroundColor: 'white'}}
                  name="email" hint="something@something.com"
                  value={this.state.email}
                  onChange={this.onChange} outline />
              
            <MDBInput label="Employee ID" type="text"
                  className="form-control"
                  name="employeeID"
                  style={{backgroundColor: 'white'}}
                  value={this.state.employeeID}
                  onChange={this.onChange} outline />

              <MDBInput label="Password" type="password"
                  className="form-control"
                  name="password"
                  style={{backgroundColor: 'white'}}
                  value={this.state.password}
                  onChange={this.onChange} outline />

              <MDBInput label="Confirm Password" type="password"
                  className="form-control"
                  name="confirmpassword"
                  style={{backgroundColor: 'white'}}
                  value={this.state.confirmpassword}
                  onChange={this.onChange} outline />

              <MDBInput label="Phone #" type="text"
                  className="form-control"
                  style={{backgroundColor: 'white'}}
                  name="phonenumber" hint="11 digits"
                  value={this.state.phonenumber}
                  onChange={this.onChange} outline />

              <MDBInput label="Age" type="text"
                  className="form-control"
                  name="age"
                  style={{backgroundColor: 'white'}}
                  value={this.state.age}
                  onChange={this.onChange} outline />
                  
              <div style={{backgroundColor:  'white', color: 'black'}}>
                <label htmlFor="name" >Gender:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" name="gender" value="Male" onChange={this.onChange}/> Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" name="gender" value="Female" onChange={this.onChange}/> Female
              </div>

              <MDBInput label="House #" type="text"
                  className="form-control"
                  name="houseno"
                  style={{backgroundColor: 'white'}}
                  value={this.state.houseno}
                  onChange={this.onChange} outline />

              <MDBInput label="Street #" type="text"
                  className="form-control"
                  name="streetno"
                  style={{backgroundColor: 'white'}}
                  value={this.state.streetno}
                  onChange={this.onChange} outline />

              <MDBInput label="Area" type="text"
                  className="form-control"
                  name="area"
                  style={{backgroundColor: 'white'}}
                  value={this.state.area}
                  onChange={this.onChange} outline />

              <MDBInput label="City" type="text"
                  className="form-control"
                  name="city"
                  style={{backgroundColor: 'white'}}
                  value={this.state.city}
                  onChange={this.onChange} outline />

              <MDBInput label="CNIC" type="text"
                  className="form-control"
                  name="cnic" hint="13 digits"
                  style={{backgroundColor: 'white'}}
                  value={this.state.cnic}
                  onChange={this.onChange}  outline />

              {/* <br/>
              <label htmlFor="name">First Name:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.onChange}
              />
             
              <br/>
              <label htmlFor="name">Last Name:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              
              <br/>
              <label htmlFor="email">Email Address:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="email"
                  className="form-control"
                  placeholder="*@*.com"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />

              <br/>
              <label htmlFor="id">Employee ID:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  className="form-control"
                  name="employeeID"
                  value={this.state.employeeID}
                  onChange={this.onChange}
                />
              
              <br/>
              <label htmlFor="password">Password:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              
              <br/>
              <label htmlFor="password">Confirm Password:</label> &nbsp;
                <input
                  type="password"
                  className="form-control"
                  name="confirmpassword"
                  value={this.state.confirmpassword}
                  onChange={this.onChange}
                />
             
              <br/>
              <label htmlFor="name">Phone #:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  className="form-control"
                  placeholder="11 digits"
                  name="phonenumber"
                  value={this.state.phonenumber}
                  onChange={this.onChange}
                />
             
              <br/>
              <label htmlFor="name">Age:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  value={this.state.age}
                  onChange={this.onChange}
                />
              
              <br/><br/>
                <label htmlFor="name">Gender:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" name="gender" value="Male" onChange={this.onChange}/> Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" name="gender" value="Female" onChange={this.onChange}/> Female

              <br/><br/>
              <label htmlFor="name">House #:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text" 
                  className="form-control"
                  name="houseno"
                  value={this.state.houseno}
                  onChange={this.onChange}
                />

              <br/>
              <label htmlFor="name">Street #:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  className="form-control"
                  name="streetno"
                  value={this.state.streetno}
                  onChange={this.onChange}
                />

              <br/>
              <label htmlFor="name">Area:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  className="form-control"
                  name="area"
                  value={this.state.area}
                  onChange={this.onChange}
                />

              <br/>
              <label htmlFor="name">City:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={this.state.city}
                  onChange={this.onChange}
                />


              <br/>
              <label htmlFor="name">CNIC:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  className="form-control"
                  placeholder="13 digits"
                  name="cnic"
                  value={this.state.cnic}
                  onChange={this.onChange}
                />
              */}
            </div>

            {/* 
              {message !== '' &&
              <div class="alert alert-warning alert-dismissible" role="alert">
                { message }
              </div>}

              <button
                type="submit"
                className="button button2" 
                style={r}>Save
              </button> 
              <br/><br/>
            */}

            {/* {message !== '' &&
                  <div className="alert alert-warning alert-dismissible" role="alert"> <br/>
                    { message }
                </div> } */}

                {message !== '' && 
                  <MDBAlert color="primary" >
                    { message }
                </MDBAlert>}

              <button
                type="submit"
                className="button button2" 
                style={r}>Save
              </button> 
              <br/><br/>

          </form>
        </div>
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

const r ={
  backgroundColor:  'rgb(31, 126, 204)',
    width:100,
    height:50,
    fontSize: 20,
    color: '#FFFFFF',
    border: 'rgb(31, 126, 204)'
}

const ff = {
  color: 'white'
}
export default addEmployees
