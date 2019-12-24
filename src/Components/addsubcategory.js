import React, { Component } from 'react'
import { addsubcategory } from './UserFunctions'
import SideBar from './sidebar';
import './addProduct.css';
import { MDBAlert } from "mdbreact";
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

class ViewSubCategory extends Component {

    constructor(props) {
        super(props)
        this.state = {
          category_id:'',
          category_name: '',
          subcategory_id: '',
          subcategory_name: '',
          description: '',
          message:'',
          categories:[],
        }
       
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
      }

      componentDidMount() {
        fetch("http://localhost:3000/categories/getallcategory")
        .then(response => response.json())
          .then(data => {
            console.log(data);
            this.setState({ categories: data  })
          })
          .catch(error => console.log(error));
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
    
    
      onSubmit(e) {
        e.preventDefault()
        console.log(this.state.category_id);
        const newSub = {
          category_id: this.state.category_id,
          category_name: this.state.category_name,
          subcategory_id: this.state.subcategory_id,
          subcategory_name: this.state.subcategory_name,
          description: this.state.description,
          message:''
        }
        
        console.log(this.state.subcategory_name)
    
        addsubcategory(newSub).then(data => {
          if(data === "Already Existed!"){
            this.setState({ message:data });
          }
          else{
            //alert('Record Added Successfully')
            window.location.reload();
          }
        })
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
                        <h3>Add a Sub Category!!!</h3>
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
                              <td>Category</td>
                              <td>
                                <select width="50" onChange={(e)=>{this.handleChange(e)}}>
                                  {this.state.categories.map((category,id)=>(
                                    <option key={id} value={category.category_id}>
                                      {category.category_name}
                                    </option>
                                  ))}    
                                </select>
                              </td>
                            </tr>
                            
                            <tr>
                              <td>Sub Category Name</td>
                              <td><input
                                type="text"
                                className="form-control"
                                name="subcategory_name"
                                value={this.state.subcategory_name}
                                onChange={this.onChange}/></td>
                            </tr>
    
                            <tr>
                              <td>Description</td>
                              <td><input
                                type="text"
                                className="form-control"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChange}/></td>
                            </tr>
                    
                            <br/>
                          </tbody>
                        </div>
    
                        <br/>
    
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
      marginLeft: 60
  }
  
  const tbl = {
    marginTop:-300,
    outline:'solid',
  }

export default ViewSubCategory