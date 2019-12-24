import React, { Component } from 'react';
import SideBar from './sidebar';
import { complaints_list, changeticketstatus } from './UserFunctions'
import l from '../images/l.jpg';
import { logout } from './UserFunctions'
//import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBSelect } from "mdbreact";
//import Dropdown from 'react-dropdown'
import Select from 'react-select'
//import 'bootstrap/dist/css/bootstrap.min.css';


class newComplaints extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      errors: {},
      //selected: {},
      DisplayList: [],
      forFilter: [],
      //pendingList: [],
      //ongoingList: [],
      //displayToggle: 0,
      selected: '',
      menuItems:['All', 'Pending', 'Received']
    }

  }

  componentDidMount() {

    complaints_list()
      .then(data => {
        this.setState({ lists: data, forFilter: data }, () => {
          console.log(this.state.lists)
         {/*} for (let i = 0; i < this.state.lists.length; i++) {
            /*  if (this.state.lists[i].status == 'Closed') {
                let obj = {'obj' : this.state.lists[i]}
                this.state.DisplayList.push(obj); 
            
               if (this.state.lists[i].status == 'Open')
               {
                let dList = this.state.DisplayList
                 dList.push(this.state.lists[i])
                 this.setState({ DisplayList: dList, forFilter: dList })
               }
               else if (this.state.lists[i].status =='Open' && this.state.lists[i].receive_status == 'Pending' )
               {
                let pList = this.state.pendingList
                pList.push(this.state.lists[i])
                this.setState({ pendingList: pList })
               }
               else if (this.state.lists[i].status =='Open' && this.state.lists[i].receive_status == 'Ongoing' )
               {
                let oList = this.state.ongoingList
                oList.push(this.state.lists[i])
                this.setState({ ongoingList: oList })
               } */

            /*this.state.DisplayList = this.state.lists.filter(item => {
              if (item.status == 'Open') {
                let dList = this.state.DisplayList
                dList.push(item)
                this.setState({ DisplayList: dList })
               }
              else if (item.receive_status == 'Pending' && item.status == 'Open') {
                let pList = this.state.pendingList
                pList.push(item)
                this.setState({ pendingList: pList })
             }
              else if (item.receive_status == 'Ongoing' && item.status == 'Open') {
                 let oList = this.state.ongoingList
                 oList.push(item)
                 this.setState({ ongoingList: oList })
               }
             })*/
          }
        })

      //  console.log(this.state.lists);
      //  console.log(this.state.DisplayList);
      //  this.setState({ DisplayList: this.state.DisplayList });
      },

      )
  }

  onselect = selected => {
    this.setState({ selected });
    console.log(`Option selected:`, selected);

    if (selected == 'All') {
      let filterdata = this.state.forFilter

      this.setState({DisplayList: filterdata.filter(item=> {
        if (item.status == 'Open') {
          return item
        }
      })})
      console.log('hi')
     // this.setState({DisplayList: this.state.forFilter})
    }

    else if (selected == 'Pending') {
      console.log('Yes')
      let filterdata = this.state.forFilter

      this.setState({DisplayList: filterdata.filter(item=> {
        if (item.status == 'Open' && item.receive_status== 'Pending') {
          return item
        }
      })})
      console.log('hi')
      }

      else if (selected == "Received") {
        console.log('Yes')
        let filterdata = this.state.forFilter
  
        this.setState({DisplayList: filterdata.filter(item=> {
          if (item.status == 'Open' && item.receive_status== 'Received') {
            return item
          }
        })})
        console.log('hi')
        }
  };
  

   /* 
    
   this.setState({selected}) console.log('jgxywgj')
    if (v == 'All') {
      console.log('hi')
      this.setState({DisplayList: this.state.forFilter})
    }

    else if (this.state.selected == 'Pending') {
      console.log('Yes')
      let filterselected = this.state.forFilter

      this.setState({DisplayList: filterselected.filter(item=> {
        if (item.receive_status == this.state.selected) {
          return item
        }
      })})
      }
    } */
  

  dashboard = () => { this.props.history.push("/dashboard"); }

  logout = () => {
    localStorage.removeItem('jwtToken');
    logout().then().catch()
    this.props.history.push("/login");
  }

  handleSelect(item, item2, item3, item4, item5, item6) {
    console.log(item);
    localStorage.setItem('upid', item)
    //this.props.router.push({pathname:'/complaintresponse', state: {ticket_id : item, complaint: item2, date: item3, time: item4}})
    this.props.history.push({ pathname: '/complaintresponse', state: { ticket_id: item, complaint: item2, date: item3, time: item4, customer_name: item5, customer_id: item6 } });
  }

  changeStatus = (item) => {
    const Changestats = {
      ticket_id: item
    }

    console.log(Changestats);
    changeticketstatus(Changestats).then(res => {
      this.props.history.push("/viewpastcomplaints");
    })
  }

  render() {

    const {selected} = this.state.selected;

    const { DisplayList, ongoingList, pendingList, displayToggle } = this.state;

    return (
      <div>
        <nav /*style={nav}*/>
          <SideBar />
          <div style={jumbo}>
            <center>
              <h1 style={hv}>Smart ShopWiz </h1>
              <h3>List of New Complaints!!!</h3>
            </center>
            <button className="button button2" style={bb}
              onClick={this.dashboard}>Dashboard
                    </button><br />
            <button className="button button2" style={b}
              onClick={this.logout}>Logout
                    </button>
          </div>
        </nav>

        <div class="view">
          <img src={l} class="img-fluid" alt="placeholder" width="1518" />
          <div class="mask flex-center rgba-blue-light">
            
            <div style={mm}>
              <Select 
                tyle={mm}
                value={selected}
                onChange={this.onselect}
                options={this.state.menuItems}
                placeholder="Select Category"/>
            </div>

            {this.state.selected !== ''  && ( <table width="90%" style={tbl}>
                  <tr>
                    <div class="table-header-class">
                        <table width="100%" align="center">
                          <thead>
                              <tr>
                                <th height="50px" style={{width:160}}>Complaint Name</th>
                                <th style={{width:160}}>Customer Name</th>
                                <th style={{width:250}}>Complaint</th>
                                <th style={{width:108}}>Date</th>
                                <th style={{width:80}}>Time</th>
                                <th style={{width:90}}>Status</th>
                                <th style={{width:110}}>Receive Status</th>
                                <th style={{width:100}}>Response</th>
                                <th style={{width:100}}>Close Complaint</th>
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
                                <td style={{width:176}}> {list.complaint_name} </td>
                                <td style={{width:180}}> {list.customer_name} </td>
                                <td style={{width:280}}> {list.complaint} </td>
                                <td style={{width:115}}> {list.date} </td>
                                <td style={{width:85}}> {list.time} </td>
                                <td style={{width:100}}> {list.status} </td>
                                <td style={{width:130}}> {list.receive_status} </td>
                                <td style={{width:100}}><button className="button button2" style={a}
                                  onClick={this.handleSelect.bind(this, list.ticket_id, list.complaint, list.date, list.time, list.customer_name, list.customer_id)}>
                                  Response</button></td>
                                <td style={{width:100}}><button className="button button2" style={a}
                                  onClick={this.changeStatus.bind(this, list.ticket_id)}>Close</button></td>
                              </tr>
                            )}
                            </tbody>
                    </table>
                  </div></tr>
                </table>)}


           {/*} <MDBDropdown size="lg">
              <MDBDropdownToggle caret color="primary">
                Select New Complaint Category
                </MDBDropdownToggle>
              <MDBDropdownMenu center basic>
                <MDBDropdownItem
                  onClick={(e)=>this.setState({ displayToggle: 1 })}>
                  All
                    </MDBDropdownItem>
                <MDBDropdownItem
                  onClick={(e)=>this.setState({ displayToggle: 2 })}>
                  
                    Pending</MDBDropdownItem>
                <MDBDropdownItem
                  onClick={(e)=>this.setState({ displayToggle: 3 })}>
                  
                  Ongoing</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>*/}

           {/* <Dropdown options={this.state.menuItems} onChange={ (value, e) => this.onselect(value, e)} placeholder="Select an option" />*/}
{/*}
         { this.state.selected !== ''  && (<table class="readtab" align="center" border="1" width="70%" style={tbl} >
                          <thead>
                            <tr>
                              <th height="50px">Complaint Name</th>
                              <th>Customer Name</th>
                              <th>Complaint</th>
                              <th>Date</th>
                              <th>Time</th>
                              <th>Status</th>
                              <th>Receive Status</th>
                              <th>Response</th>
                              <th>Close Complaint</th>
                            </tr>
                          </thead>

                          <tbody>

                            {DisplayList.map(list =>

                              <tr muID={list.ticket_id} selected={this.state.selected[list.ticket_id]} >
                                <td> {list.complaint_name} </td>
                                <td> {list.customer_name} </td>
                                <td> {list.complaint} </td>
                                <td> {list.date} </td>
                                <td> {list.time} </td>
                                <td> {list.status} </td>
                                <td> {list.receive_status} </td>
                                <td><button className="button button2" style={a}
                                  onClick={this.handleSelect.bind(this, list.ticket_id, list.complaint, list.date, list.time, list.customer_name, list.customer_id)}>
                                  Response</button></td>
                                <td><button className="button button2" style={a}
                                  onClick={this.changeStatus.bind(this, list.ticket_id)}>Close</button></td>
                              </tr>
                            )}
                          </tbody>
                            </table> )}*/}

            {/*{(() => {
                switch(displayToggle) {
                  case 1:
                    return (
                    <>
                        <table class="readtab" align="center" border="1" width="70%" style={tbl} >
                          <thead>
                            <tr>
                              <th height="50px">Complaint Name</th>
                              <th>Customer Name</th>
                              <th>Complaint</th>
                              <th>Date</th>
                              <th>Time</th>
                              <th>Status</th>
                              <th>Receive Status</th>
                              <th>Response</th>
                              <th>Close Complaint</th>
                            </tr>
                          </thead>

                          <tbody>

                            {DisplayList.map(list =>

                              <tr muID={list.ticket_id} selected={this.state.selected[list.ticket_id]} >
                                <td> {list.complaint_name} </td>
                                <td> {list.customer_name} </td>
                                <td> {list.complaint} </td>
                                <td> {list.date} </td>
                                <td> {list.time} </td>
                                <td> {list.status} </td>
                                <td> {list.receive_status} </td>
                                <td><button className="button button2" style={a}
                                  onClick={this.handleSelect.bind(this, list.ticket_id, list.complaint, list.date, list.time, list.customer_name, list.customer_id)}>
                                  Response</button></td>
                                <td><button className="button button2" style={a}
                                  onClick={this.changeStatus.bind(this, list.ticket_id)}>Close</button></td>
                              </tr>
                            )}
                          </tbody>
                        </table>}
    
                    </>);
                  case 2:
                    return(
                      <>
                        <table class="readtab" align="center" border="1" width="70%" style={tbl} >
                          <thead>
                            <tr>
                              <th height="50px">Complaint Name</th>
                              <th>Customer Name</th>
                              <th>Complaint</th>
                              <th>Date</th>
                              <th>Time</th>
                              <th>Status</th>
                              <th>Receive Status</th>
                              <th>Response</th>
                              <th>Close Complaint</th>
                            </tr>
                          </thead>

                          <tbody>

                            {pendingList.map(list =>

                              <tr muID={list.ticket_id} selected={this.state.selected[list.ticket_id]} >
                                <td> {list.complaint_name} </td>
                                <td> {list.customer_name} </td>
                                <td> {list.complaint} </td>
                                <td> {list.date} </td>
                                <td> {list.time} </td>
                                <td> {list.status} </td>
                                <td> {list.receive_status} </td>
                                <td><button className="button button2" style={a}
                                  onClick={this.handleSelect.bind(this, list.ticket_id, list.complaint, list.date, list.time, list.customer_name, list.customer_id)}>
                                  Response</button></td>
                                <td><button className="button button2" style={a}
                                  onClick={this.changeStatus.bind(this, list.ticket_id)}>Close</button></td>
                              </tr>
                            )}
                          </tbody>
                        </table>}
                              </>
                   );
                  case 3:
                      return(
                      <>
                          <table class="readtab" align="center" border="1" width="70%" style={tbl} >
                            <thead>
                              <tr>
                                <th height="50px">Complaint Name</th>
                                <th>Customer Name</th>
                                <th>Complaint</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th>Receive Status</th>
                                <th>Response</th>
                                <th>Close Complaint</th>
                              </tr>
                            </thead>

                            <tbody>

                              {ongoingList.map(list =>

                                <tr muID={list.ticket_id} selected={this.state.selected[list.ticket_id]} >
                                  <td> {list.complaint_name} </td>
                                  <td> {list.customer_name} </td>
                                  <td> {list.complaint} </td>
                                  <td> {list.date} </td>
                                  <td> {list.time} </td>
                                  <td> {list.status} </td>
                                  <td> {list.receive_status} </td>
                                  <td><button className="button button2" style={a}
                                    onClick={this.handleSelect.bind(this, list.ticket_id, list.complaint, list.date, list.time, list.customer_name, list.customer_id)}>
                                    Response</button></td>
                                  <td><button className="button button2" style={a}
                                    onClick={this.changeStatus.bind(this, list.ticket_id)}>Close</button></td>
                                </tr>
                              )}
                            </tbody>
                          </table>}
      
                      </>);
                  default:
                    return <div>asdasd</div>;
                }
            })()}*/}
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
  backgroundColor: 'rgb(31, 126, 204)',
  width: 100,
  height: 50,
  fontSize: 20,
  color: '#FFFFFF',
  float: 'right',
  marginRight: 80,
  marginTop: -90,
  border: 'rgb(31, 126, 204)'
}

const bb = {
  backgroundColor: 'rgb(109, 191, 209)',
  width: 110,
  height: 50,
  fontSize: 20,
  color: '#FFFFFF',
  float: 'left',
  marginLeft: 200,
  marginTop: -65,
  border: 'rgb(31, 126, 204)'
}

const a = {
  backgroundColor: '#4ABAE2',
  color: '#FFFFFF',
}

const tbl = {
  marginTop: 100,
  outline: 'solid',
  marginLeft: -300,

}
 
const mm = {
  marginTop:-700,
  width:300,
  color:'black'
}

export default newComplaints