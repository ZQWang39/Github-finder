import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';



class App extends Component{
  state = {
    users:[],
    loading:false,
  }
  async componentDidMount(){
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`)
    this.setState({users:res.data, loading:false})
  }
  render(){
    return(
        <div className='App'>
           <Navbar title='Github finder' icon="fab fa-github"/>
           <div className="container">
                <Users loading={this.state.loading} users={this.state.users}/>
           </div>   
        </div>
    );  
  }
}



export default App;