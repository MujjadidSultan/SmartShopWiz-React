import React, { Component} from 'react'
import { complaintcategory_list, deletecomplaintcategory } from './UserFunctions'
import SideBar from './sidebar';
import './dashboard.css';
import './viewemployees.css';
import { MDBCol, MDBIcon } from "mdbreact";
import l from '../images/l.jpg';
import {logout} from './UserFunctions'

class ComplaintCategory extends Component {
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
       
    }

    componentDidMount() {
        complaintcategory_list()
      .then(data => {this.setState({lists: data,ArrayHolder:data}) },
      
    )}

    dashboard = () => {this.props.history.push("/dashboard");}
    
    logout = () => {
      localStorage.removeItem('jwtToken');
      logout().then().catch()
      this.props.history.push("/login");
    }

    handleSelect(item) {
      console.log(item);
      localStorage.setItem('upid',item)
      this.props.history.push("/updatecomplaintcategory");
    }

    searchFilterFunction(e) {
      const {ArrayHolder} = this.state;
      const newData = ArrayHolder.filter(item => item.complaint_name.toLowerCase().indexOf(e.target.value) > -1);

      this.setState({ lists:newData, search:e.target.value}, () => {
        console.log("NewData", newData);
      });
      console.log(e.target.value);
    }

    deleteCat = (item) => {
      const deletecatt = {
        complaint_id: item
      }
      console.log(deletecatt);
      deletecomplaintcategory(deletecatt).then(res => {
        window.location.reload()
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
                  <h3>List of Complaint Categories!!!</h3>
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
                      <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search any Complaint Category"
                      onChange={this.searchFilterFunction} 
                      aria-label="Search"/>
                    </form>
                </MDBCol></center>

              </div>
          </nav>
          
          <div class="view">
            <img src={l} class="img-fluid" alt="placeholder" width="1518"/>
            <div class="mask flex-center rgba-blue-light">

               <table width="75%" style={tbl}>
                  <tr>
                    <div class="table-header-class">
                        <table width="100%" align="center">
                          <thead>
                              <tr>
                                <th>Complaint Category ID</th>
                                <th>Complaint Name</th>
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
                              
                              <tr muID={list.complaint_id} selected={this.state.selected[list.complaint_id]} >
                                  <td style={{width:450}}> {list.complaint_id} </td>
                                  <td style={{width:360}}> {list.complaint_name} </td>
                                  <td style={{width:142}}><button id="edit" className="button button2" style={a} 
                                        onClick={this.handleSelect.bind(this,list.complaint_id)}>Edit</button> </td>
                                <td><button className="button button2" style={a} 
                                        onClick={this.deleteCat.bind(this, list.complaint_id)}>Delete</button></td> 
                              </tr> 
                              )}
                          </tbody>
                    </table>
                  </div></tr>
                </table>
          
          {/*<table class="readtab" align="center" border="1" style={tbl}>
            <thead>
              <tr>
                <th>Complaint Category ID</th>
                <th>Complaint Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            
            <tbody>
    
                {lists.map(list =>
                
                <tr muID={list.complaint_id} selected={this.state.selected[list.complaint_id]} >
                    <td> {list.complaint_id} </td>
                    <td> {list.complaint_name} </td>
                    <td><button id="edit" className="button button2" style={a} 
                          onClick={this.handleSelect.bind(this,list.complaint_id)}>Edit</button> </td>
                   <td><button className="button button2" style={a} 
                          onClick={this.deleteCat.bind(this, list.complaint_id)}>Delete</button></td> 
                </tr> 
                )}
            </tbody>
                </table>*/}
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

 const a = {
  backgroundColor: '#4ABAE2',
  color: '#FFFFFF',
 }

 const tbl = {
  marginTop:100,
  outline:'solid',
}

 
export default ComplaintCategory
