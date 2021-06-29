import React from 'react';
import { BsFillAlarmFill} from "react-icons/bs";
const ContactCard = (props) => {
    const {id,name,email} = props.contact;
    return(
        <div className="card">
        <div className="card-body">
            <div>{ name }</div>
            <div>{ email }</div>
            <BsFillAlarmFill  onClick= {() => props.clickHandler(id)}/>
        </div>
        </div>
        )
}
export default ContactCard;