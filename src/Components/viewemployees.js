import React, { Component, Fragment } from 'react'
import { deleteemployee ,employee_list } from './UserFunctions'
import SideBar from './sidebar';
import './dashboard.css';
import './viewemployees.css';
import { MDBCol, MDBIcon } from "mdbreact";
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

class ListOfEmployees extends Component {
    constructor(props){
        super(props);

        this.state = {
          lists:[],
          status: '',
          errors: {},
          selected: {},
          ArrayHolder:[],
          search:''
        }

        this.searchFilterFunction = this.searchFilterFunction.bind(this);
        //this.gotoUpdate = this.gotoUpdate.bind(this);
       // this.deleteEmp = this.deleteEmp.bind(this);
    }

    componentDidMount() {
      employee_list()
      .then(data => {this.setState({lists: data,ArrayHolder:data}) },
      
    )}

   /* gotoUpdate = () => {
      this.props.history.push("/updateemployees");
      }*/

    dashboard = () => {this.props.history.push("/dashboard");}
      
    logout = () => {
      localStorage.removeItem('jwtToken');
      logout().then().catch()
      this.props.history.push("/login");
    }

    handleSelect(item) {
      console.log(item);
      localStorage.setItem('upemail',item)
      this.props.history.push("/updateemployees");
    }

    searchFilterFunction(e) {
      const {ArrayHolder} = this.state;
      const newData = ArrayHolder.filter(item => item.first_name.toLowerCase().indexOf(e.target.value) > -1);

      this.setState({ lists:newData, search:e.target.value}, () => {
        console.log("NewData", newData);
      });
      console.log(e.target.value);
    }

    deleteEmp = (item) => {
      const deleteemp = {
        email: item,
        status: 'inactive'
      }
      console.log(deleteemp);
      deleteemployee(deleteemp).then(res => {
        this.componentDidMount()
      })
    }
    
  render() {

    const { lists } = this.state;
    
    return (
        <div>
          <nav /*style={nav}*/>
            <SideBar/>
              <div style={jumbo}>
                <center> 
                  <h1 style={hv}>Smart ShopWiz </h1>
                  <h3>List of Employees!!!</h3>
                </center>
                <button className="button button2" style={bb} 
                        onClick={this.dashboard}>Dashboard
                    </button><br/>
                <button className="button button2" style={b} 
                     onClick={this.logout}>Logout
                </button>

                <center><MDBCol md="3">
                    <form className="form-inline mt-4 mb-4">
                      <MDBIcon icon="search" />
                      <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search any Employee"
                      onChange={this.searchFilterFunction} 
                      aria-label="Search"/>
                    </form>
                </MDBCol></center>

              </div>
          </nav>
          
          <div class="view">
              <img src={l} class="img-fluid" alt="placeholder" /*width="1482"*/ style={mm}/>
              <div class="mask flex-center rgba-blue-light">
             {/*} <div class="table-wrapper-scroll-y my-custom-scrollbar">
             <div class="tableBodyScroll">*/}
                  <table width="95%" style={tbl}>
                      <tr>
                        <div class="table-header-class">
                            <table width="100%" align="center">
                              <thead>
                                  <tr>
                                  <th style={{width:50}}>Employee ID</th>
                                  <th style={{width:110}}>First Name</th>
                                  <th style={{width:110}}>Last Name</th>
                                  <th style={{width:169}}>Email Address</th>
                                  <th style={{width:130}}>Phone Number</th>
                                  <th style={{width:50}}>Age</th>
                                  <th style={{width:70}}>Gender</th>
                                  <th style={{width:50}}>House No</th>
                                  <th style={{width:50}}>Street No</th>
                                  <th>Area</th>
                                  <th style={{width:100}}>City</th>
                                  <th style={{width:150}}>CNIC</th>
                                  <th>Edit</th>
                                  <th>Delete</th>
                                  </tr>
                              </thead>
                            </table>
                        </div></tr>

                      <tr>
                      <div class="table-content-class">
                        <table width="100%" align="center">
                          <tbody>
                  
                              {lists.map(list =>
                              
                              <tr muID={list.employeeID} selected={this.state.selected[list.employeeID]} >
                                  <td style={{width:94}}> {list.employeeID} </td>
                                  <td style={{width:110}}> {list.first_name} </td>
                                  <td style={{width:110}}> {list.last_name} </td>
                                  <td style={{width:125}}> {list.email} </td>
                                  <td style={{width:130}}> {list.phonenumber} </td>
                                  <td style={{width:56}}> {list.age} </td>
                                  <td style={{width:78}}> {list.gender} </td>
                                  <td style={{width:73}}> {list.address.houseno} </td>
                                  <td style={{width:70}}> {list.address.streetno} </td>
                                  <td style={{width:98}}> {list.address.area} </td>
                                  <td style={{width:100}}> {list.address.city} </td>
                                  <td style={{width:150}}> {list.cnic} </td>
                                  <td style={{width:89}}><button id="edit" className="button button2" style={a} 
                                        onClick={this.handleSelect.bind(this,list.email)}>
                                        Edit</button> </td>
                                  <td><button className="button button2" style={a} 
                                    onClick={this.deleteEmp.bind(this, list.email)}>Delete</button></td>
                              </tr> 
                              )}
                          </tbody>
                        </table>
                      </div></tr>
                    </table>

                {/*<div id="table-wrapper">
                  <div id="table-scroll">
           
                <table class="readtab " align="center" border="1" style={tbl} >
                  <thead>
                    <tr>
                      <th>Employee ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email Address</th>
                      <th>Phone Number</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>House No</th>
                      <th>Street No</th>
                      <th>Area</th>
                      <th>City</th>
                      <th>CNIC</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  
                  <tbody>
          
                      {lists.map(list =>
                      
                      <tr muID={list.employeeID} selected={this.state.selected[list.employeeID]} >
                          <td> {list.employeeID} </td>
                          <td> {list.first_name} </td>
                          <td> {list.last_name} </td>
                          <td> {list.email} </td>
                          <td> {list.phonenumber} </td>
                          <td> {list.age} </td>
                          <td> {list.gender} </td>
                          <td> {list.address.houseno} </td>
                          <td> {list.address.streetno} </td>
                          <td> {list.address.area} </td>
                          <td> {list.address.city} </td>
                          <td> {list.cnic} </td>
                          <td><button id="edit" className="button button2" style={a} 
                                onClick={this.handleSelect.bind(this,list.email)}>
                                Edit</button> </td>
                          <td><button className="button button2" style={a} 
                            onClick={this.deleteEmp.bind(this, list.email)}>Delete</button></td>
                      </tr> 
                      )}
                  </tbody>
                </table>
                </div>
                </div>*/}
                </div>
               {/*</div>*/}
           
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

 const a = {
  backgroundColor: '#4ABAE2',
  color: '#FFFFFF',
  
 }

 const tbl = {
  
  marginTop: -200,
  
}

const mm = {height:1100}
 
export default ListOfEmployees
