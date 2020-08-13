import React from 'react'
import styles from './UserDetails.css';
import data from '../../TestJSON.json'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function UserDetails(props) {
    return ( !props.show ? null
    :        
        <div className="UserDetails">
            User Details
            <button onClick={props.closeModal} className="closeButton">x</button>
            {
                data.members.map((member, index) => {
                    let  udate = props.date
                    let mydate = member.activity_periods[0].start_time
                    console.log(  mydate.split(' ').splice(0,3).join().replace(',' , ' ') )

                    console.log( "udate ==> ",  (udate.getMonth()+1) + ' ' + udate.getDate()  + ',' + udate.getFullYear() );
                    if (props.date === member.activity_periods[0].start_time) 
                    return  <p key={index}>
                        {member.activity_periods[0].start_time } | 
                        {member.activity_periods[0].end_time }
                    </p> 
                    else  return <p>Not actived</p>
                    
                })
              }                

            <Calendar
                onChange={props.onChange}
                value={props.date}
            />            
        </div>    
    )
}

export default UserDetails
