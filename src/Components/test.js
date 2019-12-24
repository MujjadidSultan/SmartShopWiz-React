import React, { Component } from "react";
import QrReader from "react-qr-reader";
 
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: "No result"
    };
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      });
    }
  }
  
  handleError(err) {
    console.error(err);
  }

  render() {
    return (
      <div style={sp}>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          
        />
        <p>{this.state.result}</p>
        </div>
    );
  }
}

const sp = {
  width:1500
}

export default Test