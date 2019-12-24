import React, { Component } from 'react'
import { updatesupplier, getsupplierbyid } from './UserFunctions';
import SideBar from './sidebar';
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

class UpdateSupplier extends Component {
  constructor(props) {
    super(props)
    this.state = {
      supplier_name: '',
      supplier_quantity: '',
      product_id:'',
      supplier_id:'',
      lists:{},
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
 
  }
  componentDidMount() {
    const id = localStorage.upid
    console.log("component");
    console.log(id);
    const sup = {
      supplier_id: id
    }

    getsupplierbyid(sup).then(data => {
      this.setState({
        supplier_name: data.supplier_name,
        supplier_quantity: data.supplier_quantity,
        product_id: data.product_id,
        supplier_id: data.supplier_id
    })})
    console.log(this.state.supplier_name)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }  
  onSubmit(e){
    e.preventDefault()
    const updatesup = {
        supplier_name: this.state.supplier_name,
        supplier_quantity: this.state.supplier_quantity,
        product_id: this.state.product_id,
        supplier_id: this.state.supplier_id
      }
      console.log(updatesup.supplier_id)
      updatesupplier(updatesup).then(res => {
        localStorage.removeItem('upid')
        this.props.history.push(`/viewsuppliers`)
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
                    <h3>Update Supplier!!!</h3>
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
                    <table style={tbl}>
                    {/*{lists.map(list =>*/}
                      <tbody>
                        <tr>
                          <td>Supplier Name</td>
                          <td><input
                            id="1"
                            type="text"
                            className="form-control"
                            name="supplier_name"
                            value={this.state.supplier_name}
                            onChange={this.onChange}
                          /></td>
                        </tr>
                        <tr>
                          <td>Supplied Quantity</td>
                          <td><input
                            id="2"
                            type="text"
                            className="form-control"
                            name="supplier_quantity"
                            value={this.state.supplier_quantity}
                            onChange={this.onChange}
                          /></td>
                        </tr>
                        
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
    border: 'rgb(31, 126, 204)'
  }

  const tbl = {
    outline:'solid',
    marginTop: -350,
    width: 600
  }
  
export default UpdateSupplier
