import React, { Component } from 'react'
import SideBar from './sidebar';
import './dashboard.css';
import './viewproducts.css';
import l from '../images/l.jpg'; 
import {logout, getoneproduct, addcart} from './UserFunctions'
import QrReader from "react-qr-reader";

const ENTER_KEY = 13;

class Bill extends Component {
    constructor(props){
        super(props);

        this.state = {
          lists:[],
          errors: {},
          delay: 300,
          result: "No result",
          scannedProducts: [],
          productsData: [],
          quantity: [],
          prod_id: '',
          totalArray: [],
          total_amount: 0,
          cart_products: []
          
        }

        this.handleScan = this.handleScan.bind(this);
    
    }

    dashboard = () => {this.props.history.push("/dashboard");}

    logout = () => {
        localStorage.removeItem('jwtToken');
        logout().then().catch()
        this.props.history.push("/login");

    }

    saveQuantity(id, price, name, e){

      if (e.keyCode=== ENTER_KEY) {
        console.log(id)
        console.log(price)
        var x = (e.target.value)
        var total = (price * x)
        console.log(total)

        for (let i = 0; i < this.state.productsData.length; i++) {

          if (this.state.productsData[i].product_id == id) {
            
            if (this.state.productsData[i].quantity == '' ) {
            this.state.productsData[i].quantity = x;
            this.state.productsData[i].total_price= total;
            var t = this.state.total_amount + total;

            this.setState({total_amount: t}, () =>  console.log(this.state.total_amount))

            var obj = {product_id:  this.state.productsData[i].product_id.toString(), product_quantity: this.state.productsData[i].quantity.toString()}
            this.state.cart_products.push(obj);
            this.setState({cart_products: this.state.cart_products});
           

            }
          }

          console.log(this.state.productsData)
          this.setState({productsData: this.state.productsData})
          
        }

       // var obj ={product_id: id, product_price: price, quantity: x, total_price: total}
       // this.state.totalArray.push(obj);
       // this.setState({totalArray: this.state.totalArray}, ()=> console.log(this.state.totalArray));
       // var obj= {product_id: this.state.prod_id, quantity: e.target.value}
      //  this.state.quantity.push(obj);
      //  this.setState({quantity: this.state.quantity}, ()=> console.log(this.state.quantity));

      //this.setState({quantity: e.target.value}, ()=> console.log(this.state.quantity))
      }

    }

    handleScan(product_id) {
        if (product_id) {
          if (product_id !== this.state.scannedAlready) {
          var obj = {id: product_id}
          this.state.scannedProducts.push(obj);

          this.setState({
            result: product_id, scannedAlready: product_id
          }, ()=> 
          getoneproduct(product_id).then( data => {
            var obj = {product_id: data[0].product_id, product_name : data[0].product_name, price: data[0].price, quantity: '', total_price: ''}
            this.state.productsData.push(obj);
            this.setState({productsData: this.state.productsData})
            console.log(this.state.productsData)
          }
          
          ));
        }
      }


      }

    handleError(err) {
        console.error(err);
      }

    click = () => {

      const newCart = {
        total_bill : this.state.total_amount,
        products: this.state.cart_products,
      }
        addcart(newCart).then(data => 
          {var ob = data;  this.props.history.push({ pathname: '/payment', state: {cart_id: ob, total: this.state.total_amount}});
        }
          )
      
    }

    render() {

      const { productsData, totalArray } = this.state;
        return(
            <div >
                <nav /*style={nav}*/>
                <SideBar/>
                    <div style={jumbo}>
                        <center> 
                            <h1 style={hv}>Smart ShopWiz </h1>
                            <h3>Bill Generation!!!</h3>
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
                        <div>
                            <QrReader
                              delay={this.state.delay}
                              onError={this.handleError}
                              onScan={this.handleScan}
                              style={oo}/>
                            <br/>
                            <p align='center' style={{color:'white'}}>{this.state.result}</p>
                        </div>
                       
                        
                        <table class="readtab" align="center" border="1" style={tbl}>
                        <thead>
                          <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                      
                        <tbody>
                
                            {productsData.map(list =>
                            
                            <tr muID={list.product_id} >
                                <td> {list.product_name} </td>
                                <td> {list.price} </td>
                                <td><input
                                  type="text"
                                  className="form-control"
                                  name="quantity"
                                //  value={this.state.quantity}
                                //  onMouseLeave={this.saveQuantity.bind(this)}
                                  onKeyDown={this.saveQuantity.bind(this, list.product_id, list.price, list.product_name)}/></td>
                                <td>{list.total_price}</td>
                            </tr> 
                            )}
                        </tbody>
                        <tr>
                        <p>Total Amount: {this.state.total_amount} </p>
                        </tr>
                        <br/>
                        <tr>
                        <button className="button button2" style={bbb} 
                                onClick={this.click}>Confirm
                        </button>
                        </tr>
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
  
  const oo = {
      marginTop:-300,
      width:500,
      marginLeft:160
  }

  const tbl = {
    marginTop: -650,
   outline:'solid',
 }

 const bbb = {
  backgroundColor:  'rgb(31, 126, 204)',
  width:100,
  height:50,
  fontSize: 20,
  color: '#FFFFFF',
  float:'align',
  marginLeft: 180,
  marginTop: -90,
  border: 'rgb(31, 126, 204)'
 }

export default Bill