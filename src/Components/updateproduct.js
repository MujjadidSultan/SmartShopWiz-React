import React, { Component } from 'react'
import { updateproduct, getproductbyid } from './UserFunctions';
import SideBar from './sidebar';
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'
import {MDBCol, MDBRow } from 'mdbreact';

const add = 'http://localhost:5000/products/'

class updateProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product_name: '',
      description: '',
      price:'',
      status:'',
      category_id:'',
      lists:{},
      errors: {},
      expiration_date:"none",
      manufacture_date:"none",
      product_id:'',
      subcategory_id:'',
      product_image: ''
      
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
 
  }



  componentDidMount() {
    const id = localStorage.upid


    console.log(id);

    getproductbyid(id).then(data => {
      this.setState({
      product_name: data[0].product_name,
      description: data[0].description,
      price: data[0].price,
      status: data[0].status,
      category_id: data[0].category_id,
      subcategory_id: data[0].subcategory_id,
      product_id:data[0].product_id,
      product_image:data[0].product_image
    }, () => console.log(this.state.subcategory_id))})
    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }  
  onSubmit(e){
    e.preventDefault()
    const updateprod = {
        product_name: this.state.product_name,
        description: this.state.description,
        price: this.state.price,
        status: this.state.status,
        category_id: this.state.category_id,
        subcategory_id: this.state.subcategory_id,
        manufacture_date:this.state.manufacture_date,
        expiration_date:this.state.expiration_date,
        product_id:this.state.product_id,
      }
  
      updateproduct(updateprod).then(res => {
        localStorage.removeItem('upid')
        this.props.history.push(`/viewproducts`)
      })
       
  }

  dashboard = () => {this.props.history.push("/dashboard");}

  logout = () => {
    localStorage.removeItem('jwtToken');
    logout().then().catch()
    this.props.history.push("/login");
  }

  render() {

    //const { lists } = this.state;
    return (
        <div>
          <nav /*style={nav}*/>
          <SideBar/>
              <div style={jumbo}>
                <center> 
                    <h1 style={hv}>Smart ShopWiz </h1>
                    <h3>Update Product!!!</h3>
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
                <MDBRow>
                  <MDBCol>
                    <img src={add + this.state.product_image} className="rounded float-right" alt="aligment" style={ii} />
                  </MDBCol>
                </MDBRow>
                  <form noValidate onSubmit={this.onSubmit}>
                    <table style={tbl}>
                    {/*{lists.map(list =>*/}
                      <tbody>
                        <tr>
                          <td>Product Name</td>
                          <td><input
                            id="1"
                            type="text"
                            className="form-control"
                            name="product_name"
                            value={this.state.product_name}
                            onChange={this.onChange}
                          /></td>
                          {/*<td>
                            <img src={add + this.state.product_image}/>
                          </td>*/}
                        </tr>
                        <tr>
                          <td>Description</td>
                          <td><input
                            id="2"
                            type="text"
                            className="form-control"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                          /></td>
                        </tr>
                        <tr>
                          <td>Price</td>
                          <td><input
                            id="3"
                            type="text"
                            className="form-control"
                            name="price"
                            value={this.state.price}
                            onChange={this.onChange}
                          /></td>
                        </tr>
                        <tr>
                          <td>Status</td>
                          <td><input
                            id="4"
                            type="text"
                            className="form-control"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                          /></td>
                        </tr>
                      {/*} <tr>
                          <td>manufacture date</td>
                          <td><input
                            id="4"
                            type="text"
                            className="form-control"
                            name="manufacture_date"
                            value={this.state.manufacture_date}
                            onChange={this.onChange}
                          /></td>
                        </tr>
                        <tr>
                          <td>expiration date</td>
                          <td><input
                            id="4"
                            type="text"
                            className="form-control"
                            name="expiration_date"
                            value={this.state.expiration_date}
                            onChange={this.onChange}
                          /></td>
                    </tr>*/}
                        {/*<tr>
                          <td>Description</td>
                          <td><input
                            id="5"
                            type="text"
                            className="form-control"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                          /></td>
                        </tr>*/}
                      </tbody>
                      </table>

                      <br/>
                      <button
                          type='submit'
                          className="button button2" 
                          style={m}
                          onClick={this.onSubmit}> Save Changes
                      </button>
                  </form>
                </div>
            </div>
          </div>
      </div>
    )
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
    marginLeft: -300
  }

  const tbl = {
    outline:'solid',
    marginTop: -400,
    marginLeft: -300
  }

  const ii = {
    marginTop: -400,
    marginRight: -100,
    height: 290,
    width: 300
  }

export default updateProduct
