import User from './User';

const UserList =({users})=>{


    const renderUsers =()=>{
        return (users.map((user,i)=><User key={i} user={user}/>));
    }


    return(<div className="userlist-container">
            {renderUsers()}
        </div>);
}



export default UserList;