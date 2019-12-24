import React, { Component } from 'react'
import { product_list, deleteproduct, updateproductstatus } from './UserFunctions'
import SideBar from './sidebar';
import './dashboard.css';
import './viewproducts.css';
import { MDBCol, MDBIcon } from "mdbreact";
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

class ListOfProducts extends Component {
    constructor(props){
        super(props);

        this.state = {
          lists:[],
          status: '',
          errors: {},
          selected:'',
          forFilter: [],
          DisplayList: [],
          //selected: {},
          ArrayHolder:[],
          categories:[],
          products:[],
          search:''
        }
        
        this.searchFilterFunction = this.searchFilterFunction.bind(this);

    }

    componentDidMount() {
      product_list()
      .then(data => {this.setState({lists: data, ArrayHolder:data, products:data, forFilter: data}) });

      fetch("http://localhost:3000/categories/getallcategory")
      .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({ categories: data  })
        })
        .catch(error => console.log(error));
    
      
    }

    dashboard = () => {this.props.history.push("/dashboard");}

    logout = () => {
      localStorage.removeItem('jwtToken');
      logout().then().catch()
      this.props.history.push("/login");
    }

    handleSelect(item) {
      console.log(item);
      localStorage.setItem('upid',item)
      this.props.history.push("/updateproduct");
    }

    searchFilterFunction(e) {
      const {ArrayHolder} = this.state;
      const newData = ArrayHolder.filter(item => item.product_name.includes(e.target.value) );

      this.setState({ lists:newData, DisplayList:newData, search:e.target.value}, () => {
        console.log("NewData", newData);
      });
      console.log(e.target.value);
    }

    deleteProd = (item) => {
      const deleteprod = {
        product_id: item
      }
      console.log(deleteprod);
      deleteproduct(deleteprod).then(res => {
        this.componentDidMount()
        window.location.reload()
      })
    }

    changeStatus = (item, item2) => {

      if(item2==="Available"){
        item2="Not Available"
      }
      else{
        item2="Available"
      }
      const Changestats = {
        product_id: item,
        status: item2
      }
      console.log(Changestats);
      updateproductstatus(Changestats).then(res => {
        this.componentDidMount()
        window.location.reload()
      })
    }

    onselect = selected => {
      this.setState({ selected });
      console.log(selected.target.value) //it gives id of cateogry
      let selectedCategoryId = selected.target.value;
      let filterData=[];
      for( var i = 0; i<this.state.products.length;i++){
        //console.log(this.state.products[i]);
        if(selectedCategoryId === this.state.products[i].category_id){
          filterData.push(this.state.products[i]);
        }
      }
      
      //console.log(filterData)
      
        this.setState({DisplayList: filterData});
        //console.log('hi')
       // this.setState({DisplayList: this.state.forFilter}
    };

    
  render() {
    const {selected} = this.state.selected;
    const { lists, DisplayList } = this.state;
    
    return (
        <div >
          <nav /*style={nav}*/>
            <SideBar/>
                <div style={jumbo}>
                 <center> 
                     <h1 style={hv}>Smart ShopWiz </h1>
                     <h3>List of Products!!!</h3>
                </center>
                <button className="button button2" style={bb} 
                        onClick={this.dashboard}>Dashboard
                    </button><br/>
                <button className="button button2" style={b} 
                        onClick={this.logout}>Logout
                </button>
                
                <center>
                  <MDBCol md="3">
                    <form className="form-inline mt-4 mb-4">
                      <MDBIcon icon="search" />
                      <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search any Product"
                      onChange={this.searchFilterFunction} 
                      aria-label="Search"/>
                    </form>
                  </MDBCol>
                  <select style={ss} 
                      value={selected}
                      onChange={this.onselect}>
                                {this.state.categories.map((category,id)=>(
                                  <option key={id} value={category.category_id}>
                                    {category.category_name}
                                  </option>
                                ))}  
                    </select>
                </center>
                </div>
          </nav>
          
          <div class="view">
            <img src={l} class="img-fluid" alt="placeholder" width="1518"/>
            <div class="mask flex-center rgba-blue-light">
              {this.state.selected !== ''  && ( <table width="90%" style={tbl}>
                  <tr>
                    <div class="table-header-class">
                        <table width="100%" align="center">
                          <thead>
                              <tr>
                              <th style={{width:150}}>Product Name</th>
                              <th style={{width:50}}>Price</th>
                              <th style={{width:250}}>Description</th>
                              <th style={{width:102}}>Status</th>
                              <th style={{width:130}}>Category Name</th>
                              <th style={{width:130}}>Sub Category Name</th>
                              <th style={{width:50}}>Quantity</th>
                              <th style={{width:70}}>Edit</th>
                              <th style={{width:80}}>Delete</th>
                              <th style={{width:80}}>Change Status</th>
                              </tr>
                          </thead>
                        </table>
                    </div></tr>

                  <tr>
                  <div class="table-content-class">
                    <table width="100%" align="center">
                      <tbody>
            
                          {DisplayList.map(list =>
                          
                          <tr muID={list.product_id} selected={this.state.selected[list.product_id]} >
                              <td style={{width:170}}> {list.product_name} </td>
                              <td style={{width:72}}> {list.price} </td>
                              <td style={{width:283}}> {list.description} </td>
                              <td style={{width:114}}> {list.status} </td>
                              <td style={{width:147}}> {list.category_name} </td>
                              <td style={{width:148}}> {list.subcategory_name} </td>
                              <td style={{width:80}}> {list.quantity} </td>
                              <td style={{width:70}}><button id="edit" className="button button2" style={a} 
                                    onClick={this.handleSelect.bind(this, list.product_id)}>
                                    Edit</button></td>
                              <td style={{width:80}}><button className="button button2" style={a} 
                                onClick={this.deleteProd.bind(this, list.product_id)}>Delete</button></td>
                              <td style={{width:80}}><button className="button button2" style={a} 
                                onClick={this.changeStatus.bind(this, list.product_id, list.status)}>Change</button></td>
                          </tr> 
                          )}
                      </tbody>
                    </table>
                  </div></tr>
                </table>)}

              {/* 
               {this.state.selected !== ''  && ( <table class="readtab" align="center" border="1" style={tbl}>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Description</th>
                      <th>Status</th>
                     
                      <th>Category Name</th>
                
                      <th>Sub Category Name</th>
                      <th>Quantity</th>
                      <th>Edit</th>
                      <th>Delete</th>
                      <th>Change Status</th>
                    </tr>
                  </thead>
                
                  <tbody>
          
                      {DisplayList.map(list =>
                      
                      <tr muID={list.product_id} selected={this.state.selected[list.product_id]} >
                          <td> {list.product_name} </td>
                          <td> {list.price} </td>
                          <td> {list.description} </td>
                          <td> {list.status} </td>
                   
                          <td> {list.category_name} </td>
                
                          <td> {list.subcategory_name} </td>
                          <td> {list.quantity} </td>
                          <td><button id="edit" className="button button2" style={a} 
                                onClick={this.handleSelect.bind(this, list.product_id)}>
                                Edit</button></td>
                          <td><button className="button button2" style={a} 
                            onClick={this.deleteProd.bind(this, list.product_id)}>Delete</button></td>
                          <td><button className="button button2" style={a} 
                            onClick={this.changeStatus.bind(this, list.product_id, list.status)}>Change</button></td>
                      </tr> 
                      )}
                  </tbody>
                      </table>)}  */}
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
   marginTop: -100,
  outline:'solid',
}

const mm = {
  marginTop:-700,
  width:300,
  
}

const ss ={
  width:110,
  height:50,
  backgroundColor: 'rgb(31, 126, 204)',
  color: '#FFFFFF',
  border: 'rgb(31, 126, 204)'
}
 
export default ListOfProducts
