import React, { Component } from 'react'
import { updateemployee, getemployeebyemail } from './UserFunctions';
import SideBar from './sidebar';
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

class UpdateEmployees extends Component {
  constructor(props) {
    super(props)
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
      lists:{},
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
 
  }
  componentDidMount() {
    const email = localStorage.upemail
    console.log(email);

    getemployeebyemail(email).then(data => {
      this.setState({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phonenumber: data.phonenumber,
      age: data.age,
      gender: data.gender,
      houseno: data.address.houseno,
      streetno: data.address.streetno,
      area: data.address.area,
      city: data.address.city,
      cnic: data.cnic
    })})

    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }  
  onSubmit(e){
    e.preventDefault()
    const updateemp = {
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
  
      updateemployee(updateemp).then(res => {
        localStorage.removeItem('upemail')
        this.props.history.push(`/viewemployees`)
      })
       
  }

  dashboard = () => {this.props.history.push("/dashboard");}
  
  logout = () => {
    localStorage.removeItem('jwtToken');
    logout().then().catch()
    this.props.history.push("/login");
  }

  render() {

    //const { lists } = this.state;
    return (
        <div>
          <nav /*style={nav}*/>
          <SideBar/>
              <div style={jumbo}>
                <center> 
                    <h1 style={hv}>Smart ShopWiz </h1>
                    <h3>Update Profile!!!</h3>
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
              <img src={l} class="img-fluid" alt="placeholder" width="1518"/>
              <div class="mask flex-center rgba-blue-light">

                <div className="col-md-6 mt-5 mx-auto" align="center">
                  <form noValidate onSubmit={this.onSubmit}>
                    <table style={tbl}>
                    {/*{lists.map(list =>*/}
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
                          <td>Phone Number</td>
                          <td><input
                            id="4"
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
                            id="5"
                            type="text"
                            className="form-control"
                            name="age"
                            value={this.state.age}
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
                            onChange={this.onChange}
                          /></td>
                        </tr>
                        <tr>
                          <td>Street #</td>
                          <td><input id="8"
                            type="text"
                            className="form-control"
                            name="streetno"
                            value={this.state.streetno}
                            onChange={this.onChange}
                          /></td>
                        </tr>
                        <tr>
                          <td>Area</td>
                          <td><input id="9"
                            type="text"
                            className="form-control"
                            name="area"
                            value={this.state.area}
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
                            onChange={this.onChange}
                          /></td>
                        </tr>
                        <tr>
                          <td>CNIC</td>
                          <td><input id="11"
                            type="text"
                            className="form-control"
                            name="cnic"
                            value={this.state.cnic}
                            onChange={this.onChange}
                          /></td>
                        </tr>
                        
                      </tbody>
                      </table>
                      <br/>
                      <button
                          type='submit'
                          className="button button2" 
                          style={m}
                          onClick={this.onSubmit}> Save Changes
                      </button>
                  </form>
                </div>
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

  const m ={
    backgroundColor:  'rgb(31, 126, 204)',
    width:150,
    height:50,
    fontSize: 20,
    color: '#FFFFFF',
    border: 'rgb(31, 126, 204)'
  }

  const tbl = {
    outline:'solid',
    marginTop: -100,
    width: 600
  }

export default UpdateEmployees
