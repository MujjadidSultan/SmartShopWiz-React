import React, { Component } from 'react'
import { updatecategory, getcategorybyid } from './UserFunctions';
import SideBar from './sidebar';
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'
import {MDBCol, MDBRow } from 'mdbreact';

const add = 'http://localhost:5000/categories/'

class updateCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category_name: '',
      description: '',
      category_id:'',
      lists:{},
      errors: {},
      category_image: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
 
  }
  componentDidMount() {
    const id = localStorage.upid
    console.log("component");
    console.log(id);
    const cat = {
      category_id: id
    }

    getcategorybyid(cat).then(data => {
      this.setState({
        category_name: data[0].category_name,
        description: data[0].description,
        category_id: data[0].category_id,
        category_image:data[0].category_image
    })})
    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }  
  
  onSubmit(e){
    e.preventDefault()
    const updatecat = {
        category_name: this.state.category_name,
        description: this.state.description,
        category_id: this.state.category_id
      }
  
      updatecategory(updatecat).then(res => {
        localStorage.removeItem('upid')
        this.props.history.push(`/viewcategories`)
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
                    <h3>Update Category!!!</h3>
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
                    <img src={add + this.state.category_image} className="rounded float-right" alt="aligment" style={ii} />
                  </MDBCol>
                </MDBRow>
                  <form noValidate onSubmit={this.onSubmit}>
                    <table style={tbl}>
                    {/*{lists.map(list =>*/}
                      <tbody>
                        <tr>
                          <td>Category Name</td>
                          <td><input
                            id="1"
                            type="text"
                            className="form-control"
                            name="category_name"
                            value={this.state.category_name}
                            onChange={this.onChange}
                          /></td>
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
    height: 150,
    width: 250
  }

export default updateCategory
