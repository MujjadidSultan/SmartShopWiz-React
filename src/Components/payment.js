import React, { Component } from 'react'
import SideBar from './sidebar';
import './dashboard.css';
import './viewproducts.css';
import l from '../images/l.jpg'; 
import {logout, addinvoice} from './UserFunctions'
import { MDBAlert, MDBRow, MDBCol } from "mdbreact";

const add = 'http://localhost:5000/carts/'

class Payment extends Component {
    constructor(props){
        super(props);

        this.state = {
          lists:[],
          errors: {},
          invoice_id:'',
          cart_id:this.props.location.state.cart_id,
          bill: this.props.location.state.total,
          given_cash:'',
          reserved_cash:'',
          message:''
          
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
 
    }

    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
    
      onSubmit(e) {
        e.preventDefault()
        
        const newInv = {
            invoice_id: this.state.invoice_id,
            cart_id: this.state.cart_id,
            bill: this.state.bill,
            given_cash: this.state.given_cash,
            reserved_cash: this.state.reserved_cash,
            message:''
        }
    
        addinvoice(newInv).then(data => {
          if(data === "Already Existed!"){
            this.setState({ message:data });
          }
          else{
            //alert('Record Added Successfully')
            window.location.reload();
           // this.props.history.push("/viewsales");
          }
        })
      }

    dashboard = () => {this.props.history.push("/dashboard");}

    logout = () => {
        localStorage.removeItem('jwtToken');
        logout().then().catch()
        this.props.history.push("/login");

    }

    componentDidMount() {
      console.log(this.state.bill)
    }


    render() {
        const {message} = this.state;
        return(
            <div >
                <nav /*style={nav}*/>
                <SideBar/>
                    <div style={jumbo}>
                        <center> 
                            <h1 style={hv}>Smart ShopWiz </h1>
                            <h3>Payment!!!</h3>
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
                        <MDBRow>
                          <MDBCol>
                            <img src={add + this.state.cart_id} className="rounded float-right" alt="aligment" style={ii} />
                          </MDBCol>
                        </MDBRow>
                            <form noValidate onSubmit={this.onSubmit}>
                                <table style={tbl}>
                                    <div className="form-group">
                                        <tbody>

                                            {/*<tr>
                                                <td>Invoice ID</td>
                                                <td><input
                                                    type="text"
                                                    className="form-control"
                                                    name="invoice_id"
                                                    value={this.state.invoice_id}
                                                    onChange={this.onChange}/></td>
                                            </tr>*/}

                                            <tr>
                                                <td>Cart ID</td>   
                                                <td>{this.state.cart_id}</td>
                                            </tr>

                                            <tr>
                                                <td>Bill</td>
                                                <td>{this.state.bill}</td>
                                            </tr>

                                            <tr>
                                                <td>Given Cash</td>
                                                <td><input
                                                    type="text"
                                                    className="form-control"
                                                    name="given_cash"
                                                    value={this.state.given_cash}
                                                    onChange={this.onChange}/></td>
                                            </tr>

                                            <tr>
                                                <td>Returned Cash</td>
                                                <td><input
                                                    type="text"
                                                    className="form-control"
                                                    name="reserved_cash"
                                                    value={this.state.reserved_cash}
                                                    onChange={this.onChange}/></td>
                                            </tr>

                                            <br/>
                                        </tbody>
                                    </div>

                                    <br/>
                                    {/* {message !== '' &&
                                    <div className="alert alert-warning alert-dismissible" role="alert"> <br/>
                                        { message }
                                    </div> } */}

                                    {message !== '' && 
                                    <MDBAlert color="primary" >
                                        { message }
                                    </MDBAlert>}

                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    
                                    <button 
                                    type="submit"
                                    className="button button2" align="center"
                                    style={r}>Done
                                    </button> 
                                    
                                    <br/><br/>
                                    </table>
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
      border: 'rgb(31, 126, 204)',
      marginLeft: 65
  }

  const tbl = {
    marginTop:-300,
    outline:'solid',
   
  }

  const ii = {
    marginTop: -300,
    marginRight: -100,
    height: 150,
    width: 250
  }

export default Payment