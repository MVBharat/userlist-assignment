import React from 'react'
import './UserDetails.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function UserDetails(props) {
    
    let selectedDate = props.date
    let mySelectedDate = selectedDate.toLocaleString('default', { month: 'short' }) + ',' + selectedDate.getDate()  + ',' + selectedDate.getFullYear() 
    
    let matchedDate
    let startTime 
    let endTime    

    props.member.activity_periods.map( e => {        
        if(mySelectedDate === e.start_time.split(' ').splice(0,3).join()){
            matchedDate = e.start_time.split(' ').splice(0,3).join()
            startTime = e.start_time.split(' ').splice(3,4).join()
            endTime = e.end_time.split(' ').splice(3,4).join()
        }
    })

    return ( !props.show ? null
        :            
        <div className="UserDetails">
            <h2> {props.member.real_name} Active Details</h2>
            <button onClick={props.closeModal} className="closeButton">x</button>
            {
                matchedDate ?
                <p>
                    Start Time: {startTime} | 
                    End Time : {endTime}                                                    
                </p> 
                : <p className="notActive">Not Active on this day pelase check other date</p>                    
              }                

            <Calendar
                onChange={props.onChange}
                value={props.date}
            />            
        </div>    
    )
}

export default UserDetails