import React, { Component } from 'react'
import {loginact} from "../Redux/actions/loginaction"
import { connect } from "react-redux"
import { GoogleLogin } from "react-google-login";
import config from "../config";

class Login extends Component {
    state={
        name:"",
        email:""
    }
    responseGoogle = (response) => {
        const luser={
            name:response.profileObj.givenName,
            email:response.profileObj.email
        }
        this.props.loginact(luser)
        this.props.history.push("/h");
      };
      handleSubmit=()=>{
          this.props.history.push("/n")
      }
    
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Application For Notes</h1>
                <GoogleLogin
                  clientId={config.CLIENT_ID}
                  buttonText="GOOGLE"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle1}
                  cookiePolicy={"single_host_origin"}
                  
                />
                <button onClick={this.handleSubmit}>Check Notes</button>
            </div>
        )
    }
}

const mapStateToProps = storeState => {
    return {
        logname: storeState.loginState.name,
        logemail: storeState.loginState.email,
    }
}



export default connect(mapStateToProps,{loginact})(Login)
