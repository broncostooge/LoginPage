import React from "react";
import Bootstrap from '../bootstrap/dist/css/bootstrap.css'
//import { firebaseApp } from '../firebase'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

submit() {
  console.log('Submit button test')
}

  render(){
    return(
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="col-sm-4">
            <form id="LoginForm">
              <div className="form-group">
                <h1 className="display-1">Login</h1>
                <label>Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="name@example.com" onChange={event => this.setState({email: event.target.value})}></input>
                <br/>
                <label>Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={event => this.setState({password: event.target.value})}></input>
                <br/>
              </div>
              <button type="submit" className="btn btn-primary" onClick={() => this.submit()}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
