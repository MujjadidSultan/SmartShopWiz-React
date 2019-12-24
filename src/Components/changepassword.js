import React, { Component } from 'react'
import { changepassword } from './UserFunctions';
import SideBar from './sidebar';
import l from '../images/l.jpg';
import {logout} from './UserFunctions'

class ChangePassword extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      newpassword: '',
      newconfirmpassword: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }  
  onSubmit(e){
    e.preventDefault()
    const changepasswordUser = {
        email: this.state.email,
        password: this.state.password,
        newpassword: this.state.newpassword,
        newconfirmpassword: this.state.newconfirmpassword
      }
  
      changepassword(changepasswordUser).then(data => {
        if(data === "Password Not Changed"){
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
    return (
        <div>
          <nav /*style={nav}*/>
            <SideBar/>
              <div style={jumbo}>
                <center> 
                    <h1 style={hv}>Smart ShopWiz </h1>
                    <h3>Change Password!</h3> 
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
        
              <div className="row" align="center">
                <div className="col-md-6 mt-5 mx-auto">
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <br/>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.onChange}
                        style={f}/>
                    </div>
                    <div className="form-group">
                    <br/>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.onChange}
                        style={f1}/>
                    </div>
                    <div className="form-group">
                    <br/>
                      <input
                        type="password"
                        className="form-control"
                        name="newpassword"
                        placeholder="Enter New Password"
                        value={this.state.newpassword}
                        onChange={this.onChange}
                        style={f2}/>
                    </div>
                    <div className="form-group">
                    <br/>
                      <input
                        type="password"
                        className="form-control"
                        name="newconfirmpassword"
                        placeholder="Re-Enter New Password"
                        value={this.state.newconfirmpassword}
                        onChange={this.onChange}
                        style={f3}/>
                    </div>
                    
                    <button
                      type="submit"
                      className="button button2"
                      style={w}>Change Password
                    </button>
                  </form>
                </div>
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
  
  const w ={
    fontSize:20,
    width:180,
    height:50,
    backgroundColor:  'rgb(31, 126, 204)',
    fontSize: 20,
    color: '#FFFFFF',
    border: 'rgb(31, 126, 204)',
    marginLeft: -45,
    marginTop: -850
  }

  const f ={
    width: 200,
    marginTop: -350,
    marginLeft: -50
  }

  const f1 ={
    width: 200,
    marginTop: -300,
    marginLeft: -50
  }

  const f2 ={
    width: 200,
    marginTop: -250,
    marginLeft: -50
  }

  const f3 ={
    width: 200,
    marginTop: -200,
    marginLeft: -50
  }

  

export default ChangePassword