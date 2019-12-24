import React, { Component } from 'react';
import SideBar from './sidebar';
import { getoneresponse, addcomplaintresponse, ticketstatusupdate } from './UserFunctions'
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'
import { TextArea } from "semantic-ui-react";

class ComplaintResponse extends Component {
    constructor(props){
        super(props);

        this.state = {
          lists:[],
          errors: {},
          selected: {},
          ticket_id: this.props.location.state.ticket_id,
          employee_id: '',
          customer_id: this.props.location.state.customer_id,
          message: '',
          complaint: this.props.location.state.complaint,
          customer_name: this.props.location.state.customer_name,
          date: this.props.location.state.date,
          time: this.props.location.state.time,
          response: []
        }

    }
    

    dashboard = () => {this.props.history.push("/dashboard");}

    logout = () => {
        localStorage.removeItem('jwtToken');
        logout().then().catch()
        this.props.history.push("/login");
    }

    componentWillMount(){
      console.log(this.state.ticket_id, this.state.complaint, this.state.date, this.state.time)
      
      getoneresponse(this.state.ticket_id).then(
        data => { this.setState({response: data[0].responses}, () => console.log(this.state.response))}  
      )

      
    }


    onSubmit(e){
      e.preventDefault()
      console.log(this.state.message)

      var id= this.state.ticket_id

      console.log(id)

      const response = {
        ticket_id: this.state.ticket_id,
        message: this.state.message
      }

      addcomplaintresponse(response).then(data => {console.log(data)})

      ticketstatusupdate(id).then(data=> {console.log(data)})

      this.props.history.push("/viewnewcomplaints");
    }


    render() {

        const {message} = this.state;

        return(

            <div>
                <nav /*style={nav}*/>
                <SideBar/>
                    <div style={jumbo}>
                        <center> 
                            <h1 style={hv}>Smart ShopWiz </h1>
                            <h3>Complaint Response!!!</h3>
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
                    <img src={l} class="img-fluid" alt="placeholder" width="1518" style={ii}/>
                    <div class="mask flex-center rgba-blue-light">

                    <table class="readtab" align="center" border="1" style={tbl} >
                      <thead>
                        <tr>
                          <th>Submitted By:&nbsp;&nbsp;{this.state.customer_name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
                              Submitted On:&nbsp;&nbsp;{this.state.date} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                              Submitted At:&nbsp;&nbsp;{this.state.time} 
                          </th>
                        </tr>

                        <tr>
                          <th>Complaint Details:&nbsp;&nbsp;{this.state.complaint}
                          </th>
                        </tr>

                        <tr>
                          <th>Complaint Response:&nbsp;&nbsp;
                            <ul style={{listStyleType: 'none'}}>
                            {this.state.response.map(listitem => (
                              <li key={listitem.res_ticket_id}>
                                {listitem.from_user_id === this.state.customer_id && (<h5>{this.state.customer_name}</h5>)}
                                {listitem.from_user_id !== this.state.customer_id && (<h5>Smart ShopWiz</h5>)}
                                <h5>{listitem.message}</h5>
                                <h5>{listitem.date}</h5>
                                <h5>{listitem.time}</h5>
                                <h5>-----------------------------------------------------------</h5>
                              </li>
                            ))}
                            </ul>
                          </th>
                        </tr>

                        <tr></tr>

                        
                        <TextArea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="5"
                          placeholder="Enter Response"
                          onChange={(e, {value}) => {this.setState({message: value})}}
                          />

                        <button
                          type="submit" 
                          className="button button2" 
                          style={m}
                          onClick={this.onSubmit.bind(this)}>Submit
                        </button>
                        <br/>

                      </thead> 
                      
                    </table>

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

const m ={
  backgroundColor:  'rgb(31, 126, 204)',
  width:150,
  height:50,
  fontSize: 20,
  color: '#FFFFFF',
  border: 'rgb(31, 126, 204)',
  marginTop: 20,
  marginLeft: 200
}

 const tbl = {
  marginTop:-550,
  marginLeft:460,
  //width:1200
}

const ii = {
  height:2100
}

export default ComplaintResponse