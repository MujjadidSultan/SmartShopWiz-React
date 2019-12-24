import React, { Component, Fragment } from 'react'
import { verifyCode } from './UserFunctions';
import './login.css';
import { MDBBtn, MDBAlert } from "mdbreact";

class VerifyCode extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            verifycode: '',
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
        this.setState({email:v,verifycode: ''})
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }

      onSubmit(e) {
        e.preventDefault()  
        const usercode = {
            email: this.state.email,
            verifycode: this.state.verifycode
        }
        console.log(usercode)
        verifyCode(usercode).then(data => {
            console.log(data)
            if (data === "Incorrect code") {
                this.setState({ message:data });
              
            }

            else {
                localStorage.setItem('pemail',this.state.email)
                this.props.history.push(`/password`)
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
                            <h3>Code Verification</h3>
                        </center>
                    </div>

                    <br/><br/>

                    <label>Verify Code</label> &nbsp;
                    <input
                        type="text"
                        className="form-control"
                        name="verifycode"
                        value={this.state.verifycode}
                        onChange={this.onChange}
                        style={f}/>
                    <br/><br/>

                    <Fragment>
                        <MDBBtn type="submit" gradient="blue"
                        onClick= {this.onSubmit}>Verify</MDBBtn>
                    </Fragment>

                    {message !== '' && 
                  <MDBAlert color="primary" >
                    { message }
                </MDBAlert>}
                    {/*<button
                        type="submit"
                        className="button button2" style={x}
                        onClick= {this.onSubmit}>Verify
                    </button>*/}

                </div>
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
export default VerifyCode