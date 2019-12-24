import React, { Component } from 'react';
import SideBar from './sidebar';
import './dashboard.css';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
import l from '../images/l.jpg'; 
import {logout} from './UserFunctions'

class Dashboard extends Component{
    constructor(props){
        super(props);
        
        this.gotoCustomer = this.gotoCustomer.bind(this);
        this.gotoEmployee = this.gotoEmployee.bind(this)
        this.gotoProduct = this.gotoProduct.bind(this);
    }

    componentDidMount() {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event){
            window.history.pushState(null, document.title,  window.location.href);
        });
    }

    logout = () => {
        localStorage.removeItem('jwtToken');
        logout().then().catch()
        this.props.history.push("/login");
      }

    gotoCustomer = () => {
          this.props.history.push("/viewcustomers")
      }

    gotoEmployee = () => {
        this.props.history.push("/viewemployees")
    }

    gotoProduct = () => {
        this.props.history.push("/viewproducts")
    }

    render(){
 
       return(
        <div>
            <nav /*style={nav}*/>
            <SideBar/>
                <div style={jumbo}>
                    <center> 
                        <h1 style={hv}>Smart ShopWiz </h1>
                        <h3>Welcome to your Portal!!!</h3>
                    </center>
                    <button className="button button2" style={b} 
                            onClick={this.logout}>Logout
                    </button>
                </div>
            </nav>

            <div class="view">
                <img src={l} class="img-fluid" alt="placeholder" /*width="1482"*/ style={fff}/>
                <div class="mask flex-center rgba-blue-light">
                    <div align="center"> 
                    <MDBContainer style={c}>
                        <MDBRow className="1">

                            <MDBCol>
                                <div className="card text-white mb-3" style={{width:"100%", height:"100%"}}>
                                    <img class="card-img-top" src="https://icon-library.net/images/suppliers-icon/suppliers-icon-12.jpg" 
                                    alt="Card image cap"/>
                                    <div class="card-body">
                                        <h4 class="card-title"><a>Suppliers</a></h4>
                                        <p classN="card-text-white">You can view the list of suppliers of the shop.</p>
                                        <a href="/viewsuppliers" class="btn blue-gradient">View</a>
                                    </div>
                                </div>
                            </MDBCol>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <MDBCol>
                                <div className="card text-white mb-3" style={{width:"100%", height:"100%"}}>
                                    <img class="card-img-top" src="https://icon-library.net/images/projects-icon/projects-icon-0.jpg" 
                                    alt="Card image cap"/>
                                    <div class="card-body">
                                        <h4 class="card-title"><a>Products</a></h4>
                                        <p classN="card-text-white">You can view the list of products of the shop.</p>
                                        <a href="/viewproducts" class="btn blue-gradient">View</a>
                                    </div>
                                </div>
                            </MDBCol>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            

                            <MDBCol>
                                <div className="card text-white mb-3" style={{width:"100%", height:"100%"}}>
                                    <img class="card-img-top" src="http://icons.iconarchive.com/icons/sora-meliae/matrilineare/512/Categories-applications-office-icon.png" 
                                    alt="Card image cap"/>
                                    <div class="card-body">
                                        <h4 class="card-title"><a>Categories</a></h4>
                                        <p classN="card-text-white">You can view the product categories.</p>
                                        <a href="/viewcategories" class="btn blue-gradient">View</a>
                                    </div>
                                </div>
                            </MDBCol>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <MDBCol>
                                <div className="card text-white mb-3" style={{width:"100%", height:"100%", }}>
                                    <img class="card-img-top" src="https://cdn4.iconfinder.com/data/icons/office-equipment-flat-icons/512/folders_files_documents_papers_office_equipment_business_object_flat_icon_symbol-512.png" 
                                    alt="Card image cap"/>
                                    <div class="card-body">
                                        <h4 class="card-title"><a>Sub Categories</a></h4>
                                        <p classN="card-text-white">You can view the list of subcategories of the categories.</p>
                                        <a href="/viewsubcategories" class="btn blue-gradient">View</a>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <br/><br/><br/>

                        <MDBRow className="2">
                            <MDBCol>
                                <div className="card text-white mb-3" style={{width:"100%", height:"100%"}}>
                                    <img class="card-img-top" src="https://thumbs.dreamstime.com/b/vote-thumbs-up-icon-blue-white-inverse-fields-make-choice-yes-no-love-hate-like-dislike-win-loss-vector-96210540.jpg" 
                                    alt="Card image cap"/>
                                    <div class="card-body">
                                        <h4 class="card-title"><a>Reviews</a></h4>
                                        <p classN="card-text-white">You can view the customers' reviews.</p>
                                        <a href="/viewreviews" class="btn blue-gradient">View</a>
                                    </div>
                                </div>
                            </MDBCol>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <MDBCol>
                                <div className="card text-white mb-3" style={{width:"100%", height:"100%"}}>
                                    <img class="card-img-top" src="http://www.pngall.com/wp-content/uploads/2016/05/Customer-High-Quality-PNG.png" 
                                    alt="Card image cap"/>
                                    <div class="card-body">
                                        <h4 class="card-title"><a>Customers</a></h4>
                                        <p classN="card-text-white">You can view the list of customers.</p>
                                        <a href="/viewcustomers" class="btn blue-gradient">View</a>
                                    </div>
                                </div>
                            </MDBCol>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <MDBCol>
                                <div className="card text-white mb-3" style={{width:"100%", height:"100%"}}>
                                    <img class="card-img-top" src="http://iconsetc.com/icons-watermarks/flat-circle-white-on-blue/bfa/bfa_thumbs-down/bfa_thumbs-down_flat-circle-white-on-blue_512x512.png" 
                                    alt="Card image cap"/>
                                    <div class="card-body">
                                        <h4 class="card-title"><a>New Complaints</a></h4>
                                        <p className="card-text-white">You can view the list of new complaints of the customers.</p>
                                        <a href="/viewnewcomplaints" className="btn blue-gradient">View</a>
                                    </div>
                                </div>
                            </MDBCol>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <MDBCol>
                                <div className="card text-white mb-3" style={{width:"100%", height:"100%"}}>
                                    <img class="card-img-top" src="https://cdn1.iconfinder.com/data/icons/restaurant-96/64/reserved-restaurant-sign-dinner-lunch-512.png" 
                                    alt="Card image cap"/>
                                    <div class="card-body">
                                        <h4 class="card-title"><a>Reserved Products</a></h4>
                                        <p classN="card-text-white">You can view the list of products, reserved by the customers.</p>
                                        <a href="/viewreservations" class="btn blue-gradient">View</a>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <br/><br/><br/>

                        <MDBRow className="3">
                            <MDBCol>
                                <div className="card text-white mb-3" style={{width:"100%", height:"100%"}}>
                                    <img class="card-img-top" src="https://www.ccwater.org.uk/wp-content/uploads/2019/07/complaints.jpg" 
                                    alt="Card image cap"/>
                                    <div class="card-body">
                                        <h4 class="card-title"><a>Complaints Category</a></h4>
                                        <p classN="card-text-white">You can view the complaints' categories.</p>
                                        <a href="/viewcomplaintcategory" class="btn blue-gradient">View</a>
                                    </div>
                                </div>
                            </MDBCol>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <MDBCol>
                                <div className="card text-white mb-3" style={{width:"100%", height:"100%"}}>
                                    <img class="card-img-top" src="https://cdn3.iconfinder.com/data/icons/business-office-11/512/Business_Office_circle_income_sales_increase_profit-512.png" 
                                    alt="Card image cap"/>
                                    <div class="card-body">
                                        <h4 class="card-title"><a>Sales</a></h4>
                                        <p classN="card-text-white">You can view the information regarding the sales of the shop.</p>
                                        <a href="/viewsales" class="btn blue-gradient">View</a>
                                    </div>
                                </div>
                            </MDBCol>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <MDBCol>
                                <div className="card text-white mb-3" style={{width:"100%", height:"100%", }}>
                                    <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/41BhKPIAyjL.png" 
                                    alt="Card image cap"/>
                                    <div class="card-body">
                                        <h4 class="card-title"><a>Employees</a></h4>
                                        <p classN="card-text-white">You can view the list of employees.</p>
                                        <a href="/viewemployees" class="btn blue-gradient">View</a>
                                    </div>
                                </div>
                            </MDBCol>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <MDBCol>
                                <div className="card text-white mb-3" style={{width:"100%", height:"100%", }}>
                                    <img class="card-img-top" src="https://cdn3.iconfinder.com/data/icons/personal-business-finance-1/380/Financial_Report-512.png" 
                                    alt="Card image cap"/>
                                    <div class="card-body">
                                        <h4 class="card-title"><a>Bill</a></h4>
                                        <p classN="card-text-white">The bill is generated.</p>
                                        <a href="/generatebill" class="btn blue-gradient">View</a>
                                    </div>
                                </div>
                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>
                </div>
                </div>
            </div>

          {/*} <div className="img" align="center"> */}
                {/*<MDBRow>
                    <MDBCol>
                            <figure style={fig}>
                                <a href="/viewemployees"> <img src='https://www.jltemployeebenefits.com/-/media/images/sites/employee-benefits/mediaresources/press-release-images/team-icon-610x440.ashx?h=432&amp;la=en-GB&amp;w=600&amp;hash=4C284AA4E0AD7BC5F36BE4393A05116760AEE06B' 
                                    width="130" height="100"/></a>
                                <figcaption style={aaa}>Employees</figcaption>
                            </figure>  
                    </MDBCol>
                    <MDBCol>
                        <figure style={fig1}>
                                <a href="/viewsuppliers"> <img src='https://icon-library.net/images/suppliers-icon/suppliers-icon-12.jpg' 
                                    width="130" height="100"/></a>
                                <figcaption style={aaa}>Suppliers</figcaption>
                        </figure>
                    </MDBCol>
                    <MDBCol>
                        <figure style={fig2}>
                            <a href="/viewproducts"> <img src='https://cdn1.iconfinder.com/data/icons/medical-tests-equipment-blue-line/64/253_check-list-chart-hospital-clipboard-512.png' 
                                width="135" height="100"/></a>
                            <figcaption style={aaa}>Inventory</figcaption>
                        </figure>
                    </MDBCol>
                    <MDBCol>
                        <figure style={fig3}>
                            <a href="/viewcategories"> <img src='http://icons.iconarchive.com/icons/sora-meliae/matrilineare/512/Categories-applications-office-icon.png' 
                                width="135" height="100"/></a>
                            <figcaption style={aaa}>Categories</figcaption>
                        </figure>
                    </MDBCol>
                </MDBRow> 
                <MDBRow>
                    <MDBCol>
                        <figure style={fig}>
                            <a href="/viewreviews"> <img src="https://www.simb.co/wp-content/uploads/2016/10/Reputation-Management.png"
                            width="130" height="100"/></a>
                            <figcaption style={aaa}>Customer</figcaption>
                            <figcaption style={aaa}>Reviews</figcaption>
                        </figure>
                    </MDBCol>
                    <MDBCol>
                        <figure style={fig1}>
                            <a href="/viewcustomers"> <img src='http://www.pngall.com/wp-content/uploads/2016/05/Customer-High-Quality-PNG.png' 
                                    width="130" height="100"/></a>
                                <figcaption style={aaa}>Customers</figcaption>
                        </figure>
                    </MDBCol>
                    <MDBCol>
                        <figure style={fig2}>
                            <a href="/viewnewcomplaints"> <img src="https://icon-library.net/images/complaint-icon/complaint-icon-10.jpg"
                            width="130" height="100" /></a>
                            <figcaption style={aaa}>New</figcaption>
                            <figcaption style={aaa}>Complaints</figcaption>
                        </figure>
                    </MDBCol>
                    <MDBCol>
                        <figure style={fig3}>
                            <a href="/viewreservations"> <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///9IrN0/qdxRsd83p9vi8fk6qNuf0Osxpdr4/P7m8/rD4fLs9vvM5fSq1e1htuFvu+NnuOJ9weX0+v253PCNyOik0uyExOba7fex2O/R6PW93vFPr96Vy+mKxudtu+McqdsfAAAP+0lEQVR4nO1d6bqiMAyFWqEoioq7qO//lgNoN5qUFnDhjufXfHMVe0ibpEmaBsH7kB/n8e1ehDUm99t+Pnvjr78c5zijlBISChASsfC+/BssF4eIKtxUEFbE00+PryeSU4HR4yTX808PsgeSPaE2eg/QyeXTA+2KpV18KsdRynEeRm78KrB7+unx+iLfMHd+JQg9fXrIfjgTY4KW9oGxYrK+37OQscj4O73nnx61B/YNARIareP5LBEfmC1KE9lgSejxg0P2w0bXoBE9LAD55PMN1T9It+8faxcka002LMMVZV6aS+2z8RvH2RlJphKk2dn+8a2mcun1PYPsBZUgCR0M3Uk1m/T7pagSZDunryTqumXLFw+wLzaSICEtE1Riq+he9t3+zV5Kg6w97Nu0kG+GffOe6ixlQTde31T10+RFoxsAiVSL/kpxJSiSwysGNwjkILto/bv4NlsMP7ZBMBdzNHJTog0oEzVp//QnoCiZTt9P5AM6vaGXIxYiKDqK4CgmwVfq01yoGdZ5j7Dkxob4aeL3YMdF2MfxysRb+r4YXC5sfR9zNv1iIS65CLuo+vk1fs7sq5gJ3xa4ORf85d+9v5sWlBC2qv+dcIbkmzYZyXwj46LM2d3mSDUnYS808uDj7Ih0u9LCSt6mcCbchNrGJPxd0a9wbGbLjOphX+q790nFV59GhuvkL9A1x3jCzKC250MkQW7lhdknxdV7xg+IxS6EYvbE0+NWCIbZ8/8m8mmUHOafcFFrzQKnJKjfW1cJCk8oVh9NIrravtdwpNt7M5SrMvR61kz5pjSjx0a+ilCW7d/l4pSahdnyZX7aQZOgojmh2c8mb1iUx7gANIs+EJ9A2UyNyqmmYQP+CqH0pYsS0SyPSbS+P//tswxTjKBi9I2fil6zKOsEA0Ivqn/z8Pwrcw+vwWuwxtySeHzBorRollKhbh7zZs3/y3kWYWuwwrQlNU7ocJZyWmkWhB4Ld+JnuNud2R7mSjDIuc3PMmzhD2MpS82ClonQSaxu5Pn/uzqlKkHT/0yk3zY7rSNsBkX9FuXiFiLvr9IsjVIfHkIiK3+C0HZSe2H5BdcCXRdlqVmwIp9amxnqJPFzlu0SDIBJj2vyckSh56JMTyt0XmAWycowv2bZTn0pbRKUDNVJb7HGJUnnRTndT3DNUuywd2WbpbPqeUTZF7cTFLO0ES4oFyWq1iPmsChtb4kVsS1EyD8HaJpnIFtUITgQtEwJ66KktkWZLG7YdgHQLAb4tDLDbFOu+aOpK0FhLcgN/HO5KC2SABelZTdUvhgXlczDnMRYDQthvaOZI0GxuSB77PfKzbdF8zQWZalZgPKd54ddzSr3lZnxMqYyo0hmbgSF12YtPikXJTruclGe+EhOzTiLQg/XLAb4phXQ/WrpyVl5viXQJJ7W8vvlorTMvawuI7sjHmC5HbNqlia2+LxSxaZ41La4Md+pmDPCQGJZlFUEdgkRJBFt1SxNiG05EA5Ogd+whwr5iyCOP44tynKWZ8Z/utkVE3y1UWDZAhStkf8znxCOPmCALsp10PgPH9+gAb59AmVjULSnNvgy9AoYwItSl6G3f6eCb8vhIoMGxZbcDY8mepcq1kZdl6FaqDPptXEWCxGapg2KLQRlIrjLQKaF8kNbtXiib66HPziCbZga2m7JR/CICOLRtOCqMKqdPoUi61UWKJ5cwH9PXQnmvTIzV6Um66moFIq9Kh/F3MIGlobEhaAihA6j2JkEh5OiyDZgSe40YxEL25RZKtLcHVYNIMEKA0lxy+007k1OL+3Kmq/CLlluUIIVBqIoHtKnoEno5A61bSjBoShuhyijELrev2TohhMchGJyWcn13LkGVtTk+IvQIsEKPSnWuXw5SztXisjSP+p7uqSFYC+K+dYMziFGsQUzOcq15ztqJdiZYrq9QwlFj22BRK4+gWU+OzgHgjpFx9rH9LSm2Ba6g7aZNA8JOZO0KhkJTymW9GzpYM8y7+ZBlOdw3SSpStBakeUhxfRkz3ZXv7X2MotpgQRc2KSNpKMEmxQtUkyr8BU4GsrUzUrhsZDOlvR5iySdJdikiEixqlVACk1olbNZqGdDnI+ixS3HMUtJ7hGSBx+CrRSrIi+kioCtn+GdkzJYunIya9NMMaYECRCWkoRI3vwIWilOl1CRV/1JelcyburpSkLbYy3JVRUgWwaLA0py0kxMeBNEKc72SMSO6PSaFMMotJ/vTfah+tznuS40i0KoRrIDQZBilXNDpMfuQOzxpK2qKIxRPTHd6USUlYuTlJLsRFCneKvoYdn8KGpKT4xOV7WV7QbiXNNTc1VHegDgfEMyv4QWFcmDu5lAKUYbm/RwNTJrWjfCis3pPHt+I5mdTxsjGk8m5nQ473DFs+omwQZFTHpAMl/HzdD/5YqlESVFUZCIAvkghmyYzlgOXxmltxu8stlfaRismOMFjOBjiWVTiUry+d0Oh5BQig+z7oTk1lbnp4yx9Tzt+Yonfv1PB6AUqZP0BKYrN46ErV0C+McruGg67dQCuALSvzvHcdPOkbCVa74khUblmIMzcIbqA3mhngdmVyzJ/HgiJVfHhElqGBc+KG9yNQrgWXX21JtkglZYydrGVlS7UVQ3dJqmS7TEswvJ4ByvCat6YT1GSSrLEd73jrMT3a7xIXWgmFqb55Tj8yeZzBan62GzLrE6XE8L180jHkvoYw+lniGYw91Fkv7A6VG67uy0Beqx+qzcEyKOW72KXsLriRwNdJUuW1Uvo2y7fCnK2Hptp2Z7ZF9PIvYqSaZbi/R4OVBnikLNyDTsDNtAeehDd+RbTHr0IT0OJJ3WBpHC08vU0AjNwGsSl17p+5waTocqRXfnTagZIxNYrsnels2OfHvH1h7NmvQqdJGiqmZMvFKS+XblLj2ODmtRpKuxY/V4xK0PyVp6yAQBpccR+1Lcm2rGxNCSLKVHYSejMgwtzoGnFFPxcbMaVsNwJPMtVuFaBXgc9jN+UsTVjAncGYgiV2cgAbKPztLj8NGoC6uaMWGRpIMzkF9Q6TEn6XGoUmwJaYgPunfv6OrWJZcVcrbAk16Fq2vcTTSy8msQ4y9Ju/Q6tG65uklRbprgEkMLLEkbwxmwSM9NtUBwk+LKQ82YcNOuyWUzrPQ4XKToq2ZMtDkDyRzVnO5ZewwO6kZumnpU01okGWGnUXtKj6NVih3VjIkUkySIDpoTQ4sUkU1TN6AmxKDXWojgA7sU+6kZEyma8VelN3BPL5sU+6sZE3hZw+DS41CaajQpDqJmTMAkXyC9J6ayM0qoFxFINTN4n9tyujY4voreeae3JVYLsnMloXkYvn3RXPth8gp+yRwo4VD+vlUrWigZmmTzgNXwwbkVFCBQZbjU/zwwyVOz40ynnCYG9AC01sh+bkSACI0Oi2HedW48PBpssdenzwF2JZiedoM+MpQkb+YLHqYd8vGKnT4nlDVvlJiFWLlhb0keobK83jYpWdzQxg9RtAKic8keeR+9JWme46zR573ZT59vLlgxBVrd1auBUVPN8Gd261MbmF3+tIGGtxZpWCr0OubSEix7203bmF3+VHpuZ0QHliSgZp5g3hfowF3+HoPzO31uq7X0DGkbamYiayD8tM35ivbi6nD63CpJ52hvBUPNTGYKZ9eXlSwOOL1up88r4Klfd0maamainD520zaWfiadSnwaJPsl8UVH2ZAo7U9kdX27tklPtiaG5RP60HuSjLG17RC3F2qGxHy6Vt6w7JVhL+fHS8uHZBjMIJfETZJSzRCRlqwYyubrlkP3xytGr3y3d3F2fACGU5xh2CJJoWboVmOoaVjwywu0orRSAttcPG5QhmvfJL44VVqFfjSGVm1jdcl4x5xXMCT7YIp1kgKzolLNVIZPZ6hqGy06m26xnIbe5e8lDOvj41OsVUqdFdVIyiOvu8BgCGobq0um+yyvYxjYnAFNklM9X95kqJynfGibY4yFHqvWes3jDC9lGLiVY6hqBmCoabDc6pJBPsurGQbWJH65QUuCi6pmIIZqZxW8iWGpqcHN3hsYBi2p32aE2WQYXO1XQJaaBd/svYdhYJOk+MdOH5Ia4VvjDkvbZu9tDAN7ciKUiSyIYYJ9p71p5zsZBpaKPiWRBTGEglTVZs9W5NV43JsYBtUuBHYGhMcCMtT6OIXPMJLTZu/9DKsPAh6P3MbDDIOd1DZercY+wrDEseEMKPlyhCHXNqXi9Go19imGQe3WSZJKvhxjGKwYjTybGAYfZVh9I36eM1Nj9yjD4Hi6+KfbPsswqKZrxph2BSnOsBOyTzMskeve1h9k2MCPoSd+DH3wY+iIH0NP/Bj64MfQET+Gnvgx9MGPoSN+DD3xY+iD/53hce4YYBkpw1nGKJs4cRwnw+TRq8Thpo2xMnwW+Dt1wB8nw7XHqH8MPfEmhrE5S/PLEs5qjpNh8kiEKu27tywilF4B7TpOhsFsUlqLQvJ5Hg+rTm01s+8jZVj+VbP4spqUsJVe8TZahjrUfCeh4U7JBv5BhtVXIplU+iMMm+0WiTyt+UcYGpWa8pqKP8IwODaqwWSB7F9hWH78qhaHSqf87zAssdhE/HK4P7cOOfJTXa5AiPR2xssQK4CZxuss/gP28JSFE7whuYqBGa7fxHBT/Y2wzKF78jgZirt9IrppO4Q5ToZqa3Ma2hsCj5OhfjCt6o2Hz9ZxMjw0SxEpPlvHyRAqgMXaV4+TYXCCqmarZnmmlRwpw2B6IGBrc7ZqztYxMIRvOk8uYC9xQ7eOgGGI2vUUPiZEWOFUX+qPZL4JX8HQZtePNwKdOFOOiA7GUD+8N/QJy3LuxZhdn0N3PTDx52EYGk36X3BK1mLXU/PYhbw7dwCGJT3j8F7Xux80GAfOLXb9uNPHEImV2JshQC8cqJdPbHa2sM9WNYoxTCSqkh54spR1vyxdBXhhTLVnQna/6ZIfLVHa+vZgiJ4LJszrgnkLKk0J/ABl+GytTkyWdl/+T0eGpfTQZqCTeKB+i/UPOdp1BYvrHjq468UQlx4tfM+gtCOFz25VXqjL/UjeDJP5AWthXkpv0MaAEthsjVp3+N4Mof5yT+m9jF6N5ALe4dS6w/dimCxw6RUvpfdACl+mZ9/huzNM8AseXyw9Fccb2A3Y4gm4MrTcX1m0HZwdGJc7LEj0gqp2hrbJaVzP+Q6kS/CuN3iH387wi6SnoNStUK8y0BOwMvw26SlI5ndH3YozRLtcfVR6CtAdvq5bEYaLA3YpW/uZ/DcC2eFrngDE0GYYsDucPwZwh6/OVoOh7WJj6OrZzwPY4T9IPmarznBU0lNwvIH71NoTUBhapffF9B7QdvjqbOXdXIodet/jq5pgDw25w4cxXukpONrv7zXpjUV6ChJYt/4B6SlIHS6AGKX0VNhn63hUixXYbB299BQAnkCPS4++FFqs3+M+tVHh6Qm03GU4bqSnVbHp2tO4I/4BUxXU7mHxZ+oAAAAASUVORK5CYII=' 
                                width="135" height="100"/></a>
                            <figcaption style={aaa}>Reserved</figcaption>
                            <figcaption style={aaa}>Products</figcaption>
                        </figure>
                    </MDBCol>
                </MDBRow> 

                {/*<MDBRow>
                    <MDBCol>
                        <figure style={fig}>
                            <a href="/viewcomplaintcategory"> <img src='data:image/png;base64,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' 
                                width="135" height="100"/></a>
                            <figcaption style={aaa}>Complaints</figcaption>
                            <figcaption style={aaa}>Category</figcaption>
                        </figure>
                    </MDBCol>
                </MDBRow>
          {/* </div>*/}
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

/*const s = {
    width:150,
    height:50,
    position: "right",
}*/

/*const nav = {
    backgroundColor: '#4ABAE2',
    borderColor: '#4ABAE2',
    height: 200
}*/

const hv = {
    fontSize: 40
}

const fff = {height:1900}

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

const c = {marginTop:-60}

/*const aaa = {
    color: 'rgb(31, 126, 204)',
    fontSize: 30,
}

const fig = {
    paddingTop:25,
    paddingLeft:170,
    
 }

 const fig1 = {
    paddingTop:25,
    paddingLeft:150
 }

 const fig2 = {
    paddingTop:25,
    paddingLeft:130
 }

 const fig3 = {
    paddingTop:25,
    paddingLeft:70
 }*/


 
export default Dashboard