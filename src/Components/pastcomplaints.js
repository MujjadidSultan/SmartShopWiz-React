import React, { Component } from 'react';
import SideBar from './sidebar';
import { complaints_list } from './UserFunctions'
import l from '../images/l.jpg';
import {logout} from './UserFunctions'

class pastComplaints extends Component {
    constructor(props){
        super(props);

        this.state = {
          lists:[],
          errors: {},
          selected: {},
          DisplayList:[],
          employee_name:''
        }

    }

    componentDidMount() {
        complaints_list()
        .then(data => {this.setState({lists: data}, () => {for (let i = 0; i < this.state.lists.length; i++) {
        /*  if (this.state.lists[i].status == 'Closed') {
            let obj = {'obj' : this.state.lists[i]}
            this.state.DisplayList.push(obj); */

          this.state.DisplayList = this.state.lists.filter(item => {
            if (item.status== 'Closed'){
              return item
            }
          })
          
        }}) 
        console.log(this.state.lists);
        console.log(this.state.DisplayList);
        this.setState({DisplayList:this.state.DisplayList});
      },
     
      )}
  
      dashboard = () => {this.props.history.push("/dashboard");}

      logout = () => {
        localStorage.removeItem('jwtToken');
        logout().then().catch()
        this.props.history.push("/login");
      }

      render() {
        const { DisplayList } = this.state;
        
        return(
            <div>
            <nav /*style={nav}*/>
              <SideBar/>
                  <div style={jumbo}>
                    <center> 
                        <h1 style={hv}>Smart ShopWiz </h1>
                        <h3>List of Previous Complaints!!!</h3>
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

                <table width="90%" style={tbl}>
                  <tr>
                    <div class="table-header-class">
                        <table width="100%" align="center">
                          <thead>
                              <tr>
                                <th height="50px" style={{width:160}}>Complaint Name</th>
                                <th style={{width:260}}>Employee ID</th>
                                <th style={{width:160}}>Customer Name</th>
                                <th style={{width:260}}>Complaint</th>
                                <th style={{width:120}}>Date</th>
                                <th>Time</th>
                                <th style={{width:90}}>Status</th>
                                <th>Customer's Feedback</th>
                              </tr>
                          </thead>
                        </table>
                    </div></tr>

                  <tr>
                  <div class="table-content-class">
                    <table width="100%" align="center">
                        <tbody>
          
                            {DisplayList.map(list =>
                            
                            
                            <tr muID={list.ticket_id} selected={this.state.selected[list.ticket_id]} >
                                <td style={{width:160}}> {list.complaint_name} </td>
                                <td style={{width:260}}> {list.employee_id} </td>
                                <td style={{width:160}}> {list.customer_name} </td>
                                <td style={{width:260}}> {list.complaint} </td>
                                <td style={{width:120}}> {list.date} </td>
                                <td style={{width:85}}> {list.time} </td>
                                <td style={{width:90}}> {list.status} </td>
                                <td> {list.feedback} </td>
                            </tr> 
                            )}
                        </tbody> 
                    </table>
                  </div></tr>
                </table>
          
               {/*} <table class="readtab" align="center" border="1" width="60%" style={tbl}>
                  <thead>
                    <tr>
                      <th height="50px">Complaint Name</th>
                      <th>Employee ID</th>
                      <th>Customer Name</th>
                      <th>Complaint</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Status</th>
                      <th>Customer's Feedback</th>
                    </tr>
                  </thead>
                
                  <tbody>
          
                      {DisplayList.map(list =>
                      
                      
                      <tr muID={list.ticket_id} selected={this.state.selected[list.ticket_id]} >
                          <td> {list.complaint_name} </td>
                          <td> {list.employee_id} </td>
                          <td> {list.customer_name} </td>
                          <td> {list.complaint} </td>
                          <td> {list.date} </td>
                          <td> {list.time} </td>
                          <td> {list.status} </td>
                          <td> {list.feedback} </td>
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
  marginTop:-100,
  outline:'solid',
}

export default pastComplaints