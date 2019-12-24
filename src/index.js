import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


import Home from './Components/home';
import Login from './Components/login';
import Dashboard from './Components/dashboard';
import ListOfEmployees from './Components/viewemployees'
import addEmployees from './Components/addEmployees'
import UpdateEmployees from './Components/updateEmployees'
import Profile from './Components/profile'
import ChangePassword from './Components/changepassword'
import ForgotPassword from './Components/forgotpassword'
import VerifyCode from './Components/verifycode'
import Password from './Components/password'
import Update from './Components/update'
import ViewCustomer from './Components/viewcustomer'
import ViewProduct from './Components/viewproducts'
import addProduct from './Components/addProduct'
import updateProduct from './Components/updateproduct'
import ViewCategory from './Components/viewcategories'
import addCategory from './Components/addcategory'
import updateCategory from './Components/updatecategory'
import Reviews from './Components/reviews'
import pastComplaints from './Components/pastcomplaints'
import newComplaints from './Components/newcomplaints'
import AddSupplier from './Components/addsupplier'
import UpdateSupplier from './Components/updatesupplier'
import ViewReservations from './Components/reservedproducts'
import ViewSuppliers from './Components/viewsuppliers';
import ComplaintCategory from './Components/complaintcategory'
import updateComplaintcategory from './Components/updatecomplaintcategory'
import AddComplaintcategory from './Components/addcomplaintcategory'
import Sales from './Components/sales'
import CartDetails from './Components/cartdetails'
import ComplaintResponse from './Components/complaintresponse'
import ViewSubCategory from './Components/viewsubcategories'
import AddSubCategory from './Components/addsubcategory'
import UpdateSubCategory from './Components/updatesubcategory'
import Guidance from './Components/guidance'
import Bill from './Components/bill'
import Payment from './Components/payment'
import Test from './Components/test'
import Test2 from './Components/test2'

ReactDOM.render(
    
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={Login}/> 
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/viewemployees' component={ListOfEmployees}/>
                <Route path='/addemployees' component={addEmployees}/>
                <Route path='/updateemployees' component={UpdateEmployees}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/update' component={Update}/>
                <Route path='/changepassword' component={ChangePassword}/>
                <Route path='/forgotpassword' component={ForgotPassword}/>
                <Route path='/code' component={VerifyCode}/>
                <Route path='/password' component={Password}/>
                <Route path='/viewcustomers' component={ViewCustomer}/>
                <Route path='/viewproducts' component={ViewProduct}/>
                <Route path='/addproducts' component={addProduct}/>
                <Route path='/updateproduct' component={updateProduct}/>
                <Route path='/viewcategories' component={ViewCategory}/>
                <Route path='/addcategory' component={addCategory}/>
                <Route path='/updatecategory' component={updateCategory}/>
                <Route path='/viewreviews' component={Reviews}/>
                <Route path='/viewpastcomplaints' component={pastComplaints}/>
                <Route path='/viewnewcomplaints' component={newComplaints}/>
                <Route path='/addsupplier' component={AddSupplier}/>
                <Route path='/updatesupplier' component={UpdateSupplier}/>
                <Route path='/viewreservations' component={ViewReservations}/>
                <Route path='/viewsuppliers' component={ViewSuppliers}/>
                <Route path='/viewcomplaintcategory' component={ComplaintCategory}/>
                <Route path='/updatecomplaintcategory' component={updateComplaintcategory}/>
                <Route path='/addcomplaintcategory' component={AddComplaintcategory}/>
                <Route path='/viewsales' component={Sales}/>
                <Route path='/cartdetails' component={CartDetails}/>
                <Route path='/complaintresponse' component={ComplaintResponse}/>
                <Route path='/viewsubcategories' component={ViewSubCategory}/>
                <Route path='/addsubcategory' component={AddSubCategory}/>
                <Route path='/updatesubcategory' component={UpdateSubCategory}/>
                <Route path='/guidance' component={Guidance}/>
                <Route path='/generatebill' component={Bill}/>
                <Route path='/payment' component={Payment}/>
                <Route path='/test' component={Test}/>
                <Route path='/test2' component={Test2}/>
                
            </Switch>      
        </div>
    </Router>, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
