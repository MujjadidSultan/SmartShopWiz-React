import React, { Component } from 'react';
import SideBar from './sidebar';
import { reviews_list } from './UserFunctions'
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'
import './viewcustomer.css';

class Reviews extends Component {
    constructor(props){
        super(props);

        this.state = {
          lists:[],
          errors: {},
          selected: {}
        }

    }

    componentDidMount() {
        reviews_list()
        .then(data => {this.setState({lists: data}) 
      },
      )
    }
  
    dashboard = () => {this.props.history.push("/dashboard");}

    logout = () => {
      localStorage.removeItem('jwtToken');
      logout().then().catch()
      this.props.history.push("/login");
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
                        <h3>List of Customer Reviews!!!</h3>
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

              <table width="85%" style={tbl}>
                  <tr>
                    <div class="table-header-class">
                        <table width="100%" align="center">
                          <thead>
                              <tr>
                                <th height="50px" style={{width:290}}>Customer ID</th>
                                <th style={{width:150}}>Customer Name</th>
                                <th style={{width:290}}>Cart ID</th>
                                <th style={{width:320}}>Review</th>
                                <th style={{width:135}}>Date</th>
                                <th>Time</th>
                              </tr>
                          </thead>
                        </table>
                    </div></tr>

                  <tr>
                  <div class="table-content-class">
                    <table width="100%" align="center">
                      <tbody>
            
                        {lists.map(list =>
                        
                        <tr muID={list.review_id} selected={this.state.selected[list.review_id]} >
                            <td style={{width:290}}> {list.customer_id} </td>
                            <td style={{width:150}}> {list.customer_name} </td>
                            <td style={{width:290}}> {list.cart_id} </td>
                            <td style={{width:320}}> {list.review} </td>
                            <td> {list.date} </td>
                            <td> {list.time} </td>
                        </tr> 
                        )}
                    </tbody> 
                    </table>
                  </div></tr>
                </table>
          
                 {/*} <table class="readtab" align="center" border="1" width="95%" style={tbl}>
                    <thead>
                      <tr>
                        <th height="50px">Customer ID</th>
                        <th>Customer Name</th>
                        <th>Cart ID</th>
                        <th>Review</th>
                        <th>Date</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                  
                    <tbody>
            
                        {lists.map(list =>
                        
                        <tr muID={list.review_id} selected={this.state.selected[list.review_id]} >
                            <td> {list.customer_id} </td>
                            <td> {list.customer_name} </td>
                            <td> {list.cart_id} </td>
                            <td> {list.review} </td>
                            <td> {list.date} </td>
                            <td> {list.time} </td>
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


const tbl = {
  outline:'solid',
  marginTop: 100
}


export default Reviews