import React, { Component } from 'react'
import { addproduct } from './UserFunctions'
import SideBar from './sidebar';
import './addProduct.css';
import { MDBAlert } from "mdbreact";
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

class addProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category_id:'',
      subcategory_id:'',
      product_image: null,
      product_name: '',
      price: '',
      product_des: '',
      status: '',
      product_cat: '',
      quantity: '', 
      message:'',
      categories:[],
      subcategories:[], 
      filtersub: []
    }
   
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this);
    
  }

  componentDidMount() {
    fetch("http://localhost:3000/categories/getallcategory")
    .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ categories: data  })
      })
      .catch(error => console.log(error));

      fetch("http://localhost:3000/subcategories/getallsubcategory")
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({ subcategories: data, filtersub: data  }, () => {console.log(this.state.subcategories)})
        })
        .catch(error => console.log(error));

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onChangeHandler=event=> {

    console.log(this.state.product_image)
  }

  onSubmit(e) {
    e.preventDefault()
    console.log(this.state.category_id);
    const newProd = {
      category_id: this.state.category_id,
      subcategory_id: this.state.subcategory_id,
      product_image: this.state.product_image,
      product_name: this.state.product_name,
      price: this.state.price,
      product_des: this.state.product_des,
      status: this.state.status,
      //product_cat: this.state.product_cat,
      quantity: this.state.quantity,
      message:''
    }
    if(this.state.category_id === "" || this.state.subcategory_id === "" || this.state.product_image === null || this.state.product_name === "" ||
        this.state.price === "" || this.state.product_des === "" || this.state.status === undefined || this.state.quantity === ""){
          this.setState({ message:"Error: Please fill all textfields" });
          return 
    }
    else{

    addproduct(newProd).then(res => {
        window.location.reload();
    })
    }
  }

  dashboard = () => {this.props.history.push("/dashboard");}

  logout = () => {
    localStorage.removeItem('jwtToken');
    logout().then().catch()
    this.props.history.push("/login");
  }

  handleChange(e) {
    let {name, value} = e.target;
    console.log(e.target.value);
    this.setState({
      category_id:  e.target.value,
    }, () => 
      { //for (let index = 0; index < this.state.subcategories.length; index++) {
       // console.log(this.state.subcategories[index].category_id)
        console.log(this.state.category_id)
        this.setState({filtersub : this.state.subcategories.filter(item => {
          if (item.category_id == this.state.category_id){
            console.log(item)
            return item
          }
        })  
      })
    });


  }

  handleChangerr(e) {
    let {name, value} = e.target;
    console.log(e.target.value);
    this.setState({
      subcategory_id:  e.target.value,
    
    });
  }
  
  render() {
    
    const {message} = this.state;
    return (
      <div>
        <nav /*style={nav}*/>
          <SideBar/>
              <div style={jumbo}>
                <center> 
                    <h1 style={hv}>Smart ShopWiz </h1>
                    <h3>Add a Product!!!</h3>
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
                
                <form noValidate onSubmit={this.onSubmit} method="POST" action="/create" enctype="multipart/form-data">
                  <table style={tbl}>
                    <div className="form-group">
                      <tbody>
                      
                        <tr>
                          <td>Product Image</td>
                          <td><input type="file" name="product_image" 
                            onChange={(e)=>{this.setState({product_image: e.target.files[0],loaded: 0,});}}/></td>
                        </tr>
                        
                        <tr>
                          <td>Product Name</td>
                          <td><input
                            type="text"
                            className="form-control"
                            name="product_name"
                            value={this.state.product_name}
                            onChange={this.onChange}/></td>
                        </tr>

                        <tr>
                          <td>Price</td>
                          <td><input
                            type="text"
                            className="form-control"
                            name="price"
                            value={this.state.price}
                            onChange={this.onChange}/></td>
                        </tr>

                        <tr>
                          <td>Description</td>
                          <td><input
                            type="text"
                            className="form-control"
                            name="product_des"
                            value={this.state.product_des}
                            onChange={this.onChange}/></td>
                        </tr>

                        {/*<tr>
                          <td>Status</td>
                          <td><input
                            type="text"
                            className="form-control"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}/></td>
                        </tr>*/}

                        <tr /*style={{color: 'white', marginLeft:50}}*/>
                        <td>Status</td> &nbsp;&nbsp;&nbsp;&nbsp;
                          {/*<label htmlFor="name" >Status:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                          <input type="radio" name="status" value="Available" onChange={this.onChange} style={mo}/> Available &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input type="radio" name="status" value="Not Available" onChange={this.onChange}  style={mo}/> Not Available
                        </tr>

                        <tr>
                          <td>Category</td>
                          {/*<td><input
                            type="text"
                            className="form-control"
                            name="product_cat"
                            value={this.state.product_cat}
                            onChange={this.onChange}/></td>*/}
                          <td>
                            <select width="150" onChange={(e)=>{this.handleChange(e)}}>
                              {this.state.categories.map((category,id)=>(
                                <option key={id} value={category.category_id}>
                                  {category.category_name}
                                </option>
                              ))}    
                            </select>
                          </td>
                        </tr>

                        <tr>
                          <td>Sub Category</td>
                          <td>
                            <select width="150" onChange={(e)=>{this.handleChangerr(e)}}>
                              {this.state.filtersub.map((subcategory,id)=>(
                                <option key={id} value={subcategory.subcategory_id}>
                                  {subcategory.subcategory_name}
                                </option>
                              ))}    
                            </select>
                          </td>
                        </tr>

                        <tr>
                          <td>Quantity</td>
                          <td><input
                            type="text"
                            className="form-control"
                            name="quantity"
                            value={this.state.quantity}
                            onChange={this.onChange}/></td>
                        </tr>
                      {/*<tr>
                        <label htmlFor="id">Product ID:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="text"
                          className="form-control"
                          name="product_id"
                          value={this.state.product_id}
                          onChange={this.onChange}
                        />
                      </tr>

                    
                      <tr>
                        <label htmlFor="id">Product Image:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="file" name="product_image" 
                        onChange={(e)=>{this.setState({selectedFile: e.target.files[0],loaded: 0,});}}/>
                      </tr>
                  
                      <tr>
                        <label htmlFor="name">Product Name:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="text"
                          className="form-control"
                          name="product_name"
                          value={this.state.product_name}
                          onChange={this.onChange}
                        />
                      </tr>

                      <tr>
                        <label htmlFor="price">Price:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="text"
                          className="form-control"
                          name="price"
                          value={this.state.price}
                          onChange={this.onChange}
                          />
                      </tr>

                      <tr>
                        <label htmlFor="des">Description:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="text"
                          className="form-control"
                          name="product_des"
                          value={this.state.product_des}
                          onChange={this.onChange}
                          />
                      </tr>

                      <tr>
                        <label htmlFor="status">Status:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="text"
                          className="form-control"
                          name="status"
                          value={this.state.status}
                          onChange={this.onChange}
                          />
                      </tr>

                      <tr>
                        <label htmlFor="date">Category ID:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="text"
                          className="form-control"
                          name="product_cat"
                          value={this.state.product_cat}
                          onChange={this.onChange}
                          />
                      </tr>

                      <tr>
                        <label htmlFor="quantity">Quantity:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="text"
                          className="form-control"
                          name="quantity"
                          value={this.state.quantity}
                          onChange={this.onChange}
                          />
                      </tr>*/}
                      <br/>
                      </tbody>
                    </div>

                    <br/>
                    {/* {message !== '' &&
                      <div className="alert alert-warning alert-dismissible" role="alert"> <br/>
                        { message }
                    </div> } */}

                    {message !== '' && 
                      <MDBAlert color="primary" style={mm} >
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
    marginLeft: 80
}

const tbl = {
  marginTop:-200,
  outline:'solid',
}

const mo = {marginTop:17}

const mm = {color:'white'}

export default addProducts
