import React, { Component } from 'react'
import { addcomplaintcategory } from './UserFunctions'
import SideBar from './sidebar';
import './addProduct.css';
import { MDBAlert} from "mdbreact";
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

class AddComplaintcategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      complaint_id:'',
      complaint_name:'', 
      message:'',
    }
   
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    
    const newComcat = {
      complaint_id: this.state.complaint_id,
      complaint_name: this.state.complaint_name,
      message:''
    }

    addcomplaintcategory(newComcat).then(data => {
      if(data === "Already Existed!"){
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
                    <h3>Add a Complaint Category!!!</h3>
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
                    <div className="form-group">
                      <tbody>
                        
                        {/*<tr>
                          <td>Category ID</td>
                          <td><input
                            type="text"
                            className="form-control"
                            name="category_id"
                            value={this.state.category_id}
                            onChange={this.onChange}/></td>
                        </tr>*/}

                       {/*} <tr>
                          <td>Complaint ID</td>
                          <td><input
                            type="text"
                            className="form-control"
                            name="complaint_id"
                            value={this.state.complaint_id}
                            onChange={this.onChange}/></td>
                      </tr>*/}

                        <tr>
                          <td>Complaint Category Name</td>
                          <td><input
                            type="text"
                            className="form-control"
                            name="complaint_name"
                            value={this.state.complaint_name}
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
                      style={r}>Add
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
    marginLeft: 80
}

const tbl = {
  marginTop:-350,
  outline:'solid',
}

export default AddComplaintcategory
