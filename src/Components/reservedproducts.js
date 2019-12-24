import React, { Component } from 'react'
import { reservedproducts_list, changereservationstatus } from './UserFunctions'
import SideBar from './sidebar';
import './dashboard.css';
import './viewcustomer.css';
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

class ViewReservations extends Component {
    constructor(props){
        super(props);

        this.state = {
          lists:[],
          errors: {},
          selected: {}
        }

    }

   componentDidMount() {
      reservedproducts_list()
      .then(data => {this.setState({lists: data}) 
    },
    )}

    dashboard = () => {this.props.history.push("/dashboard");}

    logout = () => {
      localStorage.removeItem('jwtToken');
      logout().then().catch()
      this.props.history.push("/login");
    }

    changeStatus = (item) => {
      const Changestats = {
        reservation_id: item
      }
        
      console.log(Changestats);
      changereservationstatus(Changestats).then(res => {
        this.componentDidMount()
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
                        <h3>List of Reserved Products!!!</h3>
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
                               <th>Product Name</th>
                              <th>Customer Name</th>
                              <th style={{width:120}}>Reserved Quantity</th>
                              <th style={{width:125}}>Reservation Time</th>
                              <th>Reservation Date</th>
                              <th style={{width:142}}>Status</th>
                              <th>Cancel Reservations</th>
                              </tr>
                          </thead>
                        </table>
                    </div></tr>

                  <tr>
                  <div class="table-content-class">
                    <table width="100%" align="center">
                      
                        <tbody>
          
                            {lists.map(list =>
                            
                            <tr muID={list.reservation_id} selected={this.state.selected[list.reservation_id]} >
                                <td style={{width:165}}> {list.product_name} </td>
                                <td style={{width:182}}> {list.customer_name} </td>
                                <td style={{width:120}}> {list.reserved_quantity} </td>
                                <td style={{width:125}}> {list.time} </td>
                                <td style={{width:188}}> {list.date} </td>
                                <td style={{width:142}}> {list.status} </td>
                                <td><button className="button button2" style={a} 
                                    onClick={this.changeStatus.bind(this, list.reservation_id)}>Cancel</button></td>
                            </tr> 
                            )}
                            </tbody> 
                    </table>
                  </div></tr>
                </table>
            
               {/*} <table class="readtab" align="center" border="1" width="95%" style={tbl}>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Customer Name</th>
                      <th>Reserved Quantity</th>
                      <th>Reservation Time</th>
                      <th>Reservation Date</th>
                      <th>Status</th>
                      <th>Cancel Reservations</th>
                    </tr>
                  </thead>
                
                  <tbody>
          
                      {lists.map(list =>
                      
                      <tr muID={list.reservation_id} selected={this.state.selected[list.reservation_id]} >
                          <td> {list.product_name} </td>
                          <td> {list.customer_name} </td>
                          <td> {list.reserved_quantity} </td>
                          <td> {list.time} </td>
                          <td> {list.date} </td>
                          <td> {list.status} </td>
                          <td><button className="button button2" style={a} 
                              onClick={this.changeStatus.bind(this, list.reservation_id)}>Cancel</button></td>
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
    marginLeft:70
   }

const tbl = {
    outline:'solid',
    marginTop: 100
  }

export default ViewReservations
