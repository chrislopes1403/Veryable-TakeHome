import React,{ useState} from 'react';
import { ReactComponent as  UserSvg } from './../icons/user.svg';
import { ReactComponent as  UpSvg } from './../icons/expand_less.svg';
import { ReactComponent as  DownSvg } from './../icons/expand_more.svg';
import moment from 'moment';


const User =({user}) => {

    const [open,setOpen]=useState(false);


   

    const handleExpand=()=>{
        setOpen(!open);
    };

    const formatDate =(date)=>{

        let format = new moment(date).format('MM/DD/YY, h:mm:ss a');

        return format;
    }

    const formatPhone=(number)=>{

        let area_code= number.slice(0,3);
        let first_three= number.slice(3,6);
        let last_four = number.slice(6,10);
 
        let formatted=`(${area_code}) ${first_three}-${last_four}`;

        return formatted;
    }


    const renderDetails = () =>{
        return (
        <div className="user-details-container">
            <div className="user-details">
                <h5 className="detail-header">Address</h5>
                <h5 className="detail-item">{`${user.street}, ${user.state}, ${user.zip}`}</h5>
            </div>
            <div className="user-details">
                <h5 className="detail-header">Phone</h5>
                <h5 className="detail-item">{formatPhone(user.phone)}</h5>
            </div>
            <div className="user-details">
                <h5 className="detail-header">Created at</h5>
                <h5 className="detail-item">{formatDate(user.createdAt)}</h5>
            </div>
            <div className="user-details">
                <h5 className="detail-header">Last Logged In</h5>
                <h5 className="detail-item">{formatDate(user.lastLoggedIn)}</h5>
            </div>
        </div>)
    }

    return (
            <div className={`user ${open ? 'open': ''}`}>
                <UserSvg className={`user-svg ${user.role}`}/>
                <div className="user-description">
                    <h4 className="user-name">{`${user.firstName} ${user.lastName}`}</h4>
                    <h5 className="user-role">{user.role}</h5>
                    <h6 className="user-email">{user.email}</h6>
                </div>
                {open  ? <UpSvg className="expand-svg" onClick={()=>handleExpand()}/> : <DownSvg className="expand-svg"onClick={()=>handleExpand()} />}
                {open ? renderDetails() : ''}
            </div>);
}



export default User;