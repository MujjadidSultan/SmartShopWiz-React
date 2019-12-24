import React, { Component, Fragment } from 'react';
import { login } from './UserFunctions';
import './login.css';
import { MDBBtn, MDBAlert, MDBInput } from "mdbreact";

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      message:'',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function (event){
        window.history.pushState(null, document.title,  window.location.href);
    });
}

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(data => {
      if(data === "Invalid username and password"){
        this.setState({ message:data });
    }
      else if(data ==="No results found"){
        this.setState({ message:data });
    }
      else
      {
        //localStorage.setItem("token",data);
        this.props.history.push(`/dashboard`);
      }
        
    })
  }

  render() {
    const {message} = this.state;
    return (
        <body id="useStyles"><br/><br/><br/><br/> 
          <div className="container" align="center">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                  <h1 className="h3 mb-3 font-weight-normal">Log In</h1>
                  <div className="imgcontainer">
                    <img src="https://d3fic6bj5pagcw.cloudfront.net/skin/frontend/blacknwhite/default/images/userIcon.png" alt="Avatar" 
                    class="avatar" style={im}></img>
                  </div>
                  <br/>
                  
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onChange}
                      style={f}/>
                    
                    {/*<MDBInput hint="Enter Email" type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange} 
                    outline size="lg" style={gor} />*/}
                  </div> 
                  <br/>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onChange}
                      style={f}/>
                  </div>
                  <br/>
                  
                  <Fragment>
                    <MDBBtn type="submit" gradient="blue">Login</MDBBtn>
                  </Fragment>

                  {/*<button
                    type="submit"
                    className="button button2"> Log In
                  </button> */}
                  
                 {/* {message !== '' &&
                  <div className="alert alert-warning alert-dismissible" role="alert"> <br/>
                    { message }
                </div> } */}

                {message !== '' && 
                  <MDBAlert color="primary" >
                    { message }
                </MDBAlert>}

                </form>
                
                <a href="/forgotpassword" style={gor}>Forgot Password?</a>
                
            </div>
          </div>
        </div>
      </body>
    
    )
  }
}

const im = {
    /*img src="https://png.pngtree.com/svg/20161229/e7a5cf5c9e.svg"*/
    
    width: 150,
    borderRadius: 50
}

/*const b = {
    backgroundColor: '#4ABAE2',
    width:100,
    height:50,
    color:'#FFFFFF'
} (for Login button) */

const gor = {
  color: "#FFFFFF"
}

const f ={
  width:200
}
export default Login
