import React, { Component, Fragment } from 'react'
import { updatepassword } from './UserFunctions';
import { MDBBtn, MDBAlert } from "mdbreact";

class Password extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            newpassword: '',
            confirm:'',
            errors: {},
            error: '',
            message:'',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        const v = localStorage.pemail
        console.log(v)
        this.setState({email:v,newpassword: '',confirm:''})
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }

      onSubmit(e) {
        e.preventDefault()  
        const userpass = {
            email: this.state.email,
            newpassword: this.state.newpassword,
            confirm: this.state.confirm
        }
        console.log(userpass)
        updatepassword(userpass).then(data => {
            console.log(data)
            if (data === "Incorrect code") {
                this.setState({ message:data });
            }

            else {
            // this.setState({incorrecterr: null})
            localStorage.removeItem('pemail');
            this.props.history.push(`/login`)
            }
        }).catch (err => {
            console.log(err)
        })
      }

    render(){
        const {message} = this.state;
        return(
            <body id="useStyles">
                <div className="container" align="center">
                    <div style={jumbo}>
                        <center> 
                            <h1 style={hv}>Smart ShopWiz </h1>
                            <h3>New Password</h3>
                        </center>
                    </div>
                    <br/>
                    <label>New Password</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        type="password"
                        className="form-control"
                        name="newpassword"
                        value={this.state.newpassword}
                        onChange={this.onChange}
                        style={f}/>
                        
                        <br/><br/>
                    <label>Re-Enter Password</label> &nbsp;&nbsp;&nbsp;
                    <input
                        type="password"
                        className="form-control"
                        name="confirm"
                        value={this.state.confirm}
                        onChange={this.onChange}
                        style={f}/>
                        
                    <br/><br/><br/>

                    <Fragment>
                        <MDBBtn type="submit" gradient="blue"
                        onClick= {this.onSubmit}>Save</MDBBtn>
                    </Fragment>

                    {message !== '' && 
                  <MDBAlert color="primary" >
                    { message }
                </MDBAlert>}
                    {/*<button
                        type="submit"
                        className="button button2" style={x}
                        onClick= {this.onSubmit}>Save
                    </button>*/}
              </div>
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
export default Password