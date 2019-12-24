import React, { Component } from 'react';
import './home.css';
import { MDBAnimation } from "mdbreact";

class Home extends Component{

    constructor(props){
        super(props);

        this.gotoPage = this.gotoPage.bind(this);
    }

    gotoPage = () => {
        this.props.history.push("/login");
    }

    
    render(){
        return(
            <body>
            <div className="img" align="center"> 
            <br/> <br/><br/> <br/>
                <MDBAnimation type="bounce" infinite>
                    <h1 style={h}>Smart ShopWiz</h1>
                </MDBAnimation>
                <br/><br/>
                <div className="content" align="center">
                    <button onClick={this.gotoPage} style={loginButton}>Login</button> 
                </div>
            
            </div> 
        </body>   
        );
    }
}

const loginButton = {
    backgroundColor: '#4ABAE2',
    width:150,
    height:60,
    borderRadius:12,
    color: '#000000',
    fontSize: 25
}

const h = {
    fontSize:100,
    fontWeight:'bold'
}

export default Home;