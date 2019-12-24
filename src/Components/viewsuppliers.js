import React, { Component } from 'react'
import { supplier_list, deletesupplier } from './UserFunctions'
import SideBar from './sidebar';
import './dashboard.css';
import './viewcustomer.css';
import { MDBCol, MDBIcon } from "mdbreact";
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

export default class ViewSuppliers extends Component {
    constructor(props){
        super(props);

        this.state = {
          lists:[],
          errors: {},
          selected: {},
          ArrayHolder:[],
          search:''
        }

        this.searchFilterFunction = this.searchFilterFunction.bind(this);

    }

   componentDidMount() {
      supplier_list()
      .then(data => {this.setState({lists: data,ArrayHolder:data}) 
      console.log(data)
    },
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
        this.props.history.push("/updatesupplier");
      }

    searchFilterFunction(e) {
        const {ArrayHolder} = this.state;
        const newData = ArrayHolder.filter(item => item.supplier_name.toLowerCase().indexOf(e.target.value) > -1);
  
        this.setState({ lists:newData, search:e.target.value}, () => {
          console.log("NewData", newData);
        });
        console.log(e.target.value);
      }
  
    deleteSup = (item) => {
        const deletesup = {
          supplier_id: item
        }
        console.log(deletesup);
        deletesupplier(deletesup).then(res => {
          this.componentDidMount()
        })
      }
    
  render() {

    const { lists } = this.state;
    const makeDate=(dateInSeconds)=>{
      var curdate = new Date(null);
      curdate.setTime(parseInt(dateInSeconds));
      let component = curdate.toLocaleString();
      return component;
    }
    
    return (
        <div>
            <nav >
              <SideBar/>
                  <div style={jumbo}>
                    <center> 
                        <h1 style={hv}>Smart ShopWiz </h1>
                        <h3>List of Suppliers!!!</h3>
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
                      <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search any Supplier"
                      onChange={this.searchFilterFunction} 
                      aria-label="Search"/>
                    </form>
                  </MDBCol></center>

                  </div>
            </nav>
            
            <div class="view">
              <img src={l} class="img-fluid" alt="placeholder" /*width="1482"*/ style={mm}/>
              <div class="mask flex-center rgba-blue-light">
              
                <table width="75%" style={tbl}>
                  <tr>
                    <div class="table-header-class">
                        <table width="100%" align="center">
                          <thead>
                              <tr>
                              <th>Supplier Name</th>
                              <th>Product Name</th>
                              <th style={{width:150}}>Supplied Quantity</th>
                              <th>Supplying Date</th>
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
                            
                            <tr muID={list.supplier_id} selected={this.state.selected[list.supplier_id]} >
                                <td style={{width:247}}> {list.supplier_name} </td>
                                <td style={{width:242}}> {list.product_name} </td>
                                <td style={{width:150}}> {list.supplier_quantity} </td>
                                <td style={{width:250}}>  {makeDate(list.supplying_date.$date)} </td>
                                <td style={{width:109}}><button id="edit" className="button button2" style={a} 
                                      onClick={this.handleSelect.bind(this, list.supplier_id)}>
                                      Edit</button></td>
                                <td><button className="button button2" style={a} 
                                  onClick={this.deleteSup.bind(this, list.supplier_id)}>Delete</button></td>
                            </tr> 
                            )}
                        </tbody> 
                    </table>
                  </div></tr>
                </table>
            
              
                {/*<table class="readtab" align="center" border="1" width="85%" style={tbl}>
                  <thead position="sticky">
                    <tr>
                      <th>Supplier Name</th>
                      <th>Product Name</th>
                      <th>Supplied Quantity</th>
                      <th>Supplying Date</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  
                
                  <tbody>
          
                      {lists.map(list =>
                      
                      <tr muID={list.supplier_id} selected={this.state.selected[list.supplier_id]} >
                          <td> {list.supplier_name} </td>
                          <td> {list.product_name} </td>
                          <td> {list.supplier_quantity} </td>
                          <td> {makeDate(list.supplying_date.$date)} </td>
                          <td><button id="edit" className="button button2" style={a} 
                                onClick={this.handleSelect.bind(this, list.supplier_id)}>
                                Edit</button></td>
                          <td><button className="button button2" style={a} 
                            onClick={this.deleteSup.bind(this, list.supplier_id)}>Delete</button></td>
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
    textAlign:"right",
    marginTop: -200,
    
  }
  
  const mm = {height:1100,
  }

//export default ViewSuppliers
