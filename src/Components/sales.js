import React, { Component } from 'react';
import SideBar from './sidebar';
import l from '../images/l.jpg'; 
import {logout, sales_list} from './UserFunctions'

class Sales extends Component {
    constructor(props){
        super(props);

        this.state = {
          lists:[],
          errors: {},
          selected: {},
        
        }

    }

    componentDidMount() {
      sales_list()
      .then(data => {this.setState({lists: data}) 
    },
      
    )}
    
       dashboard = () => {this.props.history.push("/dashboard");}
       
       logout = () => {
        localStorage.removeItem('jwtToken');
        logout().then().catch()
        this.props.history.push("/login");
      }

      handleSelect(item, item2, item3, item4, item5) {
        console.log(item);
        localStorage.setItem('upid', item)
        this.props.history.push({pathname:'/cartdetails', state: {cart_id : item, date: item2, time: item3, customer_name: item4, customer_id:item5}});
      }

      render() {
       
        const { lists } = this.state;

        return(
            <div>
            <nav /*style={nav}*/>
              <SideBar/>
                  <div style={jumbo}>
                    <center> 
                        <h1 style={hv}>Smart ShopWiz </h1>
                        <h3>Sales History!!!</h3>
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
                  <table width="75%" style={tbl}>
                    <tr>
                      <div class="table-header-class">
                          <table width="100%" align="center">
                            <thead>
                                <tr>
                                  <th height="50px" style={{width:350}}>Cart ID</th>
                                  <th style={{width:250}}>Customer Name</th>
                                  <th style={{width:100}}>Total Bill</th>
                                  <th>Date</th>
                                  <th style={{width:100}}>Time</th>
                                  <th>Details</th>
                                </tr>
                            </thead>
                          </table>
                      </div></tr>

                    <tr>
                    <div class="table-content-class">
                      <table width="100%" align="center">
                         <tbody>
                              
                              {lists.map(list =>
                              
                              <tr muID={list.cart_id} selected={this.state.selected[list.cart_id]} >
                                  <td style={{width:350}}> {list.cart_id} </td>
                                  <td style={{width:250}}> {list.customer_name} </td>
                                  <td style={{width:100}}> {list.total_bill} </td>
                                  <td style={{width:151}}> {list.date} </td>
                                  <td style={{width:101}}> {list.time} </td>
                                  <td><button className="button button2" style={a} 
                                        onClick={this.handleSelect.bind(this, list.cart_id, list.date, list.time, list.customer_name, list.customer_id)}>
                                        View</button></td>
                              </tr> 
                              )}
                          </tbody> 
                      </table>
                    </div></tr>
                </table>
                {/*<table class="readtab" align="center" border="1" width="60%" style={tbl}>
                  <thead>
                    <tr>
                      <th height="50px">Cart ID</th>
                      <th>Customer Name</th>
                      <th>Total Bill</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                
                  <tbody>
          
                      {lists.map(list =>
                      
                      <tr muID={list.cart_id} selected={this.state.selected[list.cart_id]} >
                          <td> {list.cart_id} </td>
                          <td> {list.customer_name} </td>
                          <td> {list.total_bill} </td>
                          <td> {list.date} </td>
                          <td> {list.time} </td>
                          <td><button className="button button2" style={a} 
                                onClick={this.handleSelect.bind(this, list.cart_id, list.date, list.time, list.customer_name, list.customer_id)}>
                                View</button></td>
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

export default Sales