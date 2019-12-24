import React, { Component } from 'react'
import { addsupplier } from './UserFunctions'
import SideBar from './sidebar';
import { MDBAlert } from "mdbreact";
import l from '../images/l.jpg';
import {logout, product_list} from './UserFunctions'
import ReactSearchBox from 'react-search-box'

class AddSupplier extends Component {
    constructor(props) {
        super(props)
        this.state= {
            supplier_name:'',
            supplier_quantity:'',
            product_id:'', 
            product_name:'',
            message:'',
            products:[]
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
      product_list()
      .then(data => {this.setState({products:data})
     });
     console.log(this.state.products);
      
    }

   /* onProduct(product, e) {
      this.setState({product_name: product}, () => console.log(this.state.product_name))
    }*/

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
    
      onSubmit(e) {
        e.preventDefault()
        
        const newSup = {
          supplier_name: this.state.supplier_name,
          supplier_quantity: this.state.supplier_quantity,
         // product_id: this.state.product_id,
          product_name: this.state.product_name
         // message:''
        }
    
        addsupplier(newSup).then(data => {
          if(data === "Already Existed!"){
            this.setState({ message:data });
          }
          else{
            //alert('Record Added Successfully')
            //window.location.reload();
          }
        })
      }

      dashboard = () => {this.props.history.push("/dashboard");}
      
      logout = () => {
        localStorage.removeItem('jwtToken');
        logout().then().catch()
        this.props.history.push("/login");
      }
      
    render(){
      var data = []
      for(let i=0; i<this.state.products.length; i++){
        data.push({key:this.state.products[i].product_name, value:this.state.products[i].product_name})
      }
      console.log(this.state.products)
        const {message} = this.state;
    return (
      <div>
        <nav /*style={nav}*/>
          <SideBar/>
              <div style={jumbo}>
                <center> 
                    <h1 style={hv}>Smart ShopWiz </h1>
                    <h3>Add a Supplier!!!</h3>
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

              <div className="col-md-6 mt-5 mx-auto" align="center">
                
                <form noValidate onSubmit={this.onSubmit}>
                  <table style={tbl} width="75%">
                    <div className="form-group" >
                      <tbody>

                        <tr>
                          <td>Supplier Name</td>
                          <td width="75%"><input
                            type="text"
                            className="form-control"
                            name="supplier_name"
                            value={this.state.supplier_name}
                            onChange={this.onChange}/></td>
                        </tr>

                        <tr>
                          <td>Supplied Quantity</td>
                          <td><input
                            type="text"
                            className="form-control"
                            name="supplier_quantity"
                            value={this.state.supplier_quantity}
                            onChange={this.onChange}/></td>
                        </tr>

                        <tr><td>Product Name</td>
                        <td style={{color:'black'}}><ReactSearchBox
                            placeholder="Products"
                            data={data}
                            inputBoxFontColor={"black"}
                            dropDownHoverColor={"purple"}
                            dropDownBorderColor={"blue"}
                          //  value="product_name"
                            onSelect={record => this.setState({product_name: record.value}, ()=>console.log(this.state.product_name))}
                          //  callback={record => console.log(record)}
                          /></td>
                        </tr>

                      <br/>
                      </tbody>
                    </div>

                    <br/>
                    {/* {message !== '' &&
                      <div className="alert alert-warning alert-dismissible" role="alert"> <br/>
                        { message }
                    </div> } */}

                    {message !== '' && 
                      <MDBAlert color="primary" >
                        { message }
                    </MDBAlert>}

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <button 
                      type="submit"
                      className="button button2" align="center"
                      style={r}>Add
                    </button> 
                    
                    <br/><br/>
                    </table>
                </form>
              </div>
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

  const r ={
    backgroundColor:  'rgb(31, 126, 204)',
      width:100,
      height:50,
      fontSize: 20,
      color: '#FFFFFF',
      border: 'rgb(31, 126, 204)',
      marginLeft: 130
  }

  const tbl = {
    marginTop:-400,
    outline:'solid',
   
  }
  
  export default AddSupplier
  