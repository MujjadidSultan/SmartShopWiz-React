import React, { Component } from 'react'
import { category_list, deletecategory } from './UserFunctions'
import SideBar from './sidebar';
import './dashboard.css';
import './viewcustomer.css';
import { MDBCol, MDBIcon } from "mdbreact";
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

class ViewCategory extends Component {
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
      category_list()
      .then(data => {this.setState({lists: data,ArrayHolder:data}) 
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
        this.props.history.push("/updatecategory");
      }

      searchFilterFunction(e) {
        const {ArrayHolder} = this.state;
        const newData = ArrayHolder.filter(item => item.category_name.toLowerCase().indexOf(e.target.value) > -1);
  
        this.setState({ lists:newData, search:e.target.value}, () => {
          console.log("NewData", newData);
        });
        console.log(e.target.value);
      }
  
      deleteCat = (item) => {
        const deletecatt = {
          category_id: item
        }
        console.log(deletecatt);
        deletecategory(deletecatt).then(res => {
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
                        <h3>List of Categories!!!</h3>
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
                        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search any Category"
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
                              <th style={{width:270}}>Category Name</th>
                              <th>Description</th>
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
                          
                          <tr muID={list.category_id} selected={this.state.selected[list.category_id]} >
                              <td style={{width:270}}> {list.category_name} </td>
                              <td style={{width:390}}> {list.description} </td>
                              <td style={{width:208}}><button id="edit" className="button button2" style={a} 
                                    onClick={this.handleSelect.bind(this, list.category_id)}>
                                    Edit</button></td>
                              <td><button className="button button2" style={a} 
                                onClick={this.deleteCat.bind(this, list.category_id)}>Delete</button></td>
                          </tr> 
                          )}
                      </tbody> 
                    </table>
                  </div></tr>
                </table>
          
                {/*<table class="readtab" align="center" border="1" width="75%" style={tbl}>
                  <thead>
                    <tr>
                      <th>Category Name</th>
                      <th>Description</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                
                  <tbody>
          
                      {lists.map(list =>
                      
                      <tr muID={list.category_id} selected={this.state.selected[list.category_id]} >
                          <td> {list.category_name} </td>
                          <td> {list.description} </td>
                          <td><button id="edit" className="button button2" style={a} 
                                onClick={this.handleSelect.bind(this, list.category_id)}>
                                Edit</button></td>
                          <td><button className="button button2" style={a} 
                            onClick={this.deleteCat.bind(this, list.category_id)}>Delete</button></td>
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
    outline:'solid',
    marginTop: 100
  }

export default ViewCategory
