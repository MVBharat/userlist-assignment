import React from 'react'
import UserDetails from './UserDetails'

class User extends React.Component {
    constructor(props){
      super(props)
      this.state = {
          show: false,
          date: new Date(),
      }
    }
  
    popupModalHandler = () => this.setState({ show: !this.state.show })

    closeModal = () => this.setState({ show: !this.state.show })
        
    onDateChange = date => this.setState({ date })

    render(){
        return (
            <React.Fragment>
                <li onClick={this.popupModalHandler} key={this.props.member.id}>
                    {this.props.member.real_name }
                </li>

                <UserDetails show={this.state.show}
                            date={this.state.date} 
                            member={this.props.member} 
                            onChange={this.onDateChange} 
                            closeModal={this.closeModal} 
                            />

            </React.Fragment>
        )
    }
}

export default User