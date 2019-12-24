import React, { Component } from 'react'
import { addcategory } from './UserFunctions'
import SideBar from './sidebar';
import './addProduct.css';
import { MDBAlert } from "mdbreact";
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

class addCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category_id:'',
      category_image: '',
      category_name:'',
      description:'', 
      message:'',
    }
   
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    
    console.log(this.state.category_image)
    const newCat = {
      category_id: this.state.category_id,
      category_image: this.state.category_image,
      category_name: this.state.category_name,
      description: this.state.description,
      message:''
    }

    addcategory(newCat).then(data => {
      if(data === "Already Existed!"){
        this.setState({ message:data });
      }
      else if(data === "No Picture"){
        this.setState({ message:data });
      }

      else if (data ==="Image not allowed") {
        console.log('ay')
        this.setState({ message:data });
      }
      else{
        //alert('Record Added Successfully')
        //this.props.history.push(`/addcategory`) 
        //console.log("Added");
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


  render() {
    
    const {message} = this.state;
    return (
      <div>
        <nav /*style={nav}*/>
          <SideBar/>
              <div style={jumbo}>
          
                <center> 
                    <h1 style={hv}>Smart ShopWiz </h1>
                    <h3>Add a Category!!!</h3>
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
                    <div className="form-group">
                      <tbody>
                        
                        {/*<tr>
                          <td>Category ID</td>
                          <td><input
                            type="text"
                            className="form-control"
                            name="category_id"
                            value={this.state.category_id}
                            onChange={this.onChange}/></td>
                        </tr>*/}

                        <tr>
                          <td>Category Image</td>
                          <td><input type="file" name="category_image" 
                            onChange={(e)=>{this.setState({category_image: e.target.files[0],loaded: 0});}}></input></td>
                        </tr>

                        <tr>
                          <td>Category Name</td>
                          <td><input
                            type="text"
                            className="form-control"
                            name="category_name"
                            value={this.state.category_name}
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
                      className="button button2" align="right"
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
  marginTop:-350,
  outline:'solid',
}

export default addCategory
