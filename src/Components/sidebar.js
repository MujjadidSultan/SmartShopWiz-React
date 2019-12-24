import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css'
import { FaUser, FaPlus, FaPen, FaStar, FaComments, FaQuestionCircle } from 'react-icons/fa';


class SideBar extends React.Component{
    
    render(){
        return (
            
            <body>
                <div id="mySidenav" class="sidenav">
                    <Menu id="nav">
                        {/*<a className="menu-item" href="/dashboard"  align="center"> <FaArrowAltCircleRight/> Dashboard </a>*/}
                        <span style={text}>Suppliers:</span>
                        <a className="menu-item" href="/addsupplier" align="center"> <FaPlus/> Add Supplier </a>
                        <span style={text}>Products:</span>
                        <a className="menu-item" href="/addproducts" align="center"> <FaPlus/> Add Product </a>
                        <span style={text}>Categories:</span>
                        <a className="menu-item" href="/addcategory" align="center"> <FaPlus/> Add Category </a>
                        <span style={text}>Sub Categories:</span>
                        <a className="menu-item" href="/addsubcategory" align="center"> <FaPlus/> Add Sub Category </a>
                        <span style={text}>Complaint Category:</span>
                        <a className="menu-item" href="/addcomplaintcategory" align="center"> <FaPlus/> Add Complaint Category</a>
                        <span style={text}>Complaints:</span>
                        <a className="menu-item" href="/viewpastcomplaints" align="center"> <FaComments/> Previous Complaints</a>
                        <span style={text}> Employees: </span> 
                        <a className="menu-item" href="/addemployees" align="center"> <FaUser/> Add Employee </a>
                        <span style={text}>Settings:</span>
                        <a className="menu-item" href="/profile" align="center"> <FaPen/> Profile </a>
                        <a className="menu-item" href="/changepassword" align="center"> <FaStar/> Change Password </a>
                        <span style={text}>Help:</span>
                        <a className="menu-item" href="/guidance" align="center"> <FaQuestionCircle/> User Guidance </a>
                        
                    </Menu>
                </div>
            </body>
        );
}}

const text = {
    textDecoration: 'underline'
}
export default SideBar