import React, { Component } from 'react';
import SideBar from './sidebar';
import l from '../images/l.jpg'; 
import {logout, getalldetailsofacart} from './UserFunctions'

class Sales extends Component {
    constructor(props){
        super(props);

        this.state = {
          lists:[],
          errors: {},
          selected: {},
          cart_id: this.props.location.state.cart_id,
          customer_name: this.props.location.state.customer_name,
          date: this.props.location.state.date,
          time: this.props.location.state.time,
          products: [],
          details: []
        }

    }
    

       dashboard = () => {this.props.history.push("/dashboard");}
       
       logout = () => {
        localStorage.removeItem('jwtToken');
        logout().then().catch()
        this.props.history.push("/login");
      }

      componentDidMount() {
        getalldetailsofacart(this.props.location.state.cart_id)
        .then(data => {this.setState({products: data[0].products, details: data}, () => console.log(this.state.details[0].bill))
         
      },
        
      )
        //console.log(this.state.date);
        //console.log(this.state.time);
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
                        <h3>Cart Details!!</h3>
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

              <table class="readtab" align="center" border="1" style={tbl} >
                      <thead>
                        <tr>
                          <th>Customer Name:&nbsp;&nbsp;{this.state.customer_name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
                              Date:&nbsp;&nbsp;{this.state.date} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                              Time:&nbsp;&nbsp;{this.state.time} 
                              <br/><br/>

                              <thead>
                                <tr> 
                                  <th>Product Name</th>
                                  <th>Quantity</th>
                                  <th>Price</th>
                                  <th>Rating</th>
                                  <th>Total Price</th>
                                </tr>
                              </thead>

                              <tbody>
                                {this.state.products.map((product,i)=>(
                                
                                <tr>
                                    <td> {product.product_name} </td>
                                    <td> {product.quantity} </td>
                                    <td> {product.price} </td>
                                    <td> {product.rating} </td>
                                    <td> {product.price_total} </td>
                                </tr> 
                                ))}
                                </tbody> 
                            
                          </th>
                        </tr>
                        
                        <th>
                          {this.state.details.map((detail,i)=>(
                            <span>
                              <p>Given Cash:&nbsp;&nbsp;<>{detail.given_cash}</></p>
                              <p>Returned Cash:&nbsp;&nbsp;<>{detail.returned_cash}</></p>
                              <p>Feedback:&nbsp;&nbsp;<>{detail.feedback}</></p>
                              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                 Total bill:&nbsp;&nbsp;<>{detail.bill}</></p>
                            </span>
                          ))}
                                
                        </th>

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

const a = {
  backgroundColor: '#4ABAE2',
  color: '#FFFFFF',
 }

 const tbl = {
  outline:'solid',
  marginTop: -350
}



export default Sales