import React from 'react'
import UserDetails from './UserDetails'

class User extends React.Component {
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
        return (
            <React.Fragment>
                <li onClick={this.popupModalHandler} key={this.props.member.id}>
                    {this.props.member.real_name }
                </li>

                <UserDetails show={this.state.show}
                            date={this.state.date} 
                            member={this.props.member} 
                            onChange={this.onChange} 
                            closeModal={this.closeModal} 
                            />

            </React.Fragment>
        )
    }
}

export default User
