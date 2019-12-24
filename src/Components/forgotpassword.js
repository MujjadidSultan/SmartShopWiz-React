import React, { Component, Fragment } from 'react'
import { sendemail } from './UserFunctions';
import './login.css';
import { MDBBtn, MDBAlert } from "mdbreact";

class ForgotPassword extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            errors: {},
            error: '',
            notfound: '',
            failed: '',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }

      onSubmit(e) {
        e.preventDefault()  
        const useremail = {
            email: this.state.email
        }

        sendemail(useremail).then(data => {
            //this.props.navigation.navigate('Code', {email : this.state.email})
            console.log(data)
           if (data === "User not found : " + this.state.email + "None")
            {
                this.setState({notfound: 'EMAIL NOT REGISTERED'})
            }

            else if (data === "Email failed to send")
            {
                this.setState({failed: 'Failed To Send Email. Please Try Again'})
            }

            else if (data === "Email sent successfully" )
            {
                localStorage.setItem('pemail',this.state.email)
                this.props.history.push(`/code`)               
            }

          })
          .catch(err => {
            console.log(err)
          })
      }

    render(){
        const {failed, notfound} = this.state;
        return(

            <body id="useStyles">
                 <div className="container" align="center">
                    <div style={jumbo}>
                        <center> 
                            <h1 style={hv}>Smart ShopWiz </h1>
                            <h3>Forgot Password</h3>
                        </center>
                    </div>

                    <br/><br/>
                    
                    <label>Email address</label> &nbsp;
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        onChange={this.onChange}
                        style={f}/>
                         
                    <br/><br/>

                    <Fragment>
                        <MDBBtn type="submit" gradient="blue"
                        onClick= {this.onSubmit}>Next</MDBBtn>
                    </Fragment>

                    {failed !== '' && 
                  <MDBAlert color="primary" >
                    { failed }
                </MDBAlert>}

                {notfound !== '' && 
                  <MDBAlert color="primary" >
                    { notfound }
                </MDBAlert>}
                    
                    {/*<button
                        type="submit" 
                        className="button button2" 
                        onClick= {this.onSubmit}>Enter
                    </button>*/}
                 </div>

            {/*<div class="container-fluid" align="center">
            <nav class="navbar navbar-default" style={nav}>
            
                <div class="jumbotron" style={jumbo}>
                 <center> 
                     <h1 style={hv}>Smart ShopWiz </h1>
                     <h3>Forgot Password</h3>
                </center>
                </div>
            </nav>*/}
            <br/>
        </body>
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

/*const x = {
    backgroundColor: '#4ABAE2',
    width:100,
    height:50,
    borderRadius:12,
    color: '#FFFFFF'
}*/

const f = {
    width:200
}
export default ForgotPassword