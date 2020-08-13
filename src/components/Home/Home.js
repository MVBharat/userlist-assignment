import React, { Component } from 'react'
import PopupModal from '../PopUp/PopupModal'
import data from '../../TestJSON.json'
// import style from '/Home.css'
export class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,

        }
        this.popupHandler = this.popupHandler.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
    }
    popupHandler(){
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

    // onChaneDate(date){
    //     this.setState({date})
    // }
    onChangeDate = date => this.setState({ ...this.state, date })

    render() {
        // console.log("date ", date);
        return (
            <div>
                UserList
                <ul>
                   {
                       data.members.map((member, index) => {
                           return <li key={index} onClick={this.popupHandler}>{member.real_name }</li>
                       })
                   }
                        
                        
                   
                </ul>
                   
                   
                <PopupModal show={this.state.show} closeModal={this.closeModal} />
                <br/>
            </div>
        )
    }
}

export default Home
