import React from 'react';
import './App.css';
import UserDetails from './components/User/UserDetails';
import data from '../src/TestJSON.json'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        show: false,
        date: new Date(),
    }
    this.popupModalHandler = this.popupModalHandler.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  popupModalHandler(){
      this.setState(state => ({
          show: !this.state.show
          })
      )
  }
  closeModal(){
      this.setState(state=>({
          show: false
      })
      )
  }

  onChange = date => this.setState({ date })

  render(){
    console.log("date==" , this.state.date)
     return (
       <div className="App">
         <div>
            UserList
            <ul>
              {
                data.members.map((member, index) => {
                    return <li key={index} onClick={this.popupModalHandler}> {member.real_name } </li>
                })
              }                                     
            </ul>
            <UserDetails show={this.state.show} closeModal={this.closeModal} date={this.state.date} onChange={this.onChange} />

         </div>
      </div>
    );
   }
}

export default App;
